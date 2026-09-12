> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/apptransaction/originalappversion](https://developer.apple.com/documentation/storekit/apptransaction/originalappversion)

# originalAppVersion

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The app version that the customer originally purchased from the App Store.

## Declaration

```swift
let originalAppVersion: String
```

## Mentioned In

- [Supporting business model changes by using the app transaction](../supporting-business-model-changes-by-using-the-app-transaction.md)

<a id="Discussion"></a>

## Discussion

Use this value to determine which app version the customer first purchased or downloaded. This value is comparable to the [appVersion](appversion.md) value.

The [originalAppVersion](originalappversion.md) remains constant and doesn’t change when the customer upgrades the app. The string value contains the original value of the [CFBundleShortVersionString](../../bundleresources/information-property-list/cfbundleshortversionstring.md) for apps running in macOS, and the original value of the [CFBundleVersion](../../bundleresources/information-property-list/cfbundleversion.md) for apps running on all other platforms.

In the sandbox testing environment, the [originalAppVersion](originalappversion.md) value is always `1.0`.

For more information about using the [originalAppVersion](originalappversion.md), see [Supporting business model changes by using the app transaction](../supporting-business-model-changes-by-using-the-app-transaction.md).

## See Also

### Getting app and version information

- [bundleID](bundleid.md): The bundle identifier that the app transaction applies to.
- [appVersion](appversion.md): The app version that the app transaction applies to.
- [appID](appid.md): The unique identifier the App Store uses to identify the app.
- [appVersionID](appversionid.md): The number that the App Store uses to uniquely identify the version of the app.
