> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/vector3dfloat/applying(_:)-1a8xg

# applying(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the vector that results from applying an affine transform to the vector.

## Declaration

```swift
func applying(_ transform: AffineTransform3DFloat) -> Vector3DFloat
```

## Parameters

- `transform`: The affine transform.

<a id="discussion"></a>

## Discussion

- Returns The transformed primitive.
