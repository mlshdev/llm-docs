> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/backbuttontitlepositionadjustment(for:)](https://developer.apple.com/documentation/uikit/uibarbuttonitem/backbuttontitlepositionadjustment(for:))

# backButtonTitlePositionAdjustment(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the back button title offset for specified bar metrics.

## Declaration

```swift
func backButtonTitlePositionAdjustment(for barMetrics: UIBarMetrics) -> UIOffset
```

## Parameters

- `barMetrics`: Bar metrics.

<a id="return-value"></a>

## Return Value

The back button title offset for `barMetrics`.

<a id="Discussion"></a>

## Discussion

This modifier applies only to navigation bar back buttons and is ignored by other buttons.

## See Also

### Customizing the Back button

- [backButtonBackgroundImage(for:barMetrics:)](backbuttonbackgroundimage%28for_barmetrics_%29.md): Returns the back button background image for a specified control state and bar metrics.
- [setBackButtonBackgroundImage(\_:for:barMetrics:)](setbackbuttonbackgroundimage%28__for_barmetrics_%29.md): Sets the back button background image for a specified control state and bar metrics.
- [setBackButtonTitlePositionAdjustment(\_:for:)](setbackbuttontitlepositionadjustment%28__for_%29.md): Sets the back button title offset for specified bar metrics.
- [backButtonBackgroundVerticalPositionAdjustment(for:)](backbuttonbackgroundverticalpositionadjustment%28for_%29.md): Returns the back button vertical position offset for specified bar metrics.
- [setBackButtonBackgroundVerticalPositionAdjustment(\_:for:)](setbackbuttonbackgroundverticalpositionadjustment%28__for_%29.md): Sets the back button vertical position offset for specified bar metrics.

# backButtonTitlePositionAdjustmentForBarMetrics: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the back button title offset for specified bar metrics.

## Declaration

```objectivec
- (UIOffset) backButtonTitlePositionAdjustmentForBarMetrics:(UIBarMetrics) barMetrics;
```

## Parameters

- `barMetrics`: Bar metrics.

<a id="return-value"></a>

## Return Value

The back button title offset for `barMetrics`.

<a id="Discussion"></a>

## Discussion

This modifier applies only to navigation bar back buttons and is ignored by other buttons.

## See Also

### Customizing the Back button

- [backButtonBackgroundImageForState:barMetrics:](backbuttonbackgroundimage%28for_barmetrics_%29.md): Returns the back button background image for a specified control state and bar metrics.
- [setBackButtonBackgroundImage:forState:barMetrics:](setbackbuttonbackgroundimage%28__for_barmetrics_%29.md): Sets the back button background image for a specified control state and bar metrics.
- [setBackButtonTitlePositionAdjustment:forBarMetrics:](setbackbuttontitlepositionadjustment%28__for_%29.md): Sets the back button title offset for specified bar metrics.
- [backButtonBackgroundVerticalPositionAdjustmentForBarMetrics:](backbuttonbackgroundverticalpositionadjustment%28for_%29.md): Returns the back button vertical position offset for specified bar metrics.
- [setBackButtonBackgroundVerticalPositionAdjustment:forBarMetrics:](setbackbuttonbackgroundverticalpositionadjustment%28__for_%29.md): Sets the back button vertical position offset for specified bar metrics.
