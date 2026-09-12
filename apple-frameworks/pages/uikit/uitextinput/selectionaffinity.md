> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/selectionaffinity](https://developer.apple.com/documentation/uikit/uitextinput/selectionaffinity)

# selectionAffinity (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The desired location for the insertion point.

## Declaration

```swift
optional var selectionAffinity: UITextStorageDirection { get set }
```

<a id="Discussion"></a>

## Discussion

For text selections that wrap across line boundaries, this property determines whether the insertion point appears after the last character on the line or before the first character on the following line. The selection affinity is set in response to the user navigating via the keyboard (for example, command-right-arrow). The text input system checks this property when it moves the insertion point around in a document.

In the default implementation, if the selection is not at the end of the line, or if the selection is at the start of a paragraph for an empty line, a forward direction is assumed ([UITextStorageDirection.forward](../uitextstoragedirection/forward.md)); otherwise, a backward direction [UITextStorageDirection.backward](../uitextstoragedirection/backward.md) is assumed.

## See Also

### Working with marked and selected text

- [selectedTextRange](selectedtextrange.md): The range of selected text in a document.
- [markedTextRange](markedtextrange.md): The range of currently marked text in a document.
- [markedTextStyle](markedtextstyle.md): A dictionary of attributes that describes how to draw marked text.
- [setMarkedText(\_:selectedRange:)](setmarkedtext%28__selectedrange_%29.md): Inserts the provided text and marks it to indicate that it is part of an active input session.
- [setAttributedMarkedText(\_:selectedRange:)](setattributedmarkedtext%28__selectedrange_%29.md): Inserts the provided styled text and marks it to indicate that it is part of an active input session.
- [unmarkText()](unmarktext%28%29.md): Unmarks the currently marked text.

# selectionAffinity (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The desired location for the insertion point.

## Declaration

```objectivec
@property (nonatomic) UITextStorageDirection selectionAffinity;
```

<a id="Discussion"></a>

## Discussion

For text selections that wrap across line boundaries, this property determines whether the insertion point appears after the last character on the line or before the first character on the following line. The selection affinity is set in response to the user navigating via the keyboard (for example, command-right-arrow). The text input system checks this property when it moves the insertion point around in a document.

In the default implementation, if the selection is not at the end of the line, or if the selection is at the start of a paragraph for an empty line, a forward direction is assumed ([UITextStorageDirectionForward](../uitextstoragedirection/forward.md)); otherwise, a backward direction [UITextStorageDirectionBackward](../uitextstoragedirection/backward.md) is assumed.

## See Also

### Working with marked and selected text

- [selectedTextRange](selectedtextrange.md): The range of selected text in a document.
- [markedTextRange](markedtextrange.md): The range of currently marked text in a document.
- [markedTextStyle](markedtextstyle.md): A dictionary of attributes that describes how to draw marked text.
- [setMarkedText:selectedRange:](setmarkedtext%28__selectedrange_%29.md): Inserts the provided text and marks it to indicate that it is part of an active input session.
- [setAttributedMarkedText:selectedRange:](setattributedmarkedtext%28__selectedrange_%29.md): Inserts the provided styled text and marks it to indicate that it is part of an active input session.
- [unmarkText](unmarktext%28%29.md): Unmarks the currently marked text.
