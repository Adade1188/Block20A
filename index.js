

function calculateCost() {
  const pricePerRefill = document.querySelector("#price");
  const refills = document.querySelector("#refills");
  const subscription = document.querySelector("#subscribed");
  const coupon = document.querySelector("#coupon");

  const output = document.querySelector("#cost");

  const initialCost = getTotalCost(pricePerRefill.value, refills.value);
  const costAfterSubscription = applyDiscount(
    initialCost,
    subscription.checked
  );
  const finalCost = applyCoupon(costAfterSubscription, coupon.checked);

  output.textContent = `$${finalCost.toFixed(2)}`;
}

if (typeof module !== "undefined") {
  module.exports = {
    getTotalCost,
    applyDiscount,
    applyCoupon,
    calculateCost,
  };
} else {
  const calculateButton = document.querySelector("#calculate");
  calculateButton.addEventListener("click", calculateCost);
}