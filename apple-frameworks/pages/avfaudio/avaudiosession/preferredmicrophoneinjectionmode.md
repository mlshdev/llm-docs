> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/preferredmicrophoneinjectionmode](https://developer.apple.com/documentation/avfaudio/avaudiosession/preferredmicrophoneinjectionmode)

# preferredMicrophoneInjectionMode (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.2+

The preferred mode of injecting audio into another app’s input stream.

## Declaration

```swift
var preferredMicrophoneInjectionMode: AVAudioSession.MicrophoneInjectionMode { get }
```

## See Also

### Enabling adding audio to calls

- [isMicrophoneInjectionAvailable](ismicrophoneinjectionavailable.md): A Boolean value that indicates whether microphone injection is available.
- [setPreferredMicrophoneInjectionMode(\_:)](setpreferredmicrophoneinjectionmode%28__%29.md): Sets the preferred mode of injecting audio into another app’s input stream.
- [AVAudioSession.MicrophoneInjectionMode](microphoneinjectionmode.md): The modes of injecting audio into another app’s input stream.
- [microphoneInjectionCapabilitiesChangeNotification](microphoneinjectioncapabilitieschangenotification.md): A notification the system posts when its capability to inject audio into an input stream changes.

# preferredMicrophoneInjectionMode (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.2+

The preferred mode of injecting audio into another app’s input stream.

## Declaration

```objectivec
@property (readonly) AVAudioSessionMicrophoneInjectionMode preferredMicrophoneInjectionMode;
```

## See Also

### Enabling adding audio to calls

- [isMicrophoneInjectionAvailable](ismicrophoneinjectionavailable.md): A Boolean value that indicates whether microphone injection is available.
- [setPreferredMicrophoneInjectionMode:error:](setpreferredmicrophoneinjectionmode%28__%29.md): Sets the preferred mode of injecting audio into another app’s input stream.
- [AVAudioSessionMicrophoneInjectionMode](microphoneinjectionmode.md): The modes of injecting audio into another app’s input stream.
- [AVAudioSessionMicrophoneInjectionCapabilitiesChangeNotification](microphoneinjectioncapabilitieschangenotification.md): A notification the system posts when its capability to inject audio into an input stream changes.
