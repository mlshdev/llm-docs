> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarminimizationrestorationbehavior/automatic](https://developer.apple.com/documentation/uikit/uibarminimizationrestorationbehavior/automatic)

# UIBarMinimizationRestorationBehavior.automatic (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

The system determines the restoration behavior.

## Declaration

```swift
case automatic
```

<a id="discussion"></a>

## Discussion

By default, the bar restores when the user reverses scroll direction. The system selects [UIBarMinimizationRestorationBehavior.atScrollEdge](atscrolledge.md) automatically for navigation items whose `preferredSearchBarPlacement` is `.integratedCentered`.

## See Also

### Restoring the bar

- [UIBarMinimizationRestorationBehavior.atScrollEdge](atscrolledge.md): The bar restores only when the observed scroll view’s content reaches the scroll edge.

# UIBarMinimizationRestorationBehaviorAutomatic (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

The system determines the restoration behavior.

## Declaration

```objectivec
UIBarMinimizationRestorationBehaviorAutomatic
```

<a id="discussion"></a>

## Discussion

By default, the bar restores when the user reverses scroll direction. The system selects [UIBarMinimizationRestorationBehaviorAtScrollEdge](atscrolledge.md) automatically for navigation items whose `preferredSearchBarPlacement` is `.integratedCentered`.

## See Also

### Restoring the bar

- [UIBarMinimizationRestorationBehaviorAtScrollEdge](atscrolledge.md): The bar restores only when the observed scroll view’s content reaches the scroll edge.
