> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/checkspelling(_:)](https://developer.apple.com/documentation/appkit/nstext/checkspelling(_:))

# checkSpelling(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

This action method searches for a misspelled word in the receiver’s text.

## Declaration

```swift
func checkSpelling(_ sender: Any?)
```

<a id="Discussion"></a>

## Discussion

The search starts at the end of the selection and continues until it reaches a word suspected of being misspelled or the end of the text. If a word isn’t recognized by the spelling server, a [showGuessPanel(\_:)](showguesspanel%28__%29.md) message then opens the Guess panel and allows the user to make a correction or add the word to the local dictionary.

## See Also

### Checking spelling

- [showGuessPanel(\_:)](showguesspanel%28__%29.md): This action method opens the Spelling panel, allowing the user to make a correction during spell checking.

# checkSpelling: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

This action method searches for a misspelled word in the receiver’s text.

## Declaration

```objectivec
- (void) checkSpelling:(id) sender;
```

<a id="Discussion"></a>

## Discussion

The search starts at the end of the selection and continues until it reaches a word suspected of being misspelled or the end of the text. If a word isn’t recognized by the spelling server, a [showGuessPanel:](showguesspanel%28__%29.md) message then opens the Guess panel and allows the user to make a correction or add the word to the local dictionary.

## See Also

### Checking spelling

- [showGuessPanel:](showguesspanel%28__%29.md): This action method opens the Spelling panel, allowing the user to make a correction during spell checking.
