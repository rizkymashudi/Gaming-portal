interface ReachedItemProps {
  reachedCount: string;
  category: string;
}

export default function ReachedItem(props: ReachedItemProps) {
  const {reachedCount, category} = props;

  return (
    <div className="me-lg-35 ms-lg-35">
        <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{reachedCount}</p>
        <p className="text-lg text-lg-start text-center color-palette-2 m-0">{category}</p>
    </div>
  );
}
