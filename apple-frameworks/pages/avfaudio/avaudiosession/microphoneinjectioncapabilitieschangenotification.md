> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosession/microphoneinjectioncapabilitieschangenotification

# microphoneInjectionCapabilitiesChangeNotification (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.2+

A notification the system posts when its capability to inject audio into an input stream changes.

## Declaration

```swift
class let microphoneInjectionCapabilitiesChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Query the notification’s `userInfo` dictionary for [AVAudioSessionMicrophoneInjectionIsAvailableKey](../avaudiosessionmicrophoneinjectionisavailablekey.md) to determine whether microphone injection is available.

## Topics

### User-information keys

- [AVAudioSessionMicrophoneInjectionIsAvailableKey](../avaudiosessionmicrophoneinjectionisavailablekey.md): A key to retrieve a Boolean value that indicates whether microphone injection is available.

## See Also

### Enabling adding audio to calls

- [isMicrophoneInjectionAvailable](ismicrophoneinjectionavailable.md): A Boolean value that indicates whether microphone injection is available.
- [preferredMicrophoneInjectionMode](preferredmicrophoneinjectionmode.md): The preferred mode of injecting audio into another app’s input stream.
- [setPreferredMicrophoneInjectionMode(\_:)](setpreferredmicrophoneinjectionmode%28__%29.md): Sets the preferred mode of injecting audio into another app’s input stream.
- [AVAudioSession.MicrophoneInjectionMode](microphoneinjectionmode.md): The modes of injecting audio into another app’s input stream.

# AVAudioSessionMicrophoneInjectionCapabilitiesChangeNotification (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.2+

A notification the system posts when its capability to inject audio into an input stream changes.

## Declaration

```objectivec
extern NSNotificationName const AVAudioSessionMicrophoneInjectionCapabilitiesChangeNotification;
```

<a id="Discussion"></a>

## Discussion

Query the notification’s `userInfo` dictionary for [AVAudioSessionMicrophoneInjectionIsAvailableKey](../avaudiosessionmicrophoneinjectionisavailablekey.md) to determine whether microphone injection is available.

## Topics

### User-information keys

- [AVAudioSessionMicrophoneInjectionIsAvailableKey](../avaudiosessionmicrophoneinjectionisavailablekey.md): A key to retrieve a Boolean value that indicates whether microphone injection is available.

## See Also

### Enabling adding audio to calls

- [isMicrophoneInjectionAvailable](ismicrophoneinjectionavailable.md): A Boolean value that indicates whether microphone injection is available.
- [preferredMicrophoneInjectionMode](preferredmicrophoneinjectionmode.md): The preferred mode of injecting audio into another app’s input stream.
- [setPreferredMicrophoneInjectionMode:error:](setpreferredmicrophoneinjectionmode%28__%29.md): Sets the preferred mode of injecting audio into another app’s input stream.
- [AVAudioSessionMicrophoneInjectionMode](microphoneinjectionmode.md): The modes of injecting audio into another app’s input stream.
