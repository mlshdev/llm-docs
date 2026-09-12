> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/microphoneinjectionmode](https://developer.apple.com/documentation/avfaudio/avaudiosession/microphoneinjectionmode)

# AVAudioSession.MicrophoneInjectionMode (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

The modes of injecting audio into another app’s input stream.

## Declaration

```swift
enum MicrophoneInjectionMode
```

<a id="overview"></a>

## Overview

Apps can state their intent to mix synthesized speech into another app’s input stream. Accessibility apps can use this feature to implement augmentative and alternative communication systems that enable people with disabilities to communicate using synthesized speech.

> **Note**

> When a person mutes audio input, the system also mutes microphone injection.

## Topics

### Microphone injection modes

- [AVAudioSession.MicrophoneInjectionMode.none](microphoneinjectionmode/none.md): A mode that indicates not to use spoken audio injection.
- [AVAudioSession.MicrophoneInjectionMode.spokenAudio](microphoneinjectionmode/spokenaudio.md): A mode that indicates to inject spoken audio, like synthesized speech, along with microphone audio.

### Initializers

- [init(rawValue:)](microphoneinjectionmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enabling adding audio to calls

- [isMicrophoneInjectionAvailable](ismicrophoneinjectionavailable.md): A Boolean value that indicates whether microphone injection is available.
- [preferredMicrophoneInjectionMode](preferredmicrophoneinjectionmode.md): The preferred mode of injecting audio into another app’s input stream.
- [setPreferredMicrophoneInjectionMode(\_:)](setpreferredmicrophoneinjectionmode%28__%29.md): Sets the preferred mode of injecting audio into another app’s input stream.
- [microphoneInjectionCapabilitiesChangeNotification](microphoneinjectioncapabilitieschangenotification.md): A notification the system posts when its capability to inject audio into an input stream changes.

# AVAudioSessionMicrophoneInjectionMode (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The modes of injecting audio into another app’s input stream.

## Declaration

```objectivec
enum AVAudioSessionMicrophoneInjectionMode : NSInteger;
```

<a id="overview"></a>

## Overview

Apps can state their intent to mix synthesized speech into another app’s input stream. Accessibility apps can use this feature to implement augmentative and alternative communication systems that enable people with disabilities to communicate using synthesized speech.

> **Note**

> When a person mutes audio input, the system also mutes microphone injection.

## Topics

### Microphone injection modes

- [AVAudioSessionMicrophoneInjectionModeNone](microphoneinjectionmode/none.md): A mode that indicates not to use spoken audio injection.
- [AVAudioSessionMicrophoneInjectionModeSpokenAudio](microphoneinjectionmode/spokenaudio.md): A mode that indicates to inject spoken audio, like synthesized speech, along with microphone audio.

## See Also

### Enabling adding audio to calls

- [isMicrophoneInjectionAvailable](ismicrophoneinjectionavailable.md): A Boolean value that indicates whether microphone injection is available.
- [preferredMicrophoneInjectionMode](preferredmicrophoneinjectionmode.md): The preferred mode of injecting audio into another app’s input stream.
- [setPreferredMicrophoneInjectionMode:error:](setpreferredmicrophoneinjectionmode%28__%29.md): Sets the preferred mode of injecting audio into another app’s input stream.
- [AVAudioSessionMicrophoneInjectionCapabilitiesChangeNotification](microphoneinjectioncapabilitieschangenotification.md): A notification the system posts when its capability to inject audio into an input stream changes.
