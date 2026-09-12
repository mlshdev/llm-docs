> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/pose3dfloat/init(transform:)-7bffd](https://developer.apple.com/documentation/spatial/pose3dfloat/init(transform:)-7bffd)

# init(transform:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a pose with with a position and rotation that are defined by an affine transform.

## Declaration

```swift
init?(transform: AffineTransform3DFloat)
```

## Parameters

- `transform`: The source transform. The function only considers the transform’s rotation and translation components.

<a id="return-value"></a>

## Return Value

A pose with a position and rotation that are defined by an affine transform.

<a id="discussion"></a>

## Discussion

> **Note**

> This function can’t extract rotation from a non-scale-rotate-translate affine transform. In that case, the function returns `nil`.
