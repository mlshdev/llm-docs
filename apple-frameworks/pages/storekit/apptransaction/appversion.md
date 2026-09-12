> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/apptransaction/appversion](https://developer.apple.com/documentation/storekit/apptransaction/appversion)

# appVersion

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The app version that the app transaction applies to.

## Declaration

```swift
let appVersion: String
```

<a id="Discussion"></a>

## Discussion

This value is the version string you entered in Xcode. This value is a machine-readable string composed of one to three period-separated integers, such as `10.4.1`.

## See Also

### Getting app and version information

- [bundleID](bundleid.md): The bundle identifier that the app transaction applies to.
- [originalAppVersion](originalappversion.md): The app version that the customer originally purchased from the App Store.
- [appID](appid.md): The unique identifier the App Store uses to identify the app.
- [appVersionID](appversionid.md): The number that the App Store uses to uniquely identify the version of the app.
