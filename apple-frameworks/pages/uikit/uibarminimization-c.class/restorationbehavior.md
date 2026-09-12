> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarminimization-c.class/restorationbehavior](https://developer.apple.com/documentation/uikit/uibarminimization-c.class/restorationbehavior)

# restorationBehavior

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

The restoration behavior.

## Declaration

```objectivec
@property (nonatomic, assign) UIBarMinimizationRestorationBehavior restorationBehavior;
```

<a id="discussion"></a>

## Discussion

Use this property alongside [minimizationBehavior](minimizationbehavior.md) to control when a minimized navigation bar restores. By default the bar restores when the user reverses scroll direction; with `UIBarMinimizationRestorationBehaviorAtScrollEdge`, the bar instead restores only when the scroll view’s content reaches the scroll edge. Currently only honored in combination with `UIBarMinimizationBehaviorOnScrollDown`.

The default value is `UIBarMinimizationRestorationBehaviorAutomatic`.
