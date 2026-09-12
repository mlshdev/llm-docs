> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertviewdelegate/alertview(_:clickedbuttonat:)](https://developer.apple.com/documentation/uikit/uialertviewdelegate/alertview(_:clickedbuttonat:))

# alertView(\_:clickedButtonAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the delegate when the user clicks a button on an alert view.

> For more information, see [UIAlertView](../uialertview.md).

## Declaration

```swift
optional func alertView(_ alertView: UIAlertView, clickedButtonAt buttonIndex: Int)
```

## Parameters

- `alertView`: The alert view containing the button.
- `buttonIndex`: The index of the button that was clicked. The button indices start at `0`.

<a id="Discussion"></a>

## Discussion

The receiver is automatically dismissed after this method is invoked.

# alertView:clickedButtonAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the delegate when the user clicks a button on an alert view.

> For more information, see [UIAlertView](../uialertview.md).

## Declaration

```objectivec
- (void) alertView:(UIAlertView *) alertView clickedButtonAtIndex:(NSInteger) buttonIndex;
```

## Parameters

- `alertView`: The alert view containing the button.
- `buttonIndex`: The index of the button that was clicked. The button indices start at `0`.

<a id="Discussion"></a>

## Discussion

The receiver is automatically dismissed after this method is invoked.
