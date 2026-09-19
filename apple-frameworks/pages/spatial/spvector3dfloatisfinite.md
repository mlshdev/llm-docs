> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spvector3dfloatisfinite

# SPVector3DFloatIsFinite

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static bool SPVector3DFloatIsFinite(SPVector3DFloat vector);
```

## Parameters

- `vector`: The source vector.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether all of the coordinates of the point are finite.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether all of the elements of the vector are finite.
