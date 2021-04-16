const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51IgInZKI5tpripqv1JCvgEGcJsLbzWuGtVc11YTmODdKt1Ci1oqA5tK0QBhJ8jIoSSBgecYMmLDqtvcBIFHJP9DI00FhuAQNii"
);

// API

// APPCONFIG
const app = express();

// MIDDLEFACES
app.use(cors({ origin: true }));
app.use(express.json());

// APIROUTES
app.get("/", (request, response) => response.status(200).send("Hello"));

app.post("/payments/create", async (request, response) => {
	const total = request.query.total;

	console.log("Payment Request Has Been Recieved ~!>>>> ", total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, //SUBUNUTS * 100
		currency: "usd",
	});
	// OK - Created
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

//Listen cmd
exports.api = functions.https.onRequest(app);
//Secret Key:  sk_test_51IgInZKI5tpripqv1JCvgEGcJsLbzWuGtVc11YTmODdKt1Ci1oqA5tK0QBhJ8jIoSSBgecYMmLDqtvcBIFHJP9DI00FhuAQNii
