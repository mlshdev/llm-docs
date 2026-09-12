> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/gradientoptions/repeat](https://developer.apple.com/documentation/swiftui/graphicscontext/gradientoptions/repeat)

# repeat

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An option that repeats the gradient outside its nominal range.

## Declaration

```swift
static var `repeat`: GraphicsContext.GradientOptions { get }
```

<a id="discussion"></a>

## Discussion

Use this option to cause the gradient to repeat its pattern in areas that exceed the bounds of its start and end points. The repetitions use the same start and end value for each repetition.

Without this option or [mirror](mirror.md), the gradient stops at the end of its range. The [mirror](mirror.md) option takes precendence if you set both this one and that one.

## See Also

### Getting gradient options

- [linearColor](linearcolor.md): An option that interpolates between colors in a linear color space.
- [mirror](mirror.md): An option that repeats the gradient outside its nominal range, reflecting every other instance.
