> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/soinputmode](https://developer.apple.com/documentation/applicationservices/soinputmode)

# soInputMode

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var soInputMode: OSType { get }
```

<a id="discussion"></a>

## Discussion

Get or set the speech channel’s current text-processingmode. The returned value specifies whether the channel is currentlyin text input mode or phoneme input mode. The `speechInfo` parameteris a pointer to a variable of type `OSType`,which specifies a text-processing mode. The constants [modeText](modetext.md) and [modePhonemes](modephonemes.md) specifythe available text-processing modes.

The `modeText` constantindicates that the speech channel is in text-processing mode. The `modePhonemes` constantindicates that the speech channel is in phoneme-processing mode.When in phoneme-processing mode, a text buffer is interpreted tobe a series of characters representing various phonemes and prosodiccontrols. Some synthesizers might support additional input-processingmodes and define constants for these modes.

When in text-processing mode, you can also specify how characters and numbers should be processed, using [soCharacterMode](socharactermode.md) and [soNumberMode](sonumbermode.md).

This selector works with both the `GetSpeechInfo` and `SetSpeechInfo` functions.
