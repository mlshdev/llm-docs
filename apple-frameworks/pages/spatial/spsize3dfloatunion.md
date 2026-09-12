> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spsize3dfloatunion](https://developer.apple.com/documentation/spatial/spsize3dfloatunion)

# SPSize3DFloatUnion

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPSize3DFloat SPSize3DFloatUnion(SPSize3DFloat size, SPSize3DFloat other);
```

## Parameters

- `size`: The first size.
- `other`: The second size.

<a id="return-value"></a>

## Return Value

A size structure that is the smallest size that contains two sizes.

<a id="discussion"></a>

## Discussion

Returns the smallest size that contains two sizes.
