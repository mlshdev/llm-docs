> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spvector3dfloatunapplyprojectivetransform

# SPVector3DFloatUnapplyProjectiveTransform

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPVector3DFloat SPVector3DFloatUnapplyProjectiveTransform(SPVector3DFloat vector, SPProjectiveTransform3DFloat transform);
```

## Parameters

- `vector`: The source vector.
- `transform`: The projective transform whose inverse is to be applied to the vector.

<a id="return-value"></a>

## Return Value

The transformed vector.

<a id="discussion"></a>

## Discussion

Returns a vector that’s transformed by the inverse of the specified projective transform.
