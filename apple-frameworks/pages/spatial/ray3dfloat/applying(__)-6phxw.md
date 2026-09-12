> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/ray3dfloat/applying(_:)-6phxw](https://developer.apple.com/documentation/spatial/ray3dfloat/applying(_:)-6phxw)

# applying(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a ray that’s transformed by the specified projective transform.

## Declaration

```swift
func applying(_ transform: ProjectiveTransform3DFloat) -> Ray3DFloat
```

## Parameters

- `transform`: The projective transform.

<a id="discussion"></a>

## Discussion

- Returns The transformed ray.

This function applies the transform to the ray’s origin and direction.
