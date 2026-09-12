> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiadaptivepresentationcontrollerdelegate/adaptivepresentationstyle(for:)](https://developer.apple.com/documentation/uikit/uiadaptivepresentationcontrollerdelegate/adaptivepresentationstyle(for:))

# adaptivePresentationStyle(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate for the new presentation style to use.

## Declaration

```swift
optional func adaptivePresentationStyle(for controller: UIPresentationController) -> UIModalPresentationStyle
```

## Parameters

- `controller`: The presentation controller that is managing the size change. Use this object to retrieve the view controllers involved in the presentation.

<a id="return-value"></a>

## Return Value

The new presentation style, which must be [UIModalPresentationStyle.fullScreen](../uimodalpresentationstyle/fullscreen.md), [UIModalPresentationStyle.overFullScreen](../uimodalpresentationstyle/overfullscreen.md), or [UIModalPresentationStyle.none](../uimodalpresentationstyle/none.md).

<a id="Discussion"></a>

## Discussion

In iOS 8.3 and later, use the [adaptivePresentationStyle(for:traitCollection:)](adaptivepresentationstyle%28for_traitcollection_%29.md) method to handle all trait changes instead of this method. If you do not implement that method, you can use this method to change the presentation style when transitioning to a horizontally compact environment.

If you do not implement this method or if you return an invalid style, the current presentation controller returns its preferred default style.

## See Also

### Adapting the presentation style

- [adaptivePresentationStyle(for:traitCollection:)](adaptivepresentationstyle%28for_traitcollection_%29.md): Asks the delegate for the presentation style to use when the specified set of traits are active.

# adaptivePresentationStyleForPresentationController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate for the new presentation style to use.

## Declaration

```objectivec
- (UIModalPresentationStyle) adaptivePresentationStyleForPresentationController:(UIPresentationController *) controller;
```

## Parameters

- `controller`: The presentation controller that is managing the size change. Use this object to retrieve the view controllers involved in the presentation.

<a id="return-value"></a>

## Return Value

The new presentation style, which must be [UIModalPresentationFullScreen](../uimodalpresentationstyle/fullscreen.md), [UIModalPresentationOverFullScreen](../uimodalpresentationstyle/overfullscreen.md), or [UIModalPresentationNone](../uimodalpresentationstyle/none.md).

<a id="Discussion"></a>

## Discussion

In iOS 8.3 and later, use the [adaptivePresentationStyleForPresentationController:traitCollection:](adaptivepresentationstyle%28for_traitcollection_%29.md) method to handle all trait changes instead of this method. If you do not implement that method, you can use this method to change the presentation style when transitioning to a horizontally compact environment.

If you do not implement this method or if you return an invalid style, the current presentation controller returns its preferred default style.

## See Also

### Adapting the presentation style

- [adaptivePresentationStyleForPresentationController:traitCollection:](adaptivepresentationstyle%28for_traitcollection_%29.md): Asks the delegate for the presentation style to use when the specified set of traits are active.
