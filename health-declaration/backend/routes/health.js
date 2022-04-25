const router = require('express').Router();
let Health = require('../models/health.model');

router.route('/').get((req, res) => {
    Health.find()
        .then((health) => res.json(health))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const fullName = req.body.fullName;
    const temperature = req.body.temperature;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;

    const newHealthDeclaration = new Health({
        fullName,
        temperature,
        email,
        phoneNumber,
    });

    newHealthDeclaration
        .save()
        .then((health) => res.json('New Record Added'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Health.findById(req.params.id)
        .then((health) => {
            health.fullName = req.body.fullName;
            health.temperature = req.body.temperature;
            health.email = req.body.email;
            health.phoneNumber = req.body.phoneNumber;

            health
                .save()
                .then(() => res.json('Record was updated!'))
                .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Health.findById(req.params.id)
        .then((health) => res.json(health))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Health.findByIdAndDelete(req.params.id)
        .then((health) => res.json('Record was deleted.'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
