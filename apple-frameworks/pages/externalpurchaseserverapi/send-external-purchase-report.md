> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalpurchaseserverapi/send-external-purchase-report](https://developer.apple.com/documentation/externalpurchaseserverapi/send-external-purchase-report)

# Send External Purchase Report

**Interface language:** Data

**Framework:** External Purchase Server API  
**Kind:** Web Service Endpoint  
**Availability:** External Purchase Server API 1.0.0+

Report required information about external purchase tokens and associated transactions.

## URL

```http
PUT https://api.storekit.apple.com/externalPurchase/v1/reports
```

## Sandbox URL

```http
PUT https://api.storekit-sandbox.apple.com/externalPurchase/v1/reports
```

## HTTP Body

Content type: `application/json`

Type: `ExternalPurchaseReport`

The request body that contains the report information.

## Response Codes

- `200` OK — `SendReportSuccessResponse`: The report was received and passed validation checks successfully.
- `400` Bad Request — `SendReportErrorResponse`: The report failed because the request was malformed, a duplicate request, or if the [SendReportErrorResponse](sendreporterrorresponse.md) object is present that the line item validation failed.
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid.
- `429`: Rate limit exceeded.
- `500` Internal Server Error: Server error. Try again later.

## Mentioned In

- [Reporting corrections](reportcorrections.md)
- [Reporting unrecognized and transactionless tokens](reportwithouttransactions.md)
- [Reporting tokens with transactions](reportwithtransactions.md)

<a id="Discussion"></a>

## Discussion

Call this endpoint to report an external purchase token that your app or website receives, and the transactions and events associated with the token. For information on the reporting requirements, see the [Commission, transaction reports, and payments](https://developer.apple.com/support/apps-using-alternative-payment-providers-in-the-eu#commission-reports-and-payments) section of the article Using alternative payment options on the App Store in the European Union.

To send the report, add your data to the [ExternalPurchaseReport](externalpurchasereport.md) request body. For more information about creating reports, see the following:

- [Reporting tokens with transactions](reportwithtransactions.md)
- [Reporting unrecognized and transactionless tokens](reportwithouttransactions.md)
- [Reporting corrections](reportcorrections.md)

The server indicates it successfully received your report by returning an `HTTP 200` response with your [requestIdentifier](requestidentifier.md) in the [SendReportSuccessResponse](sendreportsuccessresponse.md). If you receive an `HTTP 400` error response with a [SendReportErrorResponse](sendreporterrorresponse.md) object, the server didn’t successfully receive any of the data in the report. Fix the errors listed in the response object, and resubmit the full report using the same [requestIdentifier](requestidentifier.md). The server also sends an `HTTP 400` error if the request is a duplicate, or if it’s malformed.

<a id="Testing-in-the-sandbox-environment"></a>

### Testing in the sandbox environment

Call this endpoint using its sandbox URL only for tokens that the system generates in the sandbox environment. For more information about identifying sandbox tokens, see [Receiving and decoding external purchase tokens](../storekit/receiving-and-decoding-external-purchase-tokens.md).

> **Important**

> The sandbox tokens and any test transaction data you submit through the sandbox URLs of the External Purchase Server API are not actual transactions.

## See Also

### External purchase reporting

- [ExternalPurchaseReport](externalpurchasereport.md): The contents of an external purchase report for a single token.
- [SendReportSuccessResponse](sendreportsuccessresponse.md): A response that contains the request identifier and indicates the server successfully received your external purchase report.
- [SendReportErrorResponse](sendreporterrorresponse.md): An error response that indicates your external purchase report didn’t succeed, including error details for the line items in your report.
