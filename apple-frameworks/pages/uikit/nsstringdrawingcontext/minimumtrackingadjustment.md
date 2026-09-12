> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsstringdrawingcontext/minimumtrackingadjustment](https://developer.apple.com/documentation/uikit/nsstringdrawingcontext/minimumtrackingadjustment)

# minimumTrackingAdjustment (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 2.0)

The smallest amount of space, in points, to maintain between characters.

## Declaration

```swift
var minimumTrackingAdjustment: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Changing the value of this property tells the renderer that it can change the tracking to a value no smaller than the indicated amount. For example, a value of `-0.5` indicates that characters can be tracked closer together by up to half a point. A value of 0 indicates that the standard spacing is used. A typical range of values for this property would be `-0.5` to `0.0`. The default value of this property is `0.0`.

## See Also

### Deprecated

- [actualTrackingAdjustment](actualtrackingadjustment.md): Deprecated. The actual tracking value that the system applied during drawing.

# minimumTrackingAdjustment (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 2.0)

The smallest amount of space, in points, to maintain between characters.

## Declaration

```objectivec
@property (nonatomic) CGFloat minimumTrackingAdjustment;
```

<a id="Discussion"></a>

## Discussion

Changing the value of this property tells the renderer that it can change the tracking to a value no smaller than the indicated amount. For example, a value of `-0.5` indicates that characters can be tracked closer together by up to half a point. A value of 0 indicates that the standard spacing is used. A typical range of values for this property would be `-0.5` to `0.0`. The default value of this property is `0.0`.

## See Also

### Deprecated

- [actualTrackingAdjustment](actualtrackingadjustment.md): Deprecated. The actual tracking value that the system applied during drawing.
