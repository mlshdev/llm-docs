> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressorextensionencoderptr](https://developer.apple.com/documentation/professional_video_applications/compressorextensionencoderptr)

# CompressorExtensionEncoderPtr (Swift)

**Framework:** Professional Video Applications  
**Kind:** Type Alias  
**Availability:** ProVideo Encoder Extensions 1.0+

The type alias to use for referencing the `CompressorExtensionEncoder` object.

## Declaration

```swift
typealias CompressorExtensionEncoderPtr = any NSObjectProtocol & CompressorExtensionEncoder
```

## See Also

### Encoding and Merging Segments

- [runTranscode(for:start:duration:toFile:startTimeCode:)](compressorextensionencoder/runtranscode%28for_start_duration_tofile_starttimecode_%29.md): Encodes the source media files to an output format based on the encoder settings.
- [mergeSegments(\_:andAudio:toFile:)](compressorextensionencoder/mergesegments%28__andaudio_tofile_%29.md): Merges multiple encoded video segments with an encoded audio segment.

# CompressorExtensionEncoderPtr (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Type Alias

The type alias to use for referencing the `CompressorExtensionEncoder` object.

## Declaration

```objectivec
typedef NSObject<CompressorExtensionEncoder> * CompressorExtensionEncoderPtr;
```

## See Also

### Encoding and Merging Segments

- [runTranscodeFor:start:duration:toFile:startTimeCode:](compressorextensionencoder/runtranscode%28for_start_duration_tofile_starttimecode_%29.md): Encodes the source media files to an output format based on the encoder settings.
- [mergeSegments:andAudio:toFile:](compressorextensionencoder/mergesegments%28__andaudio_tofile_%29.md): Merges multiple encoded video segments with an encoded audio segment.
