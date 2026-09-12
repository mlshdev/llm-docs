> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticevent/parameterid/attacktime](https://developer.apple.com/documentation/corehaptics/chhapticevent/parameterid/attacktime)

# attackTime (Swift)

**Framework:** Core Haptics  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The time at which a haptic pattern’s intensity begins increasing.

## Declaration

```swift
static let attackTime: CHHapticEvent.ParameterID
```

<a id="Discussion"></a>

## Discussion

This parameter can be an event parameter or a dynamic parameter. An event parameter indicates that the haptic begins increasing in intensity at the set time, where time `0` indicates now, or the current time.

A dynamic value indicates that the time at which ramp-up begins can change. For example, a value of `0` indicates that the attack time is at its default value. Positive values up to `1.0` increase the attack time exponentially, while negative values down to `-1.0` decrease the attack time exponentially. Haptic intensity responds to this parameter.

![A series of lines showing how a haptic pattern ramps up in intensity for various values of attack.](https://developer.apple.com/images/com.apple.corehaptics/media-3235478@2x.png)

## See Also

### Haptic Event Parameter IDs

- [hapticIntensity](hapticintensity.md): The strength of a haptic event.
- [hapticSharpness](hapticsharpness.md): The feel of a haptic event.
- [decayTime](decaytime.md): The time at which a haptic pattern’s intensity begins decreasing.
- [releaseTime](releasetime.md): The time at which to begin fading the haptic pattern.
- [sustained](sustained.md): A Boolean value that indicates whether to sustain a haptic event for its specified duration.

# CHHapticEventParameterIDAttackTime (Objective-C)

**Framework:** Core Haptics  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The time at which a haptic pattern’s intensity begins increasing.

## Declaration

```objectivec
extern CHHapticEventParameterID CHHapticEventParameterIDAttackTime;
```

<a id="Discussion"></a>

## Discussion

This parameter can be an event parameter or a dynamic parameter. An event parameter indicates that the haptic begins increasing in intensity at the set time, where time `0` indicates now, or the current time.

A dynamic value indicates that the time at which ramp-up begins can change. For example, a value of `0` indicates that the attack time is at its default value. Positive values up to `1.0` increase the attack time exponentially, while negative values down to `-1.0` decrease the attack time exponentially. Haptic intensity responds to this parameter.

![A series of lines showing how a haptic pattern ramps up in intensity for various values of attack.](https://developer.apple.com/images/com.apple.corehaptics/media-3235478@2x.png)

## See Also

### Haptic Event Parameter IDs

- [CHHapticEventParameterIDHapticIntensity](hapticintensity.md): The strength of a haptic event.
- [CHHapticEventParameterIDHapticSharpness](hapticsharpness.md): The feel of a haptic event.
- [CHHapticEventParameterIDDecayTime](decaytime.md): The time at which a haptic pattern’s intensity begins decreasing.
- [CHHapticEventParameterIDReleaseTime](releasetime.md): The time at which to begin fading the haptic pattern.
- [CHHapticEventParameterIDSustained](sustained.md): A Boolean value that indicates whether to sustain a haptic event for its specified duration.
