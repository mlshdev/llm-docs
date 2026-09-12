> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarminimization-c.class/minimizationbehavior](https://developer.apple.com/documentation/uikit/uibarminimization-c.class/minimizationbehavior)

# minimizationBehavior

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

The minimization behavior.

## Declaration

```objectivec
@property (nonatomic, assign) UIBarMinimizationBehavior minimizationBehavior;
```

<a id="discussion"></a>

## Discussion

When the navigation bar minimizes, an integrated top tab bar will also minimize.

The default value is `UIBarMinimizationBehaviorAutomatic`.
