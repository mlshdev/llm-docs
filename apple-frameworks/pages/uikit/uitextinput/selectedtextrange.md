> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/selectedtextrange](https://developer.apple.com/documentation/uikit/uitextinput/selectedtextrange)

# selectedTextRange (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The range of selected text in a document.

## Declaration

```swift
@NSCopying var selectedTextRange: UITextRange? { get set }
```

<a id="Discussion"></a>

## Discussion

If the text range has a length, it indicates the currently selected text. If it has zero length, it indicates the caret (insertion point). If the text-range object is `nil`, it indicates that there is no current selection.

## See Also

### Related Documentation

- [isEmpty](../uitextrange/isempty.md): A Boolean value that indicates whether the range of text represented by the receiver is zero-length.

### Working with marked and selected text

- [markedTextRange](markedtextrange.md): The range of currently marked text in a document.
- [markedTextStyle](markedtextstyle.md): A dictionary of attributes that describes how to draw marked text.
- [setMarkedText(\_:selectedRange:)](setmarkedtext%28__selectedrange_%29.md): Inserts the provided text and marks it to indicate that it is part of an active input session.
- [setAttributedMarkedText(\_:selectedRange:)](setattributedmarkedtext%28__selectedrange_%29.md): Inserts the provided styled text and marks it to indicate that it is part of an active input session.
- [unmarkText()](unmarktext%28%29.md): Unmarks the currently marked text.
- [selectionAffinity](selectionaffinity.md): The desired location for the insertion point.

# selectedTextRange (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The range of selected text in a document.

## Declaration

```objectivec
@property (copy, readwrite, nullable) UITextRange * selectedTextRange;
```

<a id="Discussion"></a>

## Discussion

If the text range has a length, it indicates the currently selected text. If it has zero length, it indicates the caret (insertion point). If the text-range object is `nil`, it indicates that there is no current selection.

## See Also

### Related Documentation

- [empty](../uitextrange/isempty.md): A Boolean value that indicates whether the range of text represented by the receiver is zero-length.

### Working with marked and selected text

- [markedTextRange](markedtextrange.md): The range of currently marked text in a document.
- [markedTextStyle](markedtextstyle.md): A dictionary of attributes that describes how to draw marked text.
- [setMarkedText:selectedRange:](setmarkedtext%28__selectedrange_%29.md): Inserts the provided text and marks it to indicate that it is part of an active input session.
- [setAttributedMarkedText:selectedRange:](setattributedmarkedtext%28__selectedrange_%29.md): Inserts the provided styled text and marks it to indicate that it is part of an active input session.
- [unmarkText](unmarktext%28%29.md): Unmarks the currently marked text.
- [selectionAffinity](selectionaffinity.md): The desired location for the insertion point.
