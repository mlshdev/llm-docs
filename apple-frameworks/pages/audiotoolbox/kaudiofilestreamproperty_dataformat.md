> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiofilestreamproperty_dataformat](https://developer.apple.com/documentation/audiotoolbox/kaudiofilestreamproperty_dataformat)

# kAudioFileStreamProperty_DataFormat (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An `AudioStreamBasicDescription` structure describing the format of the audio data in the stream.

## Declaration

```swift
var kAudioFileStreamProperty_DataFormat: AudioFileStreamPropertyID { get }
```

<a id="discussion"></a>

## Discussion

An `AudioStreamBasicDescription` structure describing the format of the audio data in the stream. For more information on audio stream basic descriptions, see [Core Audio Data Types](../coreaudio/core-audio-data-types.md).

## See Also

### Constants

- [kAudioFileStreamProperty_ReadyToProducePackets](kaudiofilestreamproperty_readytoproducepackets.md)
- [kAudioFileStreamProperty_FileFormat](kaudiofilestreamproperty_fileformat.md): A four-character code that identifies the audio data format.
- [kAudioFileStreamProperty_FormatList](kaudiofilestreamproperty_formatlist.md): To support formats such as AAC with SBR where an encoded data stream can be decoded to multiple destination formats, this property returns an array of `AudioFormatListItem` structures (declared in `AudioFormat.h`)—one for each of the destination formats. The default behavior is to return an `AudioFormatListItem` structure that has the same `AudioStreamBasicDescription` structure as that returned by the [kAudioFileStreamProperty_DataFormat](kaudiofilestreamproperty_dataformat.md) property.
- [kAudioFileStreamProperty_MagicCookieData](kaudiofilestreamproperty_magiccookiedata.md): A pointer (`void *`) to a magic cookie. For audio file types that require a magic cookie before packets can be written to a file, you should get this property value before calling the [AudioFileWriteBytes(\_:\_:\_:\_:\_:)](audiofilewritebytes%28__________%29.md) or [AudioFileWritePackets(\_:\_:\_:\_:\_:\_:\_:)](audiofilewritepackets%28______________%29.md) functions.
- [kAudioFileStreamProperty_AudioDataByteCount](kaudiofilestreamproperty_audiodatabytecount.md): A `UInt64` value indicating the number of bytes of audio data in the streamed file. This property is valid only if the number of bytes for the entire stream is known from the data parsed in the header. For some kinds of streams this property may have no value.
- [kAudioFileStreamProperty_AudioDataPacketCount](kaudiofilestreamproperty_audiodatapacketcount.md): A `UInt64` value indicating the number of packets of audio data in the streamed file.
- [kAudioFileStreamProperty_MaximumPacketSize](kaudiofilestreamproperty_maximumpacketsize.md): A `UInt32` value indicating the maximum packet size of the data in the streamed file.
- [kAudioFileStreamProperty_DataOffset](kaudiofilestreamproperty_dataoffset.md): An `SInt64` value indicating the byte offset in the streamed file at which the audio data starts.
- [kAudioFileStreamProperty_ChannelLayout](kaudiofilestreamproperty_channellayout.md): An `AudioChannelLayout` structure.
- [kAudioFileStreamProperty_PacketToFrame](kaudiofilestreamproperty_packettoframe.md): Obtains the frame number corresponding to a packet number.
- [kAudioFileStreamProperty_FrameToPacket](kaudiofilestreamproperty_frametopacket.md): Obtains the packet number corresponding to a frame number.
- [kAudioFileStreamProperty_PacketToByte](kaudiofilestreamproperty_packettobyte.md): Obtains the byte number corresponding to a packet number. Pass an `AudioBytePacketTranslation` structure with the `mPacket` field filled in, and a value is returned in the `mByte` field. The `mByteOffsetInPacket` field of the `AudioBytePacketTranslation` structure is ignored. If the `mByte` value is an estimate, then the `kBytePacketTranslationFlag_IsEstimate` value will be set in the `mFlags` field.
- [kAudioFileStreamProperty_ByteToPacket](kaudiofilestreamproperty_bytetopacket.md): Obtains the packet number corresponding to a byte number. Pass an `AudioBytePacketTranslation` structure with the `mByte` field filled in, and values are returned in the `mPacket` and `mByteOffsetInPacket` fields. If the `mPacket` value is an estimate, then the `kBytePacketTranslationFlag_IsEstimate` value will be set in the `mFlags` field.
- [kAudioFileStreamProperty_PacketTableInfo](kaudiofilestreamproperty_packettableinfo.md): An `AudioFilePacketTableInfo` structure.
- [kAudioFileStreamProperty_PacketSizeUpperBound](kaudiofilestreamproperty_packetsizeupperbound.md): A `UInt32` value indicating the theoretical maximum packet size in the streamed file. This value is useful for determining minimum buffer sizes, for example.

# kAudioFileStreamProperty_DataFormat (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An `AudioStreamBasicDescription` structure describing the format of the audio data in the stream.

## Declaration

```objectivec
kAudioFileStreamProperty_DataFormat
```

<a id="discussion"></a>

## Discussion

An `AudioStreamBasicDescription` structure describing the format of the audio data in the stream. For more information on audio stream basic descriptions, see [Core Audio Data Types](../coreaudio/core-audio-data-types.md).

## See Also

### Constants

- [kAudioFileStreamProperty_ReadyToProducePackets](kaudiofilestreamproperty_readytoproducepackets.md)
- [kAudioFileStreamProperty_FileFormat](kaudiofilestreamproperty_fileformat.md): A four-character code that identifies the audio data format.
- [kAudioFileStreamProperty_FormatList](kaudiofilestreamproperty_formatlist.md): To support formats such as AAC with SBR where an encoded data stream can be decoded to multiple destination formats, this property returns an array of `AudioFormatListItem` structures (declared in `AudioFormat.h`)—one for each of the destination formats. The default behavior is to return an `AudioFormatListItem` structure that has the same `AudioStreamBasicDescription` structure as that returned by the [kAudioFileStreamProperty_DataFormat](kaudiofilestreamproperty_dataformat.md) property.
- [kAudioFileStreamProperty_MagicCookieData](kaudiofilestreamproperty_magiccookiedata.md): A pointer (`void *`) to a magic cookie. For audio file types that require a magic cookie before packets can be written to a file, you should get this property value before calling the [AudioFileWriteBytes](audiofilewritebytes%28__________%29.md) or [AudioFileWritePackets](audiofilewritepackets%28______________%29.md) functions.
- [kAudioFileStreamProperty_AudioDataByteCount](kaudiofilestreamproperty_audiodatabytecount.md): A `UInt64` value indicating the number of bytes of audio data in the streamed file. This property is valid only if the number of bytes for the entire stream is known from the data parsed in the header. For some kinds of streams this property may have no value.
- [kAudioFileStreamProperty_AudioDataPacketCount](kaudiofilestreamproperty_audiodatapacketcount.md): A `UInt64` value indicating the number of packets of audio data in the streamed file.
- [kAudioFileStreamProperty_MaximumPacketSize](kaudiofilestreamproperty_maximumpacketsize.md): A `UInt32` value indicating the maximum packet size of the data in the streamed file.
- [kAudioFileStreamProperty_DataOffset](kaudiofilestreamproperty_dataoffset.md): An `SInt64` value indicating the byte offset in the streamed file at which the audio data starts.
- [kAudioFileStreamProperty_ChannelLayout](kaudiofilestreamproperty_channellayout.md): An `AudioChannelLayout` structure.
- [kAudioFileStreamProperty_PacketToFrame](kaudiofilestreamproperty_packettoframe.md): Obtains the frame number corresponding to a packet number.
- [kAudioFileStreamProperty_FrameToPacket](kaudiofilestreamproperty_frametopacket.md): Obtains the packet number corresponding to a frame number.
- [kAudioFileStreamProperty_PacketToByte](kaudiofilestreamproperty_packettobyte.md): Obtains the byte number corresponding to a packet number. Pass an `AudioBytePacketTranslation` structure with the `mPacket` field filled in, and a value is returned in the `mByte` field. The `mByteOffsetInPacket` field of the `AudioBytePacketTranslation` structure is ignored. If the `mByte` value is an estimate, then the `kBytePacketTranslationFlag_IsEstimate` value will be set in the `mFlags` field.
- [kAudioFileStreamProperty_ByteToPacket](kaudiofilestreamproperty_bytetopacket.md): Obtains the packet number corresponding to a byte number. Pass an `AudioBytePacketTranslation` structure with the `mByte` field filled in, and values are returned in the `mPacket` and `mByteOffsetInPacket` fields. If the `mPacket` value is an estimate, then the `kBytePacketTranslationFlag_IsEstimate` value will be set in the `mFlags` field.
- [kAudioFileStreamProperty_PacketTableInfo](kaudiofilestreamproperty_packettableinfo.md): An `AudioFilePacketTableInfo` structure.
- [kAudioFileStreamProperty_PacketSizeUpperBound](kaudiofilestreamproperty_packetsizeupperbound.md): A `UInt32` value indicating the theoretical maximum packet size in the streamed file. This value is useful for determining minimum buffer sizes, for example.
