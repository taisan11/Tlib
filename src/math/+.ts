export default function sum(a:number[]):number {
    let bar:number = 0
    a.forEach(a => {
        bar=bar+a
    });
    return bar
} 