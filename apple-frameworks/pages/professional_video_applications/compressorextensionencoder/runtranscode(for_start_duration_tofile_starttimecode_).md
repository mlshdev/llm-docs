> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressorextensionencoder/runtranscode(for:start:duration:tofile:starttimecode:)](https://developer.apple.com/documentation/professional_video_applications/compressorextensionencoder/runtranscode(for:start:duration:tofile:starttimecode:))

# runTranscode(for:start:duration:toFile:startTimeCode:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Encoder Extensions 1.0+

Encodes the source media files to an output format based on the encoder settings.

## Declaration

```swift
func runTranscode(for decoder: CompressorMediaDecoderPtr!, start startFrame: Int64, duration numFrames: Int64, toFile file: URL!, startTimeCode timeCodeDictionary: [AnyHashable : Any]!)
```

## Parameters

- `decoder`: A pointer to the decoder interface object.
- `startFrame`: The frame at which to start encoding.
- `numFrames`: The number of frames to encode.
- `file`: The destination file URL to put the encoded file into.
- `timeCodeDictionary`: A dictionary that contains timecode information about the source media. This dictionary has the following keys:

  - **`hours`, `minutes`, `seconds`, `frames`**: Integer
  - **`frameRate`**: Double
  - **`isDrop`**: Bool
  - **`reelName`**: NSString

<a id="discussion"></a>

## Discussion

The Compressor app invokes this method to run an encoding job. Implement this method to transcode media files from the source format into an output format your extension supports. Inside the implementation, call the decoder interface methods to get individual video frames and audio samples to encode.

## See Also

### Encoding and Merging Segments

- [mergeSegments(\_:andAudio:toFile:)](mergesegments%28__andaudio_tofile_%29.md): Merges multiple encoded video segments with an encoded audio segment.
- [CompressorExtensionEncoderPtr](../compressorextensionencoderptr.md): The type alias to use for referencing the `CompressorExtensionEncoder` object.

# runTranscodeFor:start:duration:toFile:startTimeCode: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Encodes the source media files to an output format based on the encoder settings.

## Declaration

```objectivec
- (void) runTranscodeFor:(CompressorMediaDecoderPtr) decoder start:(int64_t) startFrame duration:(int64_t) numFrames toFile:(NSURL *) file startTimeCode:(NSDictionary *) timeCodeDictionary;
```

## Parameters

- `decoder`: A pointer to the decoder interface object.
- `startFrame`: The frame at which to start encoding.
- `numFrames`: The number of frames to encode.
- `file`: The destination file URL to put the encoded file into.
- `timeCodeDictionary`: A dictionary that contains timecode information about the source media. This dictionary has the following keys:

  - **`hours`, `minutes`, `seconds`, `frames`**: Integer
  - **`frameRate`**: Double
  - **`isDrop`**: Bool
  - **`reelName`**: NSString

<a id="discussion"></a>

## Discussion

The Compressor app invokes this method to run an encoding job. Implement this method to transcode media files from the source format into an output format your extension supports. Inside the implementation, call the decoder interface methods to get individual video frames and audio samples to encode.

## See Also

### Encoding and Merging Segments

- [mergeSegments:andAudio:toFile:](mergesegments%28__andaudio_tofile_%29.md): Merges multiple encoded video segments with an encoded audio segment.
- [CompressorExtensionEncoderPtr](../compressorextensionencoderptr.md): The type alias to use for referencing the `CompressorExtensionEncoder` object.
