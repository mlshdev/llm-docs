> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiobuffer/audiobufferlist](https://developer.apple.com/documentation/avfaudio/avaudiobuffer/audiobufferlist)

# audioBufferList (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The buffer’s underlying audio buffer list.

## Declaration

```swift
var audioBufferList: UnsafePointer<AudioBufferList> { get }
```

<a id="Discussion"></a>

## Discussion

A buffer list is a variable length array that contains an array of audio buffer instances. You use it with lower-level Core Audio and Audio Toolbox API.

You must not modify the buffer list structure, although you can modify buffer contents.

The `mDataByteSize` fields of this audio buffer list express the buffer’s current [frameLength](../avaudiopcmbuffer/framelength.md).

## See Also

### Getting the Audio Buffers

- [mutableAudioBufferList](mutableaudiobufferlist.md): A mutable version of the buffer’s underlying audio buffer list.

# audioBufferList (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The buffer’s underlying audio buffer list.

## Declaration

```objectivec
@property (nonatomic, readonly) const AudioBufferList * audioBufferList;
```

<a id="Discussion"></a>

## Discussion

A buffer list is a variable length array that contains an array of audio buffer instances. You use it with lower-level Core Audio and Audio Toolbox API.

You must not modify the buffer list structure, although you can modify buffer contents.

The `mDataByteSize` fields of this audio buffer list express the buffer’s current [frameLength](../avaudiopcmbuffer/framelength.md).

## See Also

### Getting the Audio Buffers

- [mutableAudioBufferList](mutableaudiobufferlist.md): A mutable version of the buffer’s underlying audio buffer list.
