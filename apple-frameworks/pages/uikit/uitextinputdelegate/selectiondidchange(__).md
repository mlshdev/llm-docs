> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputdelegate/selectiondidchange(_:)](https://developer.apple.com/documentation/uikit/uitextinputdelegate/selectiondidchange(_:))

# selectionDidChange(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the input delegate when the selection has changed in the document.

## Declaration

```swift
func selectionDidChange(_ textInput: (any UITextInput)?)
```

## Parameters

- `textInput`: The document instance whose class adopts the UITextInput protocol.

## See Also

### Related Documentation

- [textDidChange(\_:)](textdidchange%28__%29.md): Tells the input delegate when text has changed in the document.

### Notifying the delegate of selection changes

- [selectionWillChange(\_:)](selectionwillchange%28__%29.md): Tells the input delegate when the selection is about to change in the document.

# selectionDidChange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the input delegate when the selection has changed in the document.

## Declaration

```objectivec
- (void) selectionDidChange:(id<UITextInput>) textInput;
```

## Parameters

- `textInput`: The document instance whose class adopts the UITextInput protocol.

## See Also

### Related Documentation

- [textDidChange:](textdidchange%28__%29.md): Tells the input delegate when text has changed in the document.

### Notifying the delegate of selection changes

- [selectionWillChange:](selectionwillchange%28__%29.md): Tells the input delegate when the selection is about to change in the document.
