import type { ContentSlotProps } from "@venore/theme-sdk";
import { Breadcrumbs } from "./Breadcrumbs";

export function ContentSlot({
  children,
  sidebarContextualEnabled,
  sidebarContextual,
  breadcrumbs,
  breadcrumbsJsonLd,
}: ContentSlotProps) {
  const showSidebar = sidebarContextualEnabled && sidebarContextual != null;

  return (
    // Cópia deste tema: conteúdo "windowed" — um cartão contido (bg-card + borda + rounded-panel
    // + shadow-float) com um vão ao redor mostrando --app-background, em vez do full-bleed do
    // Aurora. Só esta região muda; Header/SidebarLeft/Footer continuam edge-to-edge, iguais ao
    // Aurora (pequena variação, não o "bento" completo do Volt).
    <div data-sidebar-contextual={showSidebar} className="flex-1 min-w-0 bg-(image:--app-background) p-4 lg:p-6">
      <div className="h-full overflow-hidden rounded-panel border border-border bg-card text-card-foreground shadow-float">
        <Breadcrumbs breadcrumbs={breadcrumbs} breadcrumbsJsonLd={breadcrumbsJsonLd} />
        <div
          className={`mx-auto flex max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:gap-10 lg:px-8 lg:py-12 ${
            showSidebar ? "flex-col lg:flex-row" : ""
          }`}
        >
          <main className="min-w-0 flex-1 text-foreground">{children}</main>
          {showSidebar && <aside className="w-full shrink-0 text-foreground lg:w-72">{sidebarContextual}</aside>}
        </div>
      </div>
    </div>
  );
}
