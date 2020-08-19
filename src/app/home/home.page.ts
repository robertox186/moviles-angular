import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
list ={
  0:{id:72,name:"david Beckham"},
  1:{0:[{id:11,name:"brad pitt"},{id:1,name:"alexandra daddario"}],
       1:{id:19,name:"michael myers"}
},
  2:{0:{0:[{id:33,name:"matthew heafy"}]}},

  3:[[{id:4,name:"john petrucci"},{id:55,name:"wayne Ronney"}],
  [{id:57,name:"garbeil tronpis"},{id:10,name:"donald trump"},{0:{id:69,name:"[object object]"}}],
  {id:13,name:"ester esposito"},
  {
    0:[{id:3,name:"jordan rudess"},{id:8,name:"michael jackon"}],
    1:{id:99,name:"undefined undefined"},

  },
  {id:47,name:"raul garcia"},
  {id:40,name:"benito martinez"}

],
4:[
{id:68,name:"lionel messi"},
{id:84,name:"koe bryant"},
{id:71,name:"gilgamesh"},
[{id:7,name:"miyamoto musashi"},
{0:[{id:23,name:"arthur pendragon"}],1:[{id:5,name:"bedivere"}]
},
{id:96,name:"lord valdomero"},
{id:18,name:"literalmente nadie"}
]

]
}



constructor() {}
limpiar=(_obj)=>{
var i:any;
let resp=[];
const iterar=(objeto)=>{
  for(var  key in objeto){

    i=parseInt(key,10)
    const elemento=objeto[i];


    if(!isNaN(i)){

        if(Array.isArray(elemento)){
         
          elemento.forEach((elem)=>{

            iterar(elem)
          });
        }else{

iterar(elemento);

        }


        }else{

          resp.push(objeto);
      }
  }
}

iterar(_obj);

console.log(JSON.stringify(resp))
return [...new Set(resp)]

}

quick(){

  let res=this.quickSort(this.limpiar(this.list));
  console.log(this.limpiar(this.list))
  console.log("respuesta: =>"+JSON.stringify(res))
}
bucket(){

 let res= this.bucketSort(this.limpiar(this.list),this.limpiar(this.list).length)
   
console.log(JSON.stringify(res))
}

quickSort = array => {
  if (array.length === 0) return [];
  let [x, ...xs] = array;    
  return [
      ...this.quickSort(xs.filter(y => y.id < x.id)),
      x,
      ...this.quickSort(xs.filter(y => y.id >= x.id))
  ];
};

bucketSort(array, bucketSize) {
  if (array.length === 0) {
    return array;
  }
  function insertionSort(array) {
    var length = array.length;
    
    for(var i = 1; i < length; i++) {
      var temp = array[i];
      for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
        array[j+1] = array[j];
      }
      array[j+1] = temp;
    }
    
    return array;
  }
  // Declaring vars
  var i,
      minValue = array[0],
      maxValue = array[0],
      bucketSize = bucketSize || 5;
  
  // Setting min and max values
  array.forEach(function (currentVal) {
  	if (currentVal < minValue) {
  		minValue = currentVal;
  	} else if (currentVal > maxValue) {
  		maxValue = currentVal;
  	}
  })

  // Initializing buckets
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  var allBuckets = new Array(bucketCount);
  
  for (i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }
  
  // Pushing values to buckets
  array.forEach(function (currentVal) {
  	allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
  });

  // Sorting buckets
  array.length = 0;
  
  allBuckets.forEach(function(bucket) {
  	insertionSort(bucket);
  	bucket.forEach(function (element) {
  		array.push(element)
  	});
  });

  return array;
}
}




