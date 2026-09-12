> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarminimizationrestorationbehavior/atscrolledge](https://developer.apple.com/documentation/uikit/uibarminimizationrestorationbehavior/atscrolledge)

# UIBarMinimizationRestorationBehavior.atScrollEdge (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The bar restores only when the observed scroll view’s content reaches the scroll edge.

## Declaration

```swift
case atScrollEdge
```

<a id="discussion"></a>

## Discussion

Currently this is only honored alongside `UIBarMinimizationBehaviorOnScrollDown`. With other minimization behaviors, the system falls back to [UIBarMinimizationRestorationBehavior.automatic](automatic.md).

## See Also

### Restoring the bar

- [UIBarMinimizationRestorationBehavior.automatic](automatic.md): The system determines the restoration behavior.

# UIBarMinimizationRestorationBehaviorAtScrollEdge (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The bar restores only when the observed scroll view’s content reaches the scroll edge.

## Declaration

```objectivec
UIBarMinimizationRestorationBehaviorAtScrollEdge
```

<a id="discussion"></a>

## Discussion

Currently this is only honored alongside `UIBarMinimizationBehaviorOnScrollDown`. With other minimization behaviors, the system falls back to [UIBarMinimizationRestorationBehaviorAutomatic](automatic.md).

## See Also

### Restoring the bar

- [UIBarMinimizationRestorationBehaviorAutomatic](automatic.md): The system determines the restoration behavior.
