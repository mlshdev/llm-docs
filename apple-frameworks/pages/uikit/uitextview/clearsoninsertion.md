> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextview/clearsoninsertion](https://developer.apple.com/documentation/uikit/uitextview/clearsoninsertion)

# clearsOnInsertion (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether inserting text replaces the previous contents.

## Declaration

```swift
var clearsOnInsertion: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). When the value of this property is [true](https://developer.apple.com/documentation/swift/true) and the text view is in editing mode, the selection UI is hidden and inserting new text clears the contents of the text view and sets the value of this property back to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Working with the selection

- [selectedRange](selectedrange.md): Deprecated. The current selection range of the text view.
- [scrollRangeToVisible(\_:)](scrollrangetovisible%28__%29.md): Scrolls the text view until the text in the specified range is visible.
- [isSelectable](isselectable.md): A Boolean value that indicates whether the text view is selectable.

# clearsOnInsertion (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether inserting text replaces the previous contents.

## Declaration

```objectivec
@property (nonatomic) BOOL clearsOnInsertion;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). When the value of this property is [true](https://developer.apple.com/documentation/swift/true) and the text view is in editing mode, the selection UI is hidden and inserting new text clears the contents of the text view and sets the value of this property back to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Working with the selection

- [selectedRange](selectedrange.md): Deprecated. The current selection range of the text view.
- [scrollRangeToVisible:](scrollrangetovisible%28__%29.md): Scrolls the text view until the text in the specified range is visible.
- [selectable](isselectable.md): A Boolean value that indicates whether the text view is selectable.
