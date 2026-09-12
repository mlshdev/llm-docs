> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/originalplatform](https://developer.apple.com/documentation/appstoreserverapi/originalplatform)

# originalPlatform

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.17+

The platform on which a customer originally purchases an app.

## Declaration

```
string originalPlatform
```

## Possible Values

- `macOS`:
- `iOS`:
- `tvOS`:
- `visionOS`:

## See Also

### App information

- [appAppleId](appappleid.md): The unique identifier of an app in the App Store.
- [bundleId](bundleid.md): The bundle identifier of an app.
- [originalApplicationVersion](originalapplicationversion.md): The app version that the customer originally purchased from the App Store.
- [preorderDate](preorderdate.md): The date a customer places an order for the app before it’s available in the App Store, expressed in UNIX time, in milliseconds.
