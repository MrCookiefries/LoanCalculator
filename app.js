const express = require("express");

const {mean, mode, median, convertNums, checkQueryItem, buildResponse} = require("./helpers");

const app = express();
portNum = 3000;

class ExpressError extends Error {
    constructor(status, message) {
        super();
        this.message = message;
        this.status = status;
        console.error(this.stack);
    }
}

app.get("/mean", (req, res, next) => {
    let nums;
    try {
        checkQueryItem(req.query, "nums");
        nums = convertNums(req.query.nums);
    } catch (err) {
        return next(new ExpressError(400, err.message));
    }
    return res.json(buildResponse("mean", mean(nums)));
});

app.get("/median", (req, res, next) => {
    let nums;
    try {
        checkQueryItem(req.query, "nums");
        nums = convertNums(req.query.nums);
    } catch (err) {
        return next(new ExpressError(400, err.message));
    }
    return res.json(buildResponse("median", median(nums)));
});

app.get("/mode", (req, res, next) => {
    let nums;
    try {
        checkQueryItem(req.query, "nums");
        nums = convertNums(req.query.nums);
    } catch (err) {
        return next(new ExpressError(400, err.message));
    }
    return res.json(buildResponse("mode", mode(nums)));
});

app.use((req, res, next) => {
    const notFoundErr = new ExpressError(404, "Not found!");
    return next(notFoundErr);
});

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";

    return res.status(status).json({
        error: {status, message}
    });
});

app.listen(portNum, () => {
    console.log(`Server running on port ${portNum}`);
});
