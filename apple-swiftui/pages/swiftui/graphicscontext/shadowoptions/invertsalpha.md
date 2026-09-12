> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/shadowoptions/invertsalpha](https://developer.apple.com/documentation/swiftui/graphicscontext/shadowoptions/invertsalpha)

# invertsAlpha

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An option that causes the filter to invert the alpha of the shadow.

## Declaration

```swift
static var invertsAlpha: GraphicsContext.ShadowOptions { get }
```

<a id="discussion"></a>

## Discussion

You can create an “inner shadow” effect by combining this option with [shadowAbove](shadowabove.md) and using the [sourceAtop](../blendmode-swift.struct/sourceatop.md) blend mode.

## See Also

### Getting shadow options

- [disablesGroup](disablesgroup.md): An option that causes the filter to composite the object and its shadow separately in the current layer.
- [shadowAbove](shadowabove.md): An option that causes the filter to draw the shadow above the object, rather than below it.
- [shadowOnly](shadowonly.md): An option that causes the filter to draw only the shadow, and omit the source object.
