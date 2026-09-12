> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auvoiceiomutedspeechactivityeventlistener](https://developer.apple.com/documentation/audiotoolbox/auvoiceiomutedspeechactivityeventlistener)

# AUVoiceIOMutedSpeechActivityEventListener (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block that the system calls to indicate speech activity while the user has the microphone muted.

## Declaration

```swift
typealias AUVoiceIOMutedSpeechActivityEventListener = (AUVoiceIOSpeechActivityEvent) -> Void
```

## Parameters

- `event`: An event that indicates whether muted speech started or ended.

## See Also

### Observing muted speech

- [kAUVoiceIOProperty_MutedSpeechActivityEventListener](kauvoiceioproperty_mutedspeechactivityeventlistener.md): A property to register a listener that the system calls when it detects speech while the user has the microphone muted.
- [AUVoiceIOSpeechActivityEvent](auvoiceiospeechactivityevent.md): Constants that indicate the state of muted speech.

# AUVoiceIOMutedSpeechActivityEventListener (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block that the system calls to indicate speech activity while the user has the microphone muted.

## Declaration

```objectivec
typedef void (^)(enum AUVoiceIOSpeechActivityEvent) AUVoiceIOMutedSpeechActivityEventListener;
```

## Parameters

- `event`: An event that indicates whether muted speech started or ended.

## See Also

### Observing muted speech

- [kAUVoiceIOProperty_MutedSpeechActivityEventListener](kauvoiceioproperty_mutedspeechactivityeventlistener.md): A property to register a listener that the system calls when it detects speech while the user has the microphone muted.
- [AUVoiceIOSpeechActivityEvent](auvoiceiospeechactivityevent.md): Constants that indicate the state of muted speech.
