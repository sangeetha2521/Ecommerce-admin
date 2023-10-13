import { DashboardIcon } from "../Icons/DashboardIcon";
import { Producticon } from "../Icons/ProductsIcon";
import { WaletIcon } from "../Icons/WalletIcon";
import Dashboard from "../Admin-Dashboard";
import Products from "../Products";

import Coffeemaker from "../Icons/CofeeMeachine.svg";
import cofeemaker2 from "../Icons/CofeeMeachine-2.svg";
import { CurrencyIcon } from "../Icons/currenciesIcon";

export const Product = [
  {
    id: 1,
    title: "Dashboard",
    icon: Coffeemaker,
    description: "Coffee maker 324",
    amount: "20$",
    ratings: 5,
  },
  {
    id: 2,
    title: "Products",
    icon: cofeemaker2,
    description: "Keurig",
    amount: "20$",
    ratings: 5,
  },
  {
    id: 3,
    title: "Wallet",
    icon: cofeemaker2,
    description: "Mr. Coffee",
    amount: "20$",
    ratings: 4.5,
  },
  {
    id: 4,
    title: "Productss",
    icon: cofeemaker2,
    description: "Nespresso",
    amount: "20$",
    ratings: 4.5,
  },
  {
    id: 5,
    title: "Wallet",
    icon: Coffeemaker,
    description: "Bonavita",
    amount: "20$",
    ratings: 4.5,
  },
  {
    id: 6,
    title: "Productss",
    icon: Coffeemaker,
    description: "Nespresso",
    amount: "20$",
    ratings: 4.5,
  },
  {
    id: 7,
    title: "Wallet",
    icon: cofeemaker2,
    description: "Bonavita",
    amount: "20$",
    ratings: 4.5,
  },
  {
    id: 7,
    title: "Wallet",
    icon: Coffeemaker,
    description: "Bonavita",
    amount: "20$",
    ratings: 4.5,
  },
];
export const dashboardContent = [
  {
    id: 1,
    title: "Dashboard",
    icon: <DashboardIcon />,
    component: <Dashboard />,
  },
  {
    id: 2,
    title: "Products",
    icon: <Producticon />,
    component: <Products />,
  },
  {
    id: 3,
    title: "Wallet",
    icon: <WaletIcon />,
  },
  {
    id: 4,
    title: "Cart",
    icon: <Producticon />,
    component: <Products />,
  },
  {
    id: 5,
    title: "Inventry",
    icon: <WaletIcon />,
  },
  {
    id: 6,
    title: "Saving",
    icon: <Producticon />,
    component: <Products />,
  },
  {
    id: 7,
    title: "Currencies",
    icon: <CurrencyIcon />,
  },
  {
    id: 8,
    title: "Purchase history",
    icon: <WaletIcon />,
  },
  {
    id: 9,
    title: "Upcoming",
    icon: <WaletIcon />,
  },
];
