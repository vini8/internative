tailwind.config = {
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
    fontFamily: {
      figtree: ["Raleway", "sans-serif"],
    },
    colors: {
      primary: "#17181C",
      secondary: "#3E4048",
    },
  },
  extend: {
    keyframes: {
      growDown: {
        "0% ": {
          transform: "scaleY(0)",
        },
        "80%": {
          transform: "scaleY(1.1)",
        },
        "100%": {
          transform: "scaleY(1)",
        },
      },
    },
    animation: {
      scaleY: "growDown_.3s_ease-in-out_forwards",
    },
  },
};
