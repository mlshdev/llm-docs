> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotation3dfloat/applying(_:)](https://developer.apple.com/documentation/spatial/rotation3dfloat/applying(_:))

# applying(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a rotation that’s transformed by the specified projective transform.

## Declaration

```swift
func applying(_ transform: ProjectiveTransform3DFloat) -> Rotation3DFloat
```

## Parameters

- `transform`: The projective transform.

<a id="discussion"></a>

## Discussion

- Returns The transformed rotation. In the case where Spatial is unable to successfully apply the transform, the function returns `.identity`.

This function applies the transform to the rotation.
