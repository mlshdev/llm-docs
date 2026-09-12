> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinputdelegate/selectionwillchange(for:)](https://developer.apple.com/documentation/browserenginekit/betextinputdelegate/selectionwillchange(for:))

# selectionWillChange(for:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

Tells the system when the selection is about to change in the document.

## Declaration

```swift
func selectionWillChange(for textInput: any BETextInput)
```

## See Also

### Text selection

- [selectionDidChange(for:)](selectiondidchange%28for_%29.md): Tells the system when the selection has changed in the document.

# selectionWillChangeForTextInput: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

Tells the system when the selection is about to change in the document.

## Declaration

```objectivec
- (void) selectionWillChangeForTextInput:(id<BETextInput>) textInput;
```

## See Also

### Text selection

- [selectionDidChangeForTextInput:](selectiondidchange%28for_%29.md): Tells the system when the selection has changed in the document.
