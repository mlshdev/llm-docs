> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiobalancefadetype/equalpower](https://developer.apple.com/documentation/audiotoolbox/audiobalancefadetype/equalpower)

# AudioBalanceFadeType.equalPower (Swift)

**Framework:** Audio Toolbox  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Overall loudness remains constant, but gain can exceed 1.0. The gain value is 1.0 when the balance and fade are in the center. From there they can increase to +3dB (1.414) and decrease to silence.

## Declaration

```swift
case equalPower
```

## See Also

### Types

- [AudioBalanceFadeType.maxUnityGain](maxunitygain.md): Ensures that the overall gain value never exceeds 1.0 by fading one channel as the other channel’s level rises. This can reduce overall loudness when the balance or fade is not in the center.

# kAudioBalanceFadeType_EqualPower (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Overall loudness remains constant, but gain can exceed 1.0. The gain value is 1.0 when the balance and fade are in the center. From there they can increase to +3dB (1.414) and decrease to silence.

## Declaration

```objectivec
kAudioBalanceFadeType_EqualPower
```

## See Also

### Types

- [kAudioBalanceFadeType_MaxUnityGain](maxunitygain.md): Ensures that the overall gain value never exceeds 1.0 by fading one channel as the other channel’s level rises. This can reduce overall loudness when the balance or fade is not in the center.
