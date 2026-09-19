> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/clampablewithinrectprotocol/clamped(to:)

# clamped(to:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the entity with coordinates clamped to the specified rectangle.

## Declaration

```swift
func clamped(to rect: Self.Rect) -> Self
```

## Parameters

- `rect`: The rectangle that defines the clamp volume.

<a id="discussion"></a>

## Discussion

- Returns An entity that’s clamped to the specified rectangle.
