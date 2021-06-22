const discord = require('discord.js')

class RockPaperScissors {

    startGame = async (message) => {

        var challenger = message.author;
        var opponent = message.mentions.users.first()
        if (!opponent) return message.channel.send(`**Who do you wanna play Rock Paper Scissors with?**`)

        message.channel.send(`**${challenger.username} and ${opponent.username} look in your DM's to start/finish the RPS game!**`)

        const startEmbed1 = new discord.MessageEmbed()
            .setTitle(`It's ${challenger.username}'s turn! Waiting...`)
        var waitingEmoji = await opponent.send({ embeds: [startEmbed1] })

        const startEmbed = new discord.MessageEmbed()
            .setTitle(`${challenger.username}, It's your turn!`)
            .setDescription(`What move are you gonna make?
        
        🪨 = Rock
        🧻 = Paper
        ✂️ = Scissors`)
        var startEmoji = await challenger.send({ embeds: [startEmbed] })

        await startEmoji.react('🪨')
        await startEmoji.react('🧻')
        await startEmoji.react('✂️')

        const filter1 = (reaction, user) => ["🪨", "🧻", "✂️"].includes(reaction.emoji.name) && user.id === challenger.id;
        const response1 = await startEmoji.awaitReactions(filter1, { max: 1 });

        const reaction1 = response1.first();

        var cResult = "";
        var oResult = "";

        if (reaction1.emoji.name === "🪨") {

            cResult = "rock"

            const rockEmbed = new discord.MessageEmbed()
                .setTitle(`It's ${opponent.username} his turn! Waiting...`)
            var waitingEmoji1 = await startEmoji.edit(rockEmbed)

            const oppenentEmbed = new discord.MessageEmbed()
                .setTitle(`${opponent.username}, It's your turn!`)
                .setDescription(`Wich play do you gonna make?
        
            🪨 = Rock
            🧻 = Paper
            ✂️ = Scissors`)
            var endEmoji = await waitingEmoji.edit({ embeds: [oppenentEmbed] })

            await endEmoji.react('🪨')
            await endEmoji.react('🧻')
            await endEmoji.react('✂️')

            const filter2 = (reaction, user) => ["🪨", "🧻", "✂️"].includes(reaction.emoji.name) && user.id === opponent.id;
            const response2 = await endEmoji.awaitReactions(filter2, { max: 1 });

            const reaction2 = response2.first();

            if (reaction2.emoji.name === "🪨") {

                oResult = "rock"

                if (cResult === "rock") {
                    if (oResult === "rock") {
                        const drawEmbed = new discord.MessageEmbed()
                            .setColor("RANDOM")
                            .setTitle(`It's a Draw!`)
                            .setDescription(`You played: 🪨
                        ${opponent.username} played: 🪨`)
                        waitingEmoji1.edit({ embeds: [drawEmbed] })

                        const drawEmbed1 = new discord.MessageEmbed()
                            .setColor("RANDOM")
                            .setTitle(`It's a Draw!`)
                            .setDescription(`You played: 🪨
                        ${challenger.username} played: 🪨`)
                        return endEmoji.edit({ embeds: [drawEmbed1] })
                    } else if (oResult === "paper") {
                        const loseEmbed = new discord.MessageEmbed()
                            .setColor("RANDOM")
                            .setTitle(`${opponent.username} won!`)
                            .setDescription(`You played: 🪨
                        ${opponent.username} played: 🧻`)
                        waitingEmoji1.edit({ embeds: [loseEmbed] })

                        const winEmbed = new discord.MessageEmbed()
                            .setColor("RANDOM")
                            .setTitle(`You won!`)
                            .setDescription(`You played: 🧻
                        ${challenger.username} played: 🪨`)
                        return endEmoji.edit({ embeds: [winEmbed] })
                    }
                }

            } else if (reaction2.emoji.name === "🧻") {

                oResult = "paper"

            } else if (reaction2.emoji.name === "✂️") {

                oResult = "scissors"

            }

        } else if (reaction1.emoji.name === "🧻") {

            cResult = "paper"

            const paperEmbed = new discord.MessageEmbed()
                .setTitle(`It's ${opponent.username} his turn! Waiting...`)
            var waitingEmoji1 = await startEmoji.edit({ embeds: [paperEmbed] })

            const oppenentEmbed = new discord.MessageEmbed()
                .setTitle(`${opponent.username}, It's your turn!`)
                .setDescription(`What do you choose?
        
            🪨 = rock
            🧻 = Paper
            ✂️ = Scissors`)
            var endEmoji = await waitingEmoji.edit({ embeds: [oppenentEmbed] })

            await endEmoji.react('🪨')
            await endEmoji.react('🧻')
            await endEmoji.react('✂️')

            const filter2 = (reaction, user) => ["🪨", "🧻", "✂️"].includes(reaction.emoji.name) && user.id === opponent.id;
            const response2 = await endEmoji.awaitReactions(filter2, { max: 1 });

            const reaction2 = response2.first();

            if (reaction2.emoji.name === "🪨") {

                oResult = "rock"

            } else if (reaction2.emoji.name === "🧻") {

                oResult = "paper"

            } else if (reaction2.emoji.name === "✂️") {

                oResult = "scissors"



            }

        } else if (reaction1.emoji.name === "✂️") {

            cResult = "scissors"

            const scissorsEmbed = new discord.MessageEmbed()
                .setTitle(`It's ${opponent.username} his turn! Waiting...`)
            var waitingEmoji1 = await startEmoji.edit({ embeds: [scissorsEmbed] })

            const oppenentEmbed = new discord.MessageEmbed()
                .setTitle(`${opponent.username}, It's your turn!`)
                .setDescription(`what do you choose?
        
            🪨 = rock
            🧻 = Paper
            ✂️ = Scissors`)
            var endEmoji = await waitingEmoji.edit({ embeds: [oppenentEmbed] })

            await endEmoji.react('🪨')
            await endEmoji.react('🧻')
            await endEmoji.react('✂️')

            const filter2 = (reaction, user) => ["🪨", "🧻", "✂️"].includes(reaction.emoji.name) && user.id === opponent.id;
            const response2 = await endEmoji.awaitReactions(filter2, { max: 1 });

            const reaction2 = response2.first();

            if (reaction2.emoji.name === "🪨") {

                oResult = "rock"

            } else if (reaction2.emoji.name === "🧻") {

                oResult = "paper"

            } else if (reaction2.emoji.name === "✂️") {

                oResult = "scissors"

            }
        }

        if (cResult === "rock") {
            if (oResult === "rock") {
                const drawEmbed = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`It's a Draw!`)
                    .setDescription(`You played: 🪨
                    ${opponent.username} played: 🪨`)
                waitingEmoji1.edit({ embeds: [drawEmbed] })

                const drawEmbed1 = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`It's a Draw!`)
                    .setDescription(`You played: 🪨
                    ${challenger.username} played: 🪨`)
                return endEmoji.edit({ embeds: [drawEmbed1] })
            } else if (oResult === "paper") {
                const loseEmbed = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`${opponent.username} won!`)
                    .setDescription(`You played: 🪨
                    ${opponent.username} played: 🧻`)
                waitingEmoji1.edit({ embeds: [loseEmbed] })

