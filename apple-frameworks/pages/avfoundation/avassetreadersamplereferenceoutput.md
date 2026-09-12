> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreadersamplereferenceoutput](https://developer.apple.com/documentation/avfoundation/avassetreadersamplereferenceoutput)

# AVAssetReaderSampleReferenceOutput (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that reads sample references from an asset track.

## Declaration

```swift
class AVAssetReaderSampleReferenceOutput
```

<a id="overview"></a>

## Overview

Apps can extract information about the location of samples in a track — the file URL and offset — by adding an instance of this class to an asset reader. Read the [kCMSampleBufferAttachmentKey_SampleReferenceURL](../coremedia/kcmsamplebufferattachmentkey_samplereferenceurl.md) and [kCMSampleBufferAttachmentKey_SampleReferenceByteOffset](../coremedia/kcmsamplebufferattachmentkey_samplereferencebyteoffset.md) attachments on the extracted sample buffers to get the location of the sample data.

You can also append sample buffers that you extract using this class to an [AVAssetWriterInput](avassetwriterinput.md) instance to create movie tracks that aren’t self-contained and reference data in the original file instead. To write tracks that aren’t self-contained, use instances of [AVAssetWriter](avassetwriter.md) that you configure to write files of type [mov](avfiletype/mov.md).

Because this output doesn’t return sample data, it ignores the value of the [alwaysCopiesSampleData](avassetreaderoutput/alwayscopiessampledata.md) property.

## Topics

### Creating a sample reference output

- [init(track:)](avassetreadersamplereferenceoutput/init%28track_%29.md): Creates an object that supplies sample references.

### Inspecting the track

- [track](avassetreadersamplereferenceoutput/track.md): The track from which the output reads sample references.

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
- [AVAssetReaderVideoCompositionOutput](avassetreadervideocompositionoutput.md): An object that reads composited video frames from one or more tracks of an asset.
- [AVAssetReaderOutputMetadataAdaptor](avassetreaderoutputmetadataadaptor.md): Deprecated. An object that creates timed metadata group objects for an asset track.

# AVAssetReaderSampleReferenceOutput (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that reads sample references from an asset track.

## Declaration

```objectivec
@interface AVAssetReaderSampleReferenceOutput : AVAssetReaderOutput
```

<a id="overview"></a>

## Overview

Apps can extract information about the location of samples in a track — the file URL and offset — by adding an instance of this class to an asset reader. Read the [kCMSampleBufferAttachmentKey_SampleReferenceURL](../coremedia/kcmsamplebufferattachmentkey_samplereferenceurl.md) and [kCMSampleBufferAttachmentKey_SampleReferenceByteOffset](../coremedia/kcmsamplebufferattachmentkey_samplereferencebyteoffset.md) attachments on the extracted sample buffers to get the location of the sample data.

You can also append sample buffers that you extract using this class to an [AVAssetWriterInput](avassetwriterinput.md) instance to create movie tracks that aren’t self-contained and reference data in the original file instead. To write tracks that aren’t self-contained, use instances of [AVAssetWriter](avassetwriter.md) that you configure to write files of type [AVFileTypeQuickTimeMovie](avfiletype/mov.md).

Because this output doesn’t return sample data, it ignores the value of the [alwaysCopiesSampleData](avassetreaderoutput/alwayscopiessampledata.md) property.

## Topics

### Creating a sample reference output

- [assetReaderSampleReferenceOutputWithTrack:](avassetreadersamplereferenceoutput/assetreadersamplereferenceoutputwithtrack_.md): Returns a new object that supplies sample references.
- [initWithTrack:](avassetreadersamplereferenceoutput/init%28track_%29.md): Creates an object that supplies sample references.

### Inspecting the track

- [track](avassetreadersamplereferenceoutput/track.md): The track from which the output reads sample references.

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
- [AVAssetReaderVideoCompositionOutput](avassetreadervideocompositionoutput.md): An object that reads composited video frames from one or more tracks of an asset.
- [AVAssetReaderOutputMetadataAdaptor](avassetreaderoutputmetadataadaptor.md): Deprecated. An object that creates timed metadata group objects for an asset track.
