> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsstringdrawingcontext/actualtrackingadjustment](https://developer.apple.com/documentation/uikit/nsstringdrawingcontext/actualtrackingadjustment)

# actualTrackingAdjustment (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 2.0)

The actual tracking value that the system applied during drawing.

## Declaration

```swift
var actualTrackingAdjustment: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

If you specified a custom value in the [minimumTrackingAdjustment](minimumtrackingadjustment.md) property, when drawing is complete, this property contains the actual tracking value that was used.

## See Also

### Deprecated

- [minimumTrackingAdjustment](minimumtrackingadjustment.md): Deprecated. The smallest amount of space, in points, to maintain between characters.

# actualTrackingAdjustment (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 2.0)

The actual tracking value that the system applied during drawing.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat actualTrackingAdjustment;
```

<a id="Discussion"></a>

## Discussion

If you specified a custom value in the [minimumTrackingAdjustment](minimumtrackingadjustment.md) property, when drawing is complete, this property contains the actual tracking value that was used.

## See Also

### Deprecated

- [minimumTrackingAdjustment](minimumtrackingadjustment.md): Deprecated. The smallest amount of space, in points, to maintain between characters.
