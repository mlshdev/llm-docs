> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/markedtextstyle](https://developer.apple.com/documentation/uikit/uitextinput/markedtextstyle)

# markedTextStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A dictionary of attributes that describes how to draw marked text.

## Declaration

```swift
var markedTextStyle: [NSAttributedString.Key : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

Marked text requires a unique visual treatment when displayed to users. See [Style dictionary keys](../style-dictionary-keys.md) for descriptions of the valid keys and values for this dictionary.

## See Also

### Working with marked and selected text

- [selectedTextRange](selectedtextrange.md): The range of selected text in a document.
- [markedTextRange](markedtextrange.md): The range of currently marked text in a document.
- [setMarkedText(\_:selectedRange:)](setmarkedtext%28__selectedrange_%29.md): Inserts the provided text and marks it to indicate that it is part of an active input session.
- [setAttributedMarkedText(\_:selectedRange:)](setattributedmarkedtext%28__selectedrange_%29.md): Inserts the provided styled text and marks it to indicate that it is part of an active input session.
- [unmarkText()](unmarktext%28%29.md): Unmarks the currently marked text.
- [selectionAffinity](selectionaffinity.md): The desired location for the insertion point.

# markedTextStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A dictionary of attributes that describes how to draw marked text.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDictionary<NSString *,id> * markedTextStyle;
```

<a id="Discussion"></a>

## Discussion

Marked text requires a unique visual treatment when displayed to users. See [Style dictionary keys](../style-dictionary-keys.md) for descriptions of the valid keys and values for this dictionary.

## See Also

### Working with marked and selected text

- [selectedTextRange](selectedtextrange.md): The range of selected text in a document.
- [markedTextRange](markedtextrange.md): The range of currently marked text in a document.
- [setMarkedText:selectedRange:](setmarkedtext%28__selectedrange_%29.md): Inserts the provided text and marks it to indicate that it is part of an active input session.
- [setAttributedMarkedText:selectedRange:](setattributedmarkedtext%28__selectedrange_%29.md): Inserts the provided styled text and marks it to indicate that it is part of an active input session.
- [unmarkText](unmarktext%28%29.md): Unmarks the currently marked text.
- [selectionAffinity](selectionaffinity.md): The desired location for the insertion point.
