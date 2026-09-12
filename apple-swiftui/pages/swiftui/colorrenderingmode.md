> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/colorrenderingmode](https://developer.apple.com/documentation/swiftui/colorrenderingmode)

# ColorRenderingMode

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The set of possible working color spaces for color-compositing operations.

## Declaration

```swift
enum ColorRenderingMode
```

<a id="overview"></a>

## Overview

Each color space guarantees the preservation of a particular range of color values.

## Topics

### Getting rendering modes

- [ColorRenderingMode.extendedLinear](colorrenderingmode/extendedlinear.md): The extended linear sRGB working color space.
- [ColorRenderingMode.linear](colorrenderingmode/linear.md): The linear sRGB working color space.
- [ColorRenderingMode.nonLinear](colorrenderingmode/nonlinear.md): The non-linear sRGB working color space.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Compositing views

- [blendMode(\_:)](view/blendmode%28__%29.md): Sets the blend mode for compositing this view with overlapping views.
- [compositingGroup()](view/compositinggroup%28%29.md): Wraps this view in a compositing group.
- [drawingGroup(opaque:colorMode:)](view/drawinggroup%28opaque_colormode_%29.md): Composites this view’s contents into an offscreen image before final display.
- [BlendMode](blendmode.md): Modes for compositing a view with overlapping content.
- [CompositorContent](compositorcontent.md)
- [CompositorContentBuilder](compositorcontentbuilder.md): A result builder for composing a collection of [CompositorContent](compositorcontent.md) elements.
- [AnyCompositorContent](anycompositorcontent.md): Type erased compositor content.
