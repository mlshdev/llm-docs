> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiadaptivepresentationcontrollerdelegate/adaptivepresentationstyle(for:traitcollection:)](https://developer.apple.com/documentation/uikit/uiadaptivepresentationcontrollerdelegate/adaptivepresentationstyle(for:traitcollection:))

# adaptivePresentationStyle(for:traitCollection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate for the presentation style to use when the specified set of traits are active.

## Declaration

```swift
optional func adaptivePresentationStyle(for controller: UIPresentationController, traitCollection: UITraitCollection) -> UIModalPresentationStyle
```

## Parameters

- `controller`: The presentation controller that is managing the size change. Use this object to retrieve the view controllers involved in the presentation.
- `traitCollection`: The traits representing the target environment.

<a id="return-value"></a>

## Return Value

The new presentation style, which must be [UIModalPresentationStyle.fullScreen](../uimodalpresentationstyle/fullscreen.md), [UIModalPresentationStyle.overFullScreen](../uimodalpresentationstyle/overfullscreen.md), [UIModalPresentationStyle.formSheet](../uimodalpresentationstyle/formsheet.md), or [UIModalPresentationStyle.none](../uimodalpresentationstyle/none.md).

<a id="Discussion"></a>

## Discussion

The presentation controller calls this method when the traits of the current environment are about to change. Your implementation of this method can return the preferred presentation style to use for the specified traits. If you do not return one of the allowed styles, the presentation controller uses its preferred default style.

If you do not implement this method in your delegate, UIKit calls the [adaptivePresentationStyle(for:)](adaptivepresentationstyle%28for_%29.md) method instead.

## See Also

### Adapting the presentation style

- [adaptivePresentationStyle(for:)](adaptivepresentationstyle%28for_%29.md): Asks the delegate for the new presentation style to use.

# adaptivePresentationStyleForPresentationController:traitCollection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate for the presentation style to use when the specified set of traits are active.

## Declaration

```objectivec
- (UIModalPresentationStyle) adaptivePresentationStyleForPresentationController:(UIPresentationController *) controller traitCollection:(UITraitCollection *) traitCollection;
```

## Parameters

- `controller`: The presentation controller that is managing the size change. Use this object to retrieve the view controllers involved in the presentation.
- `traitCollection`: The traits representing the target environment.

<a id="return-value"></a>

## Return Value

The new presentation style, which must be [UIModalPresentationFullScreen](../uimodalpresentationstyle/fullscreen.md), [UIModalPresentationOverFullScreen](../uimodalpresentationstyle/overfullscreen.md), [UIModalPresentationFormSheet](../uimodalpresentationstyle/formsheet.md), or [UIModalPresentationNone](../uimodalpresentationstyle/none.md).

<a id="Discussion"></a>

## Discussion

The presentation controller calls this method when the traits of the current environment are about to change. Your implementation of this method can return the preferred presentation style to use for the specified traits. If you do not return one of the allowed styles, the presentation controller uses its preferred default style.

If you do not implement this method in your delegate, UIKit calls the [adaptivePresentationStyleForPresentationController:](adaptivepresentationstyle%28for_%29.md) method instead.

## See Also

### Adapting the presentation style

- [adaptivePresentationStyleForPresentationController:](adaptivepresentationstyle%28for_%29.md): Asks the delegate for the new presentation style to use.
