> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gradient/colorspace(_:)](https://developer.apple.com/documentation/swiftui/gradient/colorspace(_:))

# colorSpace(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a version of the gradient that will use a specified color space for interpolating between its colors.

## Declaration

```swift
func colorSpace(_ space: Gradient.ColorSpace) -> AnyGradient
```

## Parameters

- `space`: The color space the new gradient will use to interpolate its constituent colors.

<a id="return-value"></a>

## Return Value

A new gradient that interpolates its colors in the specified color space.

<a id="discussion"></a>

## Discussion

```swift
Rectangle().fill(.linearGradient(
    colors: [.white, .blue]).colorSpace(.perceptual))
```

## See Also

### Working with color spaces

- [Gradient.ColorSpace](colorspace.md): A method of interpolating between the colors in a gradient.
