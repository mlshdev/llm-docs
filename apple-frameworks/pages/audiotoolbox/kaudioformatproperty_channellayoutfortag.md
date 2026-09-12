> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudioformatproperty_channellayoutfortag](https://developer.apple.com/documentation/audiotoolbox/kaudioformatproperty_channellayoutfortag)

# kAudioFormatProperty_ChannelLayoutForTag (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The channel descriptions for a standard channel layout.

## Declaration

```swift
var kAudioFormatProperty_ChannelLayoutForTag: AudioFormatPropertyID { get }
```

<a id="discussion"></a>

## Discussion

The channel descriptions for a standard channel layout. Set the `inSpecifier` parameter to an AudioChannelLayoutTag value (the `mChannelLayoutTag` field of the [AudioChannelLayout](../coreaudiotypes/audiochannellayout.md) structure) containing the layout constant. The value is an [AudioChannelLayout](../coreaudiotypes/audiochannellayout.md) structure. In typical use, an [AudioChannelLayout](../coreaudiotypes/audiochannellayout.md) can be valid with just a defined AudioChannelLayoutTag (that is, those layouts have predefined speaker locations and orderings). Returns an error if the tag is [kAudioChannelLayoutTag_UseChannelBitmap](../coreaudiotypes/kaudiochannellayouttag_usechannelbitmap.md).

## See Also

### Constants

- [kAudioFormatProperty_FormatInfo](kaudioformatproperty_formatinfo.md): General information about a format. Set the `inSpecifier` parameter to a magic cookie, or `NULL`. On input, the property value is an `AudioStreamBasicDescription` structure which should have at least the `mFormatID` field filled out. On output, the structure will be filled out as much as possible given the information known about the format and the contents of the magic cookie (if any is given). If multiple formats can be described by the `AudioStreamBasicDescription` and the associated magic cookie, this property will return the base level format.
- [kAudioFormatProperty_FormatName](kaudioformatproperty_formatname.md): A name for a given format. Set the `inSpecifier` parameter to an `AudioStreamBasicDescription` structure describing the format to ask about. The value is a `CFStringRef` object. The caller is responsible for releasing the returned string. For some formats, such as linear PCM, you get back a descriptive string, for example, “16-bit, interleaved.”
- [kAudioFormatProperty_EncodeFormatIDs](kaudioformatproperty_encodeformatids.md): An array of `UInt32` values representing format identifiers for formats that are valid output formats for a converter. You must set the `inSpecifier` parameter to `NULL`.
- [kAudioFormatProperty_DecodeFormatIDs](kaudioformatproperty_decodeformatids.md): An array of `UInt32` values representing format identifiers for formats that are valid input formats for a converter. You must set the `inSpecifier` parameter to `NULL`.
- [kAudioFormatProperty_FormatList](kaudioformatproperty_formatlist.md): A list of structures describing the audio formats.
- [kAudioFormatProperty_ASBDFromESDS](kaudioformatproperty_asbdfromesds.md): An `AudioStreamBasicDescription` structure for a given elementary stream descriptor (ESDS). Set the `inSpecifier` parameter to an ESDS. If multiple formats can be described by the ESDS, this property will return the base level format.
- [kAudioFormatProperty_ChannelLayoutFromESDS](kaudioformatproperty_channellayoutfromesds.md): An `AudioChannelLayout` structure for a given elementary stream descriptor (ESDS).
- [kAudioFormatProperty_OutputFormatList](kaudioformatproperty_outputformatlist.md): A list of structures describing the audio formats.
- [kAudioFormatProperty_FirstPlayableFormatFromList](kaudioformatproperty_firstplayableformatfromlist.md): The index of the first `AudioFormatListItem` that represents an audio format.
- [kAudioFormatProperty_Encoders](kaudioformatproperty_encoders.md): An array of `AudioClassDescription` structures for all installed encoders for the specified audio format. Set the `inSpecifier` parameter to the format that you are interested in, for instance, `'aac'`.
- [kAudioFormatProperty_Decoders](kaudioformatproperty_decoders.md): An array of `AudioClassDescription` structures for all installed decoders for the specified audio format. Set the `inSpecifier` parameter to the format that you are interested in, for instance, `'aac'`.
- [kAudioFormatProperty_FormatIsVBR](kaudioformatproperty_formatisvbr.md): Indicates whether or not a format has a variable number of bytes-per-packet.
- [kAudioFormatProperty_FormatIsExternallyFramed](kaudioformatproperty_formatisexternallyframed.md): Indicates whether or not a format requires external framing information.
- [kAudioFormatProperty_AvailableEncodeBitRates](kaudioformatproperty_availableencodebitrates.md): An array of `AudioValueRange` structures describing all available bit rates.
- [kAudioFormatProperty_AvailableEncodeSampleRates](kaudioformatproperty_availableencodesamplerates.md): An array of `AudioValueRange` structures.

# kAudioFormatProperty_ChannelLayoutForTag (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The channel descriptions for a standard channel layout.

## Declaration

```objectivec
kAudioFormatProperty_ChannelLayoutForTag
```

<a id="discussion"></a>

## Discussion

The channel descriptions for a standard channel layout. Set the `inSpecifier` parameter to an AudioChannelLayoutTag value (the `mChannelLayoutTag` field of the [AudioChannelLayout](../coreaudiotypes/audiochannellayout.md) structure) containing the layout constant. The value is an [AudioChannelLayout](../coreaudiotypes/audiochannellayout.md) structure. In typical use, an [AudioChannelLayout](../coreaudiotypes/audiochannellayout.md) can be valid with just a defined AudioChannelLayoutTag (that is, those layouts have predefined speaker locations and orderings). Returns an error if the tag is [kAudioChannelLayoutTag_UseChannelBitmap](../coreaudiotypes/kaudiochannellayouttag_usechannelbitmap.md).

## See Also

### Constants

- [kAudioFormatProperty_FormatInfo](kaudioformatproperty_formatinfo.md): General information about a format. Set the `inSpecifier` parameter to a magic cookie, or `NULL`. On input, the property value is an `AudioStreamBasicDescription` structure which should have at least the `mFormatID` field filled out. On output, the structure will be filled out as much as possible given the information known about the format and the contents of the magic cookie (if any is given). If multiple formats can be described by the `AudioStreamBasicDescription` and the associated magic cookie, this property will return the base level format.
- [kAudioFormatProperty_FormatName](kaudioformatproperty_formatname.md): A name for a given format. Set the `inSpecifier` parameter to an `AudioStreamBasicDescription` structure describing the format to ask about. The value is a `CFStringRef` object. The caller is responsible for releasing the returned string. For some formats, such as linear PCM, you get back a descriptive string, for example, “16-bit, interleaved.”
- [kAudioFormatProperty_EncodeFormatIDs](kaudioformatproperty_encodeformatids.md): An array of `UInt32` values representing format identifiers for formats that are valid output formats for a converter. You must set the `inSpecifier` parameter to `NULL`.
- [kAudioFormatProperty_DecodeFormatIDs](kaudioformatproperty_decodeformatids.md): An array of `UInt32` values representing format identifiers for formats that are valid input formats for a converter. You must set the `inSpecifier` parameter to `NULL`.
- [kAudioFormatProperty_FormatList](kaudioformatproperty_formatlist.md): A list of structures describing the audio formats.
- [kAudioFormatProperty_ASBDFromESDS](kaudioformatproperty_asbdfromesds.md): An `AudioStreamBasicDescription` structure for a given elementary stream descriptor (ESDS). Set the `inSpecifier` parameter to an ESDS. If multiple formats can be described by the ESDS, this property will return the base level format.
- [kAudioFormatProperty_ChannelLayoutFromESDS](kaudioformatproperty_channellayoutfromesds.md): An `AudioChannelLayout` structure for a given elementary stream descriptor (ESDS).
- [kAudioFormatProperty_OutputFormatList](kaudioformatproperty_outputformatlist.md): A list of structures describing the audio formats.
- [kAudioFormatProperty_FirstPlayableFormatFromList](kaudioformatproperty_firstplayableformatfromlist.md): The index of the first `AudioFormatListItem` that represents an audio format.
- [kAudioFormatProperty_Encoders](kaudioformatproperty_encoders.md): An array of `AudioClassDescription` structures for all installed encoders for the specified audio format. Set the `inSpecifier` parameter to the format that you are interested in, for instance, `'aac'`.
- [kAudioFormatProperty_Decoders](kaudioformatproperty_decoders.md): An array of `AudioClassDescription` structures for all installed decoders for the specified audio format. Set the `inSpecifier` parameter to the format that you are interested in, for instance, `'aac'`.
- [kAudioFormatProperty_FormatIsVBR](kaudioformatproperty_formatisvbr.md): Indicates whether or not a format has a variable number of bytes-per-packet.
- [kAudioFormatProperty_FormatIsExternallyFramed](kaudioformatproperty_formatisexternallyframed.md): Indicates whether or not a format requires external framing information.
- [kAudioFormatProperty_AvailableEncodeBitRates](kaudioformatproperty_availableencodebitrates.md): An array of `AudioValueRange` structures describing all available bit rates.
- [kAudioFormatProperty_AvailableEncodeSampleRates](kaudioformatproperty_availableencodesamplerates.md): An array of `AudioValueRange` structures.
