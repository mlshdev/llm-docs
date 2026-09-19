> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spvector3dfloatrotationtovector

# SPVector3DFloatRotationToVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRotation3DFloat SPVector3DFloatRotationToVector(SPVector3DFloat vector, SPVector3DFloat other);
```

## Parameters

- `vector`: The first vector.
- `other`: The second vector.

<a id="return-value"></a>

## Return Value

A rotation structure that represents the rotation.

<a id="discussion"></a>

## Discussion

Returns the rotation from the normalized first vector to the normalized second vector.
