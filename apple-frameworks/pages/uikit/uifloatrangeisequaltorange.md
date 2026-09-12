> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifloatrangeisequaltorange](https://developer.apple.com/documentation/uikit/uifloatrangeisequaltorange)

# UIFloatRangeIsEqualToRange

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns a Boolean indicating whether two float ranges are equivalent.

## Declaration

```objectivec
static BOOL UIFloatRangeIsEqualToRange(UIFloatRange range, UIFloatRange otherRange);
```

## Parameters

- `range`: The first range to compare.
- `otherRange`: The second range to compare.

<a id="Discussion"></a>

## Discussion

Two ranges are considered equal when their minimum values are the same and their maximum values are the same. In practice, the minimum and maximum values do not have to be exactly equal, but the difference between each pair of values must be less than `FLT_EPSILON`.

## See Also

### Testing the range values

- [UIFloatRangeIsInfinite](uifloatrange/isinfinite.md): Returns a Boolean indicating whether the specified float range is infinitely large.
