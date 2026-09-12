> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiobuffer/mutableaudiobufferlist](https://developer.apple.com/documentation/avfaudio/avaudiobuffer/mutableaudiobufferlist)

# mutableAudioBufferList (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A mutable version of the buffer’s underlying audio buffer list.

## Declaration

```swift
var mutableAudioBufferList: UnsafeMutablePointer<AudioBufferList> { get }
```

<a id="Discussion"></a>

## Discussion

You use this with some lower-level Core Audio and Audio Toolbox APIs that require a mutable [AudioBufferList](../../coreaudiotypes/audiobufferlist.md) (for example, the [AudioConverterConvertComplexBuffer(\_:\_:\_:\_:)](../../audiotoolbox/audioconverterconvertcomplexbuffer%28________%29.md) function).

The `mDataByteSize` fields of this audio buffer list express the buffer’s current [frameCapacity](../avaudiopcmbuffer/framecapacity.md). If you alter the capacity, modify the buffer’s `frameLength` to match.

## See Also

### Getting the Audio Buffers

- [audioBufferList](audiobufferlist.md): The buffer’s underlying audio buffer list.

# mutableAudioBufferList (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A mutable version of the buffer’s underlying audio buffer list.

## Declaration

```objectivec
@property (nonatomic, readonly) AudioBufferList * mutableAudioBufferList;
```

<a id="Discussion"></a>

## Discussion

You use this with some lower-level Core Audio and Audio Toolbox APIs that require a mutable [AudioBufferList](../../coreaudiotypes/audiobufferlist.md) (for example, the [AudioConverterConvertComplexBuffer](../../audiotoolbox/audioconverterconvertcomplexbuffer%28________%29.md) function).

The `mDataByteSize` fields of this audio buffer list express the buffer’s current [frameCapacity](../avaudiopcmbuffer/framecapacity.md). If you alter the capacity, modify the buffer’s `frameLength` to match.

## See Also

### Getting the Audio Buffers

- [audioBufferList](audiobufferlist.md): The buffer’s underlying audio buffer list.
