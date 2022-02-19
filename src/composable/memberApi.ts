import { Member } from "@/types";

export const getMembers = (organisation: string): Promise<Member[]> => {
  return new Promise<Member[]>((resolve) => {
    resolve([{ id: 1, name: organisation }]);
  });
};
