> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kauvoiceioproperty_mutedspeechactivityeventlistener](https://developer.apple.com/documentation/audiotoolbox/kauvoiceioproperty_mutedspeechactivityeventlistener)

# kAUVoiceIOProperty_MutedSpeechActivityEventListener (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A property to register a listener that the system calls when it detects speech while the user has the microphone muted.

## Declaration

```swift
var kAUVoiceIOProperty_MutedSpeechActivityEventListener: AudioUnitPropertyID { get }
```

<a id="Discussion"></a>

## Discussion

To use this API, your app must implement mute using the [kAUVoiceIOProperty_MuteOutput](kauvoiceioproperty_muteoutput.md) property.

## See Also

### Observing muted speech

- [AUVoiceIOMutedSpeechActivityEventListener](auvoiceiomutedspeechactivityeventlistener.md): A block that the system calls to indicate speech activity while the user has the microphone muted.
- [AUVoiceIOSpeechActivityEvent](auvoiceiospeechactivityevent.md): Constants that indicate the state of muted speech.

# kAUVoiceIOProperty_MutedSpeechActivityEventListener (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A property to register a listener that the system calls when it detects speech while the user has the microphone muted.

## Declaration

```objectivec
kAUVoiceIOProperty_MutedSpeechActivityEventListener
```

<a id="Discussion"></a>

## Discussion

To use this API, your app must implement mute using the [kAUVoiceIOProperty_MuteOutput](kauvoiceioproperty_muteoutput.md) property.

## See Also

### Observing muted speech

- [AUVoiceIOMutedSpeechActivityEventListener](auvoiceiomutedspeechactivityeventlistener.md): A block that the system calls to indicate speech activity while the user has the microphone muted.
- [AUVoiceIOSpeechActivityEvent](auvoiceiospeechactivityevent.md): Constants that indicate the state of muted speech.
