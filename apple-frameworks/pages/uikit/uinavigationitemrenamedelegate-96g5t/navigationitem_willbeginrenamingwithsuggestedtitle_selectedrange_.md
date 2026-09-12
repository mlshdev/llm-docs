> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitemrenamedelegate-96g5t/navigationitem:willbeginrenamingwithsuggestedtitle:selectedrange:](https://developer.apple.com/documentation/uikit/uinavigationitemrenamedelegate-96g5t/navigationitem:willbeginrenamingwithsuggestedtitle:selectedrange:)

# navigationItem:willBeginRenamingWithSuggestedTitle:selectedRange:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Tells the delegate when the rename process starts.

## Declaration

```objectivec
- (NSString *) navigationItem:(UINavigationItem *) navigationItem willBeginRenamingWithSuggestedTitle:(NSString *) title selectedRange:(NSRange *) selectedRange;
```

## Parameters

- `navigationItem`: The navigation item with the changing title.
- `title`: The initial text to appear in the rename text field.
- `selectedRange`: The selected range of the initial text in the rename text field.

<a id="return-value"></a>

## Return Value

A string that contains the initial text that appears in the rename text field, and a range that determines which part of that text has selection.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the rename process begins. Implement this method to customize the initial text and text selection that appears in the rename text field.

## See Also

### Handling the rename process

- [navigationItem:didEndRenamingWithTitle:](navigationitem_didendrenamingwithtitle_.md): Tells the delegate when the rename process ends.
