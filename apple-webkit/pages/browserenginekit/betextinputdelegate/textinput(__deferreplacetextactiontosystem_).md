> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinputdelegate/textinput(_:deferreplacetextactiontosystem:)](https://developer.apple.com/documentation/browserenginekit/betextinputdelegate/textinput(_:deferreplacetextactiontosystem:))

# textInput(\_:deferReplaceTextActionToSystem:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

Defers a replace text action to the ssytem.

## Declaration

```swift
func textInput(_ textInput: any BETextInput, deferReplaceTextActionToSystem sender: Any)
```

<a id="discussion"></a>

## Discussion

When handling the replace: action, use this method to defer the replacement to the system.

For example, a replacement could be deferred after it is selected from the autocorrect replacements list.

## See Also

### Deferring actions to the text system

- [shouldDeferEventHandlingToSystem(for:context:)](shoulddefereventhandlingtosystem%28for_context_%29.md): Notify the text system that your web browser’s custom text view isn’t handling key events.

# textInput:deferReplaceTextActionToSystem: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

Defers a replace text action to the ssytem.

## Declaration

```objectivec
- (void) textInput:(id<BETextInput>) textInput deferReplaceTextActionToSystem:(id) sender;
```

<a id="discussion"></a>

## Discussion

When handling the replace: action, use this method to defer the replacement to the system.

For example, a replacement could be deferred after it is selected from the autocorrect replacements list.

## See Also

### Deferring actions to the text system

- [shouldDeferEventHandlingToSystemForTextInput:context:](shoulddefereventhandlingtosystem%28for_context_%29.md): Notify the text system that your web browser’s custom text view isn’t handling key events.
