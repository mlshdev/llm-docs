> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/markedtextrange](https://developer.apple.com/documentation/uikit/uitextinput/markedtextrange)

# markedTextRange (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The range of currently marked text in a document.

## Declaration

```swift
var markedTextRange: UITextRange? { get }
```

<a id="Discussion"></a>

## Discussion

If there is no marked text, the value of the property is `nil`. Marked text is provisionally inserted text that requires user confirmation; it occurs in multistage text input. The current selection, which can be a caret or an extended range, always occurs within the marked text.

## See Also

### Working with marked and selected text

- [selectedTextRange](selectedtextrange.md): The range of selected text in a document.
- [markedTextStyle](markedtextstyle.md): A dictionary of attributes that describes how to draw marked text.
- [setMarkedText(\_:selectedRange:)](setmarkedtext%28__selectedrange_%29.md): Inserts the provided text and marks it to indicate that it is part of an active input session.
- [setAttributedMarkedText(\_:selectedRange:)](setattributedmarkedtext%28__selectedrange_%29.md): Inserts the provided styled text and marks it to indicate that it is part of an active input session.
- [unmarkText()](unmarktext%28%29.md): Unmarks the currently marked text.
- [selectionAffinity](selectionaffinity.md): The desired location for the insertion point.

# markedTextRange (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The range of currently marked text in a document.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UITextRange * markedTextRange;
```

<a id="Discussion"></a>

## Discussion

If there is no marked text, the value of the property is `nil`. Marked text is provisionally inserted text that requires user confirmation; it occurs in multistage text input. The current selection, which can be a caret or an extended range, always occurs within the marked text.

## See Also

### Working with marked and selected text

- [selectedTextRange](selectedtextrange.md): The range of selected text in a document.
- [markedTextStyle](markedtextstyle.md): A dictionary of attributes that describes how to draw marked text.
- [setMarkedText:selectedRange:](setmarkedtext%28__selectedrange_%29.md): Inserts the provided text and marks it to indicate that it is part of an active input session.
- [setAttributedMarkedText:selectedRange:](setattributedmarkedtext%28__selectedrange_%29.md): Inserts the provided styled text and marks it to indicate that it is part of an active input session.
- [unmarkText](unmarktext%28%29.md): Unmarks the currently marked text.
- [selectionAffinity](selectionaffinity.md): The desired location for the insertion point.
