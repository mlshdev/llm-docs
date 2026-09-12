> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiopanningmode](https://developer.apple.com/documentation/audiotoolbox/audiopanningmode)

# AudioPanningMode (Swift)

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Identifiers for audio panning algorithms.

## Declaration

```swift
enum AudioPanningMode
```

## Topics

### Modes

- [AudioPanningMode.panningMode_SoundField](audiopanningmode/panningmode_soundfield.md): The SoundField panning algorithm.
- [AudioPanningMode.panningMode_VectorBasedPanning](audiopanningmode/panningmode_vectorbasedpanning.md): A vector-based panning algorithm.

### Initializers

- [init(rawValue:)](audiopanningmode/init%28rawvalue_%29.md)

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

- [AudioBalanceFadeType](audiobalancefadetype.md): Identifiers for audio balance fade types.
- [Audio Format Property Identifiers](1577853-audio-format-property-identifier.md): Constants for use with the [AudioFormatGetPropertyInfo(\_:\_:\_:\_:)](audioformatgetpropertyinfo%28________%29.md) and [AudioFormatGetProperty(\_:\_:\_:\_:\_:)](audioformatgetproperty%28__________%29.md) functions.
- [Audio Codec Component Constants](1494086-audio-codec-component-constants.md): Audio codec component types.
- [Audio Codec Manufacturer and Implementation Types](1620448-audio-codec-manufacturer-and-imp.md): Identifiers for audio codec manufacturers and implementation types.

# AudioPanningMode (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Identifiers for audio panning algorithms.

## Declaration

```objectivec
enum AudioPanningMode : UInt32;
```

## Topics

### Modes

- [kPanningMode_SoundField](audiopanningmode/panningmode_soundfield.md): The SoundField panning algorithm.
- [kPanningMode_VectorBasedPanning](audiopanningmode/panningmode_vectorbasedpanning.md): A vector-based panning algorithm.

## See Also

### Constants

- [AudioBalanceFadeType](audiobalancefadetype.md): Identifiers for audio balance fade types.
- [Audio Format Property Identifiers](1577853-audio-format-property-identifier.md): Constants for use with the [AudioFormatGetPropertyInfo](audioformatgetpropertyinfo%28________%29.md) and [AudioFormatGetProperty](audioformatgetproperty%28__________%29.md) functions.
- [Audio Codec Component Constants](1494086-audio-codec-component-constants.md): Audio codec component types.
- [Audio Codec Manufacturer and Implementation Types](1620448-audio-codec-manufacturer-and-imp.md): Identifiers for audio codec manufacturers and implementation types.
