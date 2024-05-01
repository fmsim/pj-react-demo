export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-gray-400 rounded-md p-4">{children}</div>
  );
}