                const winEmbed = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`You won!`)
                    .setDescription(`You played: 🧻
                    ${challenger.username} played: 🪨`)
                return endEmoji.edit({ embeds: [winEmbed] })
            } else if (oResult === "scissors") {

                const loseEmbed1 = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`You won!`)
                    .setDescription(`You played: 🪨
                    ${opponent.username} played: ✂️`)
                waitingEmoji1.edit({ embeds: [loseEmbed1] })

                const winEmbed1 = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`${challenger.username} won!`)
                    .setDescription(`You played: ✂️
                    ${challenger.username} played: 🪨`)
                return endEmoji.edit({ embeds: [winEmbed1] })
            }
        } else if (cResult === "paper") {
            if (oResult === "paper") {
                const drawEmbed = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`It's a Draw!`)
                    .setDescription(`You played: 🧻
                    ${opponent.username} played: 🧻`)
                waitingEmoji1.edit({ embeds: [drawEmbed] })

                const drawEmbed1 = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`It's a Draw!`)
                    .setDescription(`You played: 🧻
                    ${challenger.username} played: 🧻`)
                return endEmoji.edit({ embeds: [drawEmbed1] })
            } else if (oResult === "rock") {
                const loseEmbed = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`You won!`)
                    .setDescription(`You played: 🧻
                    ${opponent.username} played: 🪨`)
                waitingEmoji1.edit({ embeds: [loseEmbed] })

                const winEmbed = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`${challenger.username} won!`)
                    .setDescription(`You played: 🪨
                    ${challenger.username} played: 🧻`)
                return endEmoji.edit({ embeds: [winEmbed] })
            } else if (oResult === "scissors") {

                const loseEmbed1 = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`${opponent.username} won!`)
                    .setDescription(`You played: 🧻
                    ${opponent.username} played: ✂️`)
                waitingEmoji1.edit({ embeds: [loseEmbed1] })

                const winEmbed1 = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`You won!`)
                    .setDescription(`You played: ✂️
                    ${challenger.username} played: 🧻`)
                endEmoji.edit({ embeds: [winEmbed1] })
            }
        } else if (cResult === "scissors") {
            if (oResult === "scissors") {
                const drawEmbed = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`It's a Draw!`)
                    .setDescription(`You played: ✂️
                    ${opponent.username} played: ✂️`)
                waitingEmoji1.edit({ embeds: [drawEmbed] })

                const drawEmbed1 = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`It's a Draw!`)
                    .setDescription(`You played: ✂️
                    ${challenger.username} played: ✂️`)
                return endEmoji.edit({ embeds: [drawEmbed1] })
            } else if (oResult === "paper") {
                const loseEmbed = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`You won!`)
                    .setDescription(`You played: ✂️
                    ${opponent.username} played: 🧻`)
                waitingEmoji1.edit({ embeds: [loseEmbed] })

                const winEmbed = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`${challenger.username} won!`)
                    .setDescription(`You played: 🧻 
                    ${challenger.username} played: ✂️`)
                return endEmoji.edit({ embeds: [winEmbed] })
            } else if (oResult === "rock") {
                const winEmbed1 = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`${challenger.username} won!`)
                    .setDescription(`You played: ✂️
                    ${challenger.username} played: 🪨`)
                endEmoji.edit({ embeds: [winEmbed1] })

                const loseEmbed1 = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`You won!`)
                    .setDescription(`You played: 🪨
                    ${opponent.username} played: ✂️`)
                return waitingEmoji1.edit({ embeds: [loseEmbed1] })
            }
        }

    }
}

module.exports = RockPaperScissors
