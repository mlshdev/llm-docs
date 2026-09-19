> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitextinputdelegate/textwillchange(_:)

# textWillChange(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the input delegate when text is about to change in the document.

## Declaration

```swift
func textWillChange(_ textInput: (any UITextInput)?)
```

## Parameters

- `textInput`: The document instance whose class adopts the UITextInput protocol.

## Mentioned In

- [Configuring a custom keyboard interface](../configuring-a-custom-keyboard-interface.md)

## See Also

### Related Documentation

- [selectionWillChange(\_:)](selectionwillchange%28__%29.md): Tells the input delegate when the selection is about to change in the document.

### Notifying the delegate of textual changes

- [textDidChange(\_:)](textdidchange%28__%29.md): Tells the input delegate when text has changed in the document.

# textWillChange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the input delegate when text is about to change in the document.

## Declaration

```objectivec
- (void) textWillChange:(id<UITextInput>) textInput;
```

## Parameters

- `textInput`: The document instance whose class adopts the UITextInput protocol.

## Mentioned In

- [Configuring a custom keyboard interface](../configuring-a-custom-keyboard-interface.md)

## See Also

### Related Documentation

- [selectionWillChange:](selectionwillchange%28__%29.md): Tells the input delegate when the selection is about to change in the document.

### Notifying the delegate of textual changes

- [textDidChange:](textdidchange%28__%29.md): Tells the input delegate when text has changed in the document.
