> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spvector3drotationtovector](https://developer.apple.com/documentation/spatial/spvector3drotationtovector)

# SPVector3DRotationToVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the rotation around the origin from the first vector to the second vector.

## Declaration

```objectivec
static SPRotation3D SPVector3DRotationToVector(SPVector3D vector, SPVector3D other);
```

## Parameters

- `vector`: The first vector that the function computes the rotation from.
- `other`: The second vector that the function computes the rotation to.

<a id="return-value"></a>

## Return Value

The rotation between two vector.

## See Also

### Checking characteristics

- [SPVector3DIsZero](spvector3diszero.md)
- [SPVector3DIsFinite](spvector3disfinite.md)
- [SPVector3DIsNaN](spvector3disnan.md)
