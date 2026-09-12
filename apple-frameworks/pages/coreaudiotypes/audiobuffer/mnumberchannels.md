> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiobuffer/mnumberchannels](https://developer.apple.com/documentation/coreaudiotypes/audiobuffer/mnumberchannels)

# mNumberChannels (Swift)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The number of interleaved channels in the buffer.

## Declaration

```swift
var mNumberChannels: UInt32
```

<a id="Discussion"></a>

## Discussion

A value of `1` indicates the buffer is noninterleaved.

## See Also

### Accessing the Audio

- [mDataByteSize](mdatabytesize.md): The number of bytes in the buffer.
- [mData](mdata.md): A pointer to a buffer of audio data.

# mNumberChannels (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The number of interleaved channels in the buffer.

## Declaration

```objectivec
UInt32 mNumberChannels;
```

<a id="Discussion"></a>

## Discussion

A value of `1` indicates the buffer is noninterleaved.

## See Also

### Accessing the Audio

- [mDataByteSize](mdatabytesize.md): The number of bytes in the buffer.
- [mData](mdata.md): A pointer to a buffer of audio data.
