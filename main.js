
function calculatetotal() {
    
    var sugarPrice = document.getElementById("sugerprice").value;
    var sugarQuantity = document.getElementById("qnt1").value;
    let sugarTotal = sugarPrice * sugarQuantity ;
    document.getElementById("pro1").textContent = sugarTotal;
    
    var honeyprice = document.getElementById("honeyprice").value;
    var honeyquan = document.getElementById("qnt2").value;
    let honeyTotal = honeyprice * honeyquan ;
     document.getElementById("pro2").textContent = honeyTotal;
    
     var riceprice = document.getElementById("riceprice").value;
    var qnt3 = document.getElementById("qnt3").value;
    let riceTotal = riceprice*qnt3 ;
     document.getElementById("pro3").textContent = riceTotal;
    
     var dalprice = document.getElementById("dalprice").value;
    var qnt4 = document.getElementById("qnt4").value;
    let dalTotal = dalprice*qnt4 ;
     document.getElementById("pro4").textContent = dalTotal;
    
     var saltprice = document.getElementById("saltprice").value;
    var qnt5 = document.getElementById("qnt5").value;
    let saltTotal =saltprice*qnt5 ;
     document.getElementById("pro5").textContent =saltTotal;
    
     var milkprice = document.getElementById("milkprice").value;
    var qnt6 = document.getElementById("qnt6").value;
    let milkTotal = milkprice * qnt6;
     document.getElementById("pro6").textContent = milkTotal;
    
     var icprice = document.getElementById("icprice").value;
    var qnt7 = document.getElementById("qnt7").value;
    let iceTotal =icprice *qnt7 ;
     document.getElementById("pro7").textContent =iceTotal;
    
    
     var chocolateprice = document.getElementById("chocolateprice").value;
    var qnt8 = document.getElementById("qnt8").value;
    let chocolateTotal = chocolateprice * qnt8 ;
     document.getElementById("pro8").textContent = chocolateTotal;
    
    
    document.getElementById("total").textContent = sugarTotal + honeyTotal + riceTotal + dalTotal + saltTotal + milkTotal + iceTotal + chocolateTotal;
    
   var name1=document.getElementById("in1") .value;
    document.getElementById("lb1").textContent=name1;
    
    var phno=document.getElementById("in2") .value;
    document.getElementById("lb2").textContent=phno;
    
    var date=document.getElementById("id3").value;
    document.getElementById("lb3").textContent=date;

}
