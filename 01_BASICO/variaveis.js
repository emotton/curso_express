const a = 10;

{
  {
    a = 20;
    console.log(a);
  }
  console.log(a);
}
