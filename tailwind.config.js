// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts,js}", // O ajusta según tu proyecto
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-blue": "radial-gradient(circle at top left, #bfdbfe)",
        "radial-blue":
          "radial-gradient(circle at top left, #bfdbfe, #93c5fd, #e0f2fe)",
        "radial-green":
          "radial-gradient(circle at top left, #bbf7d0, #86efac, #d1fae5)",
        "radial-red":
          "radial-gradient(circle at top left, #fecaca, #fca5a5, #fee2e2)",
        "radial-yellow":
          "radial-gradient(circle at top left, #fef9c3, #fde68a, #fef3c7)",
        "radial-purple":
          "radial-gradient(circle at top left, #ddd6fe, #c4b5fd, #ede9fe)",
        "radial-orange":
          "radial-gradient(circle at top left, #fed7aa, #fdba74, #ffedd5)",
        "radial-dark-blue":
          "radial-gradient(circle at top left, #1e3a8a, #1d4ed8, #60a5fa)",
        "radial-dark-green":
          "radial-gradient(circle at top left, #064e3b, #065f46, #34d399)",
        "radial-dark-red":
          "radial-gradient(circle at top left, #7f1d1d, #dc2626, #fca5a5)",
        "radial-dark-yellow":
          "radial-gradient(circle at top left, #9a3412, #f59e0b, #fde047)",
        "radial-dark-purple":
          "radial-gradient(circle at top left, #4c1d95, #7c3aed, #d8b4fe)",
        "radial-dark-orange":
          "radial-gradient(circle at top left, #9a3412, #f97316, #fdba74)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "aqua",
      "autumn",
      "nord",
      "caramellatte",
      "sunset",
      "cyberpunk",
      "aqua",
      "synthwave",
    ],
  },
};
