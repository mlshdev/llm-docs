> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemaccesslogevent/observedmaxbitrate](https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/observedmaxbitrate)

# observedMaxBitrate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 15.0) · iPadOS 7.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.9+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · watchOS 1.0+ (deprecated in 8.0)

The maximum observed segment download bit rate.

> Use observedBitrateStandardDeviation to monitor variance in network bitrate.

## Declaration

```swift
var observedMaxBitrate: Double { get }
```

<a id="Discussion"></a>

## Discussion

The value of the property is negative if unknown.

Corresponds to “c-observed-max-bitrate”.

This property is not compatible with key-value observing.

## See Also

### Getting bit rate log events

- [observedBitrateStandardDeviation](observedbitratestandarddeviation.md): The standard deviation of the observed segment download bit rates.
- [observedMinBitrate](observedminbitrate.md): Deprecated. The minimum observed segment download bit rate.
- [switchBitrate](switchbitrate.md): The bandwidth value that causes a switch, up or down, in the item’s quality being played.
- [indicatedBitrate](indicatedbitrate.md): The throughput, in bits per second, required to play the stream, as advertised by the server.
- [observedBitrate](observedbitrate.md): The empirical throughput, in bits per second, across all media downloaded.
- [averageAudioBitrate](averageaudiobitrate.md): The audio track’s average bit rate, in bits per second.
- [averageVideoBitrate](averagevideobitrate.md): The video track’s average bit rate, in bits per second.
- [indicatedAverageBitrate](indicatedaveragebitrate.md): The average throughput, in bits per second, required to play the stream, as advertised by the server.

# observedMaxBitrate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 15.0) · iPadOS 7.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.9+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · watchOS 1.0+ (deprecated in 8.0)

The maximum observed segment download bit rate.

> Use observedBitrateStandardDeviation to monitor variance in network bitrate.

## Declaration

```objectivec
@property (nonatomic, readonly) double observedMaxBitrate;
```

<a id="Discussion"></a>

## Discussion

The value of the property is negative if unknown.

Corresponds to “c-observed-max-bitrate”.

This property is not compatible with key-value observing.

## See Also

### Getting bit rate log events

- [observedBitrateStandardDeviation](observedbitratestandarddeviation.md): The standard deviation of the observed segment download bit rates.
- [observedMinBitrate](observedminbitrate.md): Deprecated. The minimum observed segment download bit rate.
- [switchBitrate](switchbitrate.md): The bandwidth value that causes a switch, up or down, in the item’s quality being played.
- [indicatedBitrate](indicatedbitrate.md): The throughput, in bits per second, required to play the stream, as advertised by the server.
- [observedBitrate](observedbitrate.md): The empirical throughput, in bits per second, across all media downloaded.
- [averageAudioBitrate](averageaudiobitrate.md): The audio track’s average bit rate, in bits per second.
- [averageVideoBitrate](averagevideobitrate.md): The video track’s average bit rate, in bits per second.
- [indicatedAverageBitrate](indicatedaveragebitrate.md): The average throughput, in bits per second, required to play the stream, as advertised by the server.
