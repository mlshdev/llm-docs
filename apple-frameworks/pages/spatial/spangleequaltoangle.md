> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spangleequaltoangle](https://developer.apple.com/documentation/spatial/spangleequaltoangle)

# SPAngleEqualToAngle

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean value that indicates whether two angles are equal.

## Declaration

```objectivec
static bool SPAngleEqualToAngle(SPAngle angle1, SPAngle angle2);
```

## Parameters

- `angle1`: The first angle value to compare.
- `angle2`: The second angle value to compare.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether two values are equal.

<a id="Discussion"></a>

## Discussion

Note that this function compares the raw value of each angle and doesn’t normalize the values. For example, 360° doesn’t equal 0°.
