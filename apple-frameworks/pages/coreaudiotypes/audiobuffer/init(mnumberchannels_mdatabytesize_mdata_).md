> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiobuffer/init(mnumberchannels:mdatabytesize:mdata:)](https://developer.apple.com/documentation/coreaudiotypes/audiobuffer/init(mnumberchannels:mdatabytesize:mdata:))

# init(mNumberChannels:mDataByteSize:mData:)

**Framework:** Core Audio Types  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an audio buffer with audio data.

## Declaration

```swift
init(mNumberChannels: UInt32, mDataByteSize: UInt32, mData: UnsafeMutableRawPointer?)
```

## Parameters

- `mNumberChannels`: The number of interleaved channels in the buffer.
- `mDataByteSize`: The number of bytes in the buffer.
- `mData`: A pointer to a buffer of audio data.

## See Also

### Creating a Buffer

- [init()](init%28%29.md): Creates an empty audio buffer.
