> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/setattributedmarkedtext(_:selectedrange:)](https://developer.apple.com/documentation/uikit/uitextinput/setattributedmarkedtext(_:selectedrange:))

# setAttributedMarkedText(\_:selectedRange:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Inserts the provided styled text and marks it to indicate that it is part of an active input session.

## Declaration

```swift
optional func setAttributedMarkedText(_ markedText: NSAttributedString?, selectedRange: NSRange)
```

## See Also

### Working with marked and selected text

- [selectedTextRange](selectedtextrange.md): The range of selected text in a document.
- [markedTextRange](markedtextrange.md): The range of currently marked text in a document.
- [markedTextStyle](markedtextstyle.md): A dictionary of attributes that describes how to draw marked text.
- [setMarkedText(\_:selectedRange:)](setmarkedtext%28__selectedrange_%29.md): Inserts the provided text and marks it to indicate that it is part of an active input session.
- [unmarkText()](unmarktext%28%29.md): Unmarks the currently marked text.
- [selectionAffinity](selectionaffinity.md): The desired location for the insertion point.

# setAttributedMarkedText:selectedRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Inserts the provided styled text and marks it to indicate that it is part of an active input session.

## Declaration

```objectivec
- (void) setAttributedMarkedText:(NSAttributedString *) markedText selectedRange:(NSRange) selectedRange;
```

## See Also

### Working with marked and selected text

- [selectedTextRange](selectedtextrange.md): The range of selected text in a document.
- [markedTextRange](markedtextrange.md): The range of currently marked text in a document.
- [markedTextStyle](markedtextstyle.md): A dictionary of attributes that describes how to draw marked text.
- [setMarkedText:selectedRange:](setmarkedtext%28__selectedrange_%29.md): Inserts the provided text and marks it to indicate that it is part of an active input session.
- [unmarkText](unmarktext%28%29.md): Unmarks the currently marked text.
- [selectionAffinity](selectionaffinity.md): The desired location for the insertion point.
