import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LogWhereInput = {
  errDef?: StringFilter;
  errNo?: StringFilter;
  id?: StringFilter;
  transId?: StringNullableFilter;
};
