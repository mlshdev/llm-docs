> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiofilepropertydataformat](https://developer.apple.com/documentation/audiotoolbox/kaudiofilepropertydataformat)

# kAudioFilePropertyDataFormat (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An audio stream basic description containing the format of the audio data.

## Declaration

```swift
var kAudioFilePropertyDataFormat: AudioFilePropertyID { get }
```

## See Also

### Constants

- [kAudioFilePropertyFileFormat](kaudiofilepropertyfileformat.md): The format of the audio data file.
- [kAudioFilePropertyFormatList](kaudiofilepropertyformatlist.md): To support formats such as AAC SBR in which an encoded data stream can be decoded to multiple destination formats, this property’s value is an array of audio format list item values (declared in `AudioFormat.h`) of those formats. Typically, this is an audio format list item with the same audio stream basic description in the `kAudioFilePropertyDataFormat` property.
- [kAudioFilePropertyIsOptimized](kaudiofilepropertyisoptimized.md): Indicates whether a designated audio file has been optimized, that is, ready to start having sound data written to it. A value of `0` indicates the file needs to be optimized. A value of `1` indicates the file is currently optimized.
- [kAudioFilePropertyMagicCookieData](kaudiofilepropertymagiccookiedata.md): A pointer to memory set up by the caller. Some file types require that a magic cookie be provided before packets can be written to an audio file. Set this property before you call [AudioFileWriteBytes(\_:\_:\_:\_:\_:)](audiofilewritebytes%28__________%29.md) or [AudioFileWritePackets(\_:\_:\_:\_:\_:\_:\_:)](audiofilewritepackets%28______________%29.md) if a magic cookie exists.
- [kAudioFilePropertyAudioDataByteCount](kaudiofilepropertyaudiodatabytecount.md): Indicates the number of bytes of audio data in the designated file.
- [kAudioFilePropertyAudioDataPacketCount](kaudiofilepropertyaudiodatapacketcount.md): Indicates the number of packets of audio data in the designated file.
- [kAudioFilePropertyMaximumPacketSize](kaudiofilepropertymaximumpacketsize.md): Indicates the maximum size of a packet for the data in the designated file.
- [kAudioFilePropertyDataOffset](kaudiofilepropertydataoffset.md): Indicates the byte offset in the file of the designated audio data.
- [kAudioFilePropertyChannelLayout](kaudiofilepropertychannellayout.md): An audio channel layout structure.
- [kAudioFilePropertyDeferSizeUpdates](kaudiofilepropertydefersizeupdates.md): The default value (`0`) always updates header. If set to `1`, updating the files sizes in the header is not performed every time data is written. Instead, the updating is deferred until the file has been read, optimized, or closed. This process is more efficient, but not as safe. If an application crashes before the size has been updated, the file might not be readable.
- [kAudioFilePropertyDataFormatName](kaudiofilepropertydataformatname.md): This constant is deprecated in macOS 10.5 and later. Do not use. Instead, use `kAudioFormatProperty_FormatName` (declared in the `AudioFormat.h` header file).
- [kAudioFilePropertyMarkerList](kaudiofilepropertymarkerlist.md): A list of audio file markers defined in the file.
- [kAudioFilePropertyRegionList](kaudiofilepropertyregionlist.md): The list of audio file region values defined in the file.
- [kAudioFilePropertyPacketToFrame](kaudiofilepropertypackettoframe.md): Passes an audio frame packet translation structure with the `mPacket` field filled out and returns the `mFrame` field. The `mFrameOffsetInPacket` field is ignored.
- [kAudioFilePropertyFrameToPacket](kaudiofilepropertyframetopacket.md): Passes an audio frame packet translation structure with the `mFrame` field filled out and returns the `mPacket` and `mFrameOffsetInPacket` fields.

# kAudioFilePropertyDataFormat (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An audio stream basic description containing the format of the audio data.

## Declaration

```objectivec
kAudioFilePropertyDataFormat
```

## See Also

### Constants

- [kAudioFilePropertyFileFormat](kaudiofilepropertyfileformat.md): The format of the audio data file.
- [kAudioFilePropertyFormatList](kaudiofilepropertyformatlist.md): To support formats such as AAC SBR in which an encoded data stream can be decoded to multiple destination formats, this property’s value is an array of audio format list item values (declared in `AudioFormat.h`) of those formats. Typically, this is an audio format list item with the same audio stream basic description in the `kAudioFilePropertyDataFormat` property.
- [kAudioFilePropertyIsOptimized](kaudiofilepropertyisoptimized.md): Indicates whether a designated audio file has been optimized, that is, ready to start having sound data written to it. A value of `0` indicates the file needs to be optimized. A value of `1` indicates the file is currently optimized.
- [kAudioFilePropertyMagicCookieData](kaudiofilepropertymagiccookiedata.md): A pointer to memory set up by the caller. Some file types require that a magic cookie be provided before packets can be written to an audio file. Set this property before you call [AudioFileWriteBytes](audiofilewritebytes%28__________%29.md) or [AudioFileWritePackets](audiofilewritepackets%28______________%29.md) if a magic cookie exists.
- [kAudioFilePropertyAudioDataByteCount](kaudiofilepropertyaudiodatabytecount.md): Indicates the number of bytes of audio data in the designated file.
- [kAudioFilePropertyAudioDataPacketCount](kaudiofilepropertyaudiodatapacketcount.md): Indicates the number of packets of audio data in the designated file.
- [kAudioFilePropertyMaximumPacketSize](kaudiofilepropertymaximumpacketsize.md): Indicates the maximum size of a packet for the data in the designated file.
- [kAudioFilePropertyDataOffset](kaudiofilepropertydataoffset.md): Indicates the byte offset in the file of the designated audio data.
- [kAudioFilePropertyChannelLayout](kaudiofilepropertychannellayout.md): An audio channel layout structure.
- [kAudioFilePropertyDeferSizeUpdates](kaudiofilepropertydefersizeupdates.md): The default value (`0`) always updates header. If set to `1`, updating the files sizes in the header is not performed every time data is written. Instead, the updating is deferred until the file has been read, optimized, or closed. This process is more efficient, but not as safe. If an application crashes before the size has been updated, the file might not be readable.
- [kAudioFilePropertyDataFormatName](kaudiofilepropertydataformatname.md): This constant is deprecated in macOS 10.5 and later. Do not use. Instead, use `kAudioFormatProperty_FormatName` (declared in the `AudioFormat.h` header file).
- [kAudioFilePropertyMarkerList](kaudiofilepropertymarkerlist.md): A list of audio file markers defined in the file.
- [kAudioFilePropertyRegionList](kaudiofilepropertyregionlist.md): The list of audio file region values defined in the file.
- [kAudioFilePropertyPacketToFrame](kaudiofilepropertypackettoframe.md): Passes an audio frame packet translation structure with the `mPacket` field filled out and returns the `mFrame` field. The `mFrameOffsetInPacket` field is ignored.
- [kAudioFilePropertyFrameToPacket](kaudiofilepropertyframetopacket.md): Passes an audio frame packet translation structure with the `mFrame` field filled out and returns the `mPacket` and `mFrameOffsetInPacket` fields.
