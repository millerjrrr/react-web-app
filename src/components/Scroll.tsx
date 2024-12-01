import { ReactNode } from "react";
import { colors } from "../utils/colors";

const Scroll = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        flex: 1,
        maxHeight: "70vh",
        scrollbarWidth: "none",
        backgroundColor: colors.P,
        borderRadius: 15,
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
