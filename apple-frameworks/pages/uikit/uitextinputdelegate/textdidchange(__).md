> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputdelegate/textdidchange(_:)](https://developer.apple.com/documentation/uikit/uitextinputdelegate/textdidchange(_:))

# textDidChange(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the input delegate when text has changed in the document.

## Declaration

```swift
func textDidChange(_ textInput: (any UITextInput)?)
```

## Parameters

- `textInput`: The document instance whose class adopts the UITextInput protocol.

## See Also

### Related Documentation

- [selectionDidChange(\_:)](selectiondidchange%28__%29.md): Tells the input delegate when the selection has changed in the document.

### Notifying the delegate of textual changes

- [textWillChange(\_:)](textwillchange%28__%29.md): Tells the input delegate when text is about to change in the document.

# textDidChange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the input delegate when text has changed in the document.

## Declaration

```objectivec
- (void) textDidChange:(id<UITextInput>) textInput;
```

## Parameters

- `textInput`: The document instance whose class adopts the UITextInput protocol.

## See Also

### Related Documentation

- [selectionDidChange:](selectiondidchange%28__%29.md): Tells the input delegate when the selection has changed in the document.

### Notifying the delegate of textual changes

- [textWillChange:](textwillchange%28__%29.md): Tells the input delegate when text is about to change in the document.
