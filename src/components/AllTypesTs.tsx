function AllTypesTs() {

  // let myAnything: any = 2;
  // let myUnknown: unknown = 'What is this?'
  // let myString: string = 'I am string';
  // let myNumber: number = 2;
  // let myBoolean: boolean = true;
  // let myArrOfStrings: string[] = ["I am string"];
  // let myArrOfManyTypes: [string, number] = ['Some string', 5];
  // let myArrOfManyTypes: [string, number] = ['Some string', 5];
  // let myThisOrThat: number | string = 5 // This is called union it can also accept "5" value;
  // let myFn: (name: string) => void // instead of void can also be string, number, etc.
  
  // function showFullName(firstName: string, lastName: string): string {
  //   return `${firstName} ${lastName}`
  // }

  //* =====================================

  // type Person = {
  //   name: string;
  //   // surname?: string;
  //   age: number;
  // };
 
  // // First case for obj
  // let human: Person = {
  //   name: 'Dean',
  //   age: 26
  // }

  // // Second case for obj
  // let morePeople: Person[] = [
  //   {
  //     name: 'John',
  //     age: 57
  //   },
  //   {
  //     name: 'Dean',
  //     age: 26
  //   }
  // ];

  //* =====================================

  // type Student = {
  //   name: string;
  //   university: string;
  // }

  // type Swimmer = Student & {
  //   speed: string;
  //   records: number;
  // }

  // let contestant: Swimmer = {
  //   name:'Sam',
  //   university: 'Stanford University',
  //   speed: 'fast',
  //   records: 3
  // }
  
  return (
    <div>
      TypesTs
    </div>
  )
}

export default AllTypesTs