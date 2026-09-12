> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextview/selectedrange](https://developer.apple.com/documentation/uikit/uitextview/selectedrange)

# selectedRange (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS  (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The current selection range of the text view.

## Declaration

```swift
var selectedRange: NSRange { get set }
```

<a id="Discussion"></a>

## Discussion

In iOS 2.2 and earlier, the length of the selection range is always 0, indicating that the selection is actually an insertion point. In iOS 3.0 and later, the length of the selection range may be non-zero.

## See Also

### Working with the selection

- [scrollRangeToVisible(\_:)](scrollrangetovisible%28__%29.md): Scrolls the text view until the text in the specified range is visible.
- [clearsOnInsertion](clearsoninsertion.md): A Boolean value that indicates whether inserting text replaces the previous contents.
- [isSelectable](isselectable.md): A Boolean value that indicates whether the text view is selectable.

# selectedRange (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS  (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The current selection range of the text view.

## Declaration

```objectivec
@property (nonatomic) NSRange selectedRange;
```

<a id="Discussion"></a>

## Discussion

In iOS 2.2 and earlier, the length of the selection range is always 0, indicating that the selection is actually an insertion point. In iOS 3.0 and later, the length of the selection range may be non-zero.

## See Also

### Working with the selection

- [scrollRangeToVisible:](scrollrangetovisible%28__%29.md): Scrolls the text view until the text in the specified range is visible.
- [clearsOnInsertion](clearsoninsertion.md): A Boolean value that indicates whether inserting text replaces the previous contents.
- [selectable](isselectable.md): A Boolean value that indicates whether the text view is selectable.
