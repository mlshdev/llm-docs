> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarminimization-c.class/safeareaadjustment](https://developer.apple.com/documentation/uikit/uibarminimization-c.class/safeareaadjustment)

# safeAreaAdjustment

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

The safe area adjustment during minimization.

## Declaration

```objectivec
@property (nonatomic, assign) UIBarMinimizationSafeAreaAdjustment safeAreaAdjustment;
```

<a id="discussion"></a>

## Discussion

Currently, only the navigation bar supports customizing the safe area adjustment.

The default value is `UIBarMinimizationSafeAreaAdjustmentAutomatic`.
