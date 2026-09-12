> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinputdelegate/invalidatetextentrycontext(for:)](https://developer.apple.com/documentation/browserenginekit/betextinputdelegate/invalidatetextentrycontext(for:))

# invalidateTextEntryContext(for:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

Tells the system the text entry context has changed and that text entry UI’s need to be refreshed.

## Declaration

```swift
func invalidateTextEntryContext(for textInput: any BETextInput)
```

<a id="discussion"></a>

## Discussion

This is a costly operation and should only used with intention.  For example, when switching focus between different elements.

# invalidateTextEntryContextForTextInput: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

Tells the system the text entry context has changed and that text entry UI’s need to be refreshed.

## Declaration

```objectivec
- (void) invalidateTextEntryContextForTextInput:(id<BETextInput>) textInput;
```

<a id="discussion"></a>

## Discussion

This is a costly operation and should only used with intention.  For example, when switching focus between different elements.
