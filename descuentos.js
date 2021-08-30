//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;

}
function onClickButtonPriceDiscount() {

  const precio = document.getElementById("inputPrecio").value;
  const couponValue = document.getElementById("inputCupon").value;

  const coupons = [
    {
      name: "Descuento 15%",
      discount: 15,
    },
    {
      name: "Descuento 30%",
      discount: 30,
    },
    {
      name: "Descuento 25%",
      discount: 25,
    },
  ];

  const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
  };

  const userCoupon = coupons.find(isCouponValueValid);

  if (!userCoupon) {
    alert("El cupón " + userCouponValue + "no es válido");
  } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(precio, descuento);
    console.log(precioConDescuento);
    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }

}


/*function onClickButtonPriceDiscount() {

  const precio = parseInt(document.getElementById("inputPrecio").value);

  const descuento = parseInt(document.getElementById("inputCupon").value);

  const precioConDescuento = calcularPrecioConDescuento(precio, descuento);

  const resultP = document.getElementById(resultP);
  resultP.innerText = "El Precio Con Descuento es: " + precioConDescuento;
}*/

/*console.log({
  precioOriginal,
  descuento,
  porcentajePrecioConDescuento,
  precioConDescuento
});*/