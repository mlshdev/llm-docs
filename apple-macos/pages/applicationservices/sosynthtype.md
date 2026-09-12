> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/sosynthtype](https://developer.apple.com/documentation/applicationservices/sosynthtype)

# soSynthType

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var soSynthType: OSType { get }
```

<a id="discussion"></a>

## Discussion

Get a speech version information structurefor the speech synthesizer being used on the specified speech channel.The `speechInfo` parameteris a pointer to a speech version information structure, describedin [SpeechVersionInfo](speechversioninfo.md).

This selector works with the `GetSpeechInfo` function.
