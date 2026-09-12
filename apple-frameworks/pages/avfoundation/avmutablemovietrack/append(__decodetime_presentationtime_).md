> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/append(_:decodetime:presentationtime:)](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/append(_:decodetime:presentationtime:))

# append(\_:decodeTime:presentationTime:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 1.0+ (deprecated in 27.0)

Appends sample data to a media file and adds sample references for the added data to a track’s media sample tables.

> Use append(\_:) instead

## Declaration

```swift
func append(_ sampleBuffer: CMSampleBuffer, decodeTime outDecodeTime: UnsafeMutablePointer<CMTime>?, presentationTime outPresentationTime: UnsafeMutablePointer<CMTime>?) throws
```

## Parameters

- `sampleBuffer`: The sample buffer to be appended.
- `outDecodeTime`: A pointer to a [CMTime](../../coremedia/cmtime.md) structure to receive the decode time in the media of the first sample appended from the sample buffer. Pass `NULL` if the information is not needed.
- `outPresentationTime`: A pointer to a [CMTime](../../coremedia/cmtime.md) structure to receive the presentation time in the media of the first sample appended from the sample buffer. Pass `NULL` if the information is not needed.

<a id="Discussion"></a>

## Discussion

If the sample buffer carries sample data, the sample data is written to the container specified by the track property [mediaDataStorage](mediadatastorage.md) if non-nil, or by the movie property [defaultMediaDataStorage](../avmutablemovie/defaultmediadatastorage.md) if non-nil, and sample references are appended to the track’s media. If both media data storage properties are `nil`, the method will fail and return `NO`.

If the sample buffer carries sample references only, sample data will not be written and sample references to the samples in their original container are appended to the track’s media as necessary.

> **Note**

>  In a track’s media, the first sample’s decode timestamp must be zero. For an audio track, each sample buffer’s duration is used as the sample decode duration. For other track types, the difference between a sample’s decode timestamp and the following sample’s decode timestamp is used as the first sample’s decode duration, so as to preserve the relative timing.

To make the new samples appear in the track’s timeline, invoke [insertMediaTimeRange(\_:into:)](insertmediatimerange%28__into_%29.md). Retrieve the [mediaPresentationTimeRange](../avmovietrack/mediapresentationtimerange.md) property before and after appending a sequence of samples, using [CMTimeRangeGetEnd(\_:)](../../coremedia/cmtimerangegetend%28__%29.md) on each to calculate the media time range for [insertMediaTimeRange(\_:into:)](insertmediatimerange%28__into_%29.md).

It’s safe for multiple threads to call this method on different tracks at the same time.

## See Also

### Appending sample data

- [append(\_:)](append%28__%29.md): Appends sample data to a media file and adds sample references for the added data to a track’s media sample tables.
- [insertMediaTimeRange(\_:into:)](insertmediatimerange%28__into_%29.md): Inserts a reference to a media time range into a track.

# appendSampleBuffer:decodeTime:presentationTime:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 6.0+

Appends sample data to a media file and adds sample references for the added data to a track’s media sample tables.

## Declaration

```objectivec
- (BOOL) appendSampleBuffer:(CMSampleBufferRef) sampleBuffer decodeTime:(CMTime *) outDecodeTime presentationTime:(CMTime *) outPresentationTime error:(NSError **) outError;
```

## Parameters

- `sampleBuffer`: The sample buffer to be appended.
- `outDecodeTime`: A pointer to a [CMTime](../../coremedia/cmtime.md) structure to receive the decode time in the media of the first sample appended from the sample buffer. Pass `NULL` if the information is not needed.
- `outPresentationTime`: A pointer to a [CMTime](../../coremedia/cmtime.md) structure to receive the presentation time in the media of the first sample appended from the sample buffer. Pass `NULL` if the information is not needed.
- `outError`: An [NSError](../../foundation/nserror.md) object that describes the nature of the failure.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the sample data was appended.

<a id="Discussion"></a>

## Discussion

If the sample buffer carries sample data, the sample data is written to the container specified by the track property [mediaDataStorage](mediadatastorage.md) if non-nil, or by the movie property [defaultMediaDataStorage](../avmutablemovie/defaultmediadatastorage.md) if non-nil, and sample references are appended to the track’s media. If both media data storage properties are `nil`, the method will fail and return `NO`.

If the sample buffer carries sample references only, sample data will not be written and sample references to the samples in their original container are appended to the track’s media as necessary.

> **Note**

>  In a track’s media, the first sample’s decode timestamp must be zero. For an audio track, each sample buffer’s duration is used as the sample decode duration. For other track types, the difference between a sample’s decode timestamp and the following sample’s decode timestamp is used as the first sample’s decode duration, so as to preserve the relative timing.

To make the new samples appear in the track’s timeline, invoke [insertMediaTimeRange:intoTimeRange:](insertmediatimerange%28__into_%29.md). Retrieve the [mediaPresentationTimeRange](../avmovietrack/mediapresentationtimerange.md) property before and after appending a sequence of samples, using [CMTimeRangeGetEnd](../../coremedia/cmtimerangegetend%28__%29.md) on each to calculate the media time range for [insertMediaTimeRange:intoTimeRange:](insertmediatimerange%28__into_%29.md).

It’s safe for multiple threads to call this method on different tracks at the same time.

## See Also

### Appending sample data

- [insertMediaTimeRange:intoTimeRange:](insertmediatimerange%28__into_%29.md): Inserts a reference to a media time range into a track.
