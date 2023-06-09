class Database{
async function get(url,id){
  var data;
  await fetch(url +"/" +id)
  .then((res) => res.json())
  .then((data1) => { return data = data1;});
  return data;
 }
}