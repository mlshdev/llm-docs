> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spvector3dfloatisfinite](https://developer.apple.com/documentation/spatial/spvector3dfloatisfinite)

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
