> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/unmarktext()](https://developer.apple.com/documentation/uikit/uitextinput/unmarktext())

# unmarkText() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Unmarks the currently marked text.

## Declaration

```swift
func unmarkText()
```

<a id="Discussion"></a>

## Discussion

After this method is called, the value of [markedTextRange](markedtextrange.md) is `nil`.

## See Also

### Working with marked and selected text

- [selectedTextRange](selectedtextrange.md): The range of selected text in a document.
- [markedTextRange](markedtextrange.md): The range of currently marked text in a document.
- [markedTextStyle](markedtextstyle.md): A dictionary of attributes that describes how to draw marked text.
- [setMarkedText(\_:selectedRange:)](setmarkedtext%28__selectedrange_%29.md): Inserts the provided text and marks it to indicate that it is part of an active input session.
- [setAttributedMarkedText(\_:selectedRange:)](setattributedmarkedtext%28__selectedrange_%29.md): Inserts the provided styled text and marks it to indicate that it is part of an active input session.
- [selectionAffinity](selectionaffinity.md): The desired location for the insertion point.

# unmarkText (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Unmarks the currently marked text.

## Declaration

```objectivec
- (void) unmarkText;
```

<a id="Discussion"></a>

## Discussion

After this method is called, the value of [markedTextRange](markedtextrange.md) is `nil`.

## See Also

### Working with marked and selected text

- [selectedTextRange](selectedtextrange.md): The range of selected text in a document.
- [markedTextRange](markedtextrange.md): The range of currently marked text in a document.
- [markedTextStyle](markedtextstyle.md): A dictionary of attributes that describes how to draw marked text.
- [setMarkedText:selectedRange:](setmarkedtext%28__selectedrange_%29.md): Inserts the provided text and marks it to indicate that it is part of an active input session.
- [setAttributedMarkedText:selectedRange:](setattributedmarkedtext%28__selectedrange_%29.md): Inserts the provided styled text and marks it to indicate that it is part of an active input session.
- [selectionAffinity](selectionaffinity.md): The desired location for the insertion point.
