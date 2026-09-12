> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/filter/brightness(_:)](https://developer.apple.com/documentation/swiftui/graphicscontext/filter/brightness(_:))

# brightness(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a filter that applies a brightness adjustment.

## Declaration

```swift
static func brightness(_ amount: Double) -> GraphicsContext.Filter
```

## Parameters

- `amount`: An amount to add to the pixel’s color components.

<a id="return-value"></a>

## Return Value

A filter that applies a brightness adjustment.

<a id="discussion"></a>

## Discussion

This filter is different than `brightness` filter primitive defined by the Scalable Vector Graphics (SVG) specification. You can obtain an effect like that filter using a [grayscale(\_:)](grayscale%28__%29.md) color multiply. However, this filter does match the [CIColorControls](https://developer.apple.com/documentation/coreimage/cicolorcontrols) filter’s brightness adjustment.

## See Also

### Changing brightness and contrast

- [contrast(\_:)](contrast%28__%29.md): Returns a filter that applies a contrast adjustment.
