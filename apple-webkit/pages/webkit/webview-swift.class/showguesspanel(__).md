> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/webview-swift.class/showguesspanel(_:)

# showGuessPanel(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method that shows a spelling correction panel.

## Declaration

```swift
func showGuessPanel(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

This action method opens the Spelling panel, allowing the user to make a correction during spell checking.

## See Also

### Spell-checking Action Methods

- [checkSpelling(\_:)](checkspelling%28__%29.md): An action method that searches for a misspelled word in the receiver.

# showGuessPanel: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method that shows a spelling correction panel.

## Declaration

```objectivec
- (void) showGuessPanel:(id) sender;
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

This action method opens the Spelling panel, allowing the user to make a correction during spell checking.

## See Also

### Spell-checking Action Methods

- [checkSpelling:](checkspelling%28__%29.md): An action method that searches for a misspelled word in the receiver.
