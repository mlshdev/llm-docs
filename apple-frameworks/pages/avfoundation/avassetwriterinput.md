> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput](https://developer.apple.com/documentation/avfoundation/avassetwriterinput)

# AVAssetWriterInput (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An object that appends media samples to a track in an asset writer’s output file.

## Declaration

```swift
class AVAssetWriterInput
```

## Mentioned In

- [Tagging media with video color information](tagging-media-with-video-color-information.md)

<a id="overview"></a>

## Overview

Create an asset writer input to write a single track of media, and optional track-level metadata, to the output file. To write multiple concurrent tracks with ideal interleaving of media data, observe the value of the [isReadyForMoreMediaData](avassetwriterinput/isreadyformoremediadata.md) property of each input.

You can use an asset writer input to create tracks in a QuickTime movie file that aren’t self-contained, and instead reference sample data that exists in another file.

## Topics

### Creating an input

- [init(mediaType:outputSettings:)](avassetwriterinput/init%28mediatype_outputsettings_%29.md): Creates an input to append sample buffers of the specified type to the output file.
- [init(mediaType:outputSettings:sourceFormatHint:)](avassetwriterinput/init%28mediatype_outputsettings_sourceformathint_%29.md): Creates an input that appends sample buffers of the specified type and format hint to the output file.

### Configuring presentation

- [naturalSize](avassetwriterinput/naturalsize.md): The natural display dimensions of the output’s visual media.
- [transform](avassetwriterinput/transform.md): The transform to use for display of the output’s visual media.
- [preferredVolume](avassetwriterinput/preferredvolume.md): The volume to prefer for playback of the output’s audio data.
- [mediaTimeScale](avassetwriterinput/mediatimescale.md): The time scale of the track in the output file.
- [marksOutputTrackAsEnabled](avassetwriterinput/marksoutputtrackasenabled.md): A Boolean value that indicates whether to enable a track in the output for playback and processing.

### Configuring language support

- [languageCode](avassetwriterinput/languagecode.md): The language code of the input’s track.
- [extendedLanguageTag](avassetwriterinput/extendedlanguagetag.md): The extended language for the input’s track.

### Configuring metadata

- [metadata](avassetwriterinput/metadata.md): The track-level metadata to write to the output.

### Configuring media data layout

- [preferredMediaChunkAlignment](avassetwriterinput/preferredmediachunkalignment.md): The boundary, in bytes, for aligning media chunks.
- [preferredMediaChunkDuration](avassetwriterinput/preferredmediachunkduration.md): The duration to use for each chunk of sample data in the output file.
- [sampleReferenceBaseURL](avassetwriterinput/samplereferencebaseurl.md): The base URL sample references are relative to.
- [mediaDataLocation](avassetwriterinput/mediadatalocation-swift.property.md): Specifies how the input lays out and interleaves media data.
- [AVAssetWriterInput.MediaDataLocation](avassetwriterinput/mediadatalocation-swift.struct.md): A structure that indicates how to lay out and interleave media data.

### Configuring track associations

- [canAddTrackAssociation(withTrackOf:type:)](avassetwriterinput/canaddtrackassociation%28withtrackof_type_%29.md): Determines whether it’s valid to associate another input’s track with this input’s track.
- [addTrackAssociation(withTrackOf:type:)](avassetwriterinput/addtrackassociation%28withtrackof_type_%29.md): Adds an association between input tracks.

### Appending media samples

- [expectsMediaDataInRealTime](avassetwriterinput/expectsmediadatainrealtime.md): Deprecated. A Boolean value that indicates whether the input tailors its processing for real-time sources.
- [isReadyForMoreMediaData](avassetwriterinput/isreadyformoremediadata.md): Deprecated. A Boolean value that indicates whether the input is ready to accept media data.
- [requestMediaDataWhenReady(on:using:)](avassetwriterinput/requestmediadatawhenready%28on_using_%29.md): Deprecated. Tells the input to request media data, at its convenience, to write to the output file.
- [append(\_:)](avassetwriterinput/append%28__%29.md): Deprecated. Appends a sample buffer to an input to write to the output file.
- [markAsFinished()](avassetwriterinput/markasfinished%28%29.md): Marks the input as finished to indicate that you’re done appending samples to it.
- [AVAssetWriterInput.SampleBufferReceiver](avassetwriterinput/samplebufferreceiver.md): Provides an interface for writing sample buffers to an input.
- [AVAssetWriterInput.PixelBufferReceiver](avassetwriterinput/pixelbufferreceiver.md): Provides an interface for writing pixel buffers to an input.
- [AVAssetWriterInput.TaggedPixelBufferGroupReceiver](avassetwriterinput/taggedpixelbuffergroupreceiver.md): Provides an interface for writing tagged pixel buffers to an input.
- [AVAssetWriterInput.MetadataReceiver](avassetwriterinput/metadatareceiver.md): Provides an interface for writing timed metadata groups to an input.
- [AVAssetWriterInput.CaptionReceiver](avassetwriterinput/captionreceiver.md): Provides an interface for writing caption data to an input.

### Performing multiple-pass encoding

- [canPerformMultiplePasses](avassetwriterinput/canperformmultiplepasses.md): A Boolean value that indicates whether the input may perform multiple passes over appended media data.
- [currentPassDescription](avassetwriterinput/currentpassdescription.md): An object that describes the requirements for the current pass.
- [AVAssetWriterInputPassDescription](avassetwriterinputpassdescription.md): An object that defines the interface to query for the requirements of the current pass.
- [markCurrentPassAsFinished()](avassetwriterinput/markcurrentpassasfinished%28%29.md): Tells the input to analyze the appended media to determine whether it can improve the results by reencoding certain segments.
- [performsMultiPassEncodingIfSupported](avassetwriterinput/performsmultipassencodingifsupported.md): A Boolean value that indicates whether the input attempts to encode the source media data using multiple passes.
- [respondToEachPassDescription(on:using:)](avassetwriterinput/respondtoeachpassdescription%28on_using_%29.md): Tells the input to invoke a callback whenever it begins a new pass.
- [AVAssetWriterInput.MultiPassController](avassetwriterinput/multipasscontroller.md): Provides an interface to receive an async sequence of pass descriptions for the writer input receiver, if multi-pass is supported.

### Inspecting an input

- [mediaType](avassetwriterinput/mediatype.md): The media type of the samples that the input accepts.
- [outputSettings](avassetwriterinput/outputsettings.md): The settings to use for encoding media data you append to the output.
- [sourceFormatHint](avassetwriterinput/sourceformathint.md): A hint about the format of the sample buffers to append to the input.

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
- [AVAssetWriterInputPixelBufferAdaptor](avassetwriterinputpixelbufferadaptor.md): Deprecated. An object that appends video samples to an asset writer input.
- [AVAssetWriterInputTaggedPixelBufferGroupAdaptor](avassetwriterinputtaggedpixelbuffergroupadaptor.md): Deprecated. An object that appends tagged buffer groups to an asset writer input.
- [AVAssetWriterInputMetadataAdaptor](avassetwriterinputmetadataadaptor.md): Deprecated. An object that appends timed metadata groups to an asset writer input.
- [AVAssetWriterInputGroup](avassetwriterinputgroup.md): A group of inputs with tracks that are mutually exclusive to each other for playback or processing.

# AVAssetWriterInput (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An object that appends media samples to a track in an asset writer’s output file.

## Declaration

```objectivec
@interface AVAssetWriterInput : NSObject
```

## Mentioned In

- [Tagging media with video color information](tagging-media-with-video-color-information.md)

<a id="overview"></a>

## Overview

Create an asset writer input to write a single track of media, and optional track-level metadata, to the output file. To write multiple concurrent tracks with ideal interleaving of media data, observe the value of the [readyForMoreMediaData](avassetwriterinput/isreadyformoremediadata.md) property of each input.

You can use an asset writer input to create tracks in a QuickTime movie file that aren’t self-contained, and instead reference sample data that exists in another file.

## Topics

### Creating an input

- [assetWriterInputWithMediaType:outputSettings:](avassetwriterinput/assetwriterinputwithmediatype_outputsettings_.md): Returns a new input to append sample buffers of the specified type to the output file.
- [initWithMediaType:outputSettings:](avassetwriterinput/init%28mediatype_outputsettings_%29.md): Creates an input to append sample buffers of the specified type to the output file.
- [assetWriterInputWithMediaType:outputSettings:sourceFormatHint:](avassetwriterinput/assetwriterinputwithmediatype_outputsettings_sourceformathint_.md): Returns a new input that appends sample buffers of the specified type and format hint to the output file.
- [initWithMediaType:outputSettings:sourceFormatHint:](avassetwriterinput/init%28mediatype_outputsettings_sourceformathint_%29.md): Creates an input that appends sample buffers of the specified type and format hint to the output file.

### Configuring presentation

- [naturalSize](avassetwriterinput/naturalsize.md): The natural display dimensions of the output’s visual media.
- [transform](avassetwriterinput/transform.md): The transform to use for display of the output’s visual media.
- [preferredVolume](avassetwriterinput/preferredvolume.md): The volume to prefer for playback of the output’s audio data.
- [mediaTimeScale](avassetwriterinput/mediatimescale.md): The time scale of the track in the output file.
- [marksOutputTrackAsEnabled](avassetwriterinput/marksoutputtrackasenabled.md): A Boolean value that indicates whether to enable a track in the output for playback and processing.

### Configuring language support

- [languageCode](avassetwriterinput/languagecode.md): The language code of the input’s track.
- [extendedLanguageTag](avassetwriterinput/extendedlanguagetag.md): The extended language for the input’s track.

### Configuring metadata

- [metadata](avassetwriterinput/metadata.md): The track-level metadata to write to the output.

### Configuring media data layout

- [preferredMediaChunkAlignment](avassetwriterinput/preferredmediachunkalignment.md): The boundary, in bytes, for aligning media chunks.
- [preferredMediaChunkDuration](avassetwriterinput/preferredmediachunkduration.md): The duration to use for each chunk of sample data in the output file.
- [sampleReferenceBaseURL](avassetwriterinput/samplereferencebaseurl.md): The base URL sample references are relative to.
- [mediaDataLocation](avassetwriterinput/mediadatalocation-swift.property.md): Specifies how the input lays out and interleaves media data.
- [AVAssetWriterInputMediaDataLocation](avassetwriterinput/mediadatalocation-swift.struct.md): A structure that indicates how to lay out and interleave media data.

### Configuring track associations

- [canAddTrackAssociationWithTrackOfInput:type:](avassetwriterinput/canaddtrackassociation%28withtrackof_type_%29.md): Determines whether it’s valid to associate another input’s track with this input’s track.
- [addTrackAssociationWithTrackOfInput:type:](avassetwriterinput/addtrackassociation%28withtrackof_type_%29.md): Adds an association between input tracks.

### Appending media samples

- [expectsMediaDataInRealTime](avassetwriterinput/expectsmediadatainrealtime.md): Deprecated. A Boolean value that indicates whether the input tailors its processing for real-time sources.
- [readyForMoreMediaData](avassetwriterinput/isreadyformoremediadata.md): Deprecated. A Boolean value that indicates whether the input is ready to accept media data.
- [requestMediaDataWhenReadyOnQueue:usingBlock:](avassetwriterinput/requestmediadatawhenready%28on_using_%29.md): Deprecated. Tells the input to request media data, at its convenience, to write to the output file.
- [appendSampleBuffer:](avassetwriterinput/append%28__%29.md): Deprecated. Appends a sample buffer to an input to write to the output file.
- [markAsFinished](avassetwriterinput/markasfinished%28%29.md): Marks the input as finished to indicate that you’re done appending samples to it.

### Performing multiple-pass encoding

- [canPerformMultiplePasses](avassetwriterinput/canperformmultiplepasses.md): A Boolean value that indicates whether the input may perform multiple passes over appended media data.
- [currentPassDescription](avassetwriterinput/currentpassdescription.md): An object that describes the requirements for the current pass.
- [AVAssetWriterInputPassDescription](avassetwriterinputpassdescription.md): An object that defines the interface to query for the requirements of the current pass.
- [markCurrentPassAsFinished](avassetwriterinput/markcurrentpassasfinished%28%29.md): Tells the input to analyze the appended media to determine whether it can improve the results by reencoding certain segments.
- [performsMultiPassEncodingIfSupported](avassetwriterinput/performsmultipassencodingifsupported.md): A Boolean value that indicates whether the input attempts to encode the source media data using multiple passes.
- [respondToEachPassDescriptionOnQueue:usingBlock:](avassetwriterinput/respondtoeachpassdescription%28on_using_%29.md): Tells the input to invoke a callback whenever it begins a new pass.

### Inspecting an input

- [mediaType](avassetwriterinput/mediatype.md): The media type of the samples that the input accepts.
- [outputSettings](avassetwriterinput/outputsettings.md): The settings to use for encoding media data you append to the output.
- [sourceFormatHint](avassetwriterinput/sourceformathint.md): A hint about the format of the sample buffers to append to the input.

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
- [AVAssetWriterInputPixelBufferAdaptor](avassetwriterinputpixelbufferadaptor.md): Deprecated. An object that appends video samples to an asset writer input.
- [AVAssetWriterInputTaggedPixelBufferGroupAdaptor](avassetwriterinputtaggedpixelbuffergroupadaptor.md): Deprecated. An object that appends tagged buffer groups to an asset writer input.
- [AVAssetWriterInputMetadataAdaptor](avassetwriterinputmetadataadaptor.md): Deprecated. An object that appends timed metadata groups to an asset writer input.
- [AVAssetWriterInputGroup](avassetwriterinputgroup.md): A group of inputs with tracks that are mutually exclusive to each other for playback or processing.
