function Validate(form) {
 if(!form.Zo.value) {
  alert("Enter Value for Zo.");
  form.Zo.focus();
  return false;
 }
 return true;
}


function Compute(form) {
 with(Math) {
  var V1 = Number(form.V1.value);
  var V2 = Number(form.V2.value);
  var Vp = Number(form.Vp.value);
  var Vn = Number(form.Vn.value);
  var R1 = Number(form.R1.value);
  var R2 = Number(form.R2.value);
  var R3 = Number(form.R3.value);
  var R4 = Number(form.R4.value);
  var Vout;
  var Ainv;
  var Anon;
  var temp;
  var Precision= 3;
  
  if(Vn==Vp) Vn= -Vp;
  if(Vn>Vp) {
   temp=Vp;
   Vp= Vn;
   Vn= temp;
  }
  if(Vn>0.0) Vn= 0;

  Vout = (((1+(R2/R1))/(1+(R3/R4)))*V2) - ((R2/R1)*V1);
  Ainv= -R2/R1;
  Anon= ((R1+R2)/R1)*(R4/(R3+R4));
  
  if(Vout>Vp || Vout<Vn) form.Clipped.checked = true;
  else form.Clipped.checked= false;
  if(Vout>Vp) Vout= Vp;
  if(Vout<Vn) Vout= Vn;

  form.Vout.value= Vout.toPrecision(Precision);
  form.Ainv.value= Ainv.toPrecision(Precision);
  form.Anon.value= Anon.toPrecision(Precision);
  form.Vp.value= Vp.toPrecision(Precision);
  form.Vn.value= Vn.toPrecision(Precision);
 }
}

