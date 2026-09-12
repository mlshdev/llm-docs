> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalpurchaseserverapi/status](https://developer.apple.com/documentation/externalpurchaseserverapi/status)

# status

**Interface language:** Data

**Framework:** External Purchase Server API  
**Kind:** Type  
**Availability:** External Purchase Server API 1.0.0+

A string value you provide to indicate the status of the token and the contents of the external purchase report.

## Declaration

```
string status
```

## Possible Values

- `LINE_ITEM`: Indicates that your external purchase report includes line items to report transactions.
- `NO_LINE_ITEM`: Indicates that your app or website received an external purchase token, but the customer didn’t complete any transactions related to the token.
- `UNRECOGNIZED_TOKEN`: Indicates that you received an App Store Server Notification about an external purchase token assigned to your app, but your system doesn’t recognize the token.
- `DUPLICATE_TOKEN`: Indicates that you recognize the external purchase token from an App Store Server Notification, but you’re reporting transactions using another token that’s active for the customer in the same time period. This status applies only to `SERVICES` and `ACQUISITION` token types. For more information about tokens, see [Receiving and decoding external purchase tokens](../storekit/receiving-and-decoding-external-purchase-tokens.md).

## Mentioned In

- [Reporting unrecognized and transactionless tokens](reportwithouttransactions.md)
- [External Purchase Server API changelog](changelog.md)

<a id="Discussion"></a>

## Discussion

The [status](status.md) property indicates whether the token you’re reporting has any associated transactions. You provide this property in the [ExternalPurchaseReport](externalpurchasereport.md) request body when you call the [Send External Purchase Report](send-external-purchase-report.md) endpoint.

## See Also

### Data types

- [requestIdentifier](requestidentifier.md): A UUID that uniquely identifies an external purchase report.
- [externalPurchaseId](externalpurchaseid.md): The unique identifier of an external purchase token.
