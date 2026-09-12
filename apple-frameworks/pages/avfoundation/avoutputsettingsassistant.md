> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avoutputsettingsassistant](https://developer.apple.com/documentation/avfoundation/avoutputsettingsassistant)

# AVOutputSettingsAssistant (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An object that builds audio and video output settings dictionaries.

## Declaration

```swift
class AVOutputSettingsAssistant
```

<a id="overview"></a>

## Overview

Use an output settings assistant to create the audio and video settings that you use to configure instances of [AVAssetWriter](avassetwriter.md) and [AVAssetWriterInput](avassetwriterinput.md). You create an assistant with a specific preset configuration, such as [hevc3840x2160WithAlpha](avoutputsettingspreset/hevc3840x2160withalpha.md) or [preset1920x1080](avoutputsettingspreset/preset1920x1080.md). You can accept the settings dictionaries as is to generate a file that conforms to the criteria that the preset implies. You may also use the dictionaries it generates as a base configuration that you can customize as you require.

Providing the assistant additional details about your source media helps it generate more complete results. For example, setting a value for its [sourceVideoFormat](avoutputsettingsassistant/sourcevideoformat.md) property ensures that the assistant generates settings that don’t scale up video frames from a smaller size.

## Topics

### Creating an assistant

- [init(preset:)](avoutputsettingsassistant/init%28preset_%29.md): Creates an output setting assistant with a preset configuration.
- [AVOutputSettingsPreset](avoutputsettingspreset.md): A structure that defines preset configurations for an output settings assistant.
- [availableOutputSettingsPresets()](avoutputsettingsassistant/availableoutputsettingspresets%28%29.md): Returns an array of preset values to use to initialize an output settings assistant.

### Configuring output settings

- [outputFileType](avoutputsettingsassistant/outputfiletype.md): A uniform type identifier (UTI) that indicates the type of file to write.
- [audioSettings](avoutputsettingsassistant/audiosettings.md): An audio settings dictionary.
- [sourceAudioFormat](avoutputsettingsassistant/sourceaudioformat.md): The format of the source audio data.
- [videoSettings](avoutputsettingsassistant/videosettings.md): A video settings dictionary.
- [sourceVideoFormat](avoutputsettingsassistant/sourcevideoformat.md): The format of the source video data.
- [sourceVideoMinFrameDuration](avoutputsettingsassistant/sourcevideominframeduration.md): A time value that describes the minimum frame duration of the video data.
- [sourceVideoAverageFrameDuration](avoutputsettingsassistant/sourcevideoaverageframeduration.md): A time value that describes the average frame duration of the video data.

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
- [AVAssetWriter](avassetwriter.md): An object that writes media data to a container file.
- [AVAssetWriterInput](avassetwriterinput.md): An object that appends media samples to a track in an asset writer’s output file.
- [AVAssetWriterInputPixelBufferAdaptor](avassetwriterinputpixelbufferadaptor.md): Deprecated. An object that appends video samples to an asset writer input.
- [AVAssetWriterInputTaggedPixelBufferGroupAdaptor](avassetwriterinputtaggedpixelbuffergroupadaptor.md): Deprecated. An object that appends tagged buffer groups to an asset writer input.
- [AVAssetWriterInputMetadataAdaptor](avassetwriterinputmetadataadaptor.md): Deprecated. An object that appends timed metadata groups to an asset writer input.
- [AVAssetWriterInputGroup](avassetwriterinputgroup.md): A group of inputs with tracks that are mutually exclusive to each other for playback or processing.

# AVOutputSettingsAssistant (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An object that builds audio and video output settings dictionaries.

## Declaration

```objectivec
@interface AVOutputSettingsAssistant : NSObject
```

<a id="overview"></a>

## Overview

Use an output settings assistant to create the audio and video settings that you use to configure instances of [AVAssetWriter](avassetwriter.md) and [AVAssetWriterInput](avassetwriterinput.md). You create an assistant with a specific preset configuration, such as [AVOutputSettingsPresetHEVC3840x2160WithAlpha](avoutputsettingspreset/hevc3840x2160withalpha.md) or [AVOutputSettingsPreset1920x1080](avoutputsettingspreset/preset1920x1080.md). You can accept the settings dictionaries as is to generate a file that conforms to the criteria that the preset implies. You may also use the dictionaries it generates as a base configuration that you can customize as you require.

Providing the assistant additional details about your source media helps it generate more complete results. For example, setting a value for its [sourceVideoFormat](avoutputsettingsassistant/sourcevideoformat.md) property ensures that the assistant generates settings that don’t scale up video frames from a smaller size.

## Topics

### Creating an assistant

- [outputSettingsAssistantWithPreset:](avoutputsettingsassistant/init%28preset_%29.md): Creates an output setting assistant with a preset configuration.
- [AVOutputSettingsPreset](avoutputsettingspreset.md): A structure that defines preset configurations for an output settings assistant.
- [availableOutputSettingsPresets](avoutputsettingsassistant/availableoutputsettingspresets%28%29.md): Returns an array of preset values to use to initialize an output settings assistant.

### Configuring output settings

- [outputFileType](avoutputsettingsassistant/outputfiletype.md): A uniform type identifier (UTI) that indicates the type of file to write.
- [audioSettings](avoutputsettingsassistant/audiosettings.md): An audio settings dictionary.
- [sourceAudioFormat](avoutputsettingsassistant/sourceaudioformat.md): The format of the source audio data.
- [videoSettings](avoutputsettingsassistant/videosettings.md): A video settings dictionary.
- [sourceVideoFormat](avoutputsettingsassistant/sourcevideoformat.md): The format of the source video data.
- [sourceVideoMinFrameDuration](avoutputsettingsassistant/sourcevideominframeduration.md): A time value that describes the minimum frame duration of the video data.
- [sourceVideoAverageFrameDuration](avoutputsettingsassistant/sourcevideoaverageframeduration.md): A time value that describes the average frame duration of the video data.

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
- [AVAssetWriter](avassetwriter.md): An object that writes media data to a container file.
- [AVAssetWriterInput](avassetwriterinput.md): An object that appends media samples to a track in an asset writer’s output file.
- [AVAssetWriterInputPixelBufferAdaptor](avassetwriterinputpixelbufferadaptor.md): Deprecated. An object that appends video samples to an asset writer input.
- [AVAssetWriterInputTaggedPixelBufferGroupAdaptor](avassetwriterinputtaggedpixelbuffergroupadaptor.md): Deprecated. An object that appends tagged buffer groups to an asset writer input.
- [AVAssetWriterInputMetadataAdaptor](avassetwriterinputmetadataadaptor.md): Deprecated. An object that appends timed metadata groups to an asset writer input.
- [AVAssetWriterInputGroup](avassetwriterinputgroup.md): A group of inputs with tracks that are mutually exclusive to each other for playback or processing.
