> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemaccesslogevent/playbackstartoffset](https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/playbackstartoffset)

# playbackStartOffset (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The offset, in seconds, in the playlist where the last uninterrupted period of playback began.

## Declaration

```swift
var playbackStartOffset: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

The property corresponds to “c-start-time”.

The value of this property is negative if unknown.

This property is not compatible with key-value observing.

## See Also

### Getting playback-related log events

- [playbackStartDate](playbackstartdate.md): The date and time at which playback began for this event.
- [playbackSessionID](playbacksessionid.md): A GUID that identifies the playback session.
- [playbackType](playbacktype.md): The playback type.
- [startupTime](startuptime.md): The accumulated duration, in seconds, until the player item is ready to play.
- [durationWatched](durationwatched.md): The accumulated duration, in seconds, of the media played.
- [numberOfDroppedVideoFrames](numberofdroppedvideoframes.md): The total number of dropped video frames
- [numberOfStalls](numberofstalls.md): The total number of playback stalls encountered.
- [numberOfSegmentsDownloaded](numberofsegmentsdownloaded.md): Deprecated. A count of the media segments downloaded from the server to this client.
- [segmentsDownloadedDuration](segmentsdownloadedduration.md): The accumulated duration, in seconds, of the media segments downloaded.
- [downloadOverdue](downloadoverdue.md): The total number of times that downloading the segments took too long.

# playbackStartOffset (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The offset, in seconds, in the playlist where the last uninterrupted period of playback began.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval playbackStartOffset;
```

<a id="Discussion"></a>

## Discussion

The property corresponds to “c-start-time”.

The value of this property is negative if unknown.

This property is not compatible with key-value observing.

## See Also

### Getting playback-related log events

- [playbackStartDate](playbackstartdate.md): The date and time at which playback began for this event.
- [playbackSessionID](playbacksessionid.md): A GUID that identifies the playback session.
- [playbackType](playbacktype.md): The playback type.
- [startupTime](startuptime.md): The accumulated duration, in seconds, until the player item is ready to play.
- [durationWatched](durationwatched.md): The accumulated duration, in seconds, of the media played.
- [numberOfDroppedVideoFrames](numberofdroppedvideoframes.md): The total number of dropped video frames
- [numberOfStalls](numberofstalls.md): The total number of playback stalls encountered.
- [numberOfSegmentsDownloaded](numberofsegmentsdownloaded.md): Deprecated. A count of the media segments downloaded from the server to this client.
- [segmentsDownloadedDuration](segmentsdownloadedduration.md): The accumulated duration, in seconds, of the media segments downloaded.
- [downloadOverdue](downloadoverdue.md): The total number of times that downloading the segments took too long.
