> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/filter/contrast(_:)](https://developer.apple.com/documentation/swiftui/graphicscontext/filter/contrast(_:))

# contrast(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a filter that applies a contrast adjustment.

## Declaration

```swift
static func contrast(_ amount: Double) -> GraphicsContext.Filter
```

## Parameters

- `amount`: An amount to adjust the contrast. A value of zero leaves the result completely gray. A value of one leaves the result unchanged. You can use values greater than one.

<a id="return-value"></a>

## Return Value

A filter that applies a contrast adjustment.

<a id="discussion"></a>

## Discussion

This filter is equivalent to the `contrast` filter primitive defined by the Scalable Vector Graphics (SVG) specification.

## See Also

### Changing brightness and contrast

- [brightness(\_:)](brightness%28__%29.md): Returns a filter that applies a brightness adjustment.
