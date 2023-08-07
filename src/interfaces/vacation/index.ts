import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VacationInterface {
  id?: string;
  days_taken: number;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface VacationGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
