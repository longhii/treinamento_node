const service = require('./service')

async function main() {
    try {
        const result = await service.obterPessoas(`a`)
        
        const names = []
        result.results.forEach(element => {
            names.push(element.name)
        });

        const nomes = result.results.map(a => a.name)

        console.log(`names:`, names)
        console.log(`nomes: `, nomes)

    } catch(error) {
        console.error(`Deu ruim`, error)
    }
}

main()