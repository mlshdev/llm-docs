> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocodecreset(_:)](https://developer.apple.com/documentation/audiotoolbox/audiocodecreset(_:))

# AudioCodecReset(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Flushes all the audio data in the codec and clears the input buffer.

## Declaration

```swift
func AudioCodecReset(_ inCodec: AudioCodec) -> OSStatus
```

## Parameters

- `inCodec`: An audio codec object. Because an audio codec object is a Component Manger component instance, you can use the Component Manager (for example, the functions [FindNextComponent](../coreservices/1516552-findnextcomponent.md) and OpenAComponent) to obtain an audio codec object.

<a id="return-value"></a>

## Return Value

Returns `NoErr` if successful, otherwise, a result code. See `Result Codes` for a list of possible values.

<a id="Discussion"></a>

## Discussion

The input and output formats, magic cookie data, and other state variables are retained so that you needn’t call the [AudioCodecInitialize(\_:\_:\_:\_:\_:)](audiocodecinitialize%28__________%29.md) function again unless the values of some variables have changed.

## See Also

### Initializing an Audio Codec

- [AudioCodecInitialize(\_:\_:\_:\_:\_:)](audiocodecinitialize%28__________%29.md): Sets up the specified codec to perform a data format translation.
- [AudioCodecUninitialize(\_:)](audiocodecuninitialize%28__%29.md): Moves the codec from the initialized state back to the uninitialized state.

# AudioCodecReset (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Flushes all the audio data in the codec and clears the input buffer.

## Declaration

```objectivec
extern OSStatus AudioCodecReset(AudioCodec inCodec);
```

## Parameters

- `inCodec`: An audio codec object. Because an audio codec object is a Component Manger component instance, you can use the Component Manager (for example, the functions [FindNextComponent](../coreservices/1516552-findnextcomponent.md) and OpenAComponent) to obtain an audio codec object.

<a id="return-value"></a>

## Return Value

Returns `NoErr` if successful, otherwise, a result code. See `Result Codes` for a list of possible values.

<a id="Discussion"></a>

## Discussion

The input and output formats, magic cookie data, and other state variables are retained so that you needn’t call the [AudioCodecInitialize](audiocodecinitialize%28__________%29.md) function again unless the values of some variables have changed.

## See Also

### Initializing an Audio Codec

- [AudioCodecInitialize](audiocodecinitialize%28__________%29.md): Sets up the specified codec to perform a data format translation.
- [AudioCodecUninitialize](audiocodecuninitialize%28__%29.md): Moves the codec from the initialized state back to the uninitialized state.
