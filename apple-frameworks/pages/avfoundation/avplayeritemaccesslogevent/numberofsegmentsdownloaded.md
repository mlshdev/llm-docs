> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemaccesslogevent/numberofsegmentsdownloaded](https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/numberofsegmentsdownloaded)

# numberOfSegmentsDownloaded (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 9.0)

A count of the media segments downloaded from the server to this client.

## Declaration

```swift
var numberOfSegmentsDownloaded: Int { get }
```

<a id="Discussion"></a>

## Discussion

The property corresponds to “sc-count”.

The value of this property is negative if unknown.

This property is not compatible with key-value observing.

## See Also

### Getting playback-related log events

- [playbackStartDate](playbackstartdate.md): The date and time at which playback began for this event.
- [playbackSessionID](playbacksessionid.md): A GUID that identifies the playback session.
- [playbackStartOffset](playbackstartoffset.md): The offset, in seconds, in the playlist where the last uninterrupted period of playback began.
- [playbackType](playbacktype.md): The playback type.
- [startupTime](startuptime.md): The accumulated duration, in seconds, until the player item is ready to play.
- [durationWatched](durationwatched.md): The accumulated duration, in seconds, of the media played.
- [numberOfDroppedVideoFrames](numberofdroppedvideoframes.md): The total number of dropped video frames
- [numberOfStalls](numberofstalls.md): The total number of playback stalls encountered.
- [segmentsDownloadedDuration](segmentsdownloadedduration.md): The accumulated duration, in seconds, of the media segments downloaded.
- [downloadOverdue](downloadoverdue.md): The total number of times that downloading the segments took too long.

# numberOfSegmentsDownloaded (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ (deprecated in 7.0) · iPadOS 4.3+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.9) · tvOS 9.0+ (deprecated in 9.0)

A count of the media segments downloaded from the server to this client.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger numberOfSegmentsDownloaded;
```

<a id="Discussion"></a>

## Discussion

The property corresponds to “sc-count”.

The value of this property is negative if unknown.

This property is not compatible with key-value observing.

## See Also

### Getting playback-related log events

- [playbackStartDate](playbackstartdate.md): The date and time at which playback began for this event.
- [playbackSessionID](playbacksessionid.md): A GUID that identifies the playback session.
- [playbackStartOffset](playbackstartoffset.md): The offset, in seconds, in the playlist where the last uninterrupted period of playback began.
- [playbackType](playbacktype.md): The playback type.
- [startupTime](startuptime.md): The accumulated duration, in seconds, until the player item is ready to play.
- [durationWatched](durationwatched.md): The accumulated duration, in seconds, of the media played.
- [numberOfDroppedVideoFrames](numberofdroppedvideoframes.md): The total number of dropped video frames
- [numberOfStalls](numberofstalls.md): The total number of playback stalls encountered.
- [segmentsDownloadedDuration](segmentsdownloadedduration.md): The accumulated duration, in seconds, of the media segments downloaded.
- [downloadOverdue](downloadoverdue.md): The total number of times that downloading the segments took too long.
