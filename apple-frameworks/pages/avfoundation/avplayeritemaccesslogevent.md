> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemaccesslogevent](https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent)

# AVPlayerItemAccessLogEvent (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A single entry in a player item’s access log.

## Declaration

```swift
class AVPlayerItemAccessLogEvent
```

<a id="overview"></a>

## Overview

This object provides named properties for accessing the data fields of each log event. Each event is a single entry in an [AVPlayerItem](avplayeritem.md) object’s access log.

These properties aren’t observable. For more information about key-value observing, see [Using Key-Value Observing in Swift](https://developer.apple.com/documentation/swift/using-key-value-observing-in-swift).

## Topics

### Getting server-related log events

- [uri](avplayeritemaccesslogevent/uri.md): The URI of the playback item.
- [serverAddress](avplayeritemaccesslogevent/serveraddress.md): The IP address of the server that was the source of the last delivered media segment.
- [numberOfServerAddressChanges](avplayeritemaccesslogevent/numberofserveraddresschanges.md): A count of changes to the server address over the last uninterrupted period of playback.
- [mediaRequestsWWAN](avplayeritemaccesslogevent/mediarequestswwan.md): The number of network read requests over a WWAN.
- [transferDuration](avplayeritemaccesslogevent/transferduration.md): The accumulated duration, in seconds, of active network transfer of bytes.
- [numberOfBytesTransferred](avplayeritemaccesslogevent/numberofbytestransferred.md): The accumulated number of bytes transferred by the item.
- [numberOfMediaRequests](avplayeritemaccesslogevent/numberofmediarequests.md): The number of media read requests from the server to this client.

### Getting playback-related log events

- [playbackStartDate](avplayeritemaccesslogevent/playbackstartdate.md): The date and time at which playback began for this event.
- [playbackSessionID](avplayeritemaccesslogevent/playbacksessionid.md): A GUID that identifies the playback session.
- [playbackStartOffset](avplayeritemaccesslogevent/playbackstartoffset.md): The offset, in seconds, in the playlist where the last uninterrupted period of playback began.
- [playbackType](avplayeritemaccesslogevent/playbacktype.md): The playback type.
- [startupTime](avplayeritemaccesslogevent/startuptime.md): The accumulated duration, in seconds, until the player item is ready to play.
- [durationWatched](avplayeritemaccesslogevent/durationwatched.md): The accumulated duration, in seconds, of the media played.
- [numberOfDroppedVideoFrames](avplayeritemaccesslogevent/numberofdroppedvideoframes.md): The total number of dropped video frames
- [numberOfStalls](avplayeritemaccesslogevent/numberofstalls.md): The total number of playback stalls encountered.
- [numberOfSegmentsDownloaded](avplayeritemaccesslogevent/numberofsegmentsdownloaded.md): Deprecated. A count of the media segments downloaded from the server to this client.
- [segmentsDownloadedDuration](avplayeritemaccesslogevent/segmentsdownloadedduration.md): The accumulated duration, in seconds, of the media segments downloaded.
- [downloadOverdue](avplayeritemaccesslogevent/downloadoverdue.md): The total number of times that downloading the segments took too long.

### Getting bit rate log events

The observed properties measure actual network download performance and indicated properties measure the bit rate of the media.

- [observedBitrateStandardDeviation](avplayeritemaccesslogevent/observedbitratestandarddeviation.md): The standard deviation of the observed segment download bit rates.
- [observedMaxBitrate](avplayeritemaccesslogevent/observedmaxbitrate.md): Deprecated. The maximum observed segment download bit rate.
- [observedMinBitrate](avplayeritemaccesslogevent/observedminbitrate.md): Deprecated. The minimum observed segment download bit rate.
- [switchBitrate](avplayeritemaccesslogevent/switchbitrate.md): The bandwidth value that causes a switch, up or down, in the item’s quality being played.
- [indicatedBitrate](avplayeritemaccesslogevent/indicatedbitrate.md): The throughput, in bits per second, required to play the stream, as advertised by the server.
- [observedBitrate](avplayeritemaccesslogevent/observedbitrate.md): The empirical throughput, in bits per second, across all media downloaded.
- [averageAudioBitrate](avplayeritemaccesslogevent/averageaudiobitrate.md): The audio track’s average bit rate, in bits per second.
- [averageVideoBitrate](avplayeritemaccesslogevent/averagevideobitrate.md): The video track’s average bit rate, in bits per second.
- [indicatedAverageBitrate](avplayeritemaccesslogevent/indicatedaveragebitrate.md): The average throughput, in bits per second, required to play the stream, as advertised by the server.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing logging information

- [accessLog()](avplayeritem/accesslog%28%29.md): Deprecated. Returns an object that represents a snapshot of the network access log.
- [AVPlayerItemAccessLog](avplayeritemaccesslog.md): An object used to retrieve the access log associated with a player item.
- [errorLog()](avplayeritem/errorlog%28%29.md): Deprecated. Returns an object that represents a snapshot of the error log.
- [AVPlayerItemErrorLog](avplayeritemerrorlog.md): The error log associated with a player item.
- [AVPlayerItemErrorLogEvent](avplayeritemerrorlogevent.md): A single item in a player item’s error log.

# AVPlayerItemAccessLogEvent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A single entry in a player item’s access log.

## Declaration

```objectivec
@interface AVPlayerItemAccessLogEvent : NSObject
```

<a id="overview"></a>

## Overview

This object provides named properties for accessing the data fields of each log event. Each event is a single entry in an [AVPlayerItem](avplayeritem.md) object’s access log.

These properties aren’t observable. For more information about key-value observing, see [Using Key-Value Observing in Swift](https://developer.apple.com/documentation/swift/using-key-value-observing-in-swift).

## Topics

### Getting server-related log events

- [URI](avplayeritemaccesslogevent/uri.md): The URI of the playback item.
- [serverAddress](avplayeritemaccesslogevent/serveraddress.md): The IP address of the server that was the source of the last delivered media segment.
- [numberOfServerAddressChanges](avplayeritemaccesslogevent/numberofserveraddresschanges.md): A count of changes to the server address over the last uninterrupted period of playback.
- [mediaRequestsWWAN](avplayeritemaccesslogevent/mediarequestswwan.md): The number of network read requests over a WWAN.
- [transferDuration](avplayeritemaccesslogevent/transferduration.md): The accumulated duration, in seconds, of active network transfer of bytes.
- [numberOfBytesTransferred](avplayeritemaccesslogevent/numberofbytestransferred.md): The accumulated number of bytes transferred by the item.
- [numberOfMediaRequests](avplayeritemaccesslogevent/numberofmediarequests.md): The number of media read requests from the server to this client.

### Getting playback-related log events

- [playbackStartDate](avplayeritemaccesslogevent/playbackstartdate.md): The date and time at which playback began for this event.
- [playbackSessionID](avplayeritemaccesslogevent/playbacksessionid.md): A GUID that identifies the playback session.
- [playbackStartOffset](avplayeritemaccesslogevent/playbackstartoffset.md): The offset, in seconds, in the playlist where the last uninterrupted period of playback began.
- [playbackType](avplayeritemaccesslogevent/playbacktype.md): The playback type.
- [startupTime](avplayeritemaccesslogevent/startuptime.md): The accumulated duration, in seconds, until the player item is ready to play.
- [durationWatched](avplayeritemaccesslogevent/durationwatched.md): The accumulated duration, in seconds, of the media played.
- [numberOfDroppedVideoFrames](avplayeritemaccesslogevent/numberofdroppedvideoframes.md): The total number of dropped video frames
- [numberOfStalls](avplayeritemaccesslogevent/numberofstalls.md): The total number of playback stalls encountered.
- [numberOfSegmentsDownloaded](avplayeritemaccesslogevent/numberofsegmentsdownloaded.md): Deprecated. A count of the media segments downloaded from the server to this client.
- [segmentsDownloadedDuration](avplayeritemaccesslogevent/segmentsdownloadedduration.md): The accumulated duration, in seconds, of the media segments downloaded.
- [downloadOverdue](avplayeritemaccesslogevent/downloadoverdue.md): The total number of times that downloading the segments took too long.

### Getting bit rate log events

The observed properties measure actual network download performance and indicated properties measure the bit rate of the media.

- [observedBitrateStandardDeviation](avplayeritemaccesslogevent/observedbitratestandarddeviation.md): The standard deviation of the observed segment download bit rates.
- [observedMaxBitrate](avplayeritemaccesslogevent/observedmaxbitrate.md): Deprecated. The maximum observed segment download bit rate.
- [observedMinBitrate](avplayeritemaccesslogevent/observedminbitrate.md): Deprecated. The minimum observed segment download bit rate.
- [switchBitrate](avplayeritemaccesslogevent/switchbitrate.md): The bandwidth value that causes a switch, up or down, in the item’s quality being played.
- [indicatedBitrate](avplayeritemaccesslogevent/indicatedbitrate.md): The throughput, in bits per second, required to play the stream, as advertised by the server.
- [observedBitrate](avplayeritemaccesslogevent/observedbitrate.md): The empirical throughput, in bits per second, across all media downloaded.
- [averageAudioBitrate](avplayeritemaccesslogevent/averageaudiobitrate.md): The audio track’s average bit rate, in bits per second.
- [averageVideoBitrate](avplayeritemaccesslogevent/averagevideobitrate.md): The video track’s average bit rate, in bits per second.
- [indicatedAverageBitrate](avplayeritemaccesslogevent/indicatedaveragebitrate.md): The average throughput, in bits per second, required to play the stream, as advertised by the server.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Accessing logging information

- [accessLog](avplayeritem/accesslog%28%29.md): Deprecated. Returns an object that represents a snapshot of the network access log.
- [AVPlayerItemAccessLog](avplayeritemaccesslog.md): An object used to retrieve the access log associated with a player item.
- [errorLog](avplayeritem/errorlog%28%29.md): Deprecated. Returns an object that represents a snapshot of the error log.
- [AVPlayerItemErrorLog](avplayeritemerrorlog.md): The error log associated with a player item.
- [AVPlayerItemErrorLogEvent](avplayeritemerrorlogevent.md): A single item in a player item’s error log.
