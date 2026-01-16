
export enum TransactionType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
  SAVING = 'SAVING',
}

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  category: string;
  date: string; // ISO 8601 format
  description: string;
  savingsGoalId?: string;
}

export enum BudgetPeriod {
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
}

export interface Budget {
  id: string;
  category: string;
  limit: number;
  period: BudgetPeriod;
}

export interface SavingsGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
}

export type Page = 'dashboard' | 'transactions' | 'budgets' | 'savings' | 'settings';

export type Currency = 'USD' | 'EUR' | 'GBP' | 'PKR' | 'INR';
