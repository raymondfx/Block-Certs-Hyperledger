import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
//import {Participant} from './org.hyperledger.composer.system';
// export namespace org.hyperledger_composer.scms{
   export enum ProductDesc {
      Degree,
      Certificate,
   }
   export class Product extends Asset {
      certificateId: string;
      certificatetype: string;
      description: ProductDesc;
      owner: Participant;
      issuer: Participant;
   }
   export class Student extends Participant {
      studentId: string;
      email: string;
      firstName: string;
      lastName: string;
   }
   export class Institution extends Participant {
      email: string;
      Name: string;
   }
   export class Beneficiary extends Participant {
      email: string;
      Name: string;
   }
   export class MoveProduct extends Transaction {
      product: Product;
      issuer: Participant;
      newOwner: Participant;
   }
// }
