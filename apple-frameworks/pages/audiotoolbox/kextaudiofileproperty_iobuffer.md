> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kextaudiofileproperty_iobuffer](https://developer.apple.com/documentation/audiotoolbox/kextaudiofileproperty_iobuffer)

# kExtAudioFileProperty_IOBuffer (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An audio data buffer. Value is a read/write `void*` value.

## Declaration

```swift
var kExtAudioFileProperty_IOBuffer: ExtAudioFilePropertyID { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value points to the memory that the extended audio file object uses for disk I/O when converting between the application and file data formats. You may want your application to share this memory among multiple extended audio file objects. If so, you can set this property to point to a buffer you specify—pass a pointer to a pointer when calling the `ExtAudioFileSetProperty` function. After setting this property, your application must then set the `kExtAudioFileProperty_IOBufferSizeBytes` property.

## See Also

### Constants

- [kExtAudioFileProperty_FileDataFormat](kextaudiofileproperty_filedataformat.md): A file’s data format.
- [kExtAudioFileProperty_FileChannelLayout](kextaudiofileproperty_filechannellayout.md): A file’s channel layout.
- [kExtAudioFileProperty_ClientDataFormat](kextaudiofileproperty_clientdataformat.md): The audio stream format for your application.
- [kExtAudioFileProperty_ClientChannelLayout](kextaudiofileproperty_clientchannellayout.md): The audio channel layout for your application.
- [kExtAudioFileProperty_CodecManufacturer](kextaudiofileproperty_codecmanufacturer.md): The manufacturer of the codec to be used by the extended audio file object. Value is a read/write `UInt32`.
- [kExtAudioFileProperty_AudioConverter](kextaudiofileproperty_audioconverter.md): The audio converter object associated with the extended audio file object, if a converter is associated.
- [kExtAudioFileProperty_AudioFile](kextaudiofileproperty_audiofile.md): The audio file object associated with the extended audio file object.
- [kExtAudioFileProperty_FileMaxPacketSize](kextaudiofileproperty_filemaxpacketsize.md): The file data format’s maximum packet size, in bytes. Value is a read-only `UInt32`.
- [kExtAudioFileProperty_ClientMaxPacketSize](kextaudiofileproperty_clientmaxpacketsize.md): Your application audio data format’s maximum packet size, in bytes. Value is a read-only `UInt32`.
- [kExtAudioFileProperty_FileLengthFrames](kextaudiofileproperty_filelengthframes.md): The associated audio file’s length in sample frames. Value is an `SInt64`. For a PCM file, the value is read/write. For a non-PCM file, the value is read-only.
- [kExtAudioFileProperty_ConverterConfig](kextaudiofileproperty_converterconfig.md): The configuration of the extended audio file object’s associated audio converter, as specified by the `kAudioConverterPropertySettings` property. Value is a read/write `CFArray` object.
- [kExtAudioFileProperty_IOBufferSizeBytes](kextaudiofileproperty_iobuffersizebytes.md): The size of the buffer that the extended audio file object’s associated audio converter uses to read or write the associated audio file. Value is a read/write `UInt32`.
- [kExtAudioFileProperty_PacketTable](kextaudiofileproperty_packettable.md): This property can be used to override the priming and remainder information in an audio file, and also to retrieve the current priming and remainder frames information for an extended audio file object. If the underlying file type does not provide packet table information, attempting to get the value of this property returns an error.

# kExtAudioFileProperty_IOBuffer (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An audio data buffer. Value is a read/write `void*` value.

## Declaration

```objectivec
kExtAudioFileProperty_IOBuffer
```

<a id="Discussion"></a>

## Discussion

This property’s value points to the memory that the extended audio file object uses for disk I/O when converting between the application and file data formats. You may want your application to share this memory among multiple extended audio file objects. If so, you can set this property to point to a buffer you specify—pass a pointer to a pointer when calling the `ExtAudioFileSetProperty` function. After setting this property, your application must then set the `kExtAudioFileProperty_IOBufferSizeBytes` property.

## See Also

### Constants

- [kExtAudioFileProperty_FileDataFormat](kextaudiofileproperty_filedataformat.md): A file’s data format.
- [kExtAudioFileProperty_FileChannelLayout](kextaudiofileproperty_filechannellayout.md): A file’s channel layout.
- [kExtAudioFileProperty_ClientDataFormat](kextaudiofileproperty_clientdataformat.md): The audio stream format for your application.
- [kExtAudioFileProperty_ClientChannelLayout](kextaudiofileproperty_clientchannellayout.md): The audio channel layout for your application.
- [kExtAudioFileProperty_CodecManufacturer](kextaudiofileproperty_codecmanufacturer.md): The manufacturer of the codec to be used by the extended audio file object. Value is a read/write `UInt32`.
- [kExtAudioFileProperty_AudioConverter](kextaudiofileproperty_audioconverter.md): The audio converter object associated with the extended audio file object, if a converter is associated.
- [kExtAudioFileProperty_AudioFile](kextaudiofileproperty_audiofile.md): The audio file object associated with the extended audio file object.
- [kExtAudioFileProperty_FileMaxPacketSize](kextaudiofileproperty_filemaxpacketsize.md): The file data format’s maximum packet size, in bytes. Value is a read-only `UInt32`.
- [kExtAudioFileProperty_ClientMaxPacketSize](kextaudiofileproperty_clientmaxpacketsize.md): Your application audio data format’s maximum packet size, in bytes. Value is a read-only `UInt32`.
- [kExtAudioFileProperty_FileLengthFrames](kextaudiofileproperty_filelengthframes.md): The associated audio file’s length in sample frames. Value is an `SInt64`. For a PCM file, the value is read/write. For a non-PCM file, the value is read-only.
- [kExtAudioFileProperty_ConverterConfig](kextaudiofileproperty_converterconfig.md): The configuration of the extended audio file object’s associated audio converter, as specified by the `kAudioConverterPropertySettings` property. Value is a read/write `CFArray` object.
- [kExtAudioFileProperty_IOBufferSizeBytes](kextaudiofileproperty_iobuffersizebytes.md): The size of the buffer that the extended audio file object’s associated audio converter uses to read or write the associated audio file. Value is a read/write `UInt32`.
- [kExtAudioFileProperty_PacketTable](kextaudiofileproperty_packettable.md): This property can be used to override the priming and remainder information in an audio file, and also to retrieve the current priming and remainder frames information for an extended audio file object. If the underlying file type does not provide packet table information, attempting to get the value of this property returns an error.
