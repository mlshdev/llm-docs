> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiuserinterfaceidiom](https://developer.apple.com/documentation/uikit/uiuserinterfaceidiom)

# UIUserInterfaceIdiom (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that indicate the interface type for the device or an object that has a trait environment, such as a view and view controller.

## Declaration

```swift
enum UIUserInterfaceIdiom
```

## Topics

### Idioms

- [UIUserInterfaceIdiom.unspecified](uiuserinterfaceidiom/unspecified.md): An unspecified idiom.
- [UIUserInterfaceIdiom.phone](uiuserinterfaceidiom/phone.md): An interface designed for iPhone and iPod touch.
- [UIUserInterfaceIdiom.pad](uiuserinterfaceidiom/pad.md): An interface designed for iPad.
- [UIUserInterfaceIdiom.tv](uiuserinterfaceidiom/tv.md): An interface designed for tvOS and Apple TV.
- [UIUserInterfaceIdiom.carPlay](uiuserinterfaceidiom/carplay.md): An interface designed for an in-car experience.
- [UIUserInterfaceIdiom.mac](uiuserinterfaceidiom/mac.md): An interface designed for the Mac.
- [UIUserInterfaceIdiom.vision](uiuserinterfaceidiom/vision.md): An interface designed for visionOS and Apple Vision Pro.

### Initializers

- [init(rawValue:)](uiuserinterfaceidiom/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the current idiom

- [UI_USER_INTERFACE_IDIOM()](ui_user_interface_idiom%28%29.md): Deprecated. Returns the interface idiom supported by the current device (recommended for apps that run in versions of iOS earlier than 3.2).

# UIUserInterfaceIdiom (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that indicate the interface type for the device or an object that has a trait environment, such as a view and view controller.

## Declaration

```objectivec
enum UIUserInterfaceIdiom : NSInteger;
```

## Topics

### Idioms

- [UIUserInterfaceIdiomUnspecified](uiuserinterfaceidiom/unspecified.md): An unspecified idiom.
- [UIUserInterfaceIdiomPhone](uiuserinterfaceidiom/phone.md): An interface designed for iPhone and iPod touch.
- [UIUserInterfaceIdiomPad](uiuserinterfaceidiom/pad.md): An interface designed for iPad.
- [UIUserInterfaceIdiomTV](uiuserinterfaceidiom/tv.md): An interface designed for tvOS and Apple TV.
- [UIUserInterfaceIdiomCarPlay](uiuserinterfaceidiom/carplay.md): An interface designed for an in-car experience.
- [UIUserInterfaceIdiomMac](uiuserinterfaceidiom/mac.md): An interface designed for the Mac.
- [UIUserInterfaceIdiomVision](uiuserinterfaceidiom/vision.md): An interface designed for visionOS and Apple Vision Pro.

## See Also

### Getting the current idiom

- [UI_USER_INTERFACE_IDIOM](ui_user_interface_idiom%28%29.md): Deprecated. Returns the interface idiom supported by the current device (recommended for apps that run in versions of iOS earlier than 3.2).
