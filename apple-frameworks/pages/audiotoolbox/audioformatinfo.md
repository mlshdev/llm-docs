> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioformatinfo](https://developer.apple.com/documentation/audiotoolbox/audioformatinfo)

# AudioFormatInfo (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure that specifies an audio format.

## Declaration

```swift
struct AudioFormatInfo
```

<a id="overview"></a>

## Overview

Use this value with the [kAudioFormatProperty_FormatList](kaudioformatproperty_formatlist.md) property.

## Topics

### Initializers

- [init(mASBD:mMagicCookie:mMagicCookieSize:)](audioformatinfo/init%28masbd_mmagiccookie_mmagiccookiesize_%29.md)

### Instance Properties

- [mASBD](audioformatinfo/masbd.md): An `AudioStreamBasicDescription` structure.
- [mMagicCookie](audioformatinfo/mmagiccookie.md): A pointer to the decompression information for the data described in the `mASBD` parameter.
- [mMagicCookieSize](audioformatinfo/mmagiccookiesize.md): The size, in bytes, of the `mMagicCookie` parameter.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [AudioBalanceFade](audiobalancefade.md): Describes audio left/right balance and front/back fade values.
- [AudioFormatListItem](../coreaudiotypes/audioformatlistitem.md)
- [AudioPanningInfo](audiopanninginfo.md): Audio panning information.
- [ExtendedAudioFormatInfo](extendedaudioformatinfo.md): A specifier for the [kAudioFormatProperty_FormatList](kaudioformatproperty_formatlist.md) property, including the codec to use.
- [AudioFormatPropertyID](audioformatpropertyid.md): A type for four-char codes for audio format property identifiers.

# AudioFormatInfo (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure that specifies an audio format.

## Declaration

```objectivec
struct AudioFormatInfo;
```

<a id="overview"></a>

## Overview

Use this value with the [kAudioFormatProperty_FormatList](kaudioformatproperty_formatlist.md) property.

## Topics

### Instance Properties

- [mASBD](audioformatinfo/masbd.md): An `AudioStreamBasicDescription` structure.
- [mMagicCookie](audioformatinfo/mmagiccookie.md): A pointer to the decompression information for the data described in the `mASBD` parameter.
- [mMagicCookieSize](audioformatinfo/mmagiccookiesize.md): The size, in bytes, of the `mMagicCookie` parameter.

## See Also

### Data Types

- [AudioBalanceFade](audiobalancefade.md): Describes audio left/right balance and front/back fade values.
- [AudioFormatListItem](../coreaudiotypes/audioformatlistitem.md)
- [AudioPanningInfo](audiopanninginfo.md): Audio panning information.
- [ExtendedAudioFormatInfo](extendedaudioformatinfo.md): A specifier for the [kAudioFormatProperty_FormatList](kaudioformatproperty_formatlist.md) property, including the codec to use.
- [AudioFormatPropertyID](audioformatpropertyid.md): A type for four-char codes for audio format property identifiers.
