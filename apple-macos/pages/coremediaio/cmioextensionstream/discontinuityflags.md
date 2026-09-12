> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstream/discontinuityflags](https://developer.apple.com/documentation/coremediaio/cmioextensionstream/discontinuityflags)

# CMIOExtensionStream.DiscontinuityFlags (Swift)

**Framework:** Core Media I/O  
**Kind:** Structure  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Constants that specify the types of discontinuities that can occur in a media stream.

## Declaration

```swift
struct DiscontinuityFlags
```

## Topics

### Discontinuity Flags

- [unknown](discontinuityflags/unknown.md): A flag that indicates a stream discontinuity due to an unknown reason.
- [time](discontinuityflags/time.md): A flag that indicates a time discontinuity in the stream.
- [sampleDropped](discontinuityflags/sampledropped.md): A flag that indicates a discontinuity in the stream due to a dropped frame.

### Initializers

- [init(rawValue:)](discontinuityflags/init%28rawvalue_%29.md): Creates a flag with an integer value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Processing Data

- [consumeSampleBuffer(from:completionHandler:)](consumesamplebuffer%28from_completionhandler_%29.md): Consumes a sample buffer from a client.
- [send(\_:discontinuity:hostTimeInNanoseconds:)](send%28__discontinuity_hosttimeinnanoseconds_%29.md): Sends a media sample to stream client.

# CMIOExtensionStreamDiscontinuityFlags (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Constants that specify the types of discontinuities that can occur in a media stream.

## Declaration

```objectivec
enum CMIOExtensionStreamDiscontinuityFlags : uint32_t;
```

## Topics

### Discontinuity Flags

- [CMIOExtensionStreamDiscontinuityFlagNone](../cmioextensionstreamdiscontinuityflags/cmioextensionstreamdiscontinuityflagnone.md): A flag that indicates there’s no discontinuity in the stream.
- [CMIOExtensionStreamDiscontinuityFlagUnknown](discontinuityflags/unknown.md): A flag that indicates a stream discontinuity due to an unknown reason.
- [CMIOExtensionStreamDiscontinuityFlagTime](discontinuityflags/time.md): A flag that indicates a time discontinuity in the stream.
- [CMIOExtensionStreamDiscontinuityFlagSampleDropped](discontinuityflags/sampledropped.md): A flag that indicates a discontinuity in the stream due to a dropped frame.

## See Also

### Processing Data

- [consumeSampleBufferFromClient:completionHandler:](consumesamplebuffer%28from_completionhandler_%29.md): Consumes a sample buffer from a client.
- [sendSampleBuffer:discontinuity:hostTimeInNanoseconds:](send%28__discontinuity_hosttimeinnanoseconds_%29.md): Sends a media sample to stream client.
