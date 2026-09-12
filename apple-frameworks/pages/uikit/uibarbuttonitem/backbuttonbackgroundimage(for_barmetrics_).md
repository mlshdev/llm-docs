> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/backbuttonbackgroundimage(for:barmetrics:)](https://developer.apple.com/documentation/uikit/uibarbuttonitem/backbuttonbackgroundimage(for:barmetrics:))

# backButtonBackgroundImage(for:barMetrics:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the back button background image for a specified control state and bar metrics.

## Declaration

```swift
func backButtonBackgroundImage(for state: UIControl.State, barMetrics: UIBarMetrics) -> UIImage?
```

## Parameters

- `state`: A control state.
- `barMetrics`: Bar metrics.

<a id="return-value"></a>

## Return Value

The back button background image for `state` and `barMetrics`.

<a id="Discussion"></a>

## Discussion

This modifier applies only to navigation bar back buttons and is ignored by other buttons.

## See Also

### Customizing the Back button

- [setBackButtonBackgroundImage(\_:for:barMetrics:)](setbackbuttonbackgroundimage%28__for_barmetrics_%29.md): Sets the back button background image for a specified control state and bar metrics.
- [backButtonTitlePositionAdjustment(for:)](backbuttontitlepositionadjustment%28for_%29.md): Returns the back button title offset for specified bar metrics.
- [setBackButtonTitlePositionAdjustment(\_:for:)](setbackbuttontitlepositionadjustment%28__for_%29.md): Sets the back button title offset for specified bar metrics.
- [backButtonBackgroundVerticalPositionAdjustment(for:)](backbuttonbackgroundverticalpositionadjustment%28for_%29.md): Returns the back button vertical position offset for specified bar metrics.
- [setBackButtonBackgroundVerticalPositionAdjustment(\_:for:)](setbackbuttonbackgroundverticalpositionadjustment%28__for_%29.md): Sets the back button vertical position offset for specified bar metrics.

# backButtonBackgroundImageForState:barMetrics: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the back button background image for a specified control state and bar metrics.

## Declaration

```objectivec
- (UIImage *) backButtonBackgroundImageForState:(UIControlState) state barMetrics:(UIBarMetrics) barMetrics;
```

## Parameters

- `state`: A control state.
- `barMetrics`: Bar metrics.

<a id="return-value"></a>

## Return Value

The back button background image for `state` and `barMetrics`.

<a id="Discussion"></a>

## Discussion

This modifier applies only to navigation bar back buttons and is ignored by other buttons.

## See Also

### Customizing the Back button

- [setBackButtonBackgroundImage:forState:barMetrics:](setbackbuttonbackgroundimage%28__for_barmetrics_%29.md): Sets the back button background image for a specified control state and bar metrics.
- [backButtonTitlePositionAdjustmentForBarMetrics:](backbuttontitlepositionadjustment%28for_%29.md): Returns the back button title offset for specified bar metrics.
- [setBackButtonTitlePositionAdjustment:forBarMetrics:](setbackbuttontitlepositionadjustment%28__for_%29.md): Sets the back button title offset for specified bar metrics.
- [backButtonBackgroundVerticalPositionAdjustmentForBarMetrics:](backbuttonbackgroundverticalpositionadjustment%28for_%29.md): Returns the back button vertical position offset for specified bar metrics.
- [setBackButtonBackgroundVerticalPositionAdjustment:forBarMetrics:](setbackbuttonbackgroundverticalpositionadjustment%28__for_%29.md): Sets the back button vertical position offset for specified bar metrics.
