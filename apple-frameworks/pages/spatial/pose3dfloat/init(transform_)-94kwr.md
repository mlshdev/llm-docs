> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/pose3dfloat/init(transform:)-94kwr

# init(transform:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a pose with with a position and rotation that are defined by a projective transform.

## Declaration

```swift
init?(transform: ProjectiveTransform3DFloat)
```

## Parameters

- `transform`: The source transform. The function only considers the transform’s rotation and translation components.

<a id="return-value"></a>

## Return Value

A pose with a position and rotation that are defined by a projective transform.

<a id="discussion"></a>

## Discussion

> **Note**

> This function can’t extract rotation from a non-scale-rotate-translate affine transform. In that case, the function returns `nil`.
