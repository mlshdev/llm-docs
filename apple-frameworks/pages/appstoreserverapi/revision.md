> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/revision](https://developer.apple.com/documentation/appstoreserverapi/revision)

# revision

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

A token you use in a query to request the next set of transactions for the customer.

## Declaration

```
string revision
```

<a id="Discussion"></a>

## Discussion

The App Store server returns a `revision` value in each response to certain endpoints, such as [Get Transaction History](get-transaction-history.md) and [Get Refund History](get-refund-history.md). Use the `revision` value to get a set of paginated transactions.

The first time you call an endpoint, you don’t include a `revision` query parameter, and the API returns the customer’s first set of up to 20 transactions. If there are more transactions, the [hasMore](hasmore.md) value in the response is `true`. To get the next set of transactions, use the [revision](revision.md) value from the response in your subsequent call to the endpoint.

Consider storing the `revision` value from the last page of transactions, when the [hasMore](hasmore.md) value is `false`, with other customer account information.  Use it the next time you call the endpoint for the same customer, to avoid fetching transactions you’ve already received. For the [Get Transaction History](get-transaction-history.md) endpoint, store the `revision` value only if you request the transaction history in `ASCENDING` sort order.

## See Also

### Response data types

- [appAppleId](appappleid.md): The unique identifier of an app in the App Store.
- [bundleId](bundleid.md): The bundle identifier of an app.
- [environment](environment.md): The server environment, either sandbox or production.
- [hasMore](hasmore.md): A Boolean value indicating whether the App Store has more transaction data.
- [JWSTransaction](jwstransaction.md): Transaction information signed by the App Store, in JSON Web Signature (JWS) Compact Serialization format.
