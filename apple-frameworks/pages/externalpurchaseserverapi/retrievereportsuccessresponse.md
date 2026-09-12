> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalpurchaseserverapi/retrievereportsuccessresponse](https://developer.apple.com/documentation/externalpurchaseserverapi/retrievereportsuccessresponse)

# RetrieveReportSuccessResponse

**Interface language:** Data

**Framework:** External Purchase Server API  
**Kind:** Object  
**Availability:** External Purchase Server API 1.0.0+

A response that indicates success and includes your external purchase report data.

## Declaration

```
object RetrieveReportSuccessResponse
```

## Properties

- `report` — `ExternalPurchaseReport` (required): The external purchase report data.

<a id="Discussion"></a>

## Discussion

This successful response contains the external purchase report data that you request when you call [Retrieve External Purchase Report](retrieve-external-purchase-report.md).

## Topics

### Data types

- [ExternalPurchaseReport](externalpurchasereport.md): The contents of an external purchase report for a single token.

## See Also

### External purchase report retrieval

- [Retrieve External Purchase Report](retrieve-external-purchase-report.md): Get an external purchase report by providing its request identifier.
