const router = require('express').Router()
import axios from "axios";

//* Запрос с использованием async\await функции

// router.get("/", async (req, res) => {
//     try {
//         const response = await axios.get('https://api.breakingbadquotes.xyz/v1/quotes');
//         const data = response.data;
//         res.json(data[0].quote);
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).json({ error: "An error occurred while fetching data" });
//     }
// });

//* Запрос с использование Promise

router.get("/", (req, res) => {
    axios.get('https://api.breakingbadquotes.xyz/v1/quotes')
        .then(response => {
            const data = response.data;
            res.json(data[0].quote);
        })
        .catch(error => {
            console.error("Error:", error);
            res.status(500).json({ error: "An error occurred while fetching data" });
        });
});

module.exports = router