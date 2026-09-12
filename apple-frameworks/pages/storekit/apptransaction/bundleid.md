> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/apptransaction/bundleid](https://developer.apple.com/documentation/storekit/apptransaction/bundleid)

# bundleID

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The bundle identifier that the app transaction applies to.

## Declaration

```swift
let bundleID: String
```

<a id="Discussion"></a>

## Discussion

The [bundleID](bundleid.md) is the bundle identifier string that you entered in Xcode. For more information, see [What is a bundle ID?](https://help.apple.com/xcode/mac/current/#/deve70ea917b)

## See Also

### Getting app and version information

- [appVersion](appversion.md): The app version that the app transaction applies to.
- [originalAppVersion](originalappversion.md): The app version that the customer originally purchased from the App Store.
- [appID](appid.md): The unique identifier the App Store uses to identify the app.
- [appVersionID](appversionid.md): The number that the App Store uses to uniquely identify the version of the app.
