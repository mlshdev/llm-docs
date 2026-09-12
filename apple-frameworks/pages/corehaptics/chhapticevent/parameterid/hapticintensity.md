> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticevent/parameterid/hapticintensity](https://developer.apple.com/documentation/corehaptics/chhapticevent/parameterid/hapticintensity)

# hapticIntensity (Swift)

**Framework:** Core Haptics  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The strength of a haptic event.

## Declaration

```swift
static let hapticIntensity: CHHapticEvent.ParameterID
```

<a id="Discussion"></a>

## Discussion

This parameter maps to the haptic pattern’s amplitude or strength. Its value ranges from 0.0 (weak) to 1.0 (strong). Think of intensity as the volume of a haptic pattern, indicating how impactful it feels in the user’s hand. The higher the haptic intensity, the stronger the resulting haptic.

![Short blue bars show the intensity of a transient haptic event on the left, and long orange bars show a continuous haptic event on the right.](https://developer.apple.com/images/com.apple.corehaptics/media-3242667@2x.png)

To change the intensity dynamically, use [hapticIntensityControl](../../chhapticdynamicparameter/id/hapticintensitycontrol.md).

## See Also

### Haptic Event Parameter IDs

- [hapticSharpness](hapticsharpness.md): The feel of a haptic event.
- [attackTime](attacktime.md): The time at which a haptic pattern’s intensity begins increasing.
- [decayTime](decaytime.md): The time at which a haptic pattern’s intensity begins decreasing.
- [releaseTime](releasetime.md): The time at which to begin fading the haptic pattern.
- [sustained](sustained.md): A Boolean value that indicates whether to sustain a haptic event for its specified duration.

# CHHapticEventParameterIDHapticIntensity (Objective-C)

**Framework:** Core Haptics  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The strength of a haptic event.

## Declaration

```objectivec
extern CHHapticEventParameterID CHHapticEventParameterIDHapticIntensity;
```

<a id="Discussion"></a>

## Discussion

This parameter maps to the haptic pattern’s amplitude or strength. Its value ranges from 0.0 (weak) to 1.0 (strong). Think of intensity as the volume of a haptic pattern, indicating how impactful it feels in the user’s hand. The higher the haptic intensity, the stronger the resulting haptic.

![Short blue bars show the intensity of a transient haptic event on the left, and long orange bars show a continuous haptic event on the right.](https://developer.apple.com/images/com.apple.corehaptics/media-3242667@2x.png)

To change the intensity dynamically, use [CHHapticDynamicParameterIDHapticIntensityControl](../../chhapticdynamicparameter/id/hapticintensitycontrol.md).

## See Also

### Haptic Event Parameter IDs

- [CHHapticEventParameterIDHapticSharpness](hapticsharpness.md): The feel of a haptic event.
- [CHHapticEventParameterIDAttackTime](attacktime.md): The time at which a haptic pattern’s intensity begins increasing.
- [CHHapticEventParameterIDDecayTime](decaytime.md): The time at which a haptic pattern’s intensity begins decreasing.
- [CHHapticEventParameterIDReleaseTime](releasetime.md): The time at which to begin fading the haptic pattern.
- [CHHapticEventParameterIDSustained](sustained.md): A Boolean value that indicates whether to sustain a haptic event for its specified duration.
