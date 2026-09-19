> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paperkit/shapemarkup/shape-swift.enum/chatbubble(taillocation:tailangle:)

# chatBubble(tailLocation:tailAngle:)

**Framework:** PaperKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A speech bubble with a tail pointing to a specific location.

## Declaration

```swift
static func chatBubble(tailLocation: CGPoint, tailAngle: CGFloat) -> ShapeMarkup.Shape
```

## Parameters

- `tailLocation`: The position of the tail tip in unit coordinate space.
- `tailAngle`: The angle of the tail in radians.
