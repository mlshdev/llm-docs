> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactionsheetdelegate/actionsheet(_:diddismisswithbuttonindex:)](https://developer.apple.com/documentation/uikit/uiactionsheetdelegate/actionsheet(_:diddismisswithbuttonindex:))

# actionSheet(\_:didDismissWithButtonIndex:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the delegate after an action sheet is dismissed from the screen.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```swift
optional func actionSheet(_ actionSheet: UIActionSheet, didDismissWithButtonIndex buttonIndex: Int)
```

## Parameters

- `actionSheet`: The action sheet that was dismissed.
- `buttonIndex`: The index of the button that was clicked. The button indices start at `0`. If this is the cancel button index, the action sheet is canceling. If `-1`, the cancel button index is not set.

<a id="Discussion"></a>

## Discussion

This method is invoked after the animation ends and the view is hidden.

## See Also

### Customizing behavior

- [willPresent(\_:)](willpresent%28__%29.md): Deprecated. Sent to the delegate before an action sheet is presented to the user.
- [didPresent(\_:)](didpresent%28__%29.md): Deprecated. Sent to the delegate after an action sheet is presented to the user.
- [actionSheet(\_:willDismissWithButtonIndex:)](actionsheet%28__willdismisswithbuttonindex_%29.md): Deprecated. Sent to the delegate before an action sheet is dismissed.

# actionSheet:didDismissWithButtonIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the delegate after an action sheet is dismissed from the screen.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```objectivec
- (void) actionSheet:(UIActionSheet *) actionSheet didDismissWithButtonIndex:(NSInteger) buttonIndex;
```

## Parameters

- `actionSheet`: The action sheet that was dismissed.
- `buttonIndex`: The index of the button that was clicked. The button indices start at `0`. If this is the cancel button index, the action sheet is canceling. If `-1`, the cancel button index is not set.

<a id="Discussion"></a>

## Discussion

This method is invoked after the animation ends and the view is hidden.

## See Also

### Customizing behavior

- [willPresentActionSheet:](willpresent%28__%29.md): Deprecated. Sent to the delegate before an action sheet is presented to the user.
- [didPresentActionSheet:](didpresent%28__%29.md): Deprecated. Sent to the delegate after an action sheet is presented to the user.
- [actionSheet:willDismissWithButtonIndex:](actionsheet%28__willdismisswithbuttonindex_%29.md): Deprecated. Sent to the delegate before an action sheet is dismissed.
