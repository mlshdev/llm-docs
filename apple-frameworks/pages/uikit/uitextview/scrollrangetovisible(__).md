> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextview/scrollrangetovisible(_:)](https://developer.apple.com/documentation/uikit/uitextview/scrollrangetovisible(_:))

# scrollRangeToVisible(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Scrolls the text view until the text in the specified range is visible.

## Declaration

```swift
func scrollRangeToVisible(_ range: NSRange)
```

## Parameters

- `range`: The range of text to scroll into view.

## See Also

### Working with the selection

- [selectedRange](selectedrange.md): Deprecated. The current selection range of the text view.
- [clearsOnInsertion](clearsoninsertion.md): A Boolean value that indicates whether inserting text replaces the previous contents.
- [isSelectable](isselectable.md): A Boolean value that indicates whether the text view is selectable.

# scrollRangeToVisible: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Scrolls the text view until the text in the specified range is visible.

## Declaration

```objectivec
- (void) scrollRangeToVisible:(NSRange) range;
```

## Parameters

- `range`: The range of text to scroll into view.

## See Also

### Working with the selection

- [selectedRange](selectedrange.md): Deprecated. The current selection range of the text view.
- [clearsOnInsertion](clearsoninsertion.md): A Boolean value that indicates whether inserting text replaces the previous contents.
- [selectable](isselectable.md): A Boolean value that indicates whether the text view is selectable.
