> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/blendmode](https://developer.apple.com/documentation/swiftui/blendmode)

# BlendMode

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Modes for compositing a view with overlapping content.

## Declaration

```swift
enum BlendMode
```

## Topics

### Getting the default

- [BlendMode.normal](blendmode/normal.md)

### Darkening

- [BlendMode.darken](blendmode/darken.md)
- [BlendMode.multiply](blendmode/multiply.md)
- [BlendMode.colorBurn](blendmode/colorburn.md)
- [BlendMode.plusDarker](blendmode/plusdarker.md)

### Lightening

- [BlendMode.lighten](blendmode/lighten.md)
- [BlendMode.screen](blendmode/screen.md)
- [BlendMode.colorDodge](blendmode/colordodge.md)
- [BlendMode.plusLighter](blendmode/pluslighter.md)

### Adding contrast

- [BlendMode.overlay](blendmode/overlay.md)
- [BlendMode.softLight](blendmode/softlight.md)
- [BlendMode.hardLight](blendmode/hardlight.md)

### Inverting

- [BlendMode.difference](blendmode/difference.md)
- [BlendMode.exclusion](blendmode/exclusion.md)

### Mixing color components

- [BlendMode.hue](blendmode/hue.md)
- [BlendMode.saturation](blendmode/saturation.md)
- [BlendMode.color](blendmode/color.md)
- [BlendMode.luminosity](blendmode/luminosity.md)

### Accessing Porter-Duff modes

- [BlendMode.sourceAtop](blendmode/sourceatop.md)
- [BlendMode.destinationOver](blendmode/destinationover.md)
- [BlendMode.destinationOut](blendmode/destinationout.md)

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
- [ColorRenderingMode](colorrenderingmode.md): The set of possible working color spaces for color-compositing operations.
- [CompositorContent](compositorcontent.md)
- [CompositorContentBuilder](compositorcontentbuilder.md): A result builder for composing a collection of [CompositorContent](compositorcontent.md) elements.
- [AnyCompositorContent](anycompositorcontent.md): Type erased compositor content.
