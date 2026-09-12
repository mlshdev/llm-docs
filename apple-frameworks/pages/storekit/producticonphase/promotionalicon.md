> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/producticonphase/promotionalicon](https://developer.apple.com/documentation/storekit/producticonphase/promotionalicon)

# promotionalIcon

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The promotional image, if the loading task is successful.

## Declaration

```swift
var promotionalIcon: Image? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` while the image is loading, or if the system can’t access the promotional image for any reason. Use this value as a convenience to access the image in code that doesn’t depend on the reason an image may not be accessible.

For information about setting up promotional images, see [Promote in-app purchases](https://developer.apple.com/help/app-store-connect/configure-in-app-purchase-settings/promote-in-app-purchases).
