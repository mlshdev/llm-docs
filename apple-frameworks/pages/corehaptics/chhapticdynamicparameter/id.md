> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticdynamicparameter/id](https://developer.apple.com/documentation/corehaptics/chhapticdynamicparameter/id)

# CHHapticDynamicParameter.ID (Swift)

**Framework:** Core Haptics  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

The identifier that reveals the type of property associated with a dynamic parameter.

## Declaration

```swift
struct ID
```

## Topics

### Haptic Dynamic Parameter IDs

- [hapticIntensityControl](id/hapticintensitycontrol.md): A dynamic parameter to change the strength of a haptic pattern.
- [hapticSharpnessControl](id/hapticsharpnesscontrol.md): A dynamic parameter to change the sharpness of a haptic pattern.
- [hapticAttackTimeControl](id/hapticattacktimecontrol.md): A dynamic parameter to change the time when a haptic pattern’s intensity begins increasing.
- [hapticDecayTimeControl](id/hapticdecaytimecontrol.md): A dynamic parameter to change the time when a haptic pattern’s intensity begins decreasing.
- [hapticReleaseTimeControl](id/hapticreleasetimecontrol.md): A dynamic parameter to change the time at which to begin fading the haptic pattern.

### Audio Dynamic Parameter IDs

- [audioBrightnessControl](id/audiobrightnesscontrol.md): A dynamic parameter to change the high-frequency content of an audio signal.
- [audioVolumeControl](id/audiovolumecontrol.md): A dynamic parameter to change the volume or loudness of an audio signal.
- [audioPanControl](id/audiopancontrol.md): A dynamic parameter to change the pan of an audio signal.
- [audioPitchControl](id/audiopitchcontrol.md): A dynamic parameter to change the pitch of an audio signal.
- [audioAttackTimeControl](id/audioattacktimecontrol.md): A dynamic parameter to change the time when an audio signal’s amplitude begins increasing.
- [audioDecayTimeControl](id/audiodecaytimecontrol.md): A dynamic parameter to change the time when an audio signal’s amplitude begins decreasing.
- [audioReleaseTimeControl](id/audioreleasetimecontrol.md): A dynamic parameter to change the time when an audio signal begins fading.

### Swift Initializers

- [init(rawValue:)](id/init%28rawvalue_%29.md): Creates a dynamic property ID from its raw string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Dynamic Parameter

- [init(parameterID:value:relativeTime:)](init%28parameterid_value_relativetime_%29.md): Creates a dynamic parameter from its ID, value, and start time.

# CHHapticDynamicParameterID (Objective-C)

**Framework:** Core Haptics  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

The identifier that reveals the type of property associated with a dynamic parameter.

## Declaration

```objectivec
typedef NSString * CHHapticDynamicParameterID;
```

## Topics

### Haptic Dynamic Parameter IDs

- [CHHapticDynamicParameterIDHapticIntensityControl](id/hapticintensitycontrol.md): A dynamic parameter to change the strength of a haptic pattern.
- [CHHapticDynamicParameterIDHapticSharpnessControl](id/hapticsharpnesscontrol.md): A dynamic parameter to change the sharpness of a haptic pattern.
- [CHHapticDynamicParameterIDHapticAttackTimeControl](id/hapticattacktimecontrol.md): A dynamic parameter to change the time when a haptic pattern’s intensity begins increasing.
- [CHHapticDynamicParameterIDHapticDecayTimeControl](id/hapticdecaytimecontrol.md): A dynamic parameter to change the time when a haptic pattern’s intensity begins decreasing.
- [CHHapticDynamicParameterIDHapticReleaseTimeControl](id/hapticreleasetimecontrol.md): A dynamic parameter to change the time at which to begin fading the haptic pattern.

### Audio Dynamic Parameter IDs

- [CHHapticDynamicParameterIDAudioBrightnessControl](id/audiobrightnesscontrol.md): A dynamic parameter to change the high-frequency content of an audio signal.
- [CHHapticDynamicParameterIDAudioVolumeControl](id/audiovolumecontrol.md): A dynamic parameter to change the volume or loudness of an audio signal.
- [CHHapticDynamicParameterIDAudioPanControl](id/audiopancontrol.md): A dynamic parameter to change the pan of an audio signal.
- [CHHapticDynamicParameterIDAudioPitchControl](id/audiopitchcontrol.md): A dynamic parameter to change the pitch of an audio signal.
- [CHHapticDynamicParameterIDAudioAttackTimeControl](id/audioattacktimecontrol.md): A dynamic parameter to change the time when an audio signal’s amplitude begins increasing.
- [CHHapticDynamicParameterIDAudioDecayTimeControl](id/audiodecaytimecontrol.md): A dynamic parameter to change the time when an audio signal’s amplitude begins decreasing.
- [CHHapticDynamicParameterIDAudioReleaseTimeControl](id/audioreleasetimecontrol.md): A dynamic parameter to change the time when an audio signal begins fading.

## See Also

### Creating a Dynamic Parameter

- [initWithParameterID:value:relativeTime:](init%28parameterid_value_relativetime_%29.md): Creates a dynamic parameter from its ID, value, and start time.
