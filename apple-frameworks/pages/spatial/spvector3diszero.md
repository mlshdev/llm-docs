> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spvector3diszero](https://developer.apple.com/documentation/spatial/spvector3diszero)

# SPVector3DIsZero

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static bool SPVector3DIsZero(SPVector3D vector);
```

## Parameters

- `vector`: The source vector.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the vector is zero.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the vector is zero.

## See Also

### Checking characteristics

- [SPVector3DRotationToVector](spvector3drotationtovector.md): Returns the rotation around the origin from the first vector to the second vector.
- [SPVector3DIsFinite](spvector3disfinite.md)
- [SPVector3DIsNaN](spvector3disnan.md)
