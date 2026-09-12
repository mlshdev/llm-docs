> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/filter/luminancetoalpha](https://developer.apple.com/documentation/swiftui/graphicscontext/filter/luminancetoalpha)

# luminanceToAlpha

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a filter that sets the opacity of each pixel based on its luminance.

## Declaration

```swift
static var luminanceToAlpha: GraphicsContext.Filter { get }
```

<a id="return-value"></a>

## Return Value

A filter that applies a luminance to alpha transformation.

<a id="discussion"></a>

## Discussion

The filter computes the luminance of each pixel and uses it to define the opacity of the result, combined with black (zero) color components.

## See Also

### Adjusting opacity

- [alphaThreshold(min:max:color:)](alphathreshold%28min_max_color_%29.md): Returns a filter that replaces each pixel with alpha components within a range by a constant color, or transparency otherwise.
