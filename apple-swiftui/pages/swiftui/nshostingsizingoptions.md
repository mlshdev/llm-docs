> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nshostingsizingoptions](https://developer.apple.com/documentation/swiftui/nshostingsizingoptions)

# NSHostingSizingOptions

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 13.0+

Options for how hosting views and controllers reflect their content’s size into Auto Layout constraints.

## Declaration

```swift
struct NSHostingSizingOptions
```

## Topics

### Geting sizing options

- [intrinsicContentSize](nshostingsizingoptions/intrinsiccontentsize.md): The hosting view creates and updates constraints that represent its content’s ideal size. These constraints in turn influence the hosting view’s `intrinsicContentSize`.
- [maxSize](nshostingsizingoptions/maxsize.md): The hosting view creates and updates constraints that represent its content’s maximum size.
- [minSize](nshostingsizingoptions/minsize.md): The hosting view creates and updates constraints that represent its content’s minimum size.
- [preferredContentSize](nshostingsizingoptions/preferredcontentsize.md): The hosting controller creates and updates constraints that represent its content’s ideal size. These constraints in turn influence the hosting controller’s `preferredContentSize`.
- [standardBounds](nshostingsizingoptions/standardbounds.md): The hosting view creates constraints for its minimum, ideal, and maximum sizes.

### Creating a sizing option

- [init(rawValue:)](nshostingsizingoptions/init%28rawvalue_%29.md): Creates a new options from a raw value.
- [rawValue](nshostingsizingoptions/rawvalue.md): The raw value.

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

### Displaying SwiftUI views in AppKit

- [Unifying your app’s animations](unifying-your-app-s-animations.md): Create a consistent UI animation experience across SwiftUI, UIKit, and AppKit.
- [NSHostingController](nshostingcontroller.md): An AppKit view controller that hosts SwiftUI view hierarchy.
- [NSHostingView](nshostingview.md): An AppKit view that hosts a SwiftUI view hierarchy.
- [NSHostingMenu](nshostingmenu.md): An AppKit menu with menu items that are defined by a SwiftUI View.
- [NSHostingSceneRepresentation](nshostingscenerepresentation.md): An AppKit type that hosts and can present SwiftUI scenes
- [NSHostingSceneBridgingOptions](nshostingscenebridgingoptions.md): Options for how hosting views and controllers manage aspects of the associated window.
