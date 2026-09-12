> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiobalancefade](https://developer.apple.com/documentation/audiotoolbox/audiobalancefade)

# AudioBalanceFade (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Describes audio left/right balance and front/back fade values.

## Declaration

```swift
struct AudioBalanceFade
```

<a id="overview"></a>

## Overview

This data structure is used with the [kAudioFormatProperty_BalanceFade](kaudioformatproperty_balancefade.md) property.

## Topics

### Initializers

- [init(mLeftRightBalance:mBackFrontFade:mType:mChannelLayout:)](audiobalancefade/init%28mleftrightbalance_mbackfrontfade_mtype_mchannellayout_%29.md)

### Instance Properties

- [mBackFrontFade](audiobalancefade/mbackfrontfade.md): The audio front/back fade, where -1 represents full rear, 0 represents center, and +1 represents full front.
- [mChannelLayout](audiobalancefade/mchannellayout.md): The size, in bytes, of the `mMagicCookie` parameter.
- [mLeftRightBalance](audiobalancefade/mleftrightbalance.md): The audio left/right balance, where -1 represents full left, 0 represents center, and +1 represents full right.
- [mType](audiobalancefade/mtype.md): An AudioBalanceFadeType constant. max unity gain, or equal power.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [AudioFormatInfo](audioformatinfo.md): A structure that specifies an audio format.
- [AudioFormatListItem](../coreaudiotypes/audioformatlistitem.md)
- [AudioPanningInfo](audiopanninginfo.md): Audio panning information.
- [ExtendedAudioFormatInfo](extendedaudioformatinfo.md): A specifier for the [kAudioFormatProperty_FormatList](kaudioformatproperty_formatlist.md) property, including the codec to use.
- [AudioFormatPropertyID](audioformatpropertyid.md): A type for four-char codes for audio format property identifiers.

# AudioBalanceFade (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Describes audio left/right balance and front/back fade values.

## Declaration

```objectivec
struct AudioBalanceFade;
```

<a id="overview"></a>

## Overview

This data structure is used with the [kAudioFormatProperty_BalanceFade](kaudioformatproperty_balancefade.md) property.

## Topics

### Instance Properties

- [mBackFrontFade](audiobalancefade/mbackfrontfade.md): The audio front/back fade, where -1 represents full rear, 0 represents center, and +1 represents full front.
- [mChannelLayout](audiobalancefade/mchannellayout.md): The size, in bytes, of the `mMagicCookie` parameter.
- [mLeftRightBalance](audiobalancefade/mleftrightbalance.md): The audio left/right balance, where -1 represents full left, 0 represents center, and +1 represents full right.
- [mType](audiobalancefade/mtype.md): An AudioBalanceFadeType constant. max unity gain, or equal power.

## See Also

### Data Types

- [AudioFormatInfo](audioformatinfo.md): A structure that specifies an audio format.
- [AudioFormatListItem](../coreaudiotypes/audioformatlistitem.md)
- [AudioPanningInfo](audiopanninginfo.md): Audio panning information.
- [ExtendedAudioFormatInfo](extendedaudioformatinfo.md): A specifier for the [kAudioFormatProperty_FormatList](kaudioformatproperty_formatlist.md) property, including the codec to use.
- [AudioFormatPropertyID](audioformatpropertyid.md): A type for four-char codes for audio format property identifiers.
