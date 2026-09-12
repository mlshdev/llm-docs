> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticevent/parameterid/releasetime](https://developer.apple.com/documentation/corehaptics/chhapticevent/parameterid/releasetime)

# releaseTime (Swift)

**Framework:** Core Haptics  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The time at which to begin fading the haptic pattern.

## Declaration

```swift
static let releaseTime: CHHapticEvent.ParameterID
```

<a id="Discussion"></a>

## Discussion

Specify the release time relative to the current time (`t = 0`), in seconds. It indicates when the pattern’s decay process begins. Its value ranges from `0` to `1`, with a default value of `0`.

## See Also

### Haptic Event Parameter IDs

- [hapticIntensity](hapticintensity.md): The strength of a haptic event.
- [hapticSharpness](hapticsharpness.md): The feel of a haptic event.
- [attackTime](attacktime.md): The time at which a haptic pattern’s intensity begins increasing.
- [decayTime](decaytime.md): The time at which a haptic pattern’s intensity begins decreasing.
- [sustained](sustained.md): A Boolean value that indicates whether to sustain a haptic event for its specified duration.

# CHHapticEventParameterIDReleaseTime (Objective-C)

**Framework:** Core Haptics  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The time at which to begin fading the haptic pattern.

## Declaration

```objectivec
extern CHHapticEventParameterID CHHapticEventParameterIDReleaseTime;
```

<a id="Discussion"></a>

## Discussion

Specify the release time relative to the current time (`t = 0`), in seconds. It indicates when the pattern’s decay process begins. Its value ranges from `0` to `1`, with a default value of `0`.

## See Also

### Haptic Event Parameter IDs

- [CHHapticEventParameterIDHapticIntensity](hapticintensity.md): The strength of a haptic event.
- [CHHapticEventParameterIDHapticSharpness](hapticsharpness.md): The feel of a haptic event.
- [CHHapticEventParameterIDAttackTime](attacktime.md): The time at which a haptic pattern’s intensity begins increasing.
- [CHHapticEventParameterIDDecayTime](decaytime.md): The time at which a haptic pattern’s intensity begins decreasing.
- [CHHapticEventParameterIDSustained](sustained.md): A Boolean value that indicates whether to sustain a haptic event for its specified duration.
