> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/compositorcontentbuilder](https://developer.apple.com/documentation/swiftui/compositorcontentbuilder)

# CompositorContentBuilder

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 26.0+

A result builder for composing a collection of [CompositorContent](compositorcontent.md) elements.

## Declaration

```swift
@resultBuilder struct CompositorContentBuilder
```

## Topics

### Structures

- [CompositorContentBuilder.Content](compositorcontentbuilder/content.md): A representation of the content of a compositor content builder.

### Type Methods

- [buildBlock(\_:)](compositorcontentbuilder/buildblock%28__%29.md)
- [buildEither(first:)](compositorcontentbuilder/buildeither%28first_%29.md): Produces content for a conditional statement in a multi-statement closure when the condition is true.
- [buildEither(second:)](compositorcontentbuilder/buildeither%28second_%29.md): Produces content for a conditional statement in a multi-statement closure when the condition is false.
- [buildExpression(\_:)](compositorcontentbuilder/buildexpression%28__%29.md)
- [buildLimitedAvailability(\_:)](compositorcontentbuilder/buildlimitedavailability%28__%29.md): Processes scene content for a conditional compiler-control statement that performs an availability check.

## See Also

### Compositing views

- [blendMode(\_:)](view/blendmode%28__%29.md): Sets the blend mode for compositing this view with overlapping views.
- [compositingGroup()](view/compositinggroup%28%29.md): Wraps this view in a compositing group.
- [drawingGroup(opaque:colorMode:)](view/drawinggroup%28opaque_colormode_%29.md): Composites this view’s contents into an offscreen image before final display.
- [BlendMode](blendmode.md): Modes for compositing a view with overlapping content.
- [ColorRenderingMode](colorrenderingmode.md): The set of possible working color spaces for color-compositing operations.
- [CompositorContent](compositorcontent.md)
- [AnyCompositorContent](anycompositorcontent.md): Type erased compositor content.
