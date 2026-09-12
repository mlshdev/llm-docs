> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/setmarkedtext(_:selectedrange:)](https://developer.apple.com/documentation/uikit/uitextinput/setmarkedtext(_:selectedrange:))

# setMarkedText(\_:selectedRange:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Inserts the provided text and marks it to indicate that it is part of an active input session.

## Declaration

```swift
func setMarkedText(_ markedText: String?, selectedRange: NSRange)
```

## Parameters

- `markedText`: The text to be marked.
- `selectedRange`: A range within `markedText` that indicates the current selection. This range is always relative to `markedText`.

<a id="Discussion"></a>

## Discussion

Setting marked text either replaces the existing marked text or, if none is present, inserts it in place of the current selection.

## See Also

### Working with marked and selected text

- [selectedTextRange](selectedtextrange.md): The range of selected text in a document.
- [markedTextRange](markedtextrange.md): The range of currently marked text in a document.
- [markedTextStyle](markedtextstyle.md): A dictionary of attributes that describes how to draw marked text.
- [setAttributedMarkedText(\_:selectedRange:)](setattributedmarkedtext%28__selectedrange_%29.md): Inserts the provided styled text and marks it to indicate that it is part of an active input session.
- [unmarkText()](unmarktext%28%29.md): Unmarks the currently marked text.
- [selectionAffinity](selectionaffinity.md): The desired location for the insertion point.

# setMarkedText:selectedRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Inserts the provided text and marks it to indicate that it is part of an active input session.

## Declaration

```objectivec
- (void) setMarkedText:(NSString *) markedText selectedRange:(NSRange) selectedRange;
```

## Parameters

- `markedText`: The text to be marked.
- `selectedRange`: A range within `markedText` that indicates the current selection. This range is always relative to `markedText`.

<a id="Discussion"></a>

## Discussion

Setting marked text either replaces the existing marked text or, if none is present, inserts it in place of the current selection.

## See Also

### Working with marked and selected text

- [selectedTextRange](selectedtextrange.md): The range of selected text in a document.
- [markedTextRange](markedtextrange.md): The range of currently marked text in a document.
- [markedTextStyle](markedtextstyle.md): A dictionary of attributes that describes how to draw marked text.
- [setAttributedMarkedText:selectedRange:](setattributedmarkedtext%28__selectedrange_%29.md): Inserts the provided styled text and marks it to indicate that it is part of an active input session.
- [unmarkText](unmarktext%28%29.md): Unmarks the currently marked text.
- [selectionAffinity](selectionaffinity.md): The desired location for the insertion point.
