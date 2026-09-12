> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprect3dfloatisnan](https://developer.apple.com/documentation/spatial/sprect3dfloatisnan)

# SPRect3DFloatIsNaN

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static bool SPRect3DFloatIsNaN(SPRect3DFloat rect);
```

## Parameters

- `rect`: The source rectangle.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether any of the coordinates and dimensions of the rectangle are NaN.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether any of the coordinates and dimensions of the rectangle are NaN.
