> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalpurchaseserverapi/retrieve-external-purchase-report](https://developer.apple.com/documentation/externalpurchaseserverapi/retrieve-external-purchase-report)

# Retrieve External Purchase Report

**Interface language:** Data

**Framework:** External Purchase Server API  
**Kind:** Web Service Endpoint  
**Availability:** External Purchase Server API 1.0.0+

Get an external purchase report by providing its request identifier.

## URL

```http
GET https://api.storekit.apple.com/externalPurchase/v1/reports/{requestIdentifier}
```

## Sandbox URL

```http
GET https://api.storekit-sandbox.apple.com/externalPurchase/v1/reports/{requestIdentifier}
```

## Path Parameters

- `requestIdentifier` — `requestIdentifier` (required): The UUID that identifies the external purchase report you’re requesting.

## Response Codes

- `200` OK — `RetrieveReportSuccessResponse`: Success. The [RetrieveReportSuccessResponse](retrievereportsuccessresponse.md) object contains your report.
- `400` Bad Request — `NotFoundError`: The request returned an error. Check the `requestIdentifier` parameter to ensure it’s a valid identifer for a report that you successfully submitted.
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid.
- `429`: Rate limit exceeded.
- `500` Internal Server Error: Server error. Try again later.

<a id="Discussion"></a>

## Discussion

Call this endpoint to retrieve an external purchase report that you successfully sent to Apple. This endpoint takes the `requestIdentifier` that you create when you call [Send External Purchase Report](send-external-purchase-report.md), for reports that were successfully submitted.

## Topics

### Data types

- [requestIdentifier](requestidentifier.md): A UUID that uniquely identifies an external purchase report.

## See Also

### External purchase report retrieval

- [RetrieveReportSuccessResponse](retrievereportsuccessresponse.md): A response that indicates success and includes your external purchase report data.
