> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioroutingarbiter](https://developer.apple.com/documentation/avfaudio/avaudioroutingarbiter)

# AVAudioRoutingArbiter (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** macOS 11.0+

An object for configuring macOS apps to participate in AirPods Automatic Switching.

## Declaration

```swift
class AVAudioRoutingArbiter
```

<a id="overview"></a>

## Overview

AirPods Automatic Switching is a feature of Apple operating systems that intelligently connects wireless headphones to the most appropriate audio device in a multidevice environment. For example, if a user plays a movie on iPad, and then locks the device and starts playing music on iPhone, the system automatically switches the source audio device from iPad to iPhone.

iOS apps automatically participate in AirPods Automatic Switching. To enable your macOS app to participate in this behavior, use `AVAudioRoutingArbiter` to indicate when your app starts and finishes playing or recording audio. For example, a Voice over IP (VoIP) app might request arbitration before starting a call, and when the arbitration completes, begin the VoIP session. Likewise, when the call ends, the app would end the VoIP session and leave arbitration.

```swift
func startCall() {
    let arbiter = AVAudioRoutingArbiter.shared
    arbiter.begin(category: .playAndRecordVoice) { deviceChanged, error in
        // Start VoIP session.
    }
}

func endCall() {
    // End VoIP session.
    AVAudioRoutingArbiter.shared.leave()
}
```

> **Important**

>  Only certain Apple and Beats wireless headsets support this feature.

## Topics

### Creating a Routing Arbiter

- [shared](avaudioroutingarbiter/shared.md): The shared routing arbiter object.

### Participating in AirPods Automatic Switching

- [begin(category:completionHandler:)](avaudioroutingarbiter/begin%28category_completionhandler_%29.md): Begins routing arbitration to take ownership of a nearby Bluetooth audio route.
- [AVAudioRoutingArbiter.Category](avaudioroutingarbiter/category.md): Categories that describe the general nature of your app’s audio use.
- [leave()](avaudioroutingarbiter/leave%28%29.md): Stops an app’s participation in audio routing arbitration.

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
- [AVAudioApplication](avaudioapplication.md): An object that manages one or more audio sessions that belong to an app.

# AVAudioRoutingArbiter (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** macOS 11.0+

An object for configuring macOS apps to participate in AirPods Automatic Switching.

## Declaration

```objectivec
@interface AVAudioRoutingArbiter : NSObject
```

<a id="overview"></a>

## Overview

AirPods Automatic Switching is a feature of Apple operating systems that intelligently connects wireless headphones to the most appropriate audio device in a multidevice environment. For example, if a user plays a movie on iPad, and then locks the device and starts playing music on iPhone, the system automatically switches the source audio device from iPad to iPhone.

iOS apps automatically participate in AirPods Automatic Switching. To enable your macOS app to participate in this behavior, use `AVAudioRoutingArbiter` to indicate when your app starts and finishes playing or recording audio. For example, a Voice over IP (VoIP) app might request arbitration before starting a call, and when the arbitration completes, begin the VoIP session. Likewise, when the call ends, the app would end the VoIP session and leave arbitration.

```swift
func startCall() {
    let arbiter = AVAudioRoutingArbiter.shared
    arbiter.begin(category: .playAndRecordVoice) { deviceChanged, error in
        // Start VoIP session.
    }
}

func endCall() {
    // End VoIP session.
    AVAudioRoutingArbiter.shared.leave()
}
```

> **Important**

>  Only certain Apple and Beats wireless headsets support this feature.

## Topics

### Creating a Routing Arbiter

- [sharedRoutingArbiter](avaudioroutingarbiter/shared.md): The shared routing arbiter object.

### Participating in AirPods Automatic Switching

- [beginArbitrationWithCategory:completionHandler:](avaudioroutingarbiter/begin%28category_completionhandler_%29.md): Begins routing arbitration to take ownership of a nearby Bluetooth audio route.
- [AVAudioRoutingArbitrationCategory](avaudioroutingarbiter/category.md): Categories that describe the general nature of your app’s audio use.
- [leaveArbitration](avaudioroutingarbiter/leave%28%29.md): Stops an app’s participation in audio routing arbitration.

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
- [AVAudioApplication](avaudioapplication.md): An object that manages one or more audio sessions that belong to an app.
