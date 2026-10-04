> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/hasmore

# hasMore

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

A Boolean value indicating whether the App Store has more data to return.

## Declaration

```
boolean hasMore
```

<a id="Discussion"></a>

## Discussion

This value is `true` if more results are available. Call the endpoint again, including the [revision](revision.md) or [paginationToken](paginationtoken.md) query parameter, to get the next set of results.

If this value is `false`, there aren’t any additional results.

The [hasMore](hasmore.md) value appears in responses to endpoints that provide paginated results, such as [NotificationHistoryResponse](notificationhistoryresponse.md), [HistoryResponse](historyresponse.md), [RefundHistoryResponse](refundhistoryresponse.md), and [GetGroupMembersResponse](getgroupmembersresponse.md).

## See Also

### Response data types

- [appAppleId](appappleid.md): The unique identifier of an app in the App Store.
- [bundleId](bundleid.md): The bundle identifier of an app.
- [environment](environment.md): The server environment, either sandbox or production.
- [revision](revision.md): A token you use in a query to request the next set of transactions for the customer.
- [JWSTransaction](jwstransaction.md): Transaction information signed by the App Store, in JSON Web Signature (JWS) Compact Serialization format.
