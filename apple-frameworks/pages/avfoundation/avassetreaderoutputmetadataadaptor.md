> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreaderoutputmetadataadaptor](https://developer.apple.com/documentation/avfoundation/avassetreaderoutputmetadataadaptor)

# AVAssetReaderOutputMetadataAdaptor (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object that creates timed metadata group objects for an asset track.

> Use AVAssetReader.outputMetadataProvider(for:) instead

## Declaration

```swift
class AVAssetReaderOutputMetadataAdaptor
```

## Topics

### Creating a metadata adaptor

- [init(assetReaderTrackOutput:)](avassetreaderoutputmetadataadaptor/init%28assetreadertrackoutput_%29.md): Deprecated. Creates an object that reads timed metadata groups from an asset reader output.

### Retrieving timed metadata groups

- [nextTimedMetadataGroup()](avassetreaderoutputmetadataadaptor/nexttimedmetadatagroup%28%29.md): Deprecated. Returns the next timed metadata group for the asset reader output.

### Inspecting the track output

- [assetReaderTrackOutput](avassetreaderoutputmetadataadaptor/assetreadertrackoutput.md): Deprecated. The asset reader track output that provides the timed metadata groups.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Media reading

- [Reading multiview 3D video files](reading-multiview-3d-video-files.md): Render single images for the left eye and right eye from a multiview High Efficiency Video Coding format file by reading individual video frames.
- [AVAssetReader](avassetreader.md): An object that reads media data from an asset.
- [AVAssetReaderOutput](avassetreaderoutput.md): An abstract class that defines the interface to read media samples from an asset reader.
- [AVAssetReaderTrackOutput](avassetreadertrackoutput.md): An object that reads media data from a single track of an asset.
- [AVAssetReaderAudioMixOutput](avassetreaderaudiomixoutput.md): An object that reads audio samples that result from mixing audio from one or more tracks.
- [AVAssetReaderVideoCompositionOutput](avassetreadervideocompositionoutput.md): An object that reads composited video frames from one or more tracks of an asset.
- [AVAssetReaderSampleReferenceOutput](avassetreadersamplereferenceoutput.md): An object that reads sample references from an asset track.

# AVAssetReaderOutputMetadataAdaptor (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that creates timed metadata group objects for an asset track.

## Declaration

```objectivec
@interface AVAssetReaderOutputMetadataAdaptor : NSObject
```

## Topics

### Creating a metadata adaptor

- [assetReaderOutputMetadataAdaptorWithAssetReaderTrackOutput:](avassetreaderoutputmetadataadaptor/assetreaderoutputmetadataadaptorwithassetreadertrackoutput_.md): Returns a new object that reads timed metadata groups from an asset reader output.
- [initWithAssetReaderTrackOutput:](avassetreaderoutputmetadataadaptor/init%28assetreadertrackoutput_%29.md): Deprecated. Creates an object that reads timed metadata groups from an asset reader output.

### Retrieving timed metadata groups

- [nextTimedMetadataGroup](avassetreaderoutputmetadataadaptor/nexttimedmetadatagroup%28%29.md): Deprecated. Returns the next timed metadata group for the asset reader output.

### Inspecting the track output

- [assetReaderTrackOutput](avassetreaderoutputmetadataadaptor/assetreadertrackoutput.md): Deprecated. The asset reader track output that provides the timed metadata groups.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Media reading

- [Reading multiview 3D video files](reading-multiview-3d-video-files.md): Render single images for the left eye and right eye from a multiview High Efficiency Video Coding format file by reading individual video frames.
- [AVAssetReader](avassetreader.md): An object that reads media data from an asset.
- [AVAssetReaderOutput](avassetreaderoutput.md): An abstract class that defines the interface to read media samples from an asset reader.
- [AVAssetReaderTrackOutput](avassetreadertrackoutput.md): An object that reads media data from a single track of an asset.
- [AVAssetReaderAudioMixOutput](avassetreaderaudiomixoutput.md): An object that reads audio samples that result from mixing audio from one or more tracks.
- [AVAssetReaderVideoCompositionOutput](avassetreadervideocompositionoutput.md): An object that reads composited video frames from one or more tracks of an asset.
- [AVAssetReaderSampleReferenceOutput](avassetreadersamplereferenceoutput.md): An object that reads sample references from an asset track.
