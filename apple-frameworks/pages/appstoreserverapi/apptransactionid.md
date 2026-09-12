> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/apptransactionid](https://developer.apple.com/documentation/appstoreserverapi/apptransactionid)

# appTransactionId

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.15+

The unique identifier of the app download transaction.

## Declaration

```
string appTransactionId
```

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

To get app transaction information, call [Get App Transaction Info](get-app-transaction-info.md) and provide the `appTransactionId`.

For more information, see [appTransactionID](../storekit/apptransaction/apptransactionid.md).
