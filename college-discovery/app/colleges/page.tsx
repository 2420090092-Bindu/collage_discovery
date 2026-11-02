async function getColleges() {
  const res = await fetch("http://localhost:3000/api/colleges", {
    cache: "no-store",
  });

  return res.json();
}

export default async function CollegesPage() {
  const colleges = await getColleges();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Colleges</h1>

      <div className="mt-6 space-y-4">
        {colleges?.map((college: any) => (
          <div key={college.id} className="border p-4 rounded">
            <h2 className="font-semibold">{college.name}</h2>
            <p>{college.location}</p>
            <p>Fees: ₹{college.fees}</p>
            <p>Rating: ⭐ {college.rating}</p>
          </div>
        ))}
      </div>
    </main>
  );
}