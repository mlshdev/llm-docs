> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setpreferredmicrophoneinjectionmode(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/setpreferredmicrophoneinjectionmode(_:))

# setPreferredMicrophoneInjectionMode(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.2+

Sets the preferred mode of injecting audio into another app’s input stream.

## Declaration

```swift
func setPreferredMicrophoneInjectionMode(_ inValue: AVAudioSession.MicrophoneInjectionMode) throws
```

## Parameters

- `inValue`: The preferred microphone injection mode.

## See Also

### Enabling adding audio to calls

- [isMicrophoneInjectionAvailable](ismicrophoneinjectionavailable.md): A Boolean value that indicates whether microphone injection is available.
- [preferredMicrophoneInjectionMode](preferredmicrophoneinjectionmode.md): The preferred mode of injecting audio into another app’s input stream.
- [AVAudioSession.MicrophoneInjectionMode](microphoneinjectionmode.md): The modes of injecting audio into another app’s input stream.
- [microphoneInjectionCapabilitiesChangeNotification](microphoneinjectioncapabilitieschangenotification.md): A notification the system posts when its capability to inject audio into an input stream changes.

# setPreferredMicrophoneInjectionMode:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.2+

Sets the preferred mode of injecting audio into another app’s input stream.

## Declaration

```objectivec
- (BOOL) setPreferredMicrophoneInjectionMode:(AVAudioSessionMicrophoneInjectionMode) inValue error:(NSError **) outError;
```

## Parameters

- `inValue`: The preferred microphone injection mode.
- `outError`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

## See Also

### Enabling adding audio to calls

- [isMicrophoneInjectionAvailable](ismicrophoneinjectionavailable.md): A Boolean value that indicates whether microphone injection is available.
- [preferredMicrophoneInjectionMode](preferredmicrophoneinjectionmode.md): The preferred mode of injecting audio into another app’s input stream.
- [AVAudioSessionMicrophoneInjectionMode](microphoneinjectionmode.md): The modes of injecting audio into another app’s input stream.
- [AVAudioSessionMicrophoneInjectionCapabilitiesChangeNotification](microphoneinjectioncapabilitieschangenotification.md): A notification the system posts when its capability to inject audio into an input stream changes.
