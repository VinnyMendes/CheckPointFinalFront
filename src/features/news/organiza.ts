export function Time (time: Date){
    const hora = new Date();
    const minutosDecorrido = Math.floor(
    (hora.getTime() - time.getTime()) / 60000);

    return minutosDecorrido
}

export const Title = (text: string) => (
    text.split(" ").map((string) => (
            string.charAt(0).toUpperCase() + string.slice(1)
    )).join(" ")
)