> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/paginationtoken](https://developer.apple.com/documentation/appstoreserverapi/paginationtoken)

# paginationToken

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.5+

A pagination token that you return to the endpoint on a subsequent call to receive the next set of results.

## Declaration

```
string paginationToken
```

<a id="Discussion"></a>

## Discussion

A token you use in the [Get Notification History](get-notification-history.md) endpoint to ask for the next set of up to 20 notification history entries. All responses include a `paginationToken`.

## See Also

### Data types

- [hasMore](hasmore.md): A Boolean value indicating whether the App Store has more transaction data.
