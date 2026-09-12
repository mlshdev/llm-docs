> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/clipoptions](https://developer.apple.com/documentation/swiftui/graphicscontext/clipoptions)

# GraphicsContext.ClipOptions

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Options that affect the use of clip shapes.

## Declaration

```swift
@frozen struct ClipOptions
```

<a id="overview"></a>

## Overview

Use these options to affect how SwiftUI interprets a clip shape when you call [clip(to:style:options:)](clip%28to_style_options_%29.md) to add a path to the array of clip shapes, or when you call [clipToLayer(opacity:options:content:)](cliptolayer%28opacity_options_content_%29.md) to add a clipping layer.

## Topics

### Getting clip options

- [inverse](clipoptions/inverse.md): An option to invert the shape or layer alpha as the clip mask.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Masking

- [clip(to:style:options:)](clip%28to_style_options_%29.md): Adds a path to the context’s array of clip shapes.
- [clipToLayer(opacity:options:content:)](cliptolayer%28opacity_options_content_%29.md): Adds a clip shape that you define in a new layer to the context’s array of clip shapes.
- [clipBoundingRect](clipboundingrect.md): The bounding rectangle of the intersection of all current clip shapes in the current user space.
