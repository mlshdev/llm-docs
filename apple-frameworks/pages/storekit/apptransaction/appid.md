> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/apptransaction/appid](https://developer.apple.com/documentation/storekit/apptransaction/appid)

# appID

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The unique identifier the App Store uses to identify the app.

## Declaration

```swift
let appID: UInt64?
```

<a id="Discussion"></a>

## Discussion

The App Store assigns this value. This value is the app’s Apple ID in App Store Connect. In the [sandbox](../appstore/environment/sandbox.md) and [xcode](../appstore/environment/xcode.md) environments, this value is `nil`.

## See Also

### Getting app and version information

- [bundleID](bundleid.md): The bundle identifier that the app transaction applies to.
- [appVersion](appversion.md): The app version that the app transaction applies to.
- [originalAppVersion](originalappversion.md): The app version that the customer originally purchased from the App Store.
- [appVersionID](appversionid.md): The number that the App Store uses to uniquely identify the version of the app.
