> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinputdelegate/selectiondidchange(for:)](https://developer.apple.com/documentation/browserenginekit/betextinputdelegate/selectiondidchange(for:))

# selectionDidChange(for:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

Tells the system when the selection has changed in the document.

## Declaration

```swift
func selectionDidChange(for textInput: any BETextInput)
```

<a id="discussion"></a>

## Discussion

This method results in an document state refresh with an invocation to: -\[BETextInput requestTextContextForAutocorrectionWithCompletionHandler:\]

## See Also

### Text selection

- [selectionWillChange(for:)](selectionwillchange%28for_%29.md): Tells the system when the selection is about to change in the document.

# selectionDidChangeForTextInput: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

Tells the system when the selection has changed in the document.

## Declaration

```objectivec
- (void) selectionDidChangeForTextInput:(id<BETextInput>) textInput;
```

<a id="discussion"></a>

## Discussion

This method results in an document state refresh with an invocation to: -\[BETextInput requestTextContextForAutocorrectionWithCompletionHandler:\]

## See Also

### Text selection

- [selectionWillChangeForTextInput:](selectionwillchange%28for_%29.md): Tells the system when the selection is about to change in the document.
