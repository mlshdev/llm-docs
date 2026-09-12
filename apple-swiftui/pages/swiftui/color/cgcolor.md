> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/color/cgcolor](https://developer.apple.com/documentation/swiftui/color/cgcolor)

# cgColor

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 14.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 7.0+ (deprecated in 27.0)

A Core Graphics representation of the color, if available.

## Declaration

```swift
var cgColor: CGColor? { get }
```

<a id="discussion"></a>

## Discussion

You can get a [CGColor](https://developer.apple.com/documentation/coregraphics/cgcolor) instance from a constant SwiftUI color. This includes colors you create from a Core Graphics color, from RGB or HSB components, or from constant UIKit and AppKit colors.

For a dynamic color, like one you load from an Asset Catalog using [init(\_:bundle:)](init%28__bundle_%29.md), or one you create from a dynamic UIKit or AppKit color, this property is `nil`. To evaluate all types of colors, use the `resolve(in:)` method.
