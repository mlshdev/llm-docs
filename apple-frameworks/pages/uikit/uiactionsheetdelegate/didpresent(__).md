> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactionsheetdelegate/didpresent(_:)](https://developer.apple.com/documentation/uikit/uiactionsheetdelegate/didpresent(_:))

# didPresent(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the delegate after an action sheet is presented to the user.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```swift
optional func didPresent(_ actionSheet: UIActionSheet)
```

## Parameters

- `actionSheet`: The action sheet that was displayed.

## See Also

### Customizing behavior

- [willPresent(\_:)](willpresent%28__%29.md): Deprecated. Sent to the delegate before an action sheet is presented to the user.
- [actionSheet(\_:willDismissWithButtonIndex:)](actionsheet%28__willdismisswithbuttonindex_%29.md): Deprecated. Sent to the delegate before an action sheet is dismissed.
- [actionSheet(\_:didDismissWithButtonIndex:)](actionsheet%28__diddismisswithbuttonindex_%29.md): Deprecated. Sent to the delegate after an action sheet is dismissed from the screen.

# didPresentActionSheet: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the delegate after an action sheet is presented to the user.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```objectivec
- (void) didPresentActionSheet:(UIActionSheet *) actionSheet;
```

## Parameters

- `actionSheet`: The action sheet that was displayed.

## See Also

### Customizing behavior

- [willPresentActionSheet:](willpresent%28__%29.md): Deprecated. Sent to the delegate before an action sheet is presented to the user.
- [actionSheet:willDismissWithButtonIndex:](actionsheet%28__willdismisswithbuttonindex_%29.md): Deprecated. Sent to the delegate before an action sheet is dismissed.
- [actionSheet:didDismissWithButtonIndex:](actionsheet%28__diddismisswithbuttonindex_%29.md): Deprecated. Sent to the delegate after an action sheet is dismissed from the screen.
