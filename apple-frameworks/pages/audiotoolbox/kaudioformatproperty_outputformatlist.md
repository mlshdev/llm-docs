> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudioformatproperty_outputformatlist](https://developer.apple.com/documentation/audiotoolbox/kaudioformatproperty_outputformatlist)

# kAudioFormatProperty_OutputFormatList (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A list of structures describing the audio formats.

## Declaration

```swift
var kAudioFormatProperty_OutputFormatList: AudioFormatPropertyID { get }
```

<a id="discussion"></a>

## Discussion

A list of [AudioFormatListItem](../coreaudiotypes/audioformatlistitem.md) structures describing the audio formats which may be obtained by decoding the format described by the specifier. Set the `inSpecifier` parameter to an [AudioFormatInfo](audioformatinfo.md) structure. At a minimum, the `formatID` field of the `AudioStreamBasicDescription` structure must filled in. Other fields may be filled in. If there is no magic cookie, then the number of channels and sample rate should be filled in.

## See Also

### Constants

- [kAudioFormatProperty_FormatInfo](kaudioformatproperty_formatinfo.md): General information about a format. Set the `inSpecifier` parameter to a magic cookie, or `NULL`. On input, the property value is an `AudioStreamBasicDescription` structure which should have at least the `mFormatID` field filled out. On output, the structure will be filled out as much as possible given the information known about the format and the contents of the magic cookie (if any is given). If multiple formats can be described by the `AudioStreamBasicDescription` and the associated magic cookie, this property will return the base level format.
- [kAudioFormatProperty_FormatName](kaudioformatproperty_formatname.md): A name for a given format. Set the `inSpecifier` parameter to an `AudioStreamBasicDescription` structure describing the format to ask about. The value is a `CFStringRef` object. The caller is responsible for releasing the returned string. For some formats, such as linear PCM, you get back a descriptive string, for example, “16-bit, interleaved.”
- [kAudioFormatProperty_EncodeFormatIDs](kaudioformatproperty_encodeformatids.md): An array of `UInt32` values representing format identifiers for formats that are valid output formats for a converter. You must set the `inSpecifier` parameter to `NULL`.
- [kAudioFormatProperty_DecodeFormatIDs](kaudioformatproperty_decodeformatids.md): An array of `UInt32` values representing format identifiers for formats that are valid input formats for a converter. You must set the `inSpecifier` parameter to `NULL`.
- [kAudioFormatProperty_FormatList](kaudioformatproperty_formatlist.md): A list of structures describing the audio formats.
- [kAudioFormatProperty_ASBDFromESDS](kaudioformatproperty_asbdfromesds.md): An `AudioStreamBasicDescription` structure for a given elementary stream descriptor (ESDS). Set the `inSpecifier` parameter to an ESDS. If multiple formats can be described by the ESDS, this property will return the base level format.
- [kAudioFormatProperty_ChannelLayoutFromESDS](kaudioformatproperty_channellayoutfromesds.md): An `AudioChannelLayout` structure for a given elementary stream descriptor (ESDS).
- [kAudioFormatProperty_FirstPlayableFormatFromList](kaudioformatproperty_firstplayableformatfromlist.md): The index of the first `AudioFormatListItem` that represents an audio format.
- [kAudioFormatProperty_Encoders](kaudioformatproperty_encoders.md): An array of `AudioClassDescription` structures for all installed encoders for the specified audio format. Set the `inSpecifier` parameter to the format that you are interested in, for instance, `'aac'`.
- [kAudioFormatProperty_Decoders](kaudioformatproperty_decoders.md): An array of `AudioClassDescription` structures for all installed decoders for the specified audio format. Set the `inSpecifier` parameter to the format that you are interested in, for instance, `'aac'`.
- [kAudioFormatProperty_FormatIsVBR](kaudioformatproperty_formatisvbr.md): Indicates whether or not a format has a variable number of bytes-per-packet.
- [kAudioFormatProperty_FormatIsExternallyFramed](kaudioformatproperty_formatisexternallyframed.md): Indicates whether or not a format requires external framing information.
- [kAudioFormatProperty_AvailableEncodeBitRates](kaudioformatproperty_availableencodebitrates.md): An array of `AudioValueRange` structures describing all available bit rates.
- [kAudioFormatProperty_AvailableEncodeSampleRates](kaudioformatproperty_availableencodesamplerates.md): An array of `AudioValueRange` structures.
- [kAudioFormatProperty_AvailableEncodeChannelLayoutTags](kaudioformatproperty_availableencodechannellayouttags.md): An array of `AudioChannelLayoutTag` values for the format and number of channels specified.

# kAudioFormatProperty_OutputFormatList (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A list of structures describing the audio formats.

## Declaration

```objectivec
kAudioFormatProperty_OutputFormatList
```

<a id="discussion"></a>

## Discussion

A list of [AudioFormatListItem](../coreaudiotypes/audioformatlistitem.md) structures describing the audio formats which may be obtained by decoding the format described by the specifier. Set the `inSpecifier` parameter to an [AudioFormatInfo](audioformatinfo.md) structure. At a minimum, the `formatID` field of the `AudioStreamBasicDescription` structure must filled in. Other fields may be filled in. If there is no magic cookie, then the number of channels and sample rate should be filled in.

## See Also

### Constants

- [kAudioFormatProperty_FormatInfo](kaudioformatproperty_formatinfo.md): General information about a format. Set the `inSpecifier` parameter to a magic cookie, or `NULL`. On input, the property value is an `AudioStreamBasicDescription` structure which should have at least the `mFormatID` field filled out. On output, the structure will be filled out as much as possible given the information known about the format and the contents of the magic cookie (if any is given). If multiple formats can be described by the `AudioStreamBasicDescription` and the associated magic cookie, this property will return the base level format.
- [kAudioFormatProperty_FormatName](kaudioformatproperty_formatname.md): A name for a given format. Set the `inSpecifier` parameter to an `AudioStreamBasicDescription` structure describing the format to ask about. The value is a `CFStringRef` object. The caller is responsible for releasing the returned string. For some formats, such as linear PCM, you get back a descriptive string, for example, “16-bit, interleaved.”
- [kAudioFormatProperty_EncodeFormatIDs](kaudioformatproperty_encodeformatids.md): An array of `UInt32` values representing format identifiers for formats that are valid output formats for a converter. You must set the `inSpecifier` parameter to `NULL`.
- [kAudioFormatProperty_DecodeFormatIDs](kaudioformatproperty_decodeformatids.md): An array of `UInt32` values representing format identifiers for formats that are valid input formats for a converter. You must set the `inSpecifier` parameter to `NULL`.
- [kAudioFormatProperty_FormatList](kaudioformatproperty_formatlist.md): A list of structures describing the audio formats.
- [kAudioFormatProperty_ASBDFromESDS](kaudioformatproperty_asbdfromesds.md): An `AudioStreamBasicDescription` structure for a given elementary stream descriptor (ESDS). Set the `inSpecifier` parameter to an ESDS. If multiple formats can be described by the ESDS, this property will return the base level format.
- [kAudioFormatProperty_ChannelLayoutFromESDS](kaudioformatproperty_channellayoutfromesds.md): An `AudioChannelLayout` structure for a given elementary stream descriptor (ESDS).
- [kAudioFormatProperty_FirstPlayableFormatFromList](kaudioformatproperty_firstplayableformatfromlist.md): The index of the first `AudioFormatListItem` that represents an audio format.
- [kAudioFormatProperty_Encoders](kaudioformatproperty_encoders.md): An array of `AudioClassDescription` structures for all installed encoders for the specified audio format. Set the `inSpecifier` parameter to the format that you are interested in, for instance, `'aac'`.
- [kAudioFormatProperty_Decoders](kaudioformatproperty_decoders.md): An array of `AudioClassDescription` structures for all installed decoders for the specified audio format. Set the `inSpecifier` parameter to the format that you are interested in, for instance, `'aac'`.
- [kAudioFormatProperty_FormatIsVBR](kaudioformatproperty_formatisvbr.md): Indicates whether or not a format has a variable number of bytes-per-packet.
- [kAudioFormatProperty_FormatIsExternallyFramed](kaudioformatproperty_formatisexternallyframed.md): Indicates whether or not a format requires external framing information.
- [kAudioFormatProperty_AvailableEncodeBitRates](kaudioformatproperty_availableencodebitrates.md): An array of `AudioValueRange` structures describing all available bit rates.
- [kAudioFormatProperty_AvailableEncodeSampleRates](kaudioformatproperty_availableencodesamplerates.md): An array of `AudioValueRange` structures.
- [kAudioFormatProperty_AvailableEncodeChannelLayoutTags](kaudioformatproperty_availableencodechannellayouttags.md): An array of `AudioChannelLayoutTag` values for the format and number of channels specified.
