> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spvector3dfloatscaleby

# SPVector3DFloatScaleBy

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPVector3DFloat SPVector3DFloatScaleBy(SPVector3DFloat vector, float x, float y, float z);
```

## Parameters

- `vector`: The source vector.
- `x`: The scale value for the @p x element.
- `y`: The scale value for the @p y element.
- `z`: The scale value for the @p z element.

<a id="return-value"></a>

## Return Value

A vector that’s scaled by the specified values.

<a id="discussion"></a>

## Discussion

Returns a vector with elements scaled by the specified values.
