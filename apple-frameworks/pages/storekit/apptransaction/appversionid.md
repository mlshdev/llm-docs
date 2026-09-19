> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/apptransaction/appversionid

# appVersionID

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The number that the App Store uses to uniquely identify the version of the app.

## Declaration

```swift
let appVersionID: UInt64?
```

<a id="Discussion"></a>

## Discussion

The App Store assigns this value. In the [sandbox](../appstore/environment/sandbox.md) and [xcode](../appstore/environment/xcode.md) environments, this value is `nil`.

## See Also

### Getting app and version information

- [bundleID](bundleid.md): The bundle identifier that the app transaction applies to.
- [appVersion](appversion.md): The app version that the app transaction applies to.
- [originalAppVersion](originalappversion.md): The app version that the customer originally purchased from the App Store.
- [appID](appid.md): The unique identifier the App Store uses to identify the app.
