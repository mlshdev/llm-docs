> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinputpixelbufferadaptor](https://developer.apple.com/documentation/avfoundation/avassetwriterinputpixelbufferadaptor)

# AVAssetWriterInputPixelBufferAdaptor (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.1+ (deprecated in 27.0) · iPadOS 4.1+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object that appends video samples to an asset writer input.

> Use AVAssetWriter.inputPixelBufferReceiver(for:pixelBufferAttributes:) instead

## Declaration

```swift
class AVAssetWriterInputPixelBufferAdaptor
```

<a id="overview"></a>

## Overview

A pixel buffer adaptor provides a pixel buffer pool that you use to allocate pixel buffers to the output file. Using the provided pool for buffer allocation is typically more efficient than managing your own pool.

## Topics

### Creating an adaptor

- [init(assetWriterInput:sourcePixelBufferAttributes:)](avassetwriterinputpixelbufferadaptor/init%28assetwriterinput_sourcepixelbufferattributes_%29.md): Deprecated. Creates a new pixel buffer adaptor to receive pixel buffers for writing to the output file.

### Appending pixel buffers

- [append(\_:withPresentationTime:)](avassetwriterinputpixelbufferadaptor/append%28__withpresentationtime_%29.md): Deprecated. Appends a pixel buffer to the adaptor.

### Accessing the pool

- [pixelBufferPool](avassetwriterinputpixelbufferadaptor/pixelbufferpool.md): Deprecated. A pool of pixel buffers to append to the adaptor’s input.
- [sourcePixelBufferAttributes](avassetwriterinputpixelbufferadaptor/sourcepixelbufferattributes.md): Deprecated. The attributes of the pixel buffers that the pool contains.

### Inspecting a pixel buffer adaptor

- [assetWriterInput](avassetwriterinputpixelbufferadaptor/assetwriterinput.md): Deprecated. The asset writer input to which the adaptor appends pixel buffers.

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
- [AVAssetWriterInputTaggedPixelBufferGroupAdaptor](avassetwriterinputtaggedpixelbuffergroupadaptor.md): Deprecated. An object that appends tagged buffer groups to an asset writer input.
- [AVAssetWriterInputMetadataAdaptor](avassetwriterinputmetadataadaptor.md): Deprecated. An object that appends timed metadata groups to an asset writer input.
- [AVAssetWriterInputGroup](avassetwriterinputgroup.md): A group of inputs with tracks that are mutually exclusive to each other for playback or processing.

# AVAssetWriterInputPixelBufferAdaptor (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An object that appends video samples to an asset writer input.

## Declaration

```objectivec
@interface AVAssetWriterInputPixelBufferAdaptor : NSObject
```

<a id="overview"></a>

## Overview

A pixel buffer adaptor provides a pixel buffer pool that you use to allocate pixel buffers to the output file. Using the provided pool for buffer allocation is typically more efficient than managing your own pool.

## Topics

### Creating an adaptor

- [assetWriterInputPixelBufferAdaptorWithAssetWriterInput:sourcePixelBufferAttributes:](avassetwriterinputpixelbufferadaptor/assetwriterinputpixelbufferadaptorwithassetwriterinput_sourcepixelbufferattributes_.md): Returns a new pixel buffer adaptor that appends pixel buffers to write to the output file.
- [initWithAssetWriterInput:sourcePixelBufferAttributes:](avassetwriterinputpixelbufferadaptor/init%28assetwriterinput_sourcepixelbufferattributes_%29.md): Deprecated. Creates a new pixel buffer adaptor to receive pixel buffers for writing to the output file.

### Appending pixel buffers

- [appendPixelBuffer:withPresentationTime:](avassetwriterinputpixelbufferadaptor/append%28__withpresentationtime_%29.md): Deprecated. Appends a pixel buffer to the adaptor.

### Accessing the pool

- [pixelBufferPool](avassetwriterinputpixelbufferadaptor/pixelbufferpool.md): Deprecated. A pool of pixel buffers to append to the adaptor’s input.
- [sourcePixelBufferAttributes](avassetwriterinputpixelbufferadaptor/sourcepixelbufferattributes.md): Deprecated. The attributes of the pixel buffers that the pool contains.

### Inspecting a pixel buffer adaptor

- [assetWriterInput](avassetwriterinputpixelbufferadaptor/assetwriterinput.md): Deprecated. The asset writer input to which the adaptor appends pixel buffers.

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
- [AVAssetWriterInputTaggedPixelBufferGroupAdaptor](avassetwriterinputtaggedpixelbuffergroupadaptor.md): Deprecated. An object that appends tagged buffer groups to an asset writer input.
- [AVAssetWriterInputMetadataAdaptor](avassetwriterinputmetadataadaptor.md): Deprecated. An object that appends timed metadata groups to an asset writer input.
- [AVAssetWriterInputGroup](avassetwriterinputgroup.md): A group of inputs with tracks that are mutually exclusive to each other for playback or processing.
