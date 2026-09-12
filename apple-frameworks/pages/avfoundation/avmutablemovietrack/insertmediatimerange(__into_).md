> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/insertmediatimerange(_:into:)](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/insertmediatimerange(_:into:))

# insertMediaTimeRange(\_:into:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 6.0+

Inserts a reference to a media time range into a track.

## Declaration

```swift
func insertMediaTimeRange(_ mediaTimeRange: CMTimeRange, into trackTimeRange: CMTimeRange) -> Bool
```

## Parameters

- `mediaTimeRange`: The presentation time range of the media to be inserted.
- `trackTimeRange`: The time range of the track into which the media is to be inserted.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the insertion was successful.

<a id="Discussion"></a>

## Discussion

Use this method after appending samples or sample references to a track’s media. To specify that the media time range be played at its natural rate, pass `mediaTimeRange.duration == trackTimeRange.duration`; otherwise, the ratio between these is used to determine the playback rate. Pass [invalid](../../coremedia/cmtime/invalid.md) for `trackTimeRange.start` to indicate that the segment should be appended to the end of the track.

## See Also

### Appending sample data

- [append(\_:)](append%28__%29.md): Appends sample data to a media file and adds sample references for the added data to a track’s media sample tables.
- [append(\_:decodeTime:presentationTime:)](append%28__decodetime_presentationtime_%29.md): Deprecated. Appends sample data to a media file and adds sample references for the added data to a track’s media sample tables.

# insertMediaTimeRange:intoTimeRange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 6.0+

Inserts a reference to a media time range into a track.

## Declaration

```objectivec
- (BOOL) insertMediaTimeRange:(CMTimeRange) mediaTimeRange intoTimeRange:(CMTimeRange) trackTimeRange;
```

## Parameters

- `mediaTimeRange`: The presentation time range of the media to be inserted.
- `trackTimeRange`: The time range of the track into which the media is to be inserted.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the insertion was successful.

<a id="Discussion"></a>

## Discussion

Use this method after appending samples or sample references to a track’s media. To specify that the media time range be played at its natural rate, pass `mediaTimeRange.duration == trackTimeRange.duration`; otherwise, the ratio between these is used to determine the playback rate. Pass [kCMTimeInvalid](../../coremedia/cmtime/invalid.md) for `trackTimeRange.start` to indicate that the segment should be appended to the end of the track.

## See Also

### Appending sample data

- [appendSampleBuffer:decodeTime:presentationTime:error:](append%28__decodetime_presentationtime_%29.md): Deprecated. Appends sample data to a media file and adds sample references for the added data to a track’s media sample tables.
