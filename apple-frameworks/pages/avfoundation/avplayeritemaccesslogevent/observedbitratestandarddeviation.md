> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemaccesslogevent/observedbitratestandarddeviation](https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/observedbitratestandarddeviation)

# observedBitrateStandardDeviation (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The standard deviation of the observed segment download bit rates.

## Declaration

```swift
var observedBitrateStandardDeviation: Double { get }
```

<a id="Discussion"></a>

## Discussion

The value of the property is negative if unknown.

Corresponds to “c-observed-bitrate-sd”.

This property is not compatible with key-value observing.

## See Also

### Getting bit rate log events

- [observedMaxBitrate](observedmaxbitrate.md): Deprecated. The maximum observed segment download bit rate.
- [observedMinBitrate](observedminbitrate.md): Deprecated. The minimum observed segment download bit rate.
- [switchBitrate](switchbitrate.md): The bandwidth value that causes a switch, up or down, in the item’s quality being played.
- [indicatedBitrate](indicatedbitrate.md): The throughput, in bits per second, required to play the stream, as advertised by the server.
- [observedBitrate](observedbitrate.md): The empirical throughput, in bits per second, across all media downloaded.
- [averageAudioBitrate](averageaudiobitrate.md): The audio track’s average bit rate, in bits per second.
- [averageVideoBitrate](averagevideobitrate.md): The video track’s average bit rate, in bits per second.
- [indicatedAverageBitrate](indicatedaveragebitrate.md): The average throughput, in bits per second, required to play the stream, as advertised by the server.

# observedBitrateStandardDeviation (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The standard deviation of the observed segment download bit rates.

## Declaration

```objectivec
@property (nonatomic, readonly) double observedBitrateStandardDeviation;
```

<a id="Discussion"></a>

## Discussion

The value of the property is negative if unknown.

Corresponds to “c-observed-bitrate-sd”.

This property is not compatible with key-value observing.

## See Also

### Getting bit rate log events

- [observedMaxBitrate](observedmaxbitrate.md): Deprecated. The maximum observed segment download bit rate.
- [observedMinBitrate](observedminbitrate.md): Deprecated. The minimum observed segment download bit rate.
- [switchBitrate](switchbitrate.md): The bandwidth value that causes a switch, up or down, in the item’s quality being played.
- [indicatedBitrate](indicatedbitrate.md): The throughput, in bits per second, required to play the stream, as advertised by the server.
- [observedBitrate](observedbitrate.md): The empirical throughput, in bits per second, across all media downloaded.
- [averageAudioBitrate](averageaudiobitrate.md): The audio track’s average bit rate, in bits per second.
- [averageVideoBitrate](averagevideobitrate.md): The video track’s average bit rate, in bits per second.
- [indicatedAverageBitrate](indicatedaveragebitrate.md): The average throughput, in bits per second, required to play the stream, as advertised by the server.
