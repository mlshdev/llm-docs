> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifloatrangeisequaltorange(_:_:)](https://developer.apple.com/documentation/uikit/uifloatrangeisequaltorange(_:_:))

# UIFloatRangeIsEqualToRange(\_:\_:)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 12.0) · iPadOS 7.0+ (deprecated in 12.0) · Mac Catalyst 7.0+ (deprecated in 12.0) · tvOS · visionOS · Swift 1.0+ (deprecated in 4.2)

Returns a Boolean indicating whether two float ranges are equivalent.

> Use `==` instead.

## Declaration

```swift
func UIFloatRangeIsEqualToRange(_ range: UIFloatRange, _ otherRange: UIFloatRange) -> Bool
```

## Parameters

- `range`: The first range to compare.
- `otherRange`: The second range to compare.

<a id="Discussion"></a>

## Discussion

Two ranges are considered equal when their minimum values are the same and their maximum values are the same. In practice, the minimum and maximum values do not have to be exactly equal, but the difference between each pair of values must be less than `FLT_EPSILON`.

## See Also

### Testing the range values

- [isInfinite](uifloatrange/isinfinite.md): Returns a Boolean indicating whether the specified float range is infinitely large.
