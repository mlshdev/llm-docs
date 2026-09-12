> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextview/isselectable](https://developer.apple.com/documentation/uikit/uitextview/isselectable)

# isSelectable (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the text view is selectable.

## Declaration

```swift
var isSelectable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property controls the ability of the user to select content and interact with URLs and text attachments. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Working with the selection

- [selectedRange](selectedrange.md): Deprecated. The current selection range of the text view.
- [scrollRangeToVisible(\_:)](scrollrangetovisible%28__%29.md): Scrolls the text view until the text in the specified range is visible.
- [clearsOnInsertion](clearsoninsertion.md): A Boolean value that indicates whether inserting text replaces the previous contents.

# selectable (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the text view is selectable.

## Declaration

```objectivec
@property (nonatomic, getter=isSelectable) BOOL selectable;
```

<a id="Discussion"></a>

## Discussion

This property controls the ability of the user to select content and interact with URLs and text attachments. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Working with the selection

- [selectedRange](selectedrange.md): Deprecated. The current selection range of the text view.
- [scrollRangeToVisible:](scrollrangetovisible%28__%29.md): Scrolls the text view until the text in the specified range is visible.
- [clearsOnInsertion](clearsoninsertion.md): A Boolean value that indicates whether inserting text replaces the previous contents.
