> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/environment](https://developer.apple.com/documentation/appstoreserverapi/environment)

# environment

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

The server environment, either sandbox or production.

## Declaration

```
string environment
```

## Possible Values

- `Sandbox`: Indicates that the data applies to testing in the sandbox environment.
- `Production`: Indicates that the data applies to the production environment.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

You receive data from the [App Store Server API](../appstoreserverapi.md) for the sandbox environment when you send test requests to the endpoints using the sandbox base URL:

```javascript
https://api.storekit-sandbox.apple.com/
```

## See Also

### Response data types

- [appAppleId](appappleid.md): The unique identifier of an app in the App Store.
- [bundleId](bundleid.md): The bundle identifier of an app.
- [hasMore](hasmore.md): A Boolean value indicating whether the App Store has more transaction data.
- [revision](revision.md): A token you use in a query to request the next set of transactions for the customer.
- [JWSTransaction](jwstransaction.md): Transaction information signed by the App Store, in JSON Web Signature (JWS) Compact Serialization format.
