> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinputdelegate/shoulddefereventhandlingtosystem(for:context:)](https://developer.apple.com/documentation/browserenginekit/betextinputdelegate/shoulddefereventhandlingtosystem(for:context:))

# shouldDeferEventHandlingToSystem(for:context:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

Notify the text system that your web browser’s custom text view isn’t handling key events.

## Declaration

```swift
func shouldDeferEventHandlingToSystem(for textInput: any BETextInput, context keyEventContext: BEKeyEntryContext) -> Bool
```

## Parameters

- `textInput`: The view for which the system needs to take over event handling.
- `keyEventContext`: Information about the key event and the document it targets.

<a id="return-value"></a>

## Return Value

`true` if the system handles the key event; `false` otherwise.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

Call this method on your [asyncInputDelegate](../betextinput/asyncinputdelegate.md) when your [BETextInput](../betextinput.md) view doesn’t handle a key event, and you pass `false` to the `completionHandler` for [handleKeyEntry(\_:completionHandler:)](../betextinput/handlekeyentry%28__completionhandler_%29.md).

## See Also

### Deferring actions to the text system

- [textInput(\_:deferReplaceTextActionToSystem:)](textinput%28__deferreplacetextactiontosystem_%29.md): Defers a replace text action to the ssytem.

# shouldDeferEventHandlingToSystemForTextInput:context: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

Notify the text system that your web browser’s custom text view isn’t handling key events.

## Declaration

```objectivec
- (BOOL) shouldDeferEventHandlingToSystemForTextInput:(id<BETextInput>) textInput context:(BEKeyEntryContext *) keyEventContext;
```

## Parameters

- `textInput`: The view for which the system needs to take over event handling.
- `keyEventContext`: Information about the key event and the document it targets.

<a id="return-value"></a>

## Return Value

`true` if the system handles the key event; `false` otherwise.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

Call this method on your [asyncInputDelegate](../betextinput/asyncinputdelegate.md) when your [BETextInput](../betextinput.md) view doesn’t handle a key event, and you pass `false` to the `completionHandler` for [handleKeyEntry:withCompletionHandler:](../betextinput/handlekeyentry%28__completionhandler_%29.md).

## See Also

### Deferring actions to the text system

- [textInput:deferReplaceTextActionToSystem:](textinput%28__deferreplacetextactiontosystem_%29.md): Defers a replace text action to the ssytem.
