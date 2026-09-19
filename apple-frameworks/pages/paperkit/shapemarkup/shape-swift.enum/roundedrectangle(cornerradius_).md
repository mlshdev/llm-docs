> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paperkit/shapemarkup/shape-swift.enum/roundedrectangle(cornerradius:)

# roundedRectangle(cornerRadius:)

**Framework:** PaperKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A rectangle with rounded corners.

## Declaration

```swift
static func roundedRectangle(cornerRadius: CGFloat) -> ShapeMarkup.Shape
```

## Parameters

- `cornerRadius`: The corner radius in unit coordinate space (0.0 to 1.0). A value of `0.1` represents 10% of the minimum dimension of the shape.
