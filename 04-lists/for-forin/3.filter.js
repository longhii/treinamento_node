const { obterPessoas } = require('./service')

async function main() {
    try {
        const {
            results
        } = await obterPessoas(`a`)

        const familia = results.filter(function(item) {
            const result = item.name.toLowerCase().indexOf(`lars`) !== -1
            return result
        })

        const nomes = familia.map(pessoa => pessoa.name)

        console.log(`Nomes: `, nomes)
    } catch(error) {
        console.error(`Deu ruim`, error)
    }
} 

main()