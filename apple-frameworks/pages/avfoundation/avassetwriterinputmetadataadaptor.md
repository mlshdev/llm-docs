> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinputmetadataadaptor](https://developer.apple.com/documentation/avfoundation/avassetwriterinputmetadataadaptor)

# AVAssetWriterInputMetadataAdaptor (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object that appends timed metadata groups to an asset writer input.

> Use AVAssetWriter.inputMetadataReceiver(for:) instead

## Declaration

```swift
class AVAssetWriterInputMetadataAdaptor
```

<a id="overview"></a>

## Overview

Use a metadata adaptor to append track-level metadata, packaged as instances of [AVTimedMetadataGroup](avtimedmetadatagroup.md), to an asset writer input.

## Topics

### Creating an input metadata adaptor

- [init(assetWriterInput:)](avassetwriterinputmetadataadaptor/init%28assetwriterinput_%29.md): Deprecated. Creates a metadata group adaptor to append timed metadata groups to write to an output file.

### Appending timed metadata

- [append(\_:)](avassetwriterinputmetadataadaptor/append%28__%29.md): Deprecated. Appends a timed metadata group to the adaptor.

### Accessing the input

- [assetWriterInput](avassetwriterinputmetadataadaptor/assetwriterinput.md): Deprecated. The input for the metadata adaptor.

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

### Media writing

- [Converting projected video to Apple Projected Media Profile](converting-projected-video-to-apple-projected-media-profile.md): Convert content with equirectangular or half-equirectangular projection to APMP.
- [Converting side-by-side 3D video to multiview HEVC and spatial video](converting-side-by-side-3d-video-to-multiview-hevc-and-spatial-video.md): Create video content for visionOS by converting an existing 3D HEVC file to a multiview HEVC format, optionally adding spatial metadata to create a spatial video.
- [Adding a display mask rectangle metadata track to a movie file](adding-a-display-mask-rectangle-metadata-track-to-a-movie-file.md): Show a specific area of a video by using timed display mask rectangle metadata.
- [Writing fragmented MPEG-4 files for HTTP Live Streaming](writing-fragmented-mpeg-4-files-for-http-live-streaming.md): Create an HTTP Live Streaming presentation by turning a movie file into a sequence of fragmented MPEG-4 files.
- [Creating spatial photos and videos with spatial metadata](../imageio/creating-spatial-photos-and-videos-with-spatial-metadata.md): Add spatial metadata to stereo photos and videos to create spatial media for viewing on Apple Vision Pro.
- [Tagging media with video color information](tagging-media-with-video-color-information.md): Inspect and set video color space information when writing and transcoding media.
- [Evaluating an app’s video color](evaluating-an-app-s-video-color.md): Check color reproduction for a video in your app by using test patterns, video test equipment, and light-measurement instruments.
- [AVOutputSettingsAssistant](avoutputsettingsassistant.md): An object that builds audio and video output settings dictionaries.
- [AVAssetWriter](avassetwriter.md): An object that writes media data to a container file.
- [AVAssetWriterInput](avassetwriterinput.md): An object that appends media samples to a track in an asset writer’s output file.
- [AVAssetWriterInputPixelBufferAdaptor](avassetwriterinputpixelbufferadaptor.md): Deprecated. An object that appends video samples to an asset writer input.
- [AVAssetWriterInputTaggedPixelBufferGroupAdaptor](avassetwriterinputtaggedpixelbuffergroupadaptor.md): Deprecated. An object that appends tagged buffer groups to an asset writer input.
- [AVAssetWriterInputGroup](avassetwriterinputgroup.md): A group of inputs with tracks that are mutually exclusive to each other for playback or processing.

# AVAssetWriterInputMetadataAdaptor (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that appends timed metadata groups to an asset writer input.

## Declaration

```objectivec
@interface AVAssetWriterInputMetadataAdaptor : NSObject
```

<a id="overview"></a>

## Overview

Use a metadata adaptor to append track-level metadata, packaged as instances of [AVTimedMetadataGroup](avtimedmetadatagroup.md), to an asset writer input.

## Topics

### Creating an input metadata adaptor

- [assetWriterInputMetadataAdaptorWithAssetWriterInput:](avassetwriterinputmetadataadaptor/assetwriterinputmetadataadaptorwithassetwriterinput_.md): Returns a new metadata adaptor to append timed metadata groups to write to an output file.
- [initWithAssetWriterInput:](avassetwriterinputmetadataadaptor/init%28assetwriterinput_%29.md): Deprecated. Creates a metadata group adaptor to append timed metadata groups to write to an output file.

### Appending timed metadata

- [appendTimedMetadataGroup:](avassetwriterinputmetadataadaptor/append%28__%29.md): Deprecated. Appends a timed metadata group to the adaptor.

### Accessing the input

- [assetWriterInput](avassetwriterinputmetadataadaptor/assetwriterinput.md): Deprecated. The input for the metadata adaptor.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Media writing

- [Converting projected video to Apple Projected Media Profile](converting-projected-video-to-apple-projected-media-profile.md): Convert content with equirectangular or half-equirectangular projection to APMP.
- [Converting side-by-side 3D video to multiview HEVC and spatial video](converting-side-by-side-3d-video-to-multiview-hevc-and-spatial-video.md): Create video content for visionOS by converting an existing 3D HEVC file to a multiview HEVC format, optionally adding spatial metadata to create a spatial video.
- [Adding a display mask rectangle metadata track to a movie file](adding-a-display-mask-rectangle-metadata-track-to-a-movie-file.md): Show a specific area of a video by using timed display mask rectangle metadata.
- [Writing fragmented MPEG-4 files for HTTP Live Streaming](writing-fragmented-mpeg-4-files-for-http-live-streaming.md): Create an HTTP Live Streaming presentation by turning a movie file into a sequence of fragmented MPEG-4 files.
- [Creating spatial photos and videos with spatial metadata](../imageio/creating-spatial-photos-and-videos-with-spatial-metadata.md): Add spatial metadata to stereo photos and videos to create spatial media for viewing on Apple Vision Pro.
- [Tagging media with video color information](tagging-media-with-video-color-information.md): Inspect and set video color space information when writing and transcoding media.
- [Evaluating an app’s video color](evaluating-an-app-s-video-color.md): Check color reproduction for a video in your app by using test patterns, video test equipment, and light-measurement instruments.
- [AVOutputSettingsAssistant](avoutputsettingsassistant.md): An object that builds audio and video output settings dictionaries.
- [AVAssetWriter](avassetwriter.md): An object that writes media data to a container file.
- [AVAssetWriterInput](avassetwriterinput.md): An object that appends media samples to a track in an asset writer’s output file.
- [AVAssetWriterInputPixelBufferAdaptor](avassetwriterinputpixelbufferadaptor.md): Deprecated. An object that appends video samples to an asset writer input.
- [AVAssetWriterInputTaggedPixelBufferGroupAdaptor](avassetwriterinputtaggedpixelbuffergroupadaptor.md): Deprecated. An object that appends tagged buffer groups to an asset writer input.
- [AVAssetWriterInputGroup](avassetwriterinputgroup.md): A group of inputs with tracks that are mutually exclusive to each other for playback or processing.
