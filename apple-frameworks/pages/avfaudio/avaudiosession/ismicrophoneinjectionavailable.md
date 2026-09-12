> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/ismicrophoneinjectionavailable](https://developer.apple.com/documentation/avfaudio/avaudiosession/ismicrophoneinjectionavailable)

# isMicrophoneInjectionAvailable (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.2+

A Boolean value that indicates whether microphone injection is available.

## Declaration

```swift
var isMicrophoneInjectionAvailable: Bool { get }
```

<a id="discussion"></a>

## Discussion

Observe changes to the value of this property by registering for notifications of type [microphoneInjectionCapabilitiesChangeNotification](microphoneinjectioncapabilitieschangenotification.md).

## See Also

### Enabling adding audio to calls

- [preferredMicrophoneInjectionMode](preferredmicrophoneinjectionmode.md): The preferred mode of injecting audio into another app’s input stream.
- [setPreferredMicrophoneInjectionMode(\_:)](setpreferredmicrophoneinjectionmode%28__%29.md): Sets the preferred mode of injecting audio into another app’s input stream.
- [AVAudioSession.MicrophoneInjectionMode](microphoneinjectionmode.md): The modes of injecting audio into another app’s input stream.
- [microphoneInjectionCapabilitiesChangeNotification](microphoneinjectioncapabilitieschangenotification.md): A notification the system posts when its capability to inject audio into an input stream changes.

# isMicrophoneInjectionAvailable (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.2+

A Boolean value that indicates whether microphone injection is available.

## Declaration

```objectivec
@property (readonly) BOOL isMicrophoneInjectionAvailable;
```

<a id="discussion"></a>

## Discussion

Observe changes to the value of this property by registering for notifications of type [AVAudioSessionMicrophoneInjectionCapabilitiesChangeNotification](microphoneinjectioncapabilitieschangenotification.md).

## See Also

### Enabling adding audio to calls

- [preferredMicrophoneInjectionMode](preferredmicrophoneinjectionmode.md): The preferred mode of injecting audio into another app’s input stream.
- [setPreferredMicrophoneInjectionMode:error:](setpreferredmicrophoneinjectionmode%28__%29.md): Sets the preferred mode of injecting audio into another app’s input stream.
- [AVAudioSessionMicrophoneInjectionMode](microphoneinjectionmode.md): The modes of injecting audio into another app’s input stream.
- [AVAudioSessionMicrophoneInjectionCapabilitiesChangeNotification](microphoneinjectioncapabilitieschangenotification.md): A notification the system posts when its capability to inject audio into an input stream changes.
