> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieaccesslogevent/playbackstartdate](https://developer.apple.com/documentation/mediaplayer/mpmovieaccesslogevent/playbackstartdate)

# playbackStartDate (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The timestamp for when playback began for the movie log access event.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
var playbackStartDate: Date! { get }
```

## See Also

### Movie access log event properties

- [numberOfSegmentsDownloaded](numberofsegmentsdownloaded.md): Deprecated. A count of media segments downloaded from the web server to your app.
- [uri](uri.md): Deprecated. The URI of the playback item.
- [serverAddress](serveraddress.md): Deprecated. The IPv4 or IPv6 address of the web server that was the source of the last delivered media segment.
- [numberOfServerAddressChanges](numberofserveraddresschanges.md): Deprecated. A count of changes to the [serverAddress](serveraddress.md) property over the last uninterrupted period of playback.
- [playbackSessionID](playbacksessionid.md): Deprecated. A GUID that identifies the playback session to use in HTTP requests.
- [playbackStartOffset](playbackstartoffset.md): Deprecated. An offset into the playlist where the last uninterrupted period of playback began, in seconds.
- [segmentsDownloadedDuration](segmentsdownloadedduration.md): Deprecated. The accumulated duration of the media downloaded, in seconds.
- [durationWatched](durationwatched.md): Deprecated. The accumulated duration of the media played, in seconds.
- [numberOfStalls](numberofstalls.md): Deprecated. The total number of playback stalls encountered.
- [numberOfBytesTransferred](numberofbytestransferred.md): Deprecated. The accumulated number of bytes transferred.
- [observedBitrate](observedbitrate.md): Deprecated. The empirical throughput across all media downloaded for the movie player, in bits per second.
- [indicatedBitrate](indicatedbitrate.md): Deprecated. The throughput required to play the stream, as advertised by the web server, in bits per second.
- [numberOfDroppedVideoFrames](numberofdroppedvideoframes.md): Deprecated. The total number of dropped video frames.

# playbackStartDate (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ (deprecated in 9.0) · iPadOS 4.3+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The timestamp for when playback began for the movie log access event.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
@property (nonatomic, readonly) NSDate * playbackStartDate;
```

## See Also

### Movie access log event properties

- [numberOfSegmentsDownloaded](numberofsegmentsdownloaded.md): Deprecated. A count of media segments downloaded from the web server to your app.
- [URI](uri.md): Deprecated. The URI of the playback item.
- [serverAddress](serveraddress.md): Deprecated. The IPv4 or IPv6 address of the web server that was the source of the last delivered media segment.
- [numberOfServerAddressChanges](numberofserveraddresschanges.md): Deprecated. A count of changes to the [serverAddress](serveraddress.md) property over the last uninterrupted period of playback.
- [playbackSessionID](playbacksessionid.md): Deprecated. A GUID that identifies the playback session to use in HTTP requests.
- [playbackStartOffset](playbackstartoffset.md): Deprecated. An offset into the playlist where the last uninterrupted period of playback began, in seconds.
- [segmentsDownloadedDuration](segmentsdownloadedduration.md): Deprecated. The accumulated duration of the media downloaded, in seconds.
- [durationWatched](durationwatched.md): Deprecated. The accumulated duration of the media played, in seconds.
- [numberOfStalls](numberofstalls.md): Deprecated. The total number of playback stalls encountered.
- [numberOfBytesTransferred](numberofbytestransferred.md): Deprecated. The accumulated number of bytes transferred.
- [observedBitrate](observedbitrate.md): Deprecated. The empirical throughput across all media downloaded for the movie player, in bits per second.
- [indicatedBitrate](indicatedbitrate.md): Deprecated. The throughput required to play the stream, as advertised by the web server, in bits per second.
- [numberOfDroppedVideoFrames](numberofdroppedvideoframes.md): Deprecated. The total number of dropped video frames.
