> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/draw(_:in:)](https://developer.apple.com/documentation/coregraphics/cgcontext/draw(_:in:))

# draw(\_:in:)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Draws the contents of a layer object into the specified rectangle.

## Declaration

```swift
func draw(_ layer: CGLayer, in rect: CGRect)
```

## Parameters

- `layer`: The layer whose contents you want to draw.
- `rect`: The rectangle, in current user space coordinates, to draw in.

<a id="Discussion"></a>

## Discussion

The contents are scaled, if necessary, to fit into the rectangle.

## See Also

### Drawing Core Graphics Layers

- [draw(\_:at:)](draw%28__at_%29.md): Draws the contents of a layer object at the specified point.
