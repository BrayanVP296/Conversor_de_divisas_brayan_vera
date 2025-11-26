const rates = {
    USD: { USD: 1,    EUR: 0.92, COP: 4300, MXN: 18.2,  ARS: 980 },
    EUR: { USD: 1.08, EUR: 1,    COP: 4650, MXN: 19.8,  ARS: 1050 },
    COP: { USD: 0.00023, EUR: 0.00021, COP: 1, MXN: 0.0043, ARS: 0.22 },
    MXN: { USD: 0.055, EUR: 0.050, COP: 230, MXN: 1, ARS: 11.8 },
    ARS: { USD: 0.00102, EUR: 0.00095, COP: 4.45, MXN: 0.085, ARS: 1 }
};

// Símbolos
const symbols = {
    USD: "$",
    EUR: "€",
    COP: "$",
    MXN: "$",
    ARS: "$"
};

document.getElementById("convertBtn").addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("amount").value);
    const from = document.getElementById("fromCurrency").value;
    const to = document.getElementById("toCurrency").value;

    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").textContent = "Ingrese una cantidad válida";
        return;
    }

    const rate = rates[from][to];
    const converted = amount * rate;

    document.getElementById("result").textContent =
        `${symbols[from]}${amount.toLocaleString()} ${from} = ${symbols[to]}${converted.toLocaleString(undefined, {maximumFractionDigits: 2})} ${to}`;
});