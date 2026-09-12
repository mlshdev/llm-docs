> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/clampablewithinrectprotocol/clamp(to:)](https://developer.apple.com/documentation/spatial/clampablewithinrectprotocol/clamp(to:))

# clamp(to:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Clamps the mutable entity to the specified rectangle.

## Declaration

```swift
mutating func clamp(to rect: Self.Rect)
```

## Parameters

- `rect`: The rectangle that defines the clamp volume.

## Default Implementations

### ClampableWithinRectProtocol Implementations

- [clamp(to:)](clamp%28to_%29-1rlb7.md): Conforms when `Scalar` is `Float`. Clamps the mutable point to the specified rectangle.
