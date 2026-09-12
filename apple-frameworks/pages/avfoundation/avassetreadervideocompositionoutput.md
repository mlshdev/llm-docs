> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreadervideocompositionoutput](https://developer.apple.com/documentation/avfoundation/avassetreadervideocompositionoutput)

# AVAssetReaderVideoCompositionOutput (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An object that reads composited video frames from one or more tracks of an asset.

## Declaration

```swift
class AVAssetReaderVideoCompositionOutput
```

## Topics

### Creating a video composition output

- [init(videoTracks:videoSettings:)](avassetreadervideocompositionoutput/init%28videotracks_videosettings_%29.md): Creates an object that reads composited video frames from the specified video tracks.

### Configuring video settings

- [videoComposition](avassetreadervideocompositionoutput/videocomposition.md): The video composition to use for the output.
- [customVideoCompositor](avassetreadervideocompositionoutput/customvideocompositor.md): A custom video compositor for the output.

### Inspecting an output

- [videoTracks](avassetreadervideocompositionoutput/videotracks.md): The tracks from which the output reads the composited video.
- [videoSettings](avassetreadervideocompositionoutput/videosettings.md): The video settings that the output uses.

## Relationships

### Inherits From

- [AVAssetReaderOutput](avassetreaderoutput.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Media reading

- [Reading multiview 3D video files](reading-multiview-3d-video-files.md): Render single images for the left eye and right eye from a multiview High Efficiency Video Coding format file by reading individual video frames.
- [AVAssetReader](avassetreader.md): An object that reads media data from an asset.
- [AVAssetReaderOutput](avassetreaderoutput.md): An abstract class that defines the interface to read media samples from an asset reader.
- [AVAssetReaderTrackOutput](avassetreadertrackoutput.md): An object that reads media data from a single track of an asset.
- [AVAssetReaderAudioMixOutput](avassetreaderaudiomixoutput.md): An object that reads audio samples that result from mixing audio from one or more tracks.
- [AVAssetReaderSampleReferenceOutput](avassetreadersamplereferenceoutput.md): An object that reads sample references from an asset track.
- [AVAssetReaderOutputMetadataAdaptor](avassetreaderoutputmetadataadaptor.md): Deprecated. An object that creates timed metadata group objects for an asset track.

# AVAssetReaderVideoCompositionOutput (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An object that reads composited video frames from one or more tracks of an asset.

## Declaration

```objectivec
@interface AVAssetReaderVideoCompositionOutput : AVAssetReaderOutput
```

## Topics

### Creating a video composition output

- [assetReaderVideoCompositionOutputWithVideoTracks:videoSettings:](avassetreadervideocompositionoutput/assetreadervideocompositionoutputwithvideotracks_videosettings_.md): Returns a new object that reads composited video from the specified video tracks.
- [initWithVideoTracks:videoSettings:](avassetreadervideocompositionoutput/init%28videotracks_videosettings_%29.md): Creates an object that reads composited video frames from the specified video tracks.

### Configuring video settings

- [videoComposition](avassetreadervideocompositionoutput/videocomposition.md): The video composition to use for the output.
- [customVideoCompositor](avassetreadervideocompositionoutput/customvideocompositor.md): A custom video compositor for the output.

### Inspecting an output

- [videoTracks](avassetreadervideocompositionoutput/videotracks.md): The tracks from which the output reads the composited video.
- [videoSettings](avassetreadervideocompositionoutput/videosettings.md): The video settings that the output uses.

## Relationships

### Inherits From

- [AVAssetReaderOutput](avassetreaderoutput.md)

## See Also

### Media reading

- [Reading multiview 3D video files](reading-multiview-3d-video-files.md): Render single images for the left eye and right eye from a multiview High Efficiency Video Coding format file by reading individual video frames.
- [AVAssetReader](avassetreader.md): An object that reads media data from an asset.
- [AVAssetReaderOutput](avassetreaderoutput.md): An abstract class that defines the interface to read media samples from an asset reader.
- [AVAssetReaderTrackOutput](avassetreadertrackoutput.md): An object that reads media data from a single track of an asset.
- [AVAssetReaderAudioMixOutput](avassetreaderaudiomixoutput.md): An object that reads audio samples that result from mixing audio from one or more tracks.
- [AVAssetReaderSampleReferenceOutput](avassetreadersamplereferenceoutput.md): An object that reads sample references from an asset track.
- [AVAssetReaderOutputMetadataAdaptor](avassetreaderoutputmetadataadaptor.md): Deprecated. An object that creates timed metadata group objects for an asset track.
