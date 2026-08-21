import { UserButton } from "@clerk/nextjs";
import { dashboardHtml } from "../content/dashboardHtml";

export default function Page() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 16px",
          background: "#12161c",
          borderBottom: "1px solid #272e38",
          fontFamily:
            "'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif",
          color: "#eef0f2",
          fontSize: 13,
        }}
      >
        <span>Dashboard de Cobros — VLA Academy</span>
        <UserButton />
      </div>
      <iframe
        title="Dashboard de Cobros"
        srcDoc={dashboardHtml}
        style={{ flex: 1, width: "100%", border: "none" }}
      />
    </div>
  );
}
