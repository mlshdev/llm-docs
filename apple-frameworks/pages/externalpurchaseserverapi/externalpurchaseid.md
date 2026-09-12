> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalpurchaseserverapi/externalpurchaseid](https://developer.apple.com/documentation/externalpurchaseserverapi/externalpurchaseid)

# externalPurchaseId

**Interface language:** Data

**Framework:** External Purchase Server API  
**Kind:** Type  
**Availability:** External Purchase Server API 1.0.0+

The unique identifier of an external purchase token.

## Declaration

```
string externalPurchaseId
```

## Mentioned In

- [Reporting unrecognized and transactionless tokens](reportwithouttransactions.md)

<a id="Discussion"></a>

## Discussion

Decode an external purchase token to get its [externalPurchaseId](externalpurchaseid.md). For more information, see [Receiving and decoding external purchase tokens](../storekit/receiving-and-decoding-external-purchase-tokens.md).

## See Also

### Data types

- [requestIdentifier](requestidentifier.md): A UUID that uniquely identifies an external purchase report.
- [status](status.md): A string value you provide to indicate the status of the token and the contents of the external purchase report.
