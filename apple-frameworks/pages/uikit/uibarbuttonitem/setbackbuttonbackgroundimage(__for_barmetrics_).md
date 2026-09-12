> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/setbackbuttonbackgroundimage(_:for:barmetrics:)](https://developer.apple.com/documentation/uikit/uibarbuttonitem/setbackbuttonbackgroundimage(_:for:barmetrics:))

# setBackButtonBackgroundImage(\_:for:barMetrics:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the back button background image for a specified control state and bar metrics.

## Declaration

```swift
func setBackButtonBackgroundImage(_ backgroundImage: UIImage?, for state: UIControl.State, barMetrics: UIBarMetrics)
```

## Parameters

- `backgroundImage`: The image to use for the back button’s background.
- `state`: A control state.
- `barMetrics`: Bar metrics.

<a id="Discussion"></a>

## Discussion

This modifier applies only to navigation bar back buttons and is ignored by other buttons.

For good results, `backgroundImage` must be a stretchable image.

## See Also

### Customizing the Back button

- [backButtonBackgroundImage(for:barMetrics:)](backbuttonbackgroundimage%28for_barmetrics_%29.md): Returns the back button background image for a specified control state and bar metrics.
- [backButtonTitlePositionAdjustment(for:)](backbuttontitlepositionadjustment%28for_%29.md): Returns the back button title offset for specified bar metrics.
- [setBackButtonTitlePositionAdjustment(\_:for:)](setbackbuttontitlepositionadjustment%28__for_%29.md): Sets the back button title offset for specified bar metrics.
- [backButtonBackgroundVerticalPositionAdjustment(for:)](backbuttonbackgroundverticalpositionadjustment%28for_%29.md): Returns the back button vertical position offset for specified bar metrics.
- [setBackButtonBackgroundVerticalPositionAdjustment(\_:for:)](setbackbuttonbackgroundverticalpositionadjustment%28__for_%29.md): Sets the back button vertical position offset for specified bar metrics.

# setBackButtonBackgroundImage:forState:barMetrics: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the back button background image for a specified control state and bar metrics.

## Declaration

```objectivec
- (void) setBackButtonBackgroundImage:(UIImage *) backgroundImage forState:(UIControlState) state barMetrics:(UIBarMetrics) barMetrics;
```

## Parameters

- `backgroundImage`: The image to use for the back button’s background.
- `state`: A control state.
- `barMetrics`: Bar metrics.

<a id="Discussion"></a>

## Discussion

This modifier applies only to navigation bar back buttons and is ignored by other buttons.

For good results, `backgroundImage` must be a stretchable image.

## See Also

### Customizing the Back button

- [backButtonBackgroundImageForState:barMetrics:](backbuttonbackgroundimage%28for_barmetrics_%29.md): Returns the back button background image for a specified control state and bar metrics.
- [backButtonTitlePositionAdjustmentForBarMetrics:](backbuttontitlepositionadjustment%28for_%29.md): Returns the back button title offset for specified bar metrics.
- [setBackButtonTitlePositionAdjustment:forBarMetrics:](setbackbuttontitlepositionadjustment%28__for_%29.md): Sets the back button title offset for specified bar metrics.
- [backButtonBackgroundVerticalPositionAdjustmentForBarMetrics:](backbuttonbackgroundverticalpositionadjustment%28for_%29.md): Returns the back button vertical position offset for specified bar metrics.
- [setBackButtonBackgroundVerticalPositionAdjustment:forBarMetrics:](setbackbuttonbackgroundverticalpositionadjustment%28__for_%29.md): Sets the back button vertical position offset for specified bar metrics.
