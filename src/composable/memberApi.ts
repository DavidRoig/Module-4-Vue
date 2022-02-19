import { Member } from "@/types";
import ky from "ky";
import { AppConstants } from "@/constants/appConstants";

export const getMembers = async (organisation: string): Promise<Member[]> =>
  await ky.get(`https://api.github.com/orgs/${organisation}/members`).json();
