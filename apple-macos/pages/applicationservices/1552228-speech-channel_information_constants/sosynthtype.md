> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1552228-speech-channel_information_constants/sosynthtype](https://developer.apple.com/documentation/applicationservices/1552228-speech-channel_information_constants/sosynthtype)

# soSynthType

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
soSynthType = 'vers'
```

<a id="discussion"></a>

## Discussion

Get a speech version information structurefor the speech synthesizer being used on the specified speech channel.The `speechInfo` parameteris a pointer to a speech version information structure, describedin [SpeechVersionInfo](../speechversioninfo.md).

This selector works with the `GetSpeechInfo` function.
