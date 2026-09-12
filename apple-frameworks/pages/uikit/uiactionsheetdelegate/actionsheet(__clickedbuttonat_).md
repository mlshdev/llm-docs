> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactionsheetdelegate/actionsheet(_:clickedbuttonat:)](https://developer.apple.com/documentation/uikit/uiactionsheetdelegate/actionsheet(_:clickedbuttonat:))

# actionSheet(\_:clickedButtonAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the delegate when the user clicks a button on an action sheet.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```swift
optional func actionSheet(_ actionSheet: UIActionSheet, clickedButtonAt buttonIndex: Int)
```

## Parameters

- `actionSheet`: The action sheet containing the button.
- `buttonIndex`: The position of the clicked button. The button indices start at `0`.

<a id="Discussion"></a>

## Discussion

The receiver is automatically dismissed after this method is invoked.

# actionSheet:clickedButtonAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent to the delegate when the user clicks a button on an action sheet.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```objectivec
- (void) actionSheet:(UIActionSheet *) actionSheet clickedButtonAtIndex:(NSInteger) buttonIndex;
```

## Parameters

- `actionSheet`: The action sheet containing the button.
- `buttonIndex`: The position of the clicked button. The button indices start at `0`.

<a id="Discussion"></a>

## Discussion

The receiver is automatically dismissed after this method is invoked.
