> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticevent/parameterid/decaytime](https://developer.apple.com/documentation/corehaptics/chhapticevent/parameterid/decaytime)

# decayTime (Swift)

**Framework:** Core Haptics  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The time at which a haptic pattern’s intensity begins decreasing.

## Declaration

```swift
static let decayTime: CHHapticEvent.ParameterID
```

<a id="Discussion"></a>

## Discussion

This parameter can be an event parameter or a dynamic parameter. A fixed value indicates that the haptic begins decreasing in intensity at the set time, where time `0` indicates now, or the current time.

A dynamic value indicates that the start time of the decrease can change. For example, a value of `0` indicates that the decay time is at its default value. Positive values up to `1.0` increase the decay time exponentially, while negative values down to `-1.0` decrease the decay time exponentially.

Haptic intensity responds to this parameter. For example, the following graphic shows the intensity of a haptic pattern in gray. At the beginning, the haptic pattern’s intensity increases from zero to its final value over a certain amount of time; this duration is called the *attack*. As the haptic pattern reaches its end, the intensity gradually transitions to zero over a certain amount of time; this duration is called the *decay*.

![A series of lines showing how a haptic pattern ramps down in intensity for various values of decay.](https://developer.apple.com/images/com.apple.corehaptics/media-3199008@2x.png)

## See Also

### Haptic Event Parameter IDs

- [hapticIntensity](hapticintensity.md): The strength of a haptic event.
- [hapticSharpness](hapticsharpness.md): The feel of a haptic event.
- [attackTime](attacktime.md): The time at which a haptic pattern’s intensity begins increasing.
- [releaseTime](releasetime.md): The time at which to begin fading the haptic pattern.
- [sustained](sustained.md): A Boolean value that indicates whether to sustain a haptic event for its specified duration.

# CHHapticEventParameterIDDecayTime (Objective-C)

**Framework:** Core Haptics  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The time at which a haptic pattern’s intensity begins decreasing.

## Declaration

```objectivec
extern CHHapticEventParameterID CHHapticEventParameterIDDecayTime;
```

<a id="Discussion"></a>

## Discussion

This parameter can be an event parameter or a dynamic parameter. A fixed value indicates that the haptic begins decreasing in intensity at the set time, where time `0` indicates now, or the current time.

A dynamic value indicates that the start time of the decrease can change. For example, a value of `0` indicates that the decay time is at its default value. Positive values up to `1.0` increase the decay time exponentially, while negative values down to `-1.0` decrease the decay time exponentially.

Haptic intensity responds to this parameter. For example, the following graphic shows the intensity of a haptic pattern in gray. At the beginning, the haptic pattern’s intensity increases from zero to its final value over a certain amount of time; this duration is called the *attack*. As the haptic pattern reaches its end, the intensity gradually transitions to zero over a certain amount of time; this duration is called the *decay*.

![A series of lines showing how a haptic pattern ramps down in intensity for various values of decay.](https://developer.apple.com/images/com.apple.corehaptics/media-3199008@2x.png)

## See Also

### Haptic Event Parameter IDs

- [CHHapticEventParameterIDHapticIntensity](hapticintensity.md): The strength of a haptic event.
- [CHHapticEventParameterIDHapticSharpness](hapticsharpness.md): The feel of a haptic event.
- [CHHapticEventParameterIDAttackTime](attacktime.md): The time at which a haptic pattern’s intensity begins increasing.
- [CHHapticEventParameterIDReleaseTime](releasetime.md): The time at which to begin fading the haptic pattern.
- [CHHapticEventParameterIDSustained](sustained.md): A Boolean value that indicates whether to sustain a haptic event for its specified duration.
