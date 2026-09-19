> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paperkit/shapemarkup/shape-swift.enum/line/init(start:control:end:)

# init(start:control:end:)

**Framework:** PaperKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Create a new quadratic Bézier curve line.

## Declaration

```swift
init(start: CGPoint, control: CGPoint? = nil, end: CGPoint)
```

## Parameters

- `start`: The starting point in unit coordinate space.
- `control`: The control point that defines the curve in unit coordinate space. Defaults to `nil` which creates a straight line without a middle control point.
- `end`: The ending point in unit coordinate space.
