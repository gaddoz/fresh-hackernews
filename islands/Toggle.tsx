import { useState } from "preact/hooks";

export default function Toggle({ children }) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className={open ? "toggle open" : "toggle"}>
        <a onClick={() => setOpen((o) => !o)}>
          {open ? "[-]" : "[+] comments collapsed"}
        </a>
      </div>
      <ul
        className="comment-children"
        style={{ display: open ? "block" : "none" }}
      >
        {children}
      </ul>
    </>
  );
}
