> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalpurchaseserverapi/sendreportsuccessresponse](https://developer.apple.com/documentation/externalpurchaseserverapi/sendreportsuccessresponse)

# SendReportSuccessResponse

**Interface language:** Data

**Framework:** External Purchase Server API  
**Kind:** Object  
**Availability:** External Purchase Server API 1.0.0+

A response that contains the request identifier and indicates the server successfully received your external purchase report.

## Declaration

```
object SendReportSuccessResponse
```

## Properties

- `requestIdentifier` — `requestIdentifier` (required): The UUID that you generated to uniquely identify the report when calling the [Send External Purchase Report](send-external-purchase-report.md) endpoint.

<a id="Discussion"></a>

## Discussion

The [Send External Purchase Report](send-external-purchase-report.md) endpoint returns this response when the server successfully receives a report that passes validation checks. Record the [requestIdentifier](requestidentifier.md) in your system. Use the  `requestIdentifer` to get the report by sending a request to the [Retrieve External Purchase Report](retrieve-external-purchase-report.md) endpoint.

## See Also

### External purchase reporting

- [Send External Purchase Report](send-external-purchase-report.md): Report required information about external purchase tokens and associated transactions.
- [ExternalPurchaseReport](externalpurchasereport.md): The contents of an external purchase report for a single token.
- [SendReportErrorResponse](sendreporterrorresponse.md): An error response that indicates your external purchase report didn’t succeed, including error details for the line items in your report.
