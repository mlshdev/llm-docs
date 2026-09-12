> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spvector3dfloatrotate](https://developer.apple.com/documentation/spatial/spvector3dfloatrotate)

# SPVector3DFloatRotate

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPVector3DFloat SPVector3DFloatRotate(SPVector3DFloat vector, SPRotation3DFloat rotation);
```

## Parameters

- `vector`: The source vector.
- `rotation`: The rotation.

<a id="return-value"></a>

## Return Value

A vector that’s rotated by the specified rotation.

<a id="discussion"></a>

## Discussion

Returns a vector that’s rotated by the specified rotation around the origin.
