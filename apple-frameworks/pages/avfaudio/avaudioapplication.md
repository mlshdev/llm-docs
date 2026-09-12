> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioapplication](https://developer.apple.com/documentation/avfaudio/avaudioapplication)

# AVAudioApplication (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An object that manages one or more audio sessions that belong to an app.

## Declaration

```swift
class AVAudioApplication
```

<a id="overview"></a>

## Overview

Access the shared audio application instance to control app-level audio operations, such as requesting microphone permission and controlling audio input muting.

## Topics

### Accessing the shared instance

- [shared](avaudioapplication/shared.md): Accesses the shared audio application instance.

### Requesting audio recording permission

- [requestRecordPermission(completionHandler:)](avaudioapplication/requestrecordpermission%28completionhandler_%29.md): Determines whether the app has permission to record audio.
- [recordPermission](avaudioapplication/recordpermission-swift.property.md): The app’s permission to record audio.
- [AVAudioApplication.recordPermission](avaudioapplication/recordpermission-swift.enum.md): Constants that indicate the app’s permission to record audio.

### Requesting microphone injection permission

- [requestMicrophoneInjectionPermission(completionHandler:)](avaudioapplication/requestmicrophoneinjectionpermission%28completionhandler_%29.md): Requests the app’s permission to add audio to calls.
- [microphoneInjectionPermission](avaudioapplication/microphoneinjectionpermission-swift.property.md): A value that indicates an app’s permission to add audio to calls.
- [AVAudioApplication.MicrophoneInjectionPermission](avaudioapplication/microphoneinjectionpermission-swift.enum.md): Constants that indicate an app’s permission to add audio to calls.

### Managing audio input mute state

- [isInputMuted](avaudioapplication/isinputmuted.md): A Boolean value that indicates whether the app’s audio input is in a muted state.
- [setInputMuted(\_:)](avaudioapplication/setinputmuted%28__%29.md): Sets a Boolean value that indicates whether the app’s audio input is in a muted state.
- [inputMuteStateChangeNotification](avaudioapplication/inputmutestatechangenotification.md): A notification the system posts when the app’s audio input mute state changes.
- [setInputMuteStateChangeHandler(\_:)](avaudioapplication/setinputmutestatechangehandler%28__%29.md): Sets a callback to handle changes to application-level audio muting states.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### System audio

- [Handling audio interruptions](handling-audio-interruptions.md): Observe audio session notifications to ensure that your app responds appropriately to interruptions.
- [Responding to audio route changes](responding-to-audio-route-changes.md): Observe audio session notifications to ensure that your app responds appropriately to route changes.
- [Routing audio to specific devices in multidevice sessions](routing-audio-to-specific-devices-in-multidevice-sessions.md): Map audio channels to specific devices in multiroute sessions for recording and playback.
- [Adding synthesized speech to calls](adding-synthesized-speech-to-calls.md): Provide a more accessible experience by adding your app’s audio to a call.
- [Capturing stereo audio from built-In microphones](capturing-stereo-audio-from-built-in-microphones.md): Configure an iOS device’s built-in microphones to add stereo recording capabilities to your app.
- [AVAudioSession](avaudiosession.md): An object that communicates to the system how you intend to use audio in your app.
- [AVAudioRoutingArbiter](avaudioroutingarbiter.md): An object for configuring macOS apps to participate in AirPods Automatic Switching.

# AVAudioApplication (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An object that manages one or more audio sessions that belong to an app.

## Declaration

```objectivec
@interface AVAudioApplication : NSObject
```

<a id="overview"></a>

## Overview

Access the shared audio application instance to control app-level audio operations, such as requesting microphone permission and controlling audio input muting.

## Topics

### Accessing the shared instance

- [sharedInstance](avaudioapplication/shared.md): Accesses the shared audio application instance.

### Requesting audio recording permission

- [requestRecordPermissionWithCompletionHandler:](avaudioapplication/requestrecordpermission%28completionhandler_%29.md): Determines whether the app has permission to record audio.
- [recordPermission](avaudioapplication/recordpermission-swift.property.md): The app’s permission to record audio.
- [AVAudioApplicationRecordPermission](avaudioapplication/recordpermission-swift.enum.md): Constants that indicate the app’s permission to record audio.

### Requesting microphone injection permission

- [requestMicrophoneInjectionPermissionWithCompletionHandler:](avaudioapplication/requestmicrophoneinjectionpermission%28completionhandler_%29.md): Requests the app’s permission to add audio to calls.
- [microphoneInjectionPermission](avaudioapplication/microphoneinjectionpermission-swift.property.md): A value that indicates an app’s permission to add audio to calls.
- [AVAudioApplicationMicrophoneInjectionPermission](avaudioapplication/microphoneinjectionpermission-swift.enum.md): Constants that indicate an app’s permission to add audio to calls.

### Managing audio input mute state

- [inputMuted](avaudioapplication/isinputmuted.md): A Boolean value that indicates whether the app’s audio input is in a muted state.
- [setInputMuted:error:](avaudioapplication/setinputmuted%28__%29.md): Sets a Boolean value that indicates whether the app’s audio input is in a muted state.
- [AVAudioApplicationInputMuteStateChangeNotification](avaudioapplication/inputmutestatechangenotification.md): A notification the system posts when the app’s audio input mute state changes.
- [setInputMuteStateChangeHandler:error:](avaudioapplication/setinputmutestatechangehandler%28__%29.md): Sets a callback to handle changes to application-level audio muting states.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### System audio

- [Handling audio interruptions](handling-audio-interruptions.md): Observe audio session notifications to ensure that your app responds appropriately to interruptions.
- [Responding to audio route changes](responding-to-audio-route-changes.md): Observe audio session notifications to ensure that your app responds appropriately to route changes.
- [Routing audio to specific devices in multidevice sessions](routing-audio-to-specific-devices-in-multidevice-sessions.md): Map audio channels to specific devices in multiroute sessions for recording and playback.
- [Adding synthesized speech to calls](adding-synthesized-speech-to-calls.md): Provide a more accessible experience by adding your app’s audio to a call.
- [Capturing stereo audio from built-In microphones](capturing-stereo-audio-from-built-in-microphones.md): Configure an iOS device’s built-in microphones to add stereo recording capabilities to your app.
- [AVAudioSession](avaudiosession.md): An object that communicates to the system how you intend to use audio in your app.
- [AVAudioRoutingArbiter](avaudioroutingarbiter.md): An object for configuring macOS apps to participate in AirPods Automatic Switching.
