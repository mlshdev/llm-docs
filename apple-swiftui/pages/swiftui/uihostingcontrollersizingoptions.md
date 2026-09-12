> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uihostingcontrollersizingoptions](https://developer.apple.com/documentation/swiftui/uihostingcontrollersizingoptions)

# UIHostingControllerSizingOptions

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Options for how a hosting controller tracks its content’s size.

## Declaration

```swift
struct UIHostingControllerSizingOptions
```

## Topics

### Getting sizing options

- [intrinsicContentSize](uihostingcontrollersizingoptions/intrinsiccontentsize.md): The hosting controller’s view automatically invalidate its intrinsic content size when its ideal size changes.
- [preferredContentSize](uihostingcontrollersizingoptions/preferredcontentsize.md): The hosting controller tracks its content’s ideal size in its preferred content size.

### Creating a sizing option

- [init(rawValue:)](uihostingcontrollersizingoptions/init%28rawvalue_%29.md): Creates a new option set from a raw value.
- [rawValue](uihostingcontrollersizingoptions/rawvalue.md): The raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Displaying SwiftUI views in UIKit

- [Using SwiftUI with UIKit](https://developer.apple.com/documentation/uikit/using-swiftui-with-uikit): Learn how to incorporate SwiftUI views into a UIKit app.
- [Unifying your app’s animations](unifying-your-app-s-animations.md): Create a consistent UI animation experience across SwiftUI, UIKit, and AppKit.
- [UIHostingController](uihostingcontroller.md): A UIKit view controller that manages a SwiftUI view hierarchy.
- [UIHostingConfiguration](uihostingconfiguration.md): A content configuration suitable for hosting a hierarchy of SwiftUI views.
- [UIHostingSceneDelegate](uihostingscenedelegate.md): Extends `UIKit/UISceneDelegate` to bridge SwiftUI scenes.
