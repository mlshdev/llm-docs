> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/berespondereditactions/replace(_:)](https://developer.apple.com/documentation/browserenginekit/berespondereditactions/replace(_:))

# replace(\_:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Removes the selected text and inputs the chosen replacement text.

## Declaration

```swift
optional func replace(_ sender: Any?)
```

## Parameters

- `sender`: The object calling this method.

<a id="discussion"></a>

## Discussion

To invoke the standard system behavior for replacing text, call [textInput(\_:deferReplaceTextActionToSystem:)](../betextinputdelegate/textinput%28__deferreplacetextactiontosystem_%29.md) in your implementation of this method.

## See Also

### Finding and replacing text

- [findSelected(\_:)](findselected%28__%29.md): Begins a search for the selected content in your browser text view.
- [promptForReplace(\_:)](promptforreplace%28__%29.md): Shows potential replacements for the selected content.
- [addShortcut(\_:)](addshortcut%28__%29.md): Adds a text-replacement shortcut to the edit dictionary.

# replace: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Removes the selected text and inputs the chosen replacement text.

## Declaration

```objectivec
- (void) replace:(id) sender;
```

## Parameters

- `sender`: The object calling this method.

<a id="discussion"></a>

## Discussion

To invoke the standard system behavior for replacing text, call [textInput:deferReplaceTextActionToSystem:](../betextinputdelegate/textinput%28__deferreplacetextactiontosystem_%29.md) in your implementation of this method.

## See Also

### Finding and replacing text

- [findSelected:](findselected%28__%29.md): Begins a search for the selected content in your browser text view.
- [promptForReplace:](promptforreplace%28__%29.md): Shows potential replacements for the selected content.
- [addShortcut:](addshortcut%28__%29.md): Adds a text-replacement shortcut to the edit dictionary.
