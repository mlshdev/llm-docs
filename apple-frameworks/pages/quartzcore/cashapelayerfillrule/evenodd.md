> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cashapelayerfillrule/evenodd](https://developer.apple.com/documentation/quartzcore/cashapelayerfillrule/evenodd)

# evenOdd (Swift)

**Framework:** Core Animation  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Specifies the even-odd winding rule. Count the total number of path crossings. If the number of crossings is even, the point is outside the path. If the number of crossings is odd, the point is inside the path and the region containing it should be filled.

## Declaration

```swift
static let evenOdd: CAShapeLayerFillRule
```

## See Also

### Constants

- [nonZero](nonzero.md): Specifies the non-zero winding rule. Count each left-to-right path as +1 and each right-to-left path as -1. If the sum of all crossings is 0, the point is outside the path. If the sum is nonzero, the point is inside the path and the region containing it is filled.

# kCAFillRuleEvenOdd (Objective-C)

**Framework:** Core Animation  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Specifies the even-odd winding rule. Count the total number of path crossings. If the number of crossings is even, the point is outside the path. If the number of crossings is odd, the point is inside the path and the region containing it should be filled.

## Declaration

```objectivec
extern CAShapeLayerFillRule const kCAFillRuleEvenOdd;
```

## See Also

### Constants

- [kCAFillRuleNonZero](nonzero.md): Specifies the non-zero winding rule. Count each left-to-right path as +1 and each right-to-left path as -1. If the sum of all crossings is 0, the point is outside the path. If the sum is nonzero, the point is inside the path and the region containing it is filled.
