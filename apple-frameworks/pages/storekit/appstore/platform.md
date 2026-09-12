> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/appstore/platform](https://developer.apple.com/documentation/storekit/appstore/platform)

# AppStore.Platform

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Values that represent Apple platforms.

## Declaration

```swift
struct Platform
```

<a id="Discussion"></a>

## Discussion

You choose a platform for your app when you add the new app in App Store Connect. For more information, see [Add a new app](https://developer.apple.com/help/app-store-connect/create-an-app-record/add-a-new-app/).

The platform values in `AppStore.Platform` are the same as those in App Store Connect.

## Topics

### Getting platform values

- [iOS](platform/ios.md): A value that indicates the iOS platform.
- [macOS](platform/macos.md): A value that indicates the macOS platform.
- [tvOS](platform/tvos.md): A value that indicates the tvOS platform.
- [visionOS](platform/visionos.md): A value that indicates the visionOS platform.

### Type Properties

- [managed](platform/managed.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the original platform

- [originalPlatform](../apptransaction/originalplatform.md): The platform on which the customer originally purchased the app.
