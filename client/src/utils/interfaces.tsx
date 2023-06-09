export interface Props {
  seller: Seller;
}

export interface Percent {
  quiniela: string;
  quini6: string;
  loto: string;
  loto5: string;
  brinco: string;
  express: string;
  poceada: string;
  telekino: string;
  telebingo: string;
  super15: string;
  machineRent: string;
  otro: string;
}

export interface Seller {
  _id: string;
  id_seller: string;
  name: string;
  last_name: string;
  dni: string;
  phone: string;
  percent: Percent;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Sale {
  _id?: string;
  date: string;
  seller: Seller;
  games: Games;
  totals: Totals;
  status: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Games {
  quiniela: string;
  quini6: string;
  loto: string;
  loto5: string;
  brinco: string;
  poceada: string;
  express: string;
}

export interface Totals {
  premios: string;
  total: string;
  paga: string;
  saldo: string;
  machineRent: boolean;
}

export interface GamesFields {
  quiniela: string;
  quini6: string;
  loto: string;
  loto5: string;
  brinco: string;
  poceada: string;
  express: string;
  premios: string;
  total: string;
  paga: string;
  saldo: string;
  machineRent: boolean;
}
