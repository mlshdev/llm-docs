> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemaccesslogevent/averageaudiobitrate](https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/averageaudiobitrate)

# averageAudioBitrate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The audio track’s average bit rate, in bits per second.

## Declaration

```swift
var averageAudioBitrate: Double { get }
```

<a id="Discussion"></a>

## Discussion

The property corresponds to “c-avg-audio-bitrate”.

This property returns a non-positive value if unknown.

This property is not compatible with key-value observing.

## See Also

### Getting bit rate log events

- [observedBitrateStandardDeviation](observedbitratestandarddeviation.md): The standard deviation of the observed segment download bit rates.
- [observedMaxBitrate](observedmaxbitrate.md): Deprecated. The maximum observed segment download bit rate.
- [observedMinBitrate](observedminbitrate.md): Deprecated. The minimum observed segment download bit rate.
- [switchBitrate](switchbitrate.md): The bandwidth value that causes a switch, up or down, in the item’s quality being played.
- [indicatedBitrate](indicatedbitrate.md): The throughput, in bits per second, required to play the stream, as advertised by the server.
- [observedBitrate](observedbitrate.md): The empirical throughput, in bits per second, across all media downloaded.
- [averageVideoBitrate](averagevideobitrate.md): The video track’s average bit rate, in bits per second.
- [indicatedAverageBitrate](indicatedaveragebitrate.md): The average throughput, in bits per second, required to play the stream, as advertised by the server.

# averageAudioBitrate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The audio track’s average bit rate, in bits per second.

## Declaration

```objectivec
@property (nonatomic, readonly) double averageAudioBitrate;
```

<a id="Discussion"></a>

## Discussion

The property corresponds to “c-avg-audio-bitrate”.

This property returns a non-positive value if unknown.

This property is not compatible with key-value observing.

## See Also

### Getting bit rate log events

- [observedBitrateStandardDeviation](observedbitratestandarddeviation.md): The standard deviation of the observed segment download bit rates.
- [observedMaxBitrate](observedmaxbitrate.md): Deprecated. The maximum observed segment download bit rate.
- [observedMinBitrate](observedminbitrate.md): Deprecated. The minimum observed segment download bit rate.
- [switchBitrate](switchbitrate.md): The bandwidth value that causes a switch, up or down, in the item’s quality being played.
- [indicatedBitrate](indicatedbitrate.md): The throughput, in bits per second, required to play the stream, as advertised by the server.
- [observedBitrate](observedbitrate.md): The empirical throughput, in bits per second, across all media downloaded.
- [averageVideoBitrate](averagevideobitrate.md): The video track’s average bit rate, in bits per second.
- [indicatedAverageBitrate](indicatedaveragebitrate.md): The average throughput, in bits per second, required to play the stream, as advertised by the server.
