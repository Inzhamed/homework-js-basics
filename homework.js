var arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

var i, x, j, done = false ;
   
   for(i=1; i<arr.length; i++){
       j=i-1; x=arr[i];
       while(j>=0 && arr[j]>x){
           arr[j+1]=arr[j];
           j=j-1;
       }
       arr[j+1]=x;
     
   } 
 console.log(arr);