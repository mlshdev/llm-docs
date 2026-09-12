> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nshostingscenebridgingoptions](https://developer.apple.com/documentation/swiftui/nshostingscenebridgingoptions)

# NSHostingSceneBridgingOptions

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 14.0+

Options for how hosting views and controllers manage aspects of the associated window.

## Declaration

```swift
struct NSHostingSceneBridgingOptions
```

## Topics

### Geting bridging options

- [all](nshostingscenebridgingoptions/all.md): The hosting view’s associated window will have both its title bars and toolbars populated with values from their respective modifiers.
- [title](nshostingscenebridgingoptions/title.md): The hosting view’s associated window will have its title and subtitle populated with the values provided to the `navigationTitle(_:)` and `navigationSubtitle(_:)` modifiers, respectively.
- [toolbars](nshostingscenebridgingoptions/toolbars.md): The hosting view’s associated window will have its toolbar populated with any items provided to the `toolbar(content:)` modifier.

### Creating a bridging options

- [init(rawValue:)](nshostingscenebridgingoptions/init%28rawvalue_%29.md): Creates a new set from a raw value.
- [rawValue](nshostingscenebridgingoptions/rawvalue.md): The raw value.

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
- [NSHostingSizingOptions](nshostingsizingoptions.md): Options for how hosting views and controllers reflect their content’s size into Auto Layout constraints.
- [NSHostingSceneRepresentation](nshostingscenerepresentation.md): An AppKit type that hosts and can present SwiftUI scenes
