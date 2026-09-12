> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppoint3dfloatisnan](https://developer.apple.com/documentation/spatial/sppoint3dfloatisnan)

# SPPoint3DFloatIsNaN

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static bool SPPoint3DFloatIsNaN(SPPoint3DFloat point);
```

## Parameters

- `point`: The source point.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the point contains any NaN values.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the point contains any NaN values.
