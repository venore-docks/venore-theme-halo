import type { ThemeShellProps } from "@venore/theme-sdk";
import { HeaderSlot } from "./HeaderSlot";
import { FooterSlot } from "./FooterSlot";
import { ContentSlot } from "./ContentSlot";
import { SidebarLeftSlot } from "./SidebarLeftSlot";

// Mesmo arranjo "rail" do Aurora (mesma família — sidebar/tokens idênticos, já com a correção do
// rail colapsado): a SidebarLeft ocupa a altura inteira, o Header só cobre a coluna de conteúdo.
// A pequena variação deste tema não está aqui — é o ContentSlot.tsx, que passa a envolver o
// conteúdo num cartão contido (bg-card + borda + rounded-panel) em vez do full-bleed do Aurora.
//
// Footer mora DENTRO da coluna de conteúdo (abaixo de ContentSlot) — o `flex` externo
// (align-items: stretch, default) estica a SidebarLeftSlot pra acompanhar a altura de
// Header+Content+Footer somados, então a sidebar sempre cobre a coluna inteira à direita, nunca
// fica mais curta que ela.
export function Shell({
  header,
  footer,
  sidebarLeft,
  children,
  sidebarContextualEnabled,
  sidebarContextual,
  breadcrumbs,
  breadcrumbsJsonLd,
}: ThemeShellProps) {
  return (
    <div className="flex min-h-dvh flex-1">
      <SidebarLeftSlot {...sidebarLeft} />
      <div className="flex min-w-0 flex-1 flex-col">
        <HeaderSlot {...header} />
        <ContentSlot
          sidebarContextualEnabled={sidebarContextualEnabled}
          sidebarContextual={sidebarContextual}
          breadcrumbs={breadcrumbs}
          breadcrumbsJsonLd={breadcrumbsJsonLd}
        >
          {children}
        </ContentSlot>
        <FooterSlot {...footer} />
      </div>
    </div>
  );
}
