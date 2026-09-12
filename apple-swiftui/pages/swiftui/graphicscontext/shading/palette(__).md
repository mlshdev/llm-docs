> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/shading/palette(_:)](https://developer.apple.com/documentation/swiftui/graphicscontext/shading/palette(_:))

# palette(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a multilevel shading instance constructed from an array of shading instances.

## Declaration

```swift
static func palette(_ array: [GraphicsContext.Shading]) -> GraphicsContext.Shading
```

## Parameters

- `array`: An array of shading instances. The array must contain at least one element.

<a id="return-value"></a>

## Return Value

A shading instance composed from the given instances.

## See Also

### Composite shading types

- [backdrop](backdrop.md): A shading instance that draws a copy of the current background.
