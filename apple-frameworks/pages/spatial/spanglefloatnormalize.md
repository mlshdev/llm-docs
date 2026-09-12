> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spanglefloatnormalize](https://developer.apple.com/documentation/spatial/spanglefloatnormalize)

# SPAngleFloatNormalize

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPAngleFloat SPAngleFloatNormalize(SPAngleFloat angle);
```

## Parameters

- `angle`: The source angle.

<a id="return-value"></a>

## Return Value

The normalized angle.

<a id="discussion"></a>

## Discussion

Returns the specified angle normalized to `(-π, π]` radians (`(-180°, 180.0°]`).
