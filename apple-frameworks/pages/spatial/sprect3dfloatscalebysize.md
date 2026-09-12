> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprect3dfloatscalebysize](https://developer.apple.com/documentation/spatial/sprect3dfloatscalebysize)

# SPRect3DFloatScaleBySize

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRect3DFloat SPRect3DFloatScaleBySize(SPRect3DFloat rect, SPSize3DFloat scale);
```

## Parameters

- `rect`: The source rectangle.
- `scale`: The scale value.

<a id="return-value"></a>

## Return Value

A rectangle that’s scaled by the specified value.

<a id="discussion"></a>

## Discussion

Returns a rectangle with dimensions scaled by the specified size.
