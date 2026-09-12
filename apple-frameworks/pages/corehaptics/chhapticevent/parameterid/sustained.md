> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticevent/parameterid/sustained](https://developer.apple.com/documentation/corehaptics/chhapticevent/parameterid/sustained)

# sustained (Swift)

**Framework:** Core Haptics  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether to sustain a haptic event for its specified duration.

## Declaration

```swift
static let sustained: CHHapticEvent.ParameterID
```

<a id="Discussion"></a>

## Discussion

This parameter is an event parameter. It determines whether or not the haptic continues playing at full strength after attack has finished, and before decay begins.

![A graphic showing the effect of sustain: on the left, turning sustain on causes attack and decay to happen outside the haptic pattern, whereas turning sustain off (on the right) causes attan’tand decay to happen within the haptic pattern.](https://developer.apple.com/images/com.apple.corehaptics/media-3235480@2x.png)

If [true](https://developer.apple.com/documentation/swift/true), the engine sustains the haptic pattern throughout its specified duration, increasing only during its [attackTime](attacktime.md), and decreasing only after its [decayTime](decaytime.md). If [false](https://developer.apple.com/documentation/swift/false), the haptic doesn’t stay at full strength between attack and decay, tailing off even before its decay has begun.

## See Also

### Haptic Event Parameter IDs

- [hapticIntensity](hapticintensity.md): The strength of a haptic event.
- [hapticSharpness](hapticsharpness.md): The feel of a haptic event.
- [attackTime](attacktime.md): The time at which a haptic pattern’s intensity begins increasing.
- [decayTime](decaytime.md): The time at which a haptic pattern’s intensity begins decreasing.
- [releaseTime](releasetime.md): The time at which to begin fading the haptic pattern.

# CHHapticEventParameterIDSustained (Objective-C)

**Framework:** Core Haptics  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether to sustain a haptic event for its specified duration.

## Declaration

```objectivec
extern CHHapticEventParameterID CHHapticEventParameterIDSustained;
```

<a id="Discussion"></a>

## Discussion

This parameter is an event parameter. It determines whether or not the haptic continues playing at full strength after attack has finished, and before decay begins.

![A graphic showing the effect of sustain: on the left, turning sustain on causes attack and decay to happen outside the haptic pattern, whereas turning sustain off (on the right) causes attan’tand decay to happen within the haptic pattern.](https://developer.apple.com/images/com.apple.corehaptics/media-3235480@2x.png)

If [true](https://developer.apple.com/documentation/swift/true), the engine sustains the haptic pattern throughout its specified duration, increasing only during its [CHHapticEventParameterIDAttackTime](attacktime.md), and decreasing only after its [CHHapticEventParameterIDDecayTime](decaytime.md). If [false](https://developer.apple.com/documentation/swift/false), the haptic doesn’t stay at full strength between attack and decay, tailing off even before its decay has begun.

## See Also

### Haptic Event Parameter IDs

- [CHHapticEventParameterIDHapticIntensity](hapticintensity.md): The strength of a haptic event.
- [CHHapticEventParameterIDHapticSharpness](hapticsharpness.md): The feel of a haptic event.
- [CHHapticEventParameterIDAttackTime](attacktime.md): The time at which a haptic pattern’s intensity begins increasing.
- [CHHapticEventParameterIDDecayTime](decaytime.md): The time at which a haptic pattern’s intensity begins decreasing.
- [CHHapticEventParameterIDReleaseTime](releasetime.md): The time at which to begin fading the haptic pattern.
