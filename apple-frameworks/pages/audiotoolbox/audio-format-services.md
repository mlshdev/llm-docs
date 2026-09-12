> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audio-format-services](https://developer.apple.com/documentation/audiotoolbox/audio-format-services)

# Audio Format Services (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Access information about audio formats and codecs.

<a id="overview"></a>

## Overview

This document describes Audio Format Services, a C interface for obtaining information about audio formats and codecs.

## Topics

### Audio Format Services Functions

- [AudioFormatGetProperty(\_:\_:\_:\_:\_:)](audioformatgetproperty%28__________%29.md): Gets the value of an audio format property.
- [AudioFormatGetPropertyInfo(\_:\_:\_:\_:)](audioformatgetpropertyinfo%28________%29.md): Gets information about an audio format property.

### Data Types

- [AudioBalanceFade](audiobalancefade.md): Describes audio left/right balance and front/back fade values.
- [AudioFormatInfo](audioformatinfo.md): A structure that specifies an audio format.
- [AudioFormatListItem](../coreaudiotypes/audioformatlistitem.md)
- [AudioPanningInfo](audiopanninginfo.md): Audio panning information.
- [ExtendedAudioFormatInfo](extendedaudioformatinfo.md): A specifier for the [kAudioFormatProperty_FormatList](kaudioformatproperty_formatlist.md) property, including the codec to use.
- [AudioFormatPropertyID](audioformatpropertyid.md): A type for four-char codes for audio format property identifiers.

### Constants

- [AudioBalanceFadeType](audiobalancefadetype.md): Identifiers for audio balance fade types.
- [Audio Format Property Identifiers](1577853-audio-format-property-identifier.md): Constants for use with the [AudioFormatGetPropertyInfo(\_:\_:\_:\_:)](audioformatgetpropertyinfo%28________%29.md) and [AudioFormatGetProperty(\_:\_:\_:\_:\_:)](audioformatgetproperty%28__________%29.md) functions.
- [Audio Codec Component Constants](1494086-audio-codec-component-constants.md): Audio codec component types.
- [Audio Codec Manufacturer and Implementation Types](1620448-audio-codec-manufacturer-and-imp.md): Identifiers for audio codec manufacturers and implementation types.
- [AudioPanningMode](audiopanningmode.md): Identifiers for audio panning algorithms.

### Result Codes

This table lists the result codes defined for Audio Format Services.

- [Audio Format Error Codes](1577851-audio-format-error-codes.md)
- [kAudioFormatUnspecifiedError](kaudioformatunspecifiederror.md): An unspecified error.
- [kAudioFormatUnsupportedPropertyError](kaudioformatunsupportedpropertyerror.md): The specified property is not supported.
- [kAudioFormatBadPropertySizeError](kaudioformatbadpropertysizeerror.md)
- [kAudioFormatBadSpecifierSizeError](kaudioformatbadspecifiersizeerror.md)
- [kAudioFormatUnsupportedDataFormatError](kaudioformatunsupporteddataformaterror.md): The playback data format is unsupported (declared in `AudioFormat.h`).
- [kAudioFormatUnknownFormatError](kaudioformatunknownformaterror.md): The specified data format is not a known format.

## See Also

### Audio Files and Formats

- [Audio File Services](audio-file-services.md): Read or write a variety of audio data to or from disk or a memory buffer.
- [Extended Audio File Services](extended-audio-file-services.md): Read and write compressed files and linear PCM audio files using a simplified interface.
- [Audio File Stream Services](audio-file-stream-services.md): Parse streamed audio files as the data arrives on the user’s computer.
- [Audio File Components](audio-file-components.md): Get information about audio file formats, and about files containing audio data.
- [Core Audio File Format](core-audio-file-format.md): Parse the structure of Core Audio files.

# Audio Format Services (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Access information about audio formats and codecs.

<a id="overview"></a>

## Overview

This document describes Audio Format Services, a C interface for obtaining information about audio formats and codecs.

## Topics

### Audio Format Services Functions

- [AudioFormatGetProperty](audioformatgetproperty%28__________%29.md): Gets the value of an audio format property.
- [AudioFormatGetPropertyInfo](audioformatgetpropertyinfo%28________%29.md): Gets information about an audio format property.

### Data Types

- [AudioBalanceFade](audiobalancefade.md): Describes audio left/right balance and front/back fade values.
- [AudioFormatInfo](audioformatinfo.md): A structure that specifies an audio format.
- [AudioFormatListItem](../coreaudiotypes/audioformatlistitem.md)
- [AudioPanningInfo](audiopanninginfo.md): Audio panning information.
- [ExtendedAudioFormatInfo](extendedaudioformatinfo.md): A specifier for the [kAudioFormatProperty_FormatList](kaudioformatproperty_formatlist.md) property, including the codec to use.
- [AudioFormatPropertyID](audioformatpropertyid.md): A type for four-char codes for audio format property identifiers.

### Constants

- [AudioBalanceFadeType](audiobalancefadetype.md): Identifiers for audio balance fade types.
- [Audio Format Property Identifiers](1577853-audio-format-property-identifier.md): Constants for use with the [AudioFormatGetPropertyInfo](audioformatgetpropertyinfo%28________%29.md) and [AudioFormatGetProperty](audioformatgetproperty%28__________%29.md) functions.
- [Audio Codec Component Constants](1494086-audio-codec-component-constants.md): Audio codec component types.
- [Audio Codec Manufacturer and Implementation Types](1620448-audio-codec-manufacturer-and-imp.md): Identifiers for audio codec manufacturers and implementation types.
- [AudioPanningMode](audiopanningmode.md): Identifiers for audio panning algorithms.

### Result Codes

This table lists the result codes defined for Audio Format Services.

- [Audio Format Error Codes](1577851-audio-format-error-codes.md)
- [kAudioFormatUnspecifiedError](kaudioformatunspecifiederror.md): An unspecified error.
- [kAudioFormatUnsupportedPropertyError](kaudioformatunsupportedpropertyerror.md): The specified property is not supported.
- [kAudioFormatBadPropertySizeError](kaudioformatbadpropertysizeerror.md)
- [kAudioFormatBadSpecifierSizeError](kaudioformatbadspecifiersizeerror.md)
- [kAudioFormatUnsupportedDataFormatError](kaudioformatunsupporteddataformaterror.md): The playback data format is unsupported (declared in `AudioFormat.h`).
- [kAudioFormatUnknownFormatError](kaudioformatunknownformaterror.md): The specified data format is not a known format.

## See Also

### Audio Files and Formats

- [Audio File Services](audio-file-services.md): Read or write a variety of audio data to or from disk or a memory buffer.
- [Extended Audio File Services](extended-audio-file-services.md): Read and write compressed files and linear PCM audio files using a simplified interface.
- [Audio File Stream Services](audio-file-stream-services.md): Parse streamed audio files as the data arrives on the user’s computer.
- [Audio File Components](audio-file-components.md): Get information about audio file formats, and about files containing audio data.
- [Core Audio File Format](core-audio-file-format.md): Parse the structure of Core Audio files.
