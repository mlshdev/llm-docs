> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengineconfigurationchangenotification](https://developer.apple.com/documentation/avfaudio/avaudioengineconfigurationchangenotification)

# AVAudioEngineConfigurationChangeNotification

**Interface language:** Objective-C

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A notification the framework posts when the audio engine configuration changes.

## Declaration

```objectivec
extern NSString * const AVAudioEngineConfigurationChangeNotification;
```

<a id="Discussion"></a>

## Discussion

When the audio engine’s I/O unit observes a change to the audio input or output hardware’s channel count or sample rate, the audio engine stops, uninitializes itself, and issues this notification. The nodes remain in an attached and connected state with the previously set formats. The app must reestablish connections if the connection formats need to change.

> **Note**

>  Don’t deallocate the engine from within the client’s notification handler. The callback happens on an internal dispatch queue and can deadlock while trying to tear down the engine synchronously.
