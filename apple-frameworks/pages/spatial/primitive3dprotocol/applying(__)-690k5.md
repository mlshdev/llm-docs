> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/primitive3dprotocol/applying(_:)-690k5

# applying(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the primitive that results from applying a projective transform to the primitive.

## Declaration

```swift
func applying(_ transform: Self.ProjectiveTransform) -> Self
```

## Parameters

- `transform`: The projective transform.

<a id="discussion"></a>

## Discussion

- Returns The transformed primitive.
