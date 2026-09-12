> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemaccesslogevent/playbacktype](https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/playbacktype)

# playbackType (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The playback type.

## Declaration

```swift
var playbackType: String? { get }
```

<a id="Discussion"></a>

## Discussion

The playback type can be live, VOD, or from a file. If `nil` is returned the playback type is unknown.

Corresponds to “s-playback-type”.

This property is not compatible with key-value observing.

## See Also

### Getting playback-related log events

- [playbackStartDate](playbackstartdate.md): The date and time at which playback began for this event.
- [playbackSessionID](playbacksessionid.md): A GUID that identifies the playback session.
- [playbackStartOffset](playbackstartoffset.md): The offset, in seconds, in the playlist where the last uninterrupted period of playback began.
- [startupTime](startuptime.md): The accumulated duration, in seconds, until the player item is ready to play.
- [durationWatched](durationwatched.md): The accumulated duration, in seconds, of the media played.
- [numberOfDroppedVideoFrames](numberofdroppedvideoframes.md): The total number of dropped video frames
- [numberOfStalls](numberofstalls.md): The total number of playback stalls encountered.
- [numberOfSegmentsDownloaded](numberofsegmentsdownloaded.md): Deprecated. A count of the media segments downloaded from the server to this client.
- [segmentsDownloadedDuration](segmentsdownloadedduration.md): The accumulated duration, in seconds, of the media segments downloaded.
- [downloadOverdue](downloadoverdue.md): The total number of times that downloading the segments took too long.

# playbackType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The playback type.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * playbackType;
```

<a id="Discussion"></a>

## Discussion

The playback type can be live, VOD, or from a file. If `nil` is returned the playback type is unknown.

Corresponds to “s-playback-type”.

This property is not compatible with key-value observing.

## See Also

### Getting playback-related log events

- [playbackStartDate](playbackstartdate.md): The date and time at which playback began for this event.
- [playbackSessionID](playbacksessionid.md): A GUID that identifies the playback session.
- [playbackStartOffset](playbackstartoffset.md): The offset, in seconds, in the playlist where the last uninterrupted period of playback began.
- [startupTime](startuptime.md): The accumulated duration, in seconds, until the player item is ready to play.
- [durationWatched](durationwatched.md): The accumulated duration, in seconds, of the media played.
- [numberOfDroppedVideoFrames](numberofdroppedvideoframes.md): The total number of dropped video frames
- [numberOfStalls](numberofstalls.md): The total number of playback stalls encountered.
- [numberOfSegmentsDownloaded](numberofsegmentsdownloaded.md): Deprecated. A count of the media segments downloaded from the server to this client.
- [segmentsDownloadedDuration](segmentsdownloadedduration.md): The accumulated duration, in seconds, of the media segments downloaded.
- [downloadOverdue](downloadoverdue.md): The total number of times that downloading the segments took too long.
