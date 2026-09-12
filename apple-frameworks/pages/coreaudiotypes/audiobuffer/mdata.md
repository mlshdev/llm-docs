> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiobuffer/mdata](https://developer.apple.com/documentation/coreaudiotypes/audiobuffer/mdata)

# mData (Swift)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A pointer to a buffer of audio data.

## Declaration

```swift
var mData: UnsafeMutableRawPointer?
```

## See Also

### Accessing the Audio

- [mNumberChannels](mnumberchannels.md): The number of interleaved channels in the buffer.
- [mDataByteSize](mdatabytesize.md): The number of bytes in the buffer.

# mData (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A pointer to a buffer of audio data.

## Declaration

```objectivec
void * mData;
```

## See Also

### Accessing the Audio

- [mNumberChannels](mnumberchannels.md): The number of interleaved channels in the buffer.
- [mDataByteSize](mdatabytesize.md): The number of bytes in the buffer.
