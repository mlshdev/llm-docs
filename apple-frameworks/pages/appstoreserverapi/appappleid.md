> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/appappleid

# appAppleId

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

The unique identifier of an app in the App Store.

## Declaration

```
int64 appAppleId
```

## See Also

### Response data types

- [bundleId](bundleid.md): The bundle identifier of an app.
- [environment](environment.md): The server environment, either sandbox or production.
- [hasMore](hasmore.md): A Boolean value indicating whether the App Store has more transaction data.
- [revision](revision.md): A token you use in a query to request the next set of transactions for the customer.
- [JWSTransaction](jwstransaction.md): Transaction information signed by the App Store, in JSON Web Signature (JWS) Compact Serialization format.
