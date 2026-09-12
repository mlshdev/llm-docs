> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/shading/style(_:)](https://developer.apple.com/documentation/swiftui/graphicscontext/shading/style(_:))

# style(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a shading instance that fills with the given shape style.

## Declaration

```swift
static func style<S>(_ style: S) -> GraphicsContext.Shading where S : ShapeStyle
```

## Parameters

- `style`: A [ShapeStyle](../../shapestyle.md) instance to draw with.

<a id="return-value"></a>

## Return Value

A shading instance filled with a shape style.

<a id="discussion"></a>

## Discussion

Styles with geometry defined in a unit coordinate space map that space to the rectangle associated with the drawn object. You can adjust that using the [in(\_:)](../../shapestyle/in%28__%29.md) method. The shape style might affect the blend mode and opacity of the drawn object.

## See Also

### Other shape styles

- [foreground](foreground.md): A shading instance that fills with the foreground style from the graphics context’s environment.
