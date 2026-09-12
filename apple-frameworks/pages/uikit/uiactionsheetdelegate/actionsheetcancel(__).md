> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactionsheetdelegate/actionsheetcancel(_:)](https://developer.apple.com/documentation/uikit/uiactionsheetdelegate/actionsheetcancel(_:))

# actionSheetCancel(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the delegate before an action sheet is canceled.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```swift
optional func actionSheetCancel(_ actionSheet: UIActionSheet)
```

## Parameters

- `actionSheet`: The action sheet that will be canceled.

<a id="Discussion"></a>

## Discussion

If the action sheet’s delegate does not implement this method, clicking the cancel button is simulated and the action sheet is dismissed. Implement this method if you need to perform some actions before an action sheet is canceled. An action sheet can be canceled at any time by the system—for example, when the user taps the Home button. The [actionSheet(\_:willDismissWithButtonIndex:)](actionsheet%28__willdismisswithbuttonindex_%29.md) and [actionSheet(\_:didDismissWithButtonIndex:)](actionsheet%28__diddismisswithbuttonindex_%29.md) methods are invoked after this method.

# actionSheetCancel: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the delegate before an action sheet is canceled.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```objectivec
- (void) actionSheetCancel:(UIActionSheet *) actionSheet;
```

## Parameters

- `actionSheet`: The action sheet that will be canceled.

<a id="Discussion"></a>

## Discussion

If the action sheet’s delegate does not implement this method, clicking the cancel button is simulated and the action sheet is dismissed. Implement this method if you need to perform some actions before an action sheet is canceled. An action sheet can be canceled at any time by the system—for example, when the user taps the Home button. The [actionSheet:willDismissWithButtonIndex:](actionsheet%28__willdismisswithbuttonindex_%29.md) and [actionSheet:didDismissWithButtonIndex:](actionsheet%28__diddismisswithbuttonindex_%29.md) methods are invoked after this method.
