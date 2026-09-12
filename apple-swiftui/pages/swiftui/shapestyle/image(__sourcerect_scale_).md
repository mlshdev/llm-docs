> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shapestyle/image(_:sourcerect:scale:)](https://developer.apple.com/documentation/swiftui/shapestyle/image(_:sourcerect:scale:))

# image(\_:sourceRect:scale:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A shape style that fills a shape by repeating a region of an image.

## Declaration

```swift
@export(implementation) static func image(_ image: Image, sourceRect: CGRect = CGRect(x: 0, y: 0, width: 1, height: 1), scale: CGFloat = 1) -> ImagePaint
```

## Parameters

- `image`: The image to be drawn.
- `sourceRect`: A unit-space rectangle defining how much of the source image to draw. The results are undefined if `sourceRect` selects areas outside the `[0, 1]` range in either axis.
- `scale`: A scale factor applied to the image during rendering.

<a id="discussion"></a>

## Discussion

For information about how to use shape styles, see [ShapeStyle](../shapestyle.md).
