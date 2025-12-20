document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("accessTokenSubmit");

    btn.addEventListener("click", () => {
        const value = document.getElementById("accessTokenInput").value;
        console.log("value: ", value);
        browser.storage.local.set({ accessToken: value });
    });
});