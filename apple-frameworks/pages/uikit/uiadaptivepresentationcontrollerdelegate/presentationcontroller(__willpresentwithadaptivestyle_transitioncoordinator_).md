> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiadaptivepresentationcontrollerdelegate/presentationcontroller(_:willpresentwithadaptivestyle:transitioncoordinator:)](https://developer.apple.com/documentation/uikit/uiadaptivepresentationcontrollerdelegate/presentationcontroller(_:willpresentwithadaptivestyle:transitioncoordinator:))

# presentationController(\_:willPresentWithAdaptiveStyle:transitionCoordinator:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the delegate that an adaptivity-related transition is about to occur.

## Declaration

```swift
optional func presentationController(_ presentationController: UIPresentationController, willPresentWithAdaptiveStyle style: UIModalPresentationStyle, transitionCoordinator: (any UIViewControllerTransitionCoordinator)?)
```

## Parameters

- `presentationController`: The presentation controller that is managing the adaptivity change.
- `style`: The new presentation style. If the presentation style is not changing, this parameter is set to [UIModalPresentationStyle.none](../uimodalpresentationstyle/none.md).
- `transitionCoordinator`: The transition coordinator that is managing the transition.

<a id="Discussion"></a>

## Discussion

When a size class change occurs, UIKit calls this method to let you know how the presentation controller will adapt. Use this method to make any additional changes. For example, you might use the transition coordinator object to create additional animations for the transition.

## See Also

### Responding to adaptive transitions

- [presentationControllerDidAttemptToDismiss(\_:)](presentationcontrollerdidattempttodismiss%28__%29.md): Notifies the delegate that a user-initiated attempt to dismiss a view was prevented.
- [presentationControllerShouldDismiss(\_:)](presentationcontrollershoulddismiss%28__%29.md): Asks the delegate for permission to dismiss the presentation.
- [presentationControllerDidDismiss(\_:)](presentationcontrollerdiddismiss%28__%29.md): Notifies the delegate after a presentation is dismissed.
- [presentationControllerWillDismiss(\_:)](presentationcontrollerwilldismiss%28__%29.md): Notifies the delegate before a presentation is dismissed.

# presentationController:willPresentWithAdaptiveStyle:transitionCoordinator: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the delegate that an adaptivity-related transition is about to occur.

## Declaration

```objectivec
- (void) presentationController:(UIPresentationController *) presentationController willPresentWithAdaptiveStyle:(UIModalPresentationStyle) style transitionCoordinator:(id<UIViewControllerTransitionCoordinator>) transitionCoordinator;
```

## Parameters

- `presentationController`: The presentation controller that is managing the adaptivity change.
- `style`: The new presentation style. If the presentation style is not changing, this parameter is set to [UIModalPresentationNone](../uimodalpresentationstyle/none.md).
- `transitionCoordinator`: The transition coordinator that is managing the transition.

<a id="Discussion"></a>

## Discussion

When a size class change occurs, UIKit calls this method to let you know how the presentation controller will adapt. Use this method to make any additional changes. For example, you might use the transition coordinator object to create additional animations for the transition.

## See Also

### Responding to adaptive transitions

- [presentationControllerDidAttemptToDismiss:](presentationcontrollerdidattempttodismiss%28__%29.md): Notifies the delegate that a user-initiated attempt to dismiss a view was prevented.
- [presentationControllerShouldDismiss:](presentationcontrollershoulddismiss%28__%29.md): Asks the delegate for permission to dismiss the presentation.
- [presentationControllerDidDismiss:](presentationcontrollerdiddismiss%28__%29.md): Notifies the delegate after a presentation is dismissed.
- [presentationControllerWillDismiss:](presentationcontrollerwilldismiss%28__%29.md): Notifies the delegate before a presentation is dismissed.
