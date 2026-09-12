> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1552228-speech-channel_information_constants/socharactermode](https://developer.apple.com/documentation/applicationservices/1552228-speech-channel_information_constants/socharactermode)

# soCharacterMode

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
soCharacterMode = 'char'
```

<a id="discussion"></a>

## Discussion

Get or set the speech channel’s character-processingmode. Two constants are currently defined for the processing mode, [modeNormal](../1552256-speech-channel_modes/modenormal.md) and [modeLiteral](../1552256-speech-channel_modes/modeliteral.md). Whenthe character-processing mode is `modeNormal`,input characters are spoken as you would expect to hear them. Whenthe mode is `modeLiteral`, eachcharacter is spoken literally, so that the word “cat” wouldbe spoken “C–A–T”. The `speechInfo` parameterpoints to a variable of type `OSType`, whichis the character-processing mode.

This selector works with the `GetSpeechInfo` and `SetSpeechInfo` functions.
