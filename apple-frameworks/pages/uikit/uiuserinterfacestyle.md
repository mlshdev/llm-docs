> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiuserinterfacestyle](https://developer.apple.com/documentation/uikit/uiuserinterfacestyle)

# UIUserInterfaceStyle (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Constants that indicate the interface style for the app.

## Declaration

```swift
enum UIUserInterfaceStyle
```

## Topics

### Interface styles

- [UIUserInterfaceStyle.unspecified](uiuserinterfacestyle/unspecified.md): An unspecified interface style.
- [UIUserInterfaceStyle.light](uiuserinterfacestyle/light.md): The light interface style.
- [UIUserInterfaceStyle.dark](uiuserinterfacestyle/dark.md): The dark interface style.

### Initializers

- [init(\_:)](uiuserinterfacestyle/init%28__%29.md): Creates a user interface style from the specified SwiftUI color scheme.
- [init(rawValue:)](uiuserinterfacestyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Adjusting the interface style

- [overrideUserInterfaceStyle](uiviewcontroller/overrideuserinterfacestyle.md): The user interface style adopted by the view controller and all of its children.
- [preferredUserInterfaceStyle](uiviewcontroller/preferreduserinterfacestyle.md): The preferred interface style for this view controller.
- [childViewControllerForUserInterfaceStyle](uiviewcontroller/childviewcontrollerforuserinterfacestyle.md): The child view controller that supports the preferred user interface style.
- [setNeedsUserInterfaceAppearanceUpdate()](uiviewcontroller/setneedsuserinterfaceappearanceupdate%28%29.md): Notifies the view controller that a change occurred that might affect the preferred interface style.

# UIUserInterfaceStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Constants that indicate the interface style for the app.

## Declaration

```objectivec
enum UIUserInterfaceStyle : NSInteger;
```

## Topics

### Interface styles

- [UIUserInterfaceStyleUnspecified](uiuserinterfacestyle/unspecified.md): An unspecified interface style.
- [UIUserInterfaceStyleLight](uiuserinterfacestyle/light.md): The light interface style.
- [UIUserInterfaceStyleDark](uiuserinterfacestyle/dark.md): The dark interface style.

## See Also

### Adjusting the interface style

- [overrideUserInterfaceStyle](uiviewcontroller/overrideuserinterfacestyle.md): The user interface style adopted by the view controller and all of its children.
- [preferredUserInterfaceStyle](uiviewcontroller/preferreduserinterfacestyle.md): The preferred interface style for this view controller.
- [childViewControllerForUserInterfaceStyle](uiviewcontroller/childviewcontrollerforuserinterfacestyle.md): The child view controller that supports the preferred user interface style.
- [setNeedsUserInterfaceAppearanceUpdate](uiviewcontroller/setneedsuserinterfaceappearanceupdate%28%29.md): Notifies the view controller that a change occurred that might affect the preferred interface style.
