> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/ray3dfloat/applying(_:)-7miic

# applying(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a ray that’s transformed by the specified affine transform.

## Declaration

```swift
func applying(_ transform: AffineTransform3DFloat) -> Ray3DFloat
```

## Parameters

- `transform`: The affine transform.

<a id="discussion"></a>

## Discussion

- Returns The transformed ray.

This function applies the transform to the ray’s origin and direction.
