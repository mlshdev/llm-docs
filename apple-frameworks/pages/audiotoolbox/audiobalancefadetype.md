> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiobalancefadetype](https://developer.apple.com/documentation/audiotoolbox/audiobalancefadetype)

# AudioBalanceFadeType (Swift)

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Identifiers for audio balance fade types.

## Declaration

```swift
enum AudioBalanceFadeType
```

<a id="overview"></a>

## Overview

These constants are used as values for the `mType` field of the [AudioBalanceFade](audiobalancefade.md) structure.

## Topics

### Types

- [AudioBalanceFadeType.equalPower](audiobalancefadetype/equalpower.md): Overall loudness remains constant, but gain can exceed 1.0. The gain value is 1.0 when the balance and fade are in the center. From there they can increase to +3dB (1.414) and decrease to silence.
- [AudioBalanceFadeType.maxUnityGain](audiobalancefadetype/maxunitygain.md): Ensures that the overall gain value never exceeds 1.0 by fading one channel as the other channel’s level rises. This can reduce overall loudness when the balance or fade is not in the center.

### Initializers

- [init(rawValue:)](audiobalancefadetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [Audio Format Property Identifiers](1577853-audio-format-property-identifier.md): Constants for use with the [AudioFormatGetPropertyInfo(\_:\_:\_:\_:)](audioformatgetpropertyinfo%28________%29.md) and [AudioFormatGetProperty(\_:\_:\_:\_:\_:)](audioformatgetproperty%28__________%29.md) functions.
- [Audio Codec Component Constants](1494086-audio-codec-component-constants.md): Audio codec component types.
- [Audio Codec Manufacturer and Implementation Types](1620448-audio-codec-manufacturer-and-imp.md): Identifiers for audio codec manufacturers and implementation types.
- [AudioPanningMode](audiopanningmode.md): Identifiers for audio panning algorithms.

# AudioBalanceFadeType (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Identifiers for audio balance fade types.

## Declaration

```objectivec
enum AudioBalanceFadeType : UInt32;
```

<a id="overview"></a>

## Overview

These constants are used as values for the `mType` field of the [AudioBalanceFade](audiobalancefade.md) structure.

## Topics

### Types

- [kAudioBalanceFadeType_EqualPower](audiobalancefadetype/equalpower.md): Overall loudness remains constant, but gain can exceed 1.0. The gain value is 1.0 when the balance and fade are in the center. From there they can increase to +3dB (1.414) and decrease to silence.
- [kAudioBalanceFadeType_MaxUnityGain](audiobalancefadetype/maxunitygain.md): Ensures that the overall gain value never exceeds 1.0 by fading one channel as the other channel’s level rises. This can reduce overall loudness when the balance or fade is not in the center.

## See Also

### Constants

- [Audio Format Property Identifiers](1577853-audio-format-property-identifier.md): Constants for use with the [AudioFormatGetPropertyInfo](audioformatgetpropertyinfo%28________%29.md) and [AudioFormatGetProperty](audioformatgetproperty%28__________%29.md) functions.
- [Audio Codec Component Constants](1494086-audio-codec-component-constants.md): Audio codec component types.
- [Audio Codec Manufacturer and Implementation Types](1620448-audio-codec-manufacturer-and-imp.md): Identifiers for audio codec manufacturers and implementation types.
- [AudioPanningMode](audiopanningmode.md): Identifiers for audio panning algorithms.
