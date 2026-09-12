> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputdelegate/selectionwillchange(_:)](https://developer.apple.com/documentation/uikit/uitextinputdelegate/selectionwillchange(_:))

# selectionWillChange(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the input delegate when the selection is about to change in the document.

## Declaration

```swift
func selectionWillChange(_ textInput: (any UITextInput)?)
```

## Parameters

- `textInput`: The document instance whose class adopts the UITextInput protocol.

## See Also

### Related Documentation

- [textWillChange(\_:)](textwillchange%28__%29.md): Tells the input delegate when text is about to change in the document.

### Notifying the delegate of selection changes

- [selectionDidChange(\_:)](selectiondidchange%28__%29.md): Tells the input delegate when the selection has changed in the document.

# selectionWillChange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the input delegate when the selection is about to change in the document.

## Declaration

```objectivec
- (void) selectionWillChange:(id<UITextInput>) textInput;
```

## Parameters

- `textInput`: The document instance whose class adopts the UITextInput protocol.

## See Also

### Related Documentation

- [textWillChange:](textwillchange%28__%29.md): Tells the input delegate when text is about to change in the document.

### Notifying the delegate of selection changes

- [selectionDidChange:](selectiondidchange%28__%29.md): Tells the input delegate when the selection has changed in the document.
