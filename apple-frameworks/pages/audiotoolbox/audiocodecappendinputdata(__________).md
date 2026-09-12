> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocodecappendinputdata(_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiocodecappendinputdata(_:_:_:_:_:))

# AudioCodecAppendInputData(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Appends audio data to the codec’s input buffer.

## Declaration

```swift
func AudioCodecAppendInputData(_ inCodec: AudioCodec, _ inInputData: UnsafeRawPointer, _ ioInputDataByteSize: UnsafeMutablePointer<UInt32>, _ ioNumberPackets: UnsafeMutablePointer<UInt32>, _ inPacketDescription: UnsafePointer<AudioStreamPacketDescription>?) -> OSStatus
```

## Parameters

- `inCodec`: An audio codec object. Because an audio codec object is a Component Manger component instance, you can use the Component Manager (for example, the functions [FindNextComponent](../coreservices/1516552-findnextcomponent.md) and OpenAComponent) to obtain an audio codec object.
- `inInputData`: The audio data to be sent to the codec.  Indicate there is no more data to process by passing a buffer of `0`bytes.
- `ioInputDataByteSize`: On input, the size in bytes of the data pointed to by the `inInputData` parameter. On output, the number of bytes the codec actually appended to its input buffer.
- `ioNumberPackets`: On input, the number of elements in the `inPacketDescription` array. Pass `NULL` for this parameter if the input data has a constant number of frames per packet. On return, the number of packets actually processed by the codec.
- `inPacketDescription`: For audio data that has a variable number of frames per packet, an array of `AudioStreamPacketDescription` structures that describes the packet layout. Pass `NULL` for this parameter if the input data has a constant number of frames per packet.

<a id="return-value"></a>

## Return Value

Returns `NoErr` if successful. Returns `kAudioCodecStateError` if the codec has not been initialized. See `Result Codes` for other possible values.

<a id="Discussion"></a>

## Discussion

A packet is the smallest, indivisible block of data for a given audio format. For linear PCM (pulse-code modulated) data, each packet contains exactly one frame, where a frame is a set of samples representing one sample for each channel. For compressed audio data formats, the number of frames in a packet depends on the encoding. For example, a packet of AAC represents 1024 frames of PCM. In some formats, the number of frames per packet varies. For such formats, you must include an array of `AudioStreamPacketDescription` structures that describes the packet layout.

Input data can be fed into an encoder and some decoders in blocks of any size (even byte by byte). However, if the encoded format of the input data fed to a decoder has a variable number of frames per packet, the data must be provided in multiples of whole packets. A codec’s properties provide information about allowable types of input and output, minimum and maximum buffer sizes, and so forth. Use the [AudioCodecGetProperty(\_:\_:\_:\_:)](audiocodecgetproperty%28________%29.md) function to read a codec’s properties. The properties are described in [Global Codec Properties](1494121-global-codec-properties.md) and [Instance Codec Properties](1494111-instance-codec-properties.md).

The combination of the [AudioCodecAppendInputData(\_:\_:\_:\_:\_:)](audiocodecappendinputdata%28__________%29.md) and [AudioCodecProduceOutputPackets(\_:\_:\_:\_:\_:\_:)](audiocodecproduceoutputpackets%28____________%29.md) functions implement a “push-pull” model of data handling. First, the input data is pushed into the codec, then the resulting output data is pulled out of that same codec.

## See Also

### Related Documentation

- [AudioCodecInitialize(\_:\_:\_:\_:\_:)](audiocodecinitialize%28__________%29.md): Sets up the specified codec to perform a data format translation.
- [AudioCodecGetProperty(\_:\_:\_:\_:)](audiocodecgetproperty%28________%29.md): Retrieves the value of a codec property.

### Accessing the Data

- [AudioCodecProduceOutputPackets(\_:\_:\_:\_:\_:\_:)](audiocodecproduceoutputpackets%28____________%29.md): Retrieves output data from a codec.

# AudioCodecAppendInputData (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Appends audio data to the codec’s input buffer.

## Declaration

```objectivec
extern OSStatus AudioCodecAppendInputData(AudioCodec inCodec, const void *inInputData, UInt32 *ioInputDataByteSize, UInt32 *ioNumberPackets, const AudioStreamPacketDescription *inPacketDescription);
```

## Parameters

- `inCodec`: An audio codec object. Because an audio codec object is a Component Manger component instance, you can use the Component Manager (for example, the functions [FindNextComponent](../coreservices/1516552-findnextcomponent.md) and OpenAComponent) to obtain an audio codec object.
- `inInputData`: The audio data to be sent to the codec.  Indicate there is no more data to process by passing a buffer of `0`bytes.
- `ioInputDataByteSize`: On input, the size in bytes of the data pointed to by the `inInputData` parameter. On output, the number of bytes the codec actually appended to its input buffer.
- `ioNumberPackets`: On input, the number of elements in the `inPacketDescription` array. Pass `NULL` for this parameter if the input data has a constant number of frames per packet. On return, the number of packets actually processed by the codec.
- `inPacketDescription`: For audio data that has a variable number of frames per packet, an array of `AudioStreamPacketDescription` structures that describes the packet layout. Pass `NULL` for this parameter if the input data has a constant number of frames per packet.

<a id="return-value"></a>

## Return Value

Returns `NoErr` if successful. Returns `kAudioCodecStateError` if the codec has not been initialized. See `Result Codes` for other possible values.

<a id="Discussion"></a>

## Discussion

A packet is the smallest, indivisible block of data for a given audio format. For linear PCM (pulse-code modulated) data, each packet contains exactly one frame, where a frame is a set of samples representing one sample for each channel. For compressed audio data formats, the number of frames in a packet depends on the encoding. For example, a packet of AAC represents 1024 frames of PCM. In some formats, the number of frames per packet varies. For such formats, you must include an array of `AudioStreamPacketDescription` structures that describes the packet layout.

Input data can be fed into an encoder and some decoders in blocks of any size (even byte by byte). However, if the encoded format of the input data fed to a decoder has a variable number of frames per packet, the data must be provided in multiples of whole packets. A codec’s properties provide information about allowable types of input and output, minimum and maximum buffer sizes, and so forth. Use the [AudioCodecGetProperty](audiocodecgetproperty%28________%29.md) function to read a codec’s properties. The properties are described in [Global Codec Properties](1494121-global-codec-properties.md) and [Instance Codec Properties](1494111-instance-codec-properties.md).

The combination of the [AudioCodecAppendInputData](audiocodecappendinputdata%28__________%29.md) and [AudioCodecProduceOutputPackets](audiocodecproduceoutputpackets%28____________%29.md) functions implement a “push-pull” model of data handling. First, the input data is pushed into the codec, then the resulting output data is pulled out of that same codec.

## See Also

### Related Documentation

- [AudioCodecInitialize](audiocodecinitialize%28__________%29.md): Sets up the specified codec to perform a data format translation.
- [AudioCodecGetProperty](audiocodecgetproperty%28________%29.md): Retrieves the value of a codec property.

### Accessing the Data

- [AudioCodecProduceOutputPackets](audiocodecproduceoutputpackets%28____________%29.md): Retrieves output data from a codec.
