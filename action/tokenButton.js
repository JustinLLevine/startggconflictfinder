document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("accessTokenSubmit");

    btn.addEventListener("click", async () => {
        const value = document.getElementById("accessTokenInput").value;
        const storage = (typeof browser !== "undefined" ? browser : chrome).storage;
        await storage.local.set({ accessToken: value });
    });
});