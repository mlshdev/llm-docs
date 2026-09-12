> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocodecinitialize(_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiocodecinitialize(_:_:_:_:_:))

# AudioCodecInitialize(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Sets up the specified codec to perform a data format translation.

## Declaration

```swift
func AudioCodecInitialize(_ inCodec: AudioCodec, _ inInputFormat: UnsafePointer<AudioStreamBasicDescription>?, _ inOutputFormat: UnsafePointer<AudioStreamBasicDescription>?, _ inMagicCookie: UnsafeRawPointer?, _ inMagicCookieByteSize: UInt32) -> OSStatus
```

## Parameters

- `inCodec`: An audio codec object. Because an audio codec object is a Component Manager component instance, you can use the Component Manager (for example, the functions [FindNextComponent](../coreservices/1516552-findnextcomponent.md) and OpenAComponent) to obtain an audio codec object.
- `inInputFormat`: A structure that describes the format of the input data. See [Core Audio Data Types](../coreaudio/core-audio-data-types.md) for a description of this structure and the values of constants that can be used in this structure. If the input data has a variable number of frames per packet, this structure is supplemented with the `AudioStreamPacketDescription` structure passed in the `inPacketDescription` parameter of the [AudioCodecAppendInputData(\_:\_:\_:\_:\_:)](audiocodecappendinputdata%28__________%29.md) function.
- `inOutputFormat`: A structure that describes the format desired for the output data.
- `inMagicCookie`: Magic cookie data, if required for the input format.
- `inMagicCookieByteSize`: Size in bytes of the magic cookie data, if any.

<a id="return-value"></a>

## Return Value

Returns `NoErr` if successful. Returns `kAudioCodecUnsupportedFormatError` if the codec cannot handle the specified data translation.  See `Result Codes` for other possible values.

<a id="Discussion"></a>

## Discussion

This function allocates any buffers needed, sets the input and output formats, and puts the codec into the initialized state. The codec has to be in the initialized state for the  [AudioCodecAppendInputData(\_:\_:\_:\_:\_:)](audiocodecappendinputdata%28__________%29.md) and [AudioCodecProduceOutputPackets(\_:\_:\_:\_:\_:\_:)](audiocodecproduceoutputpackets%28____________%29.md) functions to work. While in this state, the format information for the translation cannot be changed; you must call the [AudioCodecUninitialize(\_:)](audiocodecuninitialize%28__%29.md) function before making any changes. A codec’s properties provide information about allowable types of input and output, magic cookies, and so forth. Use the [AudioCodecGetProperty(\_:\_:\_:\_:)](audiocodecgetproperty%28________%29.md) function to read a codec’s properties. The properties are described in [Global Codec Properties](1494121-global-codec-properties.md) and [Instance Codec Properties](1494111-instance-codec-properties.md).

If any argument is `NULL`, any values previously set for that argument are used. For example, if you are using the same codec repeatedly with the same input and output formats, you only need to enter the formats the first time you initialize the codec. After that, you can uninitialize, change property values as necessary, and then call this function again with `NULL` in the `inInputFormat` and `inOutputFormat` parameters before processing the next set of data.

## See Also

### Related Documentation

- [AudioCodecProduceOutputPackets(\_:\_:\_:\_:\_:\_:)](audiocodecproduceoutputpackets%28____________%29.md): Retrieves output data from a codec.
- [AudioCodecAppendInputData(\_:\_:\_:\_:\_:)](audiocodecappendinputdata%28__________%29.md): Appends audio data to the codec’s input buffer.
- [AudioCodecGetProperty(\_:\_:\_:\_:)](audiocodecgetproperty%28________%29.md): Retrieves the value of a codec property.

### Initializing an Audio Codec

- [AudioCodecReset(\_:)](audiocodecreset%28__%29.md): Flushes all the audio data in the codec and clears the input buffer.
- [AudioCodecUninitialize(\_:)](audiocodecuninitialize%28__%29.md): Moves the codec from the initialized state back to the uninitialized state.

# AudioCodecInitialize (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Sets up the specified codec to perform a data format translation.

## Declaration

```objectivec
extern OSStatus AudioCodecInitialize(AudioCodec inCodec, const AudioStreamBasicDescription *inInputFormat, const AudioStreamBasicDescription *inOutputFormat, const void *inMagicCookie, UInt32 inMagicCookieByteSize);
```

## Parameters

- `inCodec`: An audio codec object. Because an audio codec object is a Component Manager component instance, you can use the Component Manager (for example, the functions [FindNextComponent](../coreservices/1516552-findnextcomponent.md) and OpenAComponent) to obtain an audio codec object.
- `inInputFormat`: A structure that describes the format of the input data. See [Core Audio Data Types](../coreaudio/core-audio-data-types.md) for a description of this structure and the values of constants that can be used in this structure. If the input data has a variable number of frames per packet, this structure is supplemented with the `AudioStreamPacketDescription` structure passed in the `inPacketDescription` parameter of the [AudioCodecAppendInputData](audiocodecappendinputdata%28__________%29.md) function.
- `inOutputFormat`: A structure that describes the format desired for the output data.
- `inMagicCookie`: Magic cookie data, if required for the input format.
- `inMagicCookieByteSize`: Size in bytes of the magic cookie data, if any.

<a id="return-value"></a>

## Return Value

Returns `NoErr` if successful. Returns `kAudioCodecUnsupportedFormatError` if the codec cannot handle the specified data translation.  See `Result Codes` for other possible values.

<a id="Discussion"></a>

## Discussion

This function allocates any buffers needed, sets the input and output formats, and puts the codec into the initialized state. The codec has to be in the initialized state for the  [AudioCodecAppendInputData](audiocodecappendinputdata%28__________%29.md) and [AudioCodecProduceOutputPackets](audiocodecproduceoutputpackets%28____________%29.md) functions to work. While in this state, the format information for the translation cannot be changed; you must call the [AudioCodecUninitialize](audiocodecuninitialize%28__%29.md) function before making any changes. A codec’s properties provide information about allowable types of input and output, magic cookies, and so forth. Use the [AudioCodecGetProperty](audiocodecgetproperty%28________%29.md) function to read a codec’s properties. The properties are described in [Global Codec Properties](1494121-global-codec-properties.md) and [Instance Codec Properties](1494111-instance-codec-properties.md).

If any argument is `NULL`, any values previously set for that argument are used. For example, if you are using the same codec repeatedly with the same input and output formats, you only need to enter the formats the first time you initialize the codec. After that, you can uninitialize, change property values as necessary, and then call this function again with `NULL` in the `inInputFormat` and `inOutputFormat` parameters before processing the next set of data.

## See Also

### Related Documentation

- [AudioCodecProduceOutputPackets](audiocodecproduceoutputpackets%28____________%29.md): Retrieves output data from a codec.
- [AudioCodecAppendInputData](audiocodecappendinputdata%28__________%29.md): Appends audio data to the codec’s input buffer.
- [AudioCodecGetProperty](audiocodecgetproperty%28________%29.md): Retrieves the value of a codec property.

### Initializing an Audio Codec

- [AudioCodecReset](audiocodecreset%28__%29.md): Flushes all the audio data in the codec and clears the input buffer.
- [AudioCodecUninitialize](audiocodecuninitialize%28__%29.md): Moves the codec from the initialized state back to the uninitialized state.
