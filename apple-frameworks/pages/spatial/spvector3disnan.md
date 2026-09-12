> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spvector3disnan](https://developer.apple.com/documentation/spatial/spvector3disnan)

# SPVector3DIsNaN

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static bool SPVector3DIsNaN(SPVector3D vector);
```

## Parameters

- `vector`: The source point.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the point contains any NaN values.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the vector contains any NaN values.

## See Also

### Checking characteristics

- [SPVector3DRotationToVector](spvector3drotationtovector.md): Returns the rotation around the origin from the first vector to the second vector.
- [SPVector3DIsZero](spvector3diszero.md)
- [SPVector3DIsFinite](spvector3disfinite.md)
