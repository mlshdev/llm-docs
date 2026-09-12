> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/1577853-audio-format-property-identifier](https://developer.apple.com/documentation/audiotoolbox/1577853-audio-format-property-identifier)

# Audio Format Property Identifiers (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Constants for use with the [AudioFormatGetPropertyInfo(\_:\_:\_:\_:)](audioformatgetpropertyinfo%28________%29.md) and [AudioFormatGetProperty(\_:\_:\_:\_:\_:)](audioformatgetproperty%28__________%29.md) functions.

## Topics

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
- [kAudioFormatProperty_AvailableEncodeChannelLayoutTags](kaudioformatproperty_availableencodechannellayouttags.md): An array of `AudioChannelLayoutTag` values for the format and number of channels specified.
- [kAudioFormatProperty_AvailableEncodeNumberChannels](kaudioformatproperty_availableencodenumberchannels.md): An array of `UInt32` values indicating the number of channels that can be encoded.
- [kAudioFormatProperty_ASBDFromMPEGPacket](kaudioformatproperty_asbdfrommpegpacket.md): An `AudioStreamBasicDescription` structure for a given MPEG Packet.
- [kAudioFormatProperty_BitmapForLayoutTag](kaudioformatproperty_bitmapforlayouttag.md): A bitmap for an `AudioChannelLayoutTag` value.
- [kAudioFormatProperty_MatrixMixMap](kaudioformatproperty_matrixmixmap.md): A matrix of scaling coefficients for converting audio from one channel map to another in a standard way, if one is known. Otherwise, an error is returned. Set the `inSpecifier` parameter to an array of two pointers to `AudioChannelLayout` structures. The first points to the input layout, the second to the output layout. The value is a two dimensional array of `Float32` values, where the first dimension (rows) is the input channel and the second dimension (columns) is the output channel.
- [kAudioFormatProperty_ChannelMap](kaudioformatproperty_channelmap.md): An array of `SInt32` values for reordering input channels. Set the `inSpecifier` parameter to an array of two pointers to `AudioChannelLayout` structures. The first points to the input layout, the second to the output layout. The length of the output array is equal to the number of output channels.
- [kAudioFormatProperty_NumberOfChannelsForLayout](kaudioformatproperty_numberofchannelsforlayout.md): The number of valid channels.
- [kAudioFormatProperty_ValidateChannelLayout](kaudioformatproperty_validatechannellayout.md): The validity of an audio channel layout structure.
- [kAudioFormatProperty_ChannelLayoutForTag](kaudioformatproperty_channellayoutfortag.md): The channel descriptions for a standard channel layout.
- [kAudioFormatProperty_TagForChannelLayout](kaudioformatproperty_tagforchannellayout.md): An `AudioChannelLayoutTag` value for a layout.
- [kAudioFormatProperty_ChannelLayoutName](kaudioformatproperty_channellayoutname.md): The a name for a particular channel layout.
- [kAudioFormatProperty_ChannelLayoutSimpleName](kaudioformatproperty_channellayoutsimplename.md): A simplified name for channel layout.
- [kAudioFormatProperty_ChannelLayoutForBitmap](kaudioformatproperty_channellayoutforbitmap.md): The channel descriptions for a standard channel layout,
- [kAudioFormatProperty_ChannelName](kaudioformatproperty_channelname.md): The name for a particular channel.
- [kAudioFormatProperty_ChannelShortName](kaudioformatproperty_channelshortname.md): An abbreviated name for a particular channel.
- [kAudioFormatProperty_TagsForNumberOfChannels](kaudioformatproperty_tagsfornumberofchannels.md): An array of AudioChannelLayoutTag values for the number of channels specified. The specifier is a `UInt32` value that indicates the number of channels.
- [kAudioFormatProperty_PanningMatrix](kaudioformatproperty_panningmatrix.md): An array of `Float32` values, each representing the audio level of one channel.
- [kAudioFormatProperty_BalanceFade](kaudioformatproperty_balancefade.md): An array of coefficients, each a `Float32` value, for applying left/right audio balance and front/back audio fade.
- [kAudioFormatProperty_ID3TagSize](kaudioformatproperty_id3tagsize.md): A `UInt32` value indicating the ID3 tag size. The `inSpecifier` parameter must begin with the ID3 tag header and be at least 10 bytes in length.
- [kAudioFormatProperty_ID3TagToDictionary](kaudioformatproperty_id3tagtodictionary.md): A `CFDictionary` object containing key/value pairs for the frames in the ID3 tag. Set the `inSpecifier` parameter to the entire ID3 tag. The caller must call the `CFRelease` function for the returned dictionary.
- [kAudioFormatProperty_AreChannelLayoutsEquivalent](kaudioformatproperty_arechannellayoutsequivalent.md)
- [kAudioFormatProperty_ChannelLayoutHash](kaudioformatproperty_channellayouthash.md)
- [kAudioFormatProperty_FormatIsEncrypted](kaudioformatproperty_formatisencrypted.md)
- [kAudioFormatProperty_AvailableDecodeNumberChannels](kaudioformatproperty_availabledecodenumberchannels.md)
- [kAudioFormatProperty_FormatEmploysDependentPackets](kaudioformatproperty_formatemploysdependentpackets.md)

## See Also

### Constants

- [AudioBalanceFadeType](audiobalancefadetype.md): Identifiers for audio balance fade types.
- [Audio Codec Component Constants](1494086-audio-codec-component-constants.md): Audio codec component types.
- [Audio Codec Manufacturer and Implementation Types](1620448-audio-codec-manufacturer-and-imp.md): Identifiers for audio codec manufacturers and implementation types.
- [AudioPanningMode](audiopanningmode.md): Identifiers for audio panning algorithms.

# Audio Format Property Identifiers (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Constants for use with the [AudioFormatGetPropertyInfo](audioformatgetpropertyinfo%28________%29.md) and [AudioFormatGetProperty](audioformatgetproperty%28__________%29.md) functions.

## Topics

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
- [kAudioFormatProperty_AvailableEncodeChannelLayoutTags](kaudioformatproperty_availableencodechannellayouttags.md): An array of `AudioChannelLayoutTag` values for the format and number of channels specified.
- [kAudioFormatProperty_AvailableEncodeNumberChannels](kaudioformatproperty_availableencodenumberchannels.md): An array of `UInt32` values indicating the number of channels that can be encoded.
- [kAudioFormatProperty_ASBDFromMPEGPacket](kaudioformatproperty_asbdfrommpegpacket.md): An `AudioStreamBasicDescription` structure for a given MPEG Packet.
- [kAudioFormatProperty_BitmapForLayoutTag](kaudioformatproperty_bitmapforlayouttag.md): A bitmap for an `AudioChannelLayoutTag` value.
- [kAudioFormatProperty_MatrixMixMap](kaudioformatproperty_matrixmixmap.md): A matrix of scaling coefficients for converting audio from one channel map to another in a standard way, if one is known. Otherwise, an error is returned. Set the `inSpecifier` parameter to an array of two pointers to `AudioChannelLayout` structures. The first points to the input layout, the second to the output layout. The value is a two dimensional array of `Float32` values, where the first dimension (rows) is the input channel and the second dimension (columns) is the output channel.
- [kAudioFormatProperty_ChannelMap](kaudioformatproperty_channelmap.md): An array of `SInt32` values for reordering input channels. Set the `inSpecifier` parameter to an array of two pointers to `AudioChannelLayout` structures. The first points to the input layout, the second to the output layout. The length of the output array is equal to the number of output channels.
- [kAudioFormatProperty_NumberOfChannelsForLayout](kaudioformatproperty_numberofchannelsforlayout.md): The number of valid channels.
- [kAudioFormatProperty_ValidateChannelLayout](kaudioformatproperty_validatechannellayout.md): The validity of an audio channel layout structure.
- [kAudioFormatProperty_ChannelLayoutForTag](kaudioformatproperty_channellayoutfortag.md): The channel descriptions for a standard channel layout.
- [kAudioFormatProperty_TagForChannelLayout](kaudioformatproperty_tagforchannellayout.md): An `AudioChannelLayoutTag` value for a layout.
- [kAudioFormatProperty_ChannelLayoutName](kaudioformatproperty_channellayoutname.md): The a name for a particular channel layout.
- [kAudioFormatProperty_ChannelLayoutSimpleName](kaudioformatproperty_channellayoutsimplename.md): A simplified name for channel layout.
- [kAudioFormatProperty_ChannelLayoutForBitmap](kaudioformatproperty_channellayoutforbitmap.md): The channel descriptions for a standard channel layout,
- [kAudioFormatProperty_ChannelName](kaudioformatproperty_channelname.md): The name for a particular channel.
- [kAudioFormatProperty_ChannelShortName](kaudioformatproperty_channelshortname.md): An abbreviated name for a particular channel.
- [kAudioFormatProperty_TagsForNumberOfChannels](kaudioformatproperty_tagsfornumberofchannels.md): An array of AudioChannelLayoutTag values for the number of channels specified. The specifier is a `UInt32` value that indicates the number of channels.
- [kAudioFormatProperty_PanningMatrix](kaudioformatproperty_panningmatrix.md): An array of `Float32` values, each representing the audio level of one channel.
- [kAudioFormatProperty_BalanceFade](kaudioformatproperty_balancefade.md): An array of coefficients, each a `Float32` value, for applying left/right audio balance and front/back audio fade.
- [kAudioFormatProperty_ID3TagSize](kaudioformatproperty_id3tagsize.md): A `UInt32` value indicating the ID3 tag size. The `inSpecifier` parameter must begin with the ID3 tag header and be at least 10 bytes in length.
- [kAudioFormatProperty_ID3TagToDictionary](kaudioformatproperty_id3tagtodictionary.md): A `CFDictionary` object containing key/value pairs for the frames in the ID3 tag. Set the `inSpecifier` parameter to the entire ID3 tag. The caller must call the `CFRelease` function for the returned dictionary.
- [kAudioFormatProperty_AreChannelLayoutsEquivalent](kaudioformatproperty_arechannellayoutsequivalent.md)
- [kAudioFormatProperty_ChannelLayoutHash](kaudioformatproperty_channellayouthash.md)
- [kAudioFormatProperty_FormatIsEncrypted](kaudioformatproperty_formatisencrypted.md)
- [kAudioFormatProperty_AvailableDecodeNumberChannels](kaudioformatproperty_availabledecodenumberchannels.md)
- [kAudioFormatProperty_FormatEmploysDependentPackets](kaudioformatproperty_formatemploysdependentpackets.md)

## See Also

### Constants

- [AudioBalanceFadeType](audiobalancefadetype.md): Identifiers for audio balance fade types.
- [Audio Codec Component Constants](1494086-audio-codec-component-constants.md): Audio codec component types.
- [Audio Codec Manufacturer and Implementation Types](1620448-audio-codec-manufacturer-and-imp.md): Identifiers for audio codec manufacturers and implementation types.
- [AudioPanningMode](audiopanningmode.md): Identifiers for audio panning algorithms.
