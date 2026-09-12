> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressorextensionencoder/mergesegments(_:andaudio:tofile:)](https://developer.apple.com/documentation/professional_video_applications/compressorextensionencoder/mergesegments(_:andaudio:tofile:))

# mergeSegments(\_:andAudio:toFile:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Encoder Extensions 1.0+

Merges multiple encoded video segments with an encoded audio segment.

## Declaration

```swift
func mergeSegments(_ videoSegments: [Any]!, andAudio audioSegment: URL!, toFile file: URL!)
```

## Parameters

- `videoSegments`: An array of encoded video segment URLs.
- `audioSegment`: An encoded audio segment URL.
- `file`: The destination file URL at which to place the merged segments.

<a id="discussion"></a>

## Discussion

During a distributed encoding process, the encoder extension processes audio and video segments separately on the available encoder instances. Once the encoding job completes, the Compressor app invokes [mergeSegments(\_:andAudio:toFile:)](mergesegments%28__andaudio_tofile_%29.md): on one of the encoder instances with an audio segment URL, a list of video segment URLs, and the desired output file URL. Implement this method to merge multiple encoded video segments in order, with a complete audio segment, into a single output file.

Install an encoder extension on each node of the cluster that is participating in the encoding process.

## See Also

### Encoding and Merging Segments

- [runTranscode(for:start:duration:toFile:startTimeCode:)](runtranscode%28for_start_duration_tofile_starttimecode_%29.md): Encodes the source media files to an output format based on the encoder settings.
- [CompressorExtensionEncoderPtr](../compressorextensionencoderptr.md): The type alias to use for referencing the `CompressorExtensionEncoder` object.

# mergeSegments:andAudio:toFile: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Merges multiple encoded video segments with an encoded audio segment.

## Declaration

```objectivec
- (void) mergeSegments:(NSArray *) videoSegments andAudio:(NSURL *) audioSegment toFile:(NSURL *) file;
```

## Parameters

- `videoSegments`: An array of encoded video segment URLs.
- `audioSegment`: An encoded audio segment URL.
- `file`: The destination file URL at which to place the merged segments.

<a id="discussion"></a>

## Discussion

During a distributed encoding process, the encoder extension processes audio and video segments separately on the available encoder instances. Once the encoding job completes, the Compressor app invokes [mergeSegments:andAudio:toFile:](mergesegments%28__andaudio_tofile_%29.md): on one of the encoder instances with an audio segment URL, a list of video segment URLs, and the desired output file URL. Implement this method to merge multiple encoded video segments in order, with a complete audio segment, into a single output file.

Install an encoder extension on each node of the cluster that is participating in the encoding process.

## See Also

### Encoding and Merging Segments

- [runTranscodeFor:start:duration:toFile:startTimeCode:](runtranscode%28for_start_duration_tofile_starttimecode_%29.md): Encodes the source media files to an output format based on the encoder settings.
- [CompressorExtensionEncoderPtr](../compressorextensionencoderptr.md): The type alias to use for referencing the `CompressorExtensionEncoder` object.
