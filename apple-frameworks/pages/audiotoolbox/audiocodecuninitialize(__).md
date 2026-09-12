> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocodecuninitialize(_:)](https://developer.apple.com/documentation/audiotoolbox/audiocodecuninitialize(_:))

# AudioCodecUninitialize(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Moves the codec from the initialized state back to the uninitialized state.

## Declaration

```swift
func AudioCodecUninitialize(_ inCodec: AudioCodec) -> OSStatus
```

## Parameters

- `inCodec`: An audio codec object. Because an audio codec object is a Component Manger component instance, you can use the Component Manager (for example, the functions [FindNextComponent](../coreservices/1516552-findnextcomponent.md) and OpenAComponent) to obtain an audio codec object.

<a id="return-value"></a>

## Return Value

Returns `NoErr` if successful, otherwise, a result code. See `Result Codes` for a list of possible values.

<a id="Discussion"></a>

## Discussion

This function returns the codec to the uninitialized state. The codec may then be configured freely. This function does not flush the input buffer or clear input and output formats, magic cookie data, and other state variables. It is not necessary to call this function before closing the codec.

## See Also

### Related Documentation

- [AudioCodecSetProperty(\_:\_:\_:\_:)](audiocodecsetproperty%28________%29.md): Sets the value of a codec property.

### Initializing an Audio Codec

- [AudioCodecInitialize(\_:\_:\_:\_:\_:)](audiocodecinitialize%28__________%29.md): Sets up the specified codec to perform a data format translation.
- [AudioCodecReset(\_:)](audiocodecreset%28__%29.md): Flushes all the audio data in the codec and clears the input buffer.

# AudioCodecUninitialize (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Moves the codec from the initialized state back to the uninitialized state.

## Declaration

```objectivec
extern OSStatus AudioCodecUninitialize(AudioCodec inCodec);
```

## Parameters

- `inCodec`: An audio codec object. Because an audio codec object is a Component Manger component instance, you can use the Component Manager (for example, the functions [FindNextComponent](../coreservices/1516552-findnextcomponent.md) and OpenAComponent) to obtain an audio codec object.

<a id="return-value"></a>

## Return Value

Returns `NoErr` if successful, otherwise, a result code. See `Result Codes` for a list of possible values.

<a id="Discussion"></a>

## Discussion

This function returns the codec to the uninitialized state. The codec may then be configured freely. This function does not flush the input buffer or clear input and output formats, magic cookie data, and other state variables. It is not necessary to call this function before closing the codec.

## See Also

### Related Documentation

- [AudioCodecSetProperty](audiocodecsetproperty%28________%29.md): Sets the value of a codec property.

### Initializing an Audio Codec

- [AudioCodecInitialize](audiocodecinitialize%28__________%29.md): Sets up the specified codec to perform a data format translation.
- [AudioCodecReset](audiocodecreset%28__%29.md): Flushes all the audio data in the codec and clears the input buffer.
