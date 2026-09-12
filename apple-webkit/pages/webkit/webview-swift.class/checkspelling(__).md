> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/checkspelling(_:)](https://developer.apple.com/documentation/webkit/webview-swift.class/checkspelling(_:))

# checkSpelling(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method that searches for a misspelled word in the receiver.

## Declaration

```swift
func checkSpelling(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

This action method starts a search at the end of the selection and continues until it reaches a word suspected of being misspelled or the end of the content. If a word isn’t recognized by the spelling server, a [showGuessPanel(\_:)](showguesspanel%28__%29.md) message is sent to the receiver which opens the Guess panel and allows the user to make a correction or add the word to the local dictionary.

## See Also

### Spell-checking Action Methods

- [showGuessPanel(\_:)](showguesspanel%28__%29.md): An action method that shows a spelling correction panel.

# checkSpelling: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method that searches for a misspelled word in the receiver.

## Declaration

```objectivec
- (void) checkSpelling:(id) sender;
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

This action method starts a search at the end of the selection and continues until it reaches a word suspected of being misspelled or the end of the content. If a word isn’t recognized by the spelling server, a [showGuessPanel:](showguesspanel%28__%29.md) message is sent to the receiver which opens the Guess panel and allows the user to make a correction or add the word to the local dictionary.

## See Also

### Spell-checking Action Methods

- [showGuessPanel:](showguesspanel%28__%29.md): An action method that shows a spelling correction panel.
