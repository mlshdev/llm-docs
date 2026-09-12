> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiobalancefadetype/maxunitygain](https://developer.apple.com/documentation/audiotoolbox/audiobalancefadetype/maxunitygain)

# AudioBalanceFadeType.maxUnityGain (Swift)

**Framework:** Audio Toolbox  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Ensures that the overall gain value never exceeds 1.0 by fading one channel as the other channel’s level rises. This can reduce overall loudness when the balance or fade is not in the center.

## Declaration

```swift
case maxUnityGain
```

## See Also

### Types

- [AudioBalanceFadeType.equalPower](equalpower.md): Overall loudness remains constant, but gain can exceed 1.0. The gain value is 1.0 when the balance and fade are in the center. From there they can increase to +3dB (1.414) and decrease to silence.

# kAudioBalanceFadeType_MaxUnityGain (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Ensures that the overall gain value never exceeds 1.0 by fading one channel as the other channel’s level rises. This can reduce overall loudness when the balance or fade is not in the center.

## Declaration

```objectivec
kAudioBalanceFadeType_MaxUnityGain
```

## See Also

### Types

- [kAudioBalanceFadeType_EqualPower](equalpower.md): Overall loudness remains constant, but gain can exceed 1.0. The gain value is 1.0 when the balance and fade are in the center. From there they can increase to +3dB (1.414) and decrease to silence.
