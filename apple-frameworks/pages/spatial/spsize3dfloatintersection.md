> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spsize3dfloatintersection](https://developer.apple.com/documentation/spatial/spsize3dfloatintersection)

# SPSize3DFloatIntersection

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPSize3DFloat SPSize3DFloatIntersection(SPSize3DFloat size, SPSize3DFloat other);
```

## Parameters

- `size`: The first size.
- `other`: The second size.

<a id="return-value"></a>

## Return Value

A size structure that is the intersection of the two sizes.

<a id="discussion"></a>

## Discussion

Returns the intersection of the two sizes.
