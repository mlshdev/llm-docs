> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kextaudiofileproperty_packettable](https://developer.apple.com/documentation/audiotoolbox/kextaudiofileproperty_packettable)

# kExtAudioFileProperty_PacketTable (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

This property can be used to override the priming and remainder information in an audio file, and also to retrieve the current priming and remainder frames information for an extended audio file object. If the underlying file type does not provide packet table information, attempting to get the value of this property returns an error.

## Declaration

```swift
var kExtAudioFileProperty_PacketTable: ExtAudioFilePropertyID { get }
```

<a id="Discussion"></a>

## Discussion

By setting this property with a nonnegative number (which may be the value `0`), you override the corresponding settings for the values contained in the file. If you use a value of `-1` for either the priming or remainder frames, the extended audio file object uses the corresponding value stored in the file.

Retrieving the value of this property always retrieves the value the extended audio file object is using, whether derived from the file or from your override.

To determine the value in the file, use the [kAudioFilePropertyPacketTableInfo](kaudiofilepropertypackettableinfo.md) property as described in [Audio File Services](audio-file-services.md).

When the property is set, only the remaining and priming values are used. Set the `mNumberValidFrames` field of the [AudioFilePacketTableInfo](audiofilepackettableinfo.md) struct to zero. For example, a file encoded using AAC may have 2112 samples of priming at the start of the file and a remainder of 823 samples at the end. When an extended audio file object returns decoded samples to you, it trims off the  at the start of the file, and trims off the  at the end. It gets these numbers initially from the file. A common use case for overriding this would be to set the priming and remainder samples to `0`. In this example, you would retrieve an additional 2112 samples of silence from the start of the file and 823 samples of silence at the end of the file (silence, because the encoders use silence to pad out these priming and remainder samples).

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
- [kExtAudioFileProperty_IOBuffer](kextaudiofileproperty_iobuffer.md): An audio data buffer. Value is a read/write `void*` value.

# kExtAudioFileProperty_PacketTable (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

This property can be used to override the priming and remainder information in an audio file, and also to retrieve the current priming and remainder frames information for an extended audio file object. If the underlying file type does not provide packet table information, attempting to get the value of this property returns an error.

## Declaration

```objectivec
kExtAudioFileProperty_PacketTable
```

<a id="Discussion"></a>

## Discussion

By setting this property with a nonnegative number (which may be the value `0`), you override the corresponding settings for the values contained in the file. If you use a value of `-1` for either the priming or remainder frames, the extended audio file object uses the corresponding value stored in the file.

Retrieving the value of this property always retrieves the value the extended audio file object is using, whether derived from the file or from your override.

To determine the value in the file, use the [kAudioFilePropertyPacketTableInfo](kaudiofilepropertypackettableinfo.md) property as described in [Audio File Services](audio-file-services.md).

When the property is set, only the remaining and priming values are used. Set the `mNumberValidFrames` field of the [AudioFilePacketTableInfo](audiofilepackettableinfo.md) struct to zero. For example, a file encoded using AAC may have 2112 samples of priming at the start of the file and a remainder of 823 samples at the end. When an extended audio file object returns decoded samples to you, it trims off the  at the start of the file, and trims off the  at the end. It gets these numbers initially from the file. A common use case for overriding this would be to set the priming and remainder samples to `0`. In this example, you would retrieve an additional 2112 samples of silence from the start of the file and 823 samples of silence at the end of the file (silence, because the encoders use silence to pad out these priming and remainder samples).

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
- [kExtAudioFileProperty_IOBuffer](kextaudiofileproperty_iobuffer.md): An audio data buffer. Value is a read/write `void*` value.
