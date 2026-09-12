> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/anycompositorcontent](https://developer.apple.com/documentation/swiftui/anycompositorcontent)

# AnyCompositorContent

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 26.0+

Type erased compositor content.

## Declaration

```swift
nonisolated struct AnyCompositorContent
```

## Topics

### Initializers

- [init(\_:)](anycompositorcontent/init%28__%29.md): Create an instance that type-erases `CompositorContent`.
- [init(erasing:)](anycompositorcontent/init%28erasing_%29.md)

## Relationships

### Conforms To

- [CompositorContent](compositorcontent.md)

## See Also

### Compositing views

- [blendMode(\_:)](view/blendmode%28__%29.md): Sets the blend mode for compositing this view with overlapping views.
- [compositingGroup()](view/compositinggroup%28%29.md): Wraps this view in a compositing group.
- [drawingGroup(opaque:colorMode:)](view/drawinggroup%28opaque_colormode_%29.md): Composites this view’s contents into an offscreen image before final display.
- [BlendMode](blendmode.md): Modes for compositing a view with overlapping content.
- [ColorRenderingMode](colorrenderingmode.md): The set of possible working color spaces for color-compositing operations.
- [CompositorContent](compositorcontent.md)
- [CompositorContentBuilder](compositorcontentbuilder.md): A result builder for composing a collection of [CompositorContent](compositorcontent.md) elements.
