const first: any = "hell";
console.log("1) ", first);

const first2: number = 2;
console.log("2) ", first2);

const first3: boolean = true;
console.log("3) ", first3);

const first4: [] = [];
const firts5: Array<string> = ["hello"];
console.log("4) ", first4);
console.log("5) ", firts5);

const firts6: [Date, number, string] = [
  new Date(),
  1000,
  "this is the example of tuple",
];
console.log("6) ", firts6);

enum Direction {
  Yes = "The employee came for the job is passed",
  No = "The employee came for the job is failed",
  Other = "Nikl teri koi jgh nhi",
}

console.log("output for seeing how enum looks when we console it", Direction);
function interviewRound(employeeName: any, statement: Direction) {
  const array = ["Yashit", "Shanaya"];
  if (employeeName === array[0]) {
    return `${statement}`;
  } else if (employeeName === array[1]) {
    return `${statement}`;
  } else {
    return `${statement}`;
  }
}
console.log("7) ", interviewRound("Yashit", Direction.Yes));
console.log("7) ", interviewRound("Shanaya", Direction.No));
console.log("7) ", interviewRound("Karan", Direction.Other));

const first8: string = "Hi my name is YASHIT 😏";
console.log("8) ", first8);

//Now let's start how can i play with the types
const first9: any | Date =
  "In this way i can give two types to a single constant";
console.log("9) ", first9);

const first10: Date | [] = new Date();
console.log("10) ", first10);

const first11: Array<any | Date> = [
  "you can give types like this also",
  new Date(),
  "end for the types topic",
];
console.log("11) ", first11);

//CLASSES
class hell {
  variable: any;
  number: number = 2;
  beneficiaryCondition() {
    console.log("Critical");
  }
}

class moveToNewAccount extends hell {
  beneficiaryName(): any {
    console.log("Shanaya");
  }
  beneficiaryAge(): any {
    console.log("18");
  }
  beneficiaryIQ(): any {
    console.log("0");
  }
}
const beneficiary = new moveToNewAccount();
console.log(
  beneficiary.beneficiaryName(),
  beneficiary.beneficiaryAge(),
  beneficiary.beneficiaryIQ(),
  beneficiary.beneficiaryCondition()
);

//TYPEOF
const first12: object = { name: "YASHIT" };
console.log("12) ", typeof first12);

const first13 = "yeah";
const savage = first13 as string;
console.log("13) ", typeof savage);

//advance typescript starts from here
//run command tsc -init , for more explanation go to readme.md file

class advanceTs {
  //first comment off this variable with no type and see what error it throws and then move to readme.md file
  //value;
  value: any;
  //first comment off this function with no type given to the parameter and see what error it throws
  // method(response) {}
  method(response: any) {
    return response;
  }
  //first comment off these variables with type and see what error it throws
  //num : number
  //str : string
  numb: number = 3;
  str: string = "YASHIT";
}

//For the difference between interface and enum please go to readme.md file
//This is a normal example
interface Point {
  x: number;
  y: number;
}

//From real life or maximus point of view we generally make interface to fetch the values that comes into the payload
//For more go to readme.md file
interface MaximusPayload {
  Password: string;
  Description: string;
  Enabled: string;
  LeaseOptions: {
    Enabled: boolean;
  };
  Resources: {
    CloudTenantResources: Array<any>; // OR []
  };
  LastResult: string;
  LastActive: string;
  ComputedResoures: {
    CloudTenantComputerResources: []; // OR Array<any>
  };
  ThrottlingEnabled: boolean;
  ThrottingSpeedLimit: number;
  PublicCount: number;
  BackupCount: number;
  //.....
  TenantType: {
    StandaloneTenant: {
      TenantCredentials: {
        Username: string;
      };
    };
  };
  //....
}

// const validateFunction = (request : Request) => {
//   // request is a type in Maximus which helps us to get the values from the payload
// giveUsername((response : MaximusPayload)){
//  response = request.payload.TenantType.StandaloneTenant.TenantCredentials.Username;
//  if(response){
//   return of({
//      target: {
//         message  : "The selected Beneficiary has a username"
//      }
//   })
//  }
// }

export {};
