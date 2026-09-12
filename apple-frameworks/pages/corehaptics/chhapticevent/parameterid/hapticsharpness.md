> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticevent/parameterid/hapticsharpness](https://developer.apple.com/documentation/corehaptics/chhapticevent/parameterid/hapticsharpness)

# hapticSharpness (Swift)

**Framework:** Core Haptics  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The feel of a haptic event.

## Declaration

```swift
static let hapticSharpness: CHHapticEvent.ParameterID
```

<a id="Discussion"></a>

## Discussion

Specify a pattern’s sharpness by setting this value from 0.0 to 1.0. Haptic patterns with low sharpness have a round and organic feel, whereas haptic patterns with high sharpness feel more crisp and precise. The diagram below depicts sharpness of haptic events as a single line to indicate the sensation of persistent feedback against the user’s hand:

![A diagram showing sharpness of three transient haptic events on the left, and sharpness of three continuous haptic events on the right.](https://developer.apple.com/images/com.apple.corehaptics/media-3242668@2x.png)

To change the sharpness dynamically, use [hapticSharpnessControl](../../chhapticdynamicparameter/id/hapticsharpnesscontrol.md).

## See Also

### Haptic Event Parameter IDs

- [hapticIntensity](hapticintensity.md): The strength of a haptic event.
- [attackTime](attacktime.md): The time at which a haptic pattern’s intensity begins increasing.
- [decayTime](decaytime.md): The time at which a haptic pattern’s intensity begins decreasing.
- [releaseTime](releasetime.md): The time at which to begin fading the haptic pattern.
- [sustained](sustained.md): A Boolean value that indicates whether to sustain a haptic event for its specified duration.

# CHHapticEventParameterIDHapticSharpness (Objective-C)

**Framework:** Core Haptics  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The feel of a haptic event.

## Declaration

```objectivec
extern CHHapticEventParameterID CHHapticEventParameterIDHapticSharpness;
```

<a id="Discussion"></a>

## Discussion

Specify a pattern’s sharpness by setting this value from 0.0 to 1.0. Haptic patterns with low sharpness have a round and organic feel, whereas haptic patterns with high sharpness feel more crisp and precise. The diagram below depicts sharpness of haptic events as a single line to indicate the sensation of persistent feedback against the user’s hand:

![A diagram showing sharpness of three transient haptic events on the left, and sharpness of three continuous haptic events on the right.](https://developer.apple.com/images/com.apple.corehaptics/media-3242668@2x.png)

To change the sharpness dynamically, use [CHHapticDynamicParameterIDHapticSharpnessControl](../../chhapticdynamicparameter/id/hapticsharpnesscontrol.md).

## See Also

### Haptic Event Parameter IDs

- [CHHapticEventParameterIDHapticIntensity](hapticintensity.md): The strength of a haptic event.
- [CHHapticEventParameterIDAttackTime](attacktime.md): The time at which a haptic pattern’s intensity begins increasing.
- [CHHapticEventParameterIDDecayTime](decaytime.md): The time at which a haptic pattern’s intensity begins decreasing.
- [CHHapticEventParameterIDReleaseTime](releasetime.md): The time at which to begin fading the haptic pattern.
- [CHHapticEventParameterIDSustained](sustained.md): A Boolean value that indicates whether to sustain a haptic event for its specified duration.
