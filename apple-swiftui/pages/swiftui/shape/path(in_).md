> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/shape/path(in:)

# path(in:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Describes this shape as a path within a rectangular frame of reference.

## Declaration

```swift
nonisolated func path(in rect: CGRect) -> Path
```

## Parameters

- `rect`: The frame of reference for describing this shape.

<a id="return-value"></a>

## Return Value

A path that describes this shape.

## See Also

### Defining a shape’s size and path

- [sizeThatFits(\_:)](sizethatfits%28__%29.md): Returns the size of the view that will render the shape, given a proposed size.
