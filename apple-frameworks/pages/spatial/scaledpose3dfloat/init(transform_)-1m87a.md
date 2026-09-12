> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/scaledpose3dfloat/init(transform:)-1m87a](https://developer.apple.com/documentation/spatial/scaledpose3dfloat/init(transform:)-1m87a)

# init(transform:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a scaled pose with with a position, rotation, and scale that are defined by an affine transform.

## Declaration

```swift
init?(transform: AffineTransform3DFloat)
```

## Parameters

- `transform`: The source transform. The function only considers the transform’s rotation and translation components.

<a id="return-value"></a>

## Return Value

A pose with a position, rotation, and scale that are defined by an affine transform.

<a id="discussion"></a>

## Discussion

> **Note**

> This function can’t extract rotation from a non-scale-rotate-translate affine transform. In that case, the function returns `nil`. If the specified  [AffineTransform3DFloat](../affinetransform3dfloat.md) doesn’t have uniform scale, the function returns `nil`.
