> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uibarminimization-c.class/minimizationbehavior

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
