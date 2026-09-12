> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmreadysamplebuffer/init(compressedaudiodatabuffer:formatdescription:presentationtimestamp:packetdescriptions:)](https://developer.apple.com/documentation/coremedia/cmreadysamplebuffer/init(compressedaudiodatabuffer:formatdescription:presentationtimestamp:packetdescriptions:))

# init(compressedAudioDataBuffer:formatDescription:presentationTimeStamp:packetDescriptions:)

**Framework:** Core Media  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a sample buffer carrying compressed audio media data.

## Declaration

```swift
init(compressedAudioDataBuffer content: Content, formatDescription: CMAudioFormatDescription, presentationTimeStamp: CMTime, packetDescriptions: [AudioStreamPacketDescription])
```

## Parameters

- `formatDescription`: Format description of the content. The format must have audio media type.
- `presentationTimeStamp`: The time at which the first sample will be presented. Must be valid numeric time.
- `packetDescriptions`: Array of packet descriptions one for each sample.

<a id="discussion"></a>

## Discussion

Use this init when the audio format where the packet size isn’t constant, such as variable bit rate or when the channels have unequal sizes. The `packetDescriptions` are used along with `presentationTimeStamp` to calculate the sample count, sample sizes & sample timings.
