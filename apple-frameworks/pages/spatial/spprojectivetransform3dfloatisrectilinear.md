> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spprojectivetransform3dfloatisrectilinear](https://developer.apple.com/documentation/spatial/spprojectivetransform3dfloatisrectilinear)

# SPProjectiveTransform3DFloatIsRectilinear

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static bool SPProjectiveTransform3DFloatIsRectilinear(SPProjectiveTransform3DFloat transform);
```

## Parameters

- `transform`: The source transform.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the transform is affine and rectilinear.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the transform is affine and rectilinear.
