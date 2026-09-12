> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticaudioresourcekeyusevolumeenvelope](https://developer.apple.com/documentation/corehaptics/chhapticaudioresourcekeyusevolumeenvelope)

# CHHapticAudioResourceKeyUseVolumeEnvelope (Swift)

**Framework:** Core Haptics  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A key for a Boolean value that indicates whether audio file playback fades in and out using an envelope.

## Declaration

```swift
let CHHapticAudioResourceKeyUseVolumeEnvelope: String
```

<a id="Discussion"></a>

## Discussion

Fading, or ramping, the volume of an audio resource can prevent clicks during playback. It’s also useful in cases where the app modulates the envelope to use different attack and release times.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Audio Resource Keys

- [CHHapticAudioResourceKeyLoopEnabled](chhapticaudioresourcekeyloopenabled.md): A key for a Boolean value that indicates whether to loop audio playback.
- [CHHapticAudioResourceKey](chhapticaudioresourcekey.md): A type alias for a key that identifies the playback behavior of an audio resource.

# CHHapticAudioResourceKeyUseVolumeEnvelope (Objective-C)

**Framework:** Core Haptics  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A key for a Boolean value that indicates whether audio file playback fades in and out using an envelope.

## Declaration

```objectivec
extern CHHapticAudioResourceKey CHHapticAudioResourceKeyUseVolumeEnvelope;
```

<a id="Discussion"></a>

## Discussion

Fading, or ramping, the volume of an audio resource can prevent clicks during playback. It’s also useful in cases where the app modulates the envelope to use different attack and release times.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Audio Resource Keys

- [CHHapticAudioResourceKeyLoopEnabled](chhapticaudioresourcekeyloopenabled.md): A key for a Boolean value that indicates whether to loop audio playback.
- [CHHapticAudioResourceKey](chhapticaudioresourcekey.md): A type alias for a key that identifies the playback behavior of an audio resource.
