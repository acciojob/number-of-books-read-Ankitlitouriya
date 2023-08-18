const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
var count  =0;
const numberOfBooksRead = () => {
	 for ( const book of library) {
	 	
	 
  // write your code here
	if (library.readingStatus===true) {
		 const++;
		
	}
		 return count;
	 }
	
};

// Do not change the code below

alert(numberOfBooksRead());
