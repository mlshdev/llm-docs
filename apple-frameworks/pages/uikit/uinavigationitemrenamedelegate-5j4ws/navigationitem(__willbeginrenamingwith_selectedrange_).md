> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitemrenamedelegate-5j4ws/navigationitem(_:willbeginrenamingwith:selectedrange:)](https://developer.apple.com/documentation/uikit/uinavigationitemrenamedelegate-5j4ws/navigationitem(_:willbeginrenamingwith:selectedrange:))

# navigationItem(\_:willBeginRenamingWith:selectedRange:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Tells the delegate when the rename process starts.

## Declaration

```swift
@MainActor @preconcurrency func navigationItem(_: UINavigationItem, willBeginRenamingWith suggestedTitle: String, selectedRange: Range<String.Index>) -> (String, Range<String.Index>)
```

## Parameters

- `_`: The navigation item with the changing title.
- `suggestedTitle`: The initial text to appear in the rename text field.
- `selectedRange`: The selected range of the initial text in the rename text field.

<a id="return-value"></a>

## Return Value

A string that contains the initial text that appears in the rename text field, and a range that determines which part of that text has selection.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the rename process begins. Implement this method to customize the initial text and text selection that appears in the rename text field.

## Default Implementations

### UINavigationItemRenameDelegate Implementations

- [navigationItem(\_:willBeginRenamingWith:selectedRange:)](navigationitem%28__willbeginrenamingwith_selectedrange_%29-396y6.md)

## See Also

### Handling the rename process

- [navigationItem(\_:didEndRenamingWith:)](navigationitem%28__didendrenamingwith_%29.md): Tells the delegate when the rename process ends.
