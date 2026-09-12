> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemaccesslogevent/indicatedbitrate](https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/indicatedbitrate)

# indicatedBitrate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The throughput, in bits per second, required to play the stream, as advertised by the server.

## Declaration

```swift
var indicatedBitrate: Double { get }
```

<a id="Discussion"></a>

## Discussion

The property corresponds to “sc-indicated-bitrate”.

The value of this property is negative if unknown.

This property is not compatible with key-value observing.

## See Also

### Getting bit rate log events

- [observedBitrateStandardDeviation](observedbitratestandarddeviation.md): The standard deviation of the observed segment download bit rates.
- [observedMaxBitrate](observedmaxbitrate.md): Deprecated. The maximum observed segment download bit rate.
- [observedMinBitrate](observedminbitrate.md): Deprecated. The minimum observed segment download bit rate.
- [switchBitrate](switchbitrate.md): The bandwidth value that causes a switch, up or down, in the item’s quality being played.
- [observedBitrate](observedbitrate.md): The empirical throughput, in bits per second, across all media downloaded.
- [averageAudioBitrate](averageaudiobitrate.md): The audio track’s average bit rate, in bits per second.
- [averageVideoBitrate](averagevideobitrate.md): The video track’s average bit rate, in bits per second.
- [indicatedAverageBitrate](indicatedaveragebitrate.md): The average throughput, in bits per second, required to play the stream, as advertised by the server.

# indicatedBitrate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The throughput, in bits per second, required to play the stream, as advertised by the server.

## Declaration

```objectivec
@property (nonatomic, readonly) double indicatedBitrate;
```

<a id="Discussion"></a>

## Discussion

The property corresponds to “sc-indicated-bitrate”.

The value of this property is negative if unknown.

This property is not compatible with key-value observing.

## See Also

### Getting bit rate log events

- [observedBitrateStandardDeviation](observedbitratestandarddeviation.md): The standard deviation of the observed segment download bit rates.
- [observedMaxBitrate](observedmaxbitrate.md): Deprecated. The maximum observed segment download bit rate.
- [observedMinBitrate](observedminbitrate.md): Deprecated. The minimum observed segment download bit rate.
- [switchBitrate](switchbitrate.md): The bandwidth value that causes a switch, up or down, in the item’s quality being played.
- [observedBitrate](observedbitrate.md): The empirical throughput, in bits per second, across all media downloaded.
- [averageAudioBitrate](averageaudiobitrate.md): The audio track’s average bit rate, in bits per second.
- [averageVideoBitrate](averagevideobitrate.md): The video track’s average bit rate, in bits per second.
- [indicatedAverageBitrate](indicatedaveragebitrate.md): The average throughput, in bits per second, required to play the stream, as advertised by the server.
