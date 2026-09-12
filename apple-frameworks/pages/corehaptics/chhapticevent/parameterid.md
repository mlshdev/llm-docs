> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticevent/parameterid](https://developer.apple.com/documentation/corehaptics/chhapticevent/parameterid)

# CHHapticEvent.ParameterID (Swift)

**Framework:** Core Haptics  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

An identifier for an event parameter.

## Declaration

```swift
struct ParameterID
```

## Mentioned In

- [Representing haptic patterns in AHAP files](../representing-haptic-patterns-in-ahap-files.md)

<a id="Discussion"></a>

## Discussion

Specify event parameters when creating a haptic or audio event. The combination of parameters determines the event’s character.

## Topics

### Haptic Event Parameter IDs

- [hapticIntensity](parameterid/hapticintensity.md): The strength of a haptic event.
- [hapticSharpness](parameterid/hapticsharpness.md): The feel of a haptic event.
- [attackTime](parameterid/attacktime.md): The time at which a haptic pattern’s intensity begins increasing.
- [decayTime](parameterid/decaytime.md): The time at which a haptic pattern’s intensity begins decreasing.
- [releaseTime](parameterid/releasetime.md): The time at which to begin fading the haptic pattern.
- [sustained](parameterid/sustained.md): A Boolean value that indicates whether to sustain a haptic event for its specified duration.

### Audio Event Parameter IDs

- [audioVolume](parameterid/audiovolume.md): The volume of an audio event.
- [audioPan](parameterid/audiopan.md): The stereo panning of an audio event.
- [audioPitch](parameterid/audiopitch.md): The pitch of an audio event.
- [audioBrightness](parameterid/audiobrightness.md): The high-frequency content of an audio event.

### Swift Initializers

- [init(rawValue:)](parameterid/init%28rawvalue_%29.md): Creates the identifier of a haptic event parameter with the specified string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Haptic Events

- [eventParameters](eventparameters.md): An array of event parameters, possibly empty.
- [relativeTime](relativetime.md): The start time of the event, relative to other events in the same pattern.
- [duration](duration.md): The duration of the haptic event.

# CHHapticEventParameterID (Objective-C)

**Framework:** Core Haptics  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

An identifier for an event parameter.

## Declaration

```objectivec
typedef NSString * CHHapticEventParameterID;
```

## Mentioned In

- [Representing haptic patterns in AHAP files](../representing-haptic-patterns-in-ahap-files.md)

<a id="Discussion"></a>

## Discussion

Specify event parameters when creating a haptic or audio event. The combination of parameters determines the event’s character.

## Topics

### Haptic Event Parameter IDs

- [CHHapticEventParameterIDHapticIntensity](parameterid/hapticintensity.md): The strength of a haptic event.
- [CHHapticEventParameterIDHapticSharpness](parameterid/hapticsharpness.md): The feel of a haptic event.
- [CHHapticEventParameterIDAttackTime](parameterid/attacktime.md): The time at which a haptic pattern’s intensity begins increasing.
- [CHHapticEventParameterIDDecayTime](parameterid/decaytime.md): The time at which a haptic pattern’s intensity begins decreasing.
- [CHHapticEventParameterIDReleaseTime](parameterid/releasetime.md): The time at which to begin fading the haptic pattern.
- [CHHapticEventParameterIDSustained](parameterid/sustained.md): A Boolean value that indicates whether to sustain a haptic event for its specified duration.

### Audio Event Parameter IDs

- [CHHapticEventParameterIDAudioVolume](parameterid/audiovolume.md): The volume of an audio event.
- [CHHapticEventParameterIDAudioPan](parameterid/audiopan.md): The stereo panning of an audio event.
- [CHHapticEventParameterIDAudioPitch](parameterid/audiopitch.md): The pitch of an audio event.
- [CHHapticEventParameterIDAudioBrightness](parameterid/audiobrightness.md): The high-frequency content of an audio event.

## See Also

### Configuring Haptic Events

- [eventParameters](eventparameters.md): An array of event parameters, possibly empty.
- [relativeTime](relativetime.md): The start time of the event, relative to other events in the same pattern.
- [duration](duration.md): The duration of the haptic event.
