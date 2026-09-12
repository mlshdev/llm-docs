> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiopcmbuffer/framelength](https://developer.apple.com/documentation/avfaudio/avaudiopcmbuffer/framelength)

# frameLength (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The current number of valid sample frames in the buffer.

## Declaration

```swift
var frameLength: AVAudioFrameCount { get set }
```

<a id="Discussion"></a>

## Discussion

By default, the `frameLength` property doesn’t have a useful value upon creation, so you must set this property before using the buffer. The length must be less than or equal to the [frameCapacity](framecapacity.md) of the buffer. For deinterleaved formats, [frameCapacity](framecapacity.md) refers to the size of one channel’s worth of audio samples.

You may modify the length of the buffer as part of an operation that modifies its contents. Modifying `frameLength` updates the `mDataByteSize` field in each of the underlying [AudioBufferList](../../coreaudiotypes/audiobufferlist.md) structure’s `AudioBuffer` properties correspondingly, and vice versa.

## See Also

### Related Documentation

- [frameCapacity](framecapacity.md): The buffer’s capacity, in audio sample frames.

# frameLength (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The current number of valid sample frames in the buffer.

## Declaration

```objectivec
@property (nonatomic) AVAudioFrameCount frameLength;
```

<a id="Discussion"></a>

## Discussion

By default, the `frameLength` property doesn’t have a useful value upon creation, so you must set this property before using the buffer. The length must be less than or equal to the [frameCapacity](framecapacity.md) of the buffer. For deinterleaved formats, [frameCapacity](framecapacity.md) refers to the size of one channel’s worth of audio samples.

You may modify the length of the buffer as part of an operation that modifies its contents. Modifying `frameLength` updates the `mDataByteSize` field in each of the underlying [AudioBufferList](../../coreaudiotypes/audiobufferlist.md) structure’s `AudioBuffer` properties correspondingly, and vice versa.

## See Also

### Related Documentation

- [frameCapacity](framecapacity.md): The buffer’s capacity, in audio sample frames.
