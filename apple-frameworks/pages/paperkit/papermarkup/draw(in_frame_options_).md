> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkup/draw(in:frame:options:)](https://developer.apple.com/documentation/paperkit/papermarkup/draw(in:frame:options:))

# draw(in:frame:options:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Draws the entire paper contents in the specified rectangle.

## Declaration

```swift
nonisolated(nonsending) func draw(in context: CGContext, frame: CGRect, options: RenderingOptions = RenderingOptions()) async
```

## Parameters

- `context`: The graphics context to render into.
- `frame`: The rectangle (in the coordinate system of the graphics context) in which to draw the paper.
- `options`: The rendering options.

<a id="discussion"></a>

## Discussion

To draw a cropped portion of a paper data model, modify the `bounds` of the paper being drawn.
