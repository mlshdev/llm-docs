> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/extendedaudioformatinfo](https://developer.apple.com/documentation/audiotoolbox/extendedaudioformatinfo)

# ExtendedAudioFormatInfo (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A specifier for the [kAudioFormatProperty_FormatList](kaudioformatproperty_formatlist.md) property, including the codec to use.

## Declaration

```swift
struct ExtendedAudioFormatInfo
```

## Topics

### Initializers

- [init()](extendedaudioformatinfo/init%28%29.md)
- [init(mASBD:mMagicCookie:mMagicCookieSize:mClassDescription:)](extendedaudioformatinfo/init%28masbd_mmagiccookie_mmagiccookiesize_mclassdescription_%29.md)

### Instance Properties

- [mASBD](extendedaudioformatinfo/masbd.md): A format specification for an audio stream.
- [mClassDescription](extendedaudioformatinfo/mclassdescription.md): A structure that describes an audio codec.
- [mMagicCookie](extendedaudioformatinfo/mmagiccookie.md): Decompression information for the audio data format specified in the `mASBD` field.
- [mMagicCookieSize](extendedaudioformatinfo/mmagiccookiesize.md): The size, in bytes, of the `mMagicCookie` field.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [AudioBalanceFade](audiobalancefade.md): Describes audio left/right balance and front/back fade values.
- [AudioFormatInfo](audioformatinfo.md): A structure that specifies an audio format.
- [AudioFormatListItem](../coreaudiotypes/audioformatlistitem.md)
- [AudioPanningInfo](audiopanninginfo.md): Audio panning information.
- [AudioFormatPropertyID](audioformatpropertyid.md): A type for four-char codes for audio format property identifiers.

# ExtendedAudioFormatInfo (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A specifier for the [kAudioFormatProperty_FormatList](kaudioformatproperty_formatlist.md) property, including the codec to use.

## Declaration

```objectivec
struct ExtendedAudioFormatInfo;
```

## Topics

### Instance Properties

- [mASBD](extendedaudioformatinfo/masbd.md): A format specification for an audio stream.
- [mClassDescription](extendedaudioformatinfo/mclassdescription.md): A structure that describes an audio codec.
- [mMagicCookie](extendedaudioformatinfo/mmagiccookie.md): Decompression information for the audio data format specified in the `mASBD` field.
- [mMagicCookieSize](extendedaudioformatinfo/mmagiccookiesize.md): The size, in bytes, of the `mMagicCookie` field.

## See Also

### Data Types

- [AudioBalanceFade](audiobalancefade.md): Describes audio left/right balance and front/back fade values.
- [AudioFormatInfo](audioformatinfo.md): A structure that specifies an audio format.
- [AudioFormatListItem](../coreaudiotypes/audioformatlistitem.md)
- [AudioPanningInfo](audiopanninginfo.md): Audio panning information.
- [AudioFormatPropertyID](audioformatpropertyid.md): A type for four-char codes for audio format property identifiers.
