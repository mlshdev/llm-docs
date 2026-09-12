> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/gradientoptions/mirror](https://developer.apple.com/documentation/swiftui/graphicscontext/gradientoptions/mirror)

# mirror

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An option that repeats the gradient outside its nominal range, reflecting every other instance.

## Declaration

```swift
static var mirror: GraphicsContext.GradientOptions { get }
```

<a id="discussion"></a>

## Discussion

Use this option to cause the gradient to repeat its pattern in areas that exceed the bounds of its start and end points. The repetitions alternately reverse the start and end points, producing a pattern like `0 -> 1`, `1 -> 0`, `0 -> 1`, and so on.

Without either this option or [repeat](repeat.md), the gradient stops at the end of its range. This option takes precendence if you set both this one and [repeat](repeat.md).

## See Also

### Getting gradient options

- [linearColor](linearcolor.md): An option that interpolates between colors in a linear color space.
- [repeat](repeat.md): An option that repeats the gradient outside its nominal range.
