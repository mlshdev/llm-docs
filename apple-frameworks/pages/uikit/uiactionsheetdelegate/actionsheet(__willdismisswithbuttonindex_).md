> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactionsheetdelegate/actionsheet(_:willdismisswithbuttonindex:)](https://developer.apple.com/documentation/uikit/uiactionsheetdelegate/actionsheet(_:willdismisswithbuttonindex:))

# actionSheet(\_:willDismissWithButtonIndex:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the delegate before an action sheet is dismissed.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```swift
optional func actionSheet(_ actionSheet: UIActionSheet, willDismissWithButtonIndex buttonIndex: Int)
```

## Parameters

- `actionSheet`: The action sheet that is about to be dismissed.
- `buttonIndex`: The index of the button that was clicked. If this is the cancel button index, the action sheet is canceling. If `-1`, the cancel button index is not set.

<a id="Discussion"></a>

## Discussion

This method is invoked before the animation begins and the view is hidden.

## See Also

### Customizing behavior

- [willPresent(\_:)](willpresent%28__%29.md): Deprecated. Sent to the delegate before an action sheet is presented to the user.
- [didPresent(\_:)](didpresent%28__%29.md): Deprecated. Sent to the delegate after an action sheet is presented to the user.
- [actionSheet(\_:didDismissWithButtonIndex:)](actionsheet%28__diddismisswithbuttonindex_%29.md): Deprecated. Sent to the delegate after an action sheet is dismissed from the screen.

# actionSheet:willDismissWithButtonIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the delegate before an action sheet is dismissed.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```objectivec
- (void) actionSheet:(UIActionSheet *) actionSheet willDismissWithButtonIndex:(NSInteger) buttonIndex;
```

## Parameters

- `actionSheet`: The action sheet that is about to be dismissed.
- `buttonIndex`: The index of the button that was clicked. If this is the cancel button index, the action sheet is canceling. If `-1`, the cancel button index is not set.

<a id="Discussion"></a>

## Discussion

This method is invoked before the animation begins and the view is hidden.

## See Also

### Customizing behavior

- [willPresentActionSheet:](willpresent%28__%29.md): Deprecated. Sent to the delegate before an action sheet is presented to the user.
- [didPresentActionSheet:](didpresent%28__%29.md): Deprecated. Sent to the delegate after an action sheet is presented to the user.
- [actionSheet:didDismissWithButtonIndex:](actionsheet%28__diddismisswithbuttonindex_%29.md): Deprecated. Sent to the delegate after an action sheet is dismissed from the screen.
