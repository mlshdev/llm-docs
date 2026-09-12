> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstream/send(_:discontinuity:hosttimeinnanoseconds:)](https://developer.apple.com/documentation/coremediaio/cmioextensionstream/send(_:discontinuity:hosttimeinnanoseconds:))

# send(\_:discontinuity:hostTimeInNanoseconds:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Sends a media sample to stream client.

## Declaration

```swift
func send(_ sampleBuffer: CMSampleBuffer, discontinuity: CMIOExtensionStream.DiscontinuityFlags, hostTimeInNanoseconds: UInt64)
```

## Parameters

- `sampleBuffer`: A sample buffer that contains the media data to send.
- `discontinuity`: A flag that indicates whether the sample buffer represents a discontinuity boundary.
- `hostTimeInNanoseconds`: The host time in nanoseconds when the stream captured the buffer.

<a id="Discussion"></a>

## Discussion

Specify sample buffer timestamps that are relative to the clock timebase specified by the [clockType](clocktype-swift.property.md) property.

> **Important**

>  Attempting to send a sample buffer from a sink stream throws an exception.

## See Also

### Processing Data

- [consumeSampleBuffer(from:completionHandler:)](consumesamplebuffer%28from_completionhandler_%29.md): Consumes a sample buffer from a client.
- [CMIOExtensionStream.DiscontinuityFlags](discontinuityflags.md): Constants that specify the types of discontinuities that can occur in a media stream.

# sendSampleBuffer:discontinuity:hostTimeInNanoseconds: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Sends a media sample to stream client.

## Declaration

```objectivec
- (void) sendSampleBuffer:(CMSampleBufferRef) sampleBuffer discontinuity:(CMIOExtensionStreamDiscontinuityFlags) discontinuity hostTimeInNanoseconds:(uint64_t) hostTimeInNanoseconds;
```

## Parameters

- `sampleBuffer`: A sample buffer that contains the media data to send.
- `discontinuity`: A flag that indicates whether the sample buffer represents a discontinuity boundary.
- `hostTimeInNanoseconds`: The host time in nanoseconds when the stream captured the buffer.

<a id="Discussion"></a>

## Discussion

Specify sample buffer timestamps that are relative to the clock timebase specified by the [clockType](clocktype-swift.property.md) property.

> **Important**

>  Attempting to send a sample buffer from a sink stream throws an exception.

## See Also

### Processing Data

- [consumeSampleBufferFromClient:completionHandler:](consumesamplebuffer%28from_completionhandler_%29.md): Consumes a sample buffer from a client.
- [CMIOExtensionStreamDiscontinuityFlags](discontinuityflags.md): Constants that specify the types of discontinuities that can occur in a media stream.
