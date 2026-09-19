> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/primitive3dprotocol/applying(_:)-1tt2b

# applying(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the primitive that results from applying an affine transform to the primitive.

## Declaration

```swift
func applying(_ transform: Self.AffineTransform) -> Self
```

## Parameters

- `transform`: The affine transform.

<a id="discussion"></a>

## Discussion

- Returns The transformed primitive.
