> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/preorderdate](https://developer.apple.com/documentation/appstoreserverapi/preorderdate)

# preorderDate

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.17+

The date a customer places an order for the app before it’s available in the App Store, expressed in UNIX time, in milliseconds.

## Declaration

```
timestamp preorderDate
```

<a id="Discussion"></a>

## Discussion

For more information, see [JWSAppTransactionDecodedPayload](jwsapptransactiondecodedpayload.md).

## See Also

### App information

- [appAppleId](appappleid.md): The unique identifier of an app in the App Store.
- [bundleId](bundleid.md): The bundle identifier of an app.
- [originalApplicationVersion](originalapplicationversion.md): The app version that the customer originally purchased from the App Store.
- [originalPlatform](originalplatform.md): The platform on which a customer originally purchases an app.
