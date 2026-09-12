> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spsize3dfloatisfinite](https://developer.apple.com/documentation/spatial/spsize3dfloatisfinite)

# SPSize3DFloatIsFinite

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static bool SPSize3DFloatIsFinite(SPSize3DFloat size);
```

## Parameters

- `size`: The source size.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether all of the dimensions of the size are finite.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether all of the dimensions of the size are finite.
