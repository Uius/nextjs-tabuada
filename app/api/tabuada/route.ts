import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const n = Number(new URL(req.url).searchParams.get("numero"));
  const tabuada = [...Array(10)].map((_, i) => n * (i + 1));

  return NextResponse.json({
    mensagem: `Essa é a tabuada do ${n}:`,
    resultados: tabuada
  });
}