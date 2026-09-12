> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession](https://developer.apple.com/documentation/avfoundation/avassetexportsession)

# AVAssetExportSession (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An object that exports assets in a format that you specify using an export preset.

## Declaration

```swift
class AVAssetExportSession
```

## Mentioned In

- [Exporting video to alternative formats](exporting-video-to-alternative-formats.md)

<a id="overview"></a>

## Overview

You configure this object to export an instance of [AVAsset](avasset.md) by setting an export preset, an output file type, and an output URL.

## Topics

### Creating an export session

- [init(asset:presetName:)](avassetexportsession/init%28asset_presetname_%29.md): Creates an export session with a preset configuration.
- [Export presets](export-presets.md): Configure an export session to output media in standard sizes and formats.

### Accessing export presets

- [presetName](avassetexportsession/presetname.md): The name of the preset that the asset export session uses.
- [determineCompatibleFileTypes(completionHandler:)](avassetexportsession/determinecompatiblefiletypes%28completionhandler_%29.md): Determines the output file types an asset export session supports writing in its current configuration.
- [allExportPresets()](avassetexportsession/allexportpresets%28%29.md): Returns all available export preset names.
- [determineCompatibility(ofExportPreset:with:outputFileType:completionHandler:)](avassetexportsession/determinecompatibility%28ofexportpreset_with_outputfiletype_completionhandler_%29.md): Determines an export preset’s compatibility to export the asset in a container of the output file type.

### Configuring output

- [supportedFileTypes](avassetexportsession/supportedfiletypes.md): An array containing the types of files the session can write.
- [allowsParallelizedExport](avassetexportsession/allowsparallelizedexport.md): A Boolean value that indicates whether the session can parallelize its export operation.
- [shouldOptimizeForNetworkUse](avassetexportsession/shouldoptimizefornetworkuse.md): A Boolean value that indicates whether to optimize the movie for network use.
- [canPerformMultiplePassesOverSourceMediaData](avassetexportsession/canperformmultiplepassesoversourcemediadata.md): A Boolean value that indicates whether the export session can perform multiple passes over the source media to achieve better results.
- [timeRange](avassetexportsession/timerange.md): The time range of the source asset to export.
- [fileLengthLimit](avassetexportsession/filelengthlimit.md): The file length that the output of the session must not exceed.
- [directoryForTemporaryFiles](avassetexportsession/directoryfortemporaryfiles.md): A directory suitable to store temporary files that the export process generates.

### Configuring metadata

- [metadata](avassetexportsession/metadata.md): The metadata an export session writes to the output container file.
- [metadataItemFilter](avassetexportsession/metadataitemfilter.md): An object the export session uses to filter the metadata items it transfers to the output asset.

### Configuring video output

- [videoComposition](avassetexportsession/videocomposition.md): An optional object that provides instructions for how to composite frames of video.
- [customVideoCompositor](avassetexportsession/customvideocompositor.md): An optional custom object to use when compositing video frames.

### Configuring track groups

- [audioTrackGroupHandling](avassetexportsession/audiotrackgrouphandling.md): A policy that defines how the session exports alternate audio tracks.
- [AVAssetTrackGroupOutputHandling](avassettrackgroupoutputhandling.md): A type that specifies policies for how an export session processes alternate tracks in a track group.

### Configuring audio output

- [audioMix](avassetexportsession/audiomix.md): The parameters for audio mixing and an indication of whether to enable nondefault audio mixing for export.
- [audioTimePitchAlgorithm](avassetexportsession/audiotimepitchalgorithm.md): A processing algorithm for managing audio pitch for scaled audio edits.

### Exporting media

- [export(to:as:isolation:)](avassetexportsession/export%28to_as_isolation_%29.md): Exports the asset to the output location in the specified file type.

### Monitoring export progress

- [states(updateInterval:)](avassetexportsession/states%28updateinterval_%29.md): Monitors the progress state of an export operation.
- [AVAssetExportSession.State](avassetexportsession/state.md): Constants that indicate the state of an export operation.
- [AVAssetExportSession.Status](avassetexportsession/status-swift.enum.md): Values that indicate the state of an export session.

### Estimating file length and duration

- [estimateOutputFileLength(completionHandler:)](avassetexportsession/estimateoutputfilelength%28completionhandler_%29.md): Starts estimating the output file length of the export while considering the asset, preset, and time range configuration of the export session.

### Estimating duration

- [estimateMaximumDuration(completionHandler:)](avassetexportsession/estimatemaximumduration%28completionhandler_%29.md): Starts estimating the maximum duration of the export while considering the asset, preset, and time range configuration of the export session.

### Accessing the asset

- [asset](avassetexportsession/asset.md): An asset that a session exports.

### Configuring resumable export

- [configureForResumableExport()](avassetexportsession/configureforresumableexport%28%29.md): Configures the export session for resumable export.
- [AVAssetExportSession.ResumptionState](avassetexportsession/resumptionstate.md): Represents the resumption state of the export session.
- [AVAssetExportSession.ResumptionFailureReason](avassetexportsession/resumptionfailurereason.md): The reason that configuring the export session for resumption failed.

### Deprecated

- [Deprecated symbols](avassetexportsession-deprecated-symbols.md): Review unsupported symbols and their replacements.

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

### Media export

- [Exporting video to alternative formats](exporting-video-to-alternative-formats.md): Convert an existing movie file to a different format.

# AVAssetExportSession (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An object that exports assets in a format that you specify using an export preset.

## Declaration

```objectivec
@interface AVAssetExportSession : NSObject
```

## Mentioned In

- [Exporting video to alternative formats](exporting-video-to-alternative-formats.md)

<a id="overview"></a>

## Overview

You configure this object to export an instance of [AVAsset](avasset.md) by setting an export preset, an output file type, and an output URL.

## Topics

### Creating an export session

- [exportSessionWithAsset:presetName:](avassetexportsession/exportsessionwithasset_presetname_.md): Returns a new asset export session that uses the specified preset.
- [initWithAsset:presetName:](avassetexportsession/init%28asset_presetname_%29.md): Creates an export session with a preset configuration.
- [Export presets](export-presets.md): Configure an export session to output media in standard sizes and formats.

### Accessing export presets

- [presetName](avassetexportsession/presetname.md): The name of the preset that the asset export session uses.
- [determineCompatibleFileTypesWithCompletionHandler:](avassetexportsession/determinecompatiblefiletypes%28completionhandler_%29.md): Determines the output file types an asset export session supports writing in its current configuration.
- [allExportPresets](avassetexportsession/allexportpresets%28%29.md): Returns all available export preset names.
- [determineCompatibilityOfExportPreset:withAsset:outputFileType:completionHandler:](avassetexportsession/determinecompatibility%28ofexportpreset_with_outputfiletype_completionhandler_%29.md): Determines an export preset’s compatibility to export the asset in a container of the output file type.

### Configuring output

- [outputURL](avassetexportsession/outputurl.md): Deprecated. A URL where an asset export session writes its output.
- [outputFileType](avassetexportsession/outputfiletype.md): Deprecated. The file type of the output an asset export session writes.
- [supportedFileTypes](avassetexportsession/supportedfiletypes.md): An array containing the types of files the session can write.
- [allowsParallelizedExport](avassetexportsession/allowsparallelizedexport.md): A Boolean value that indicates whether the session can parallelize its export operation.
- [shouldOptimizeForNetworkUse](avassetexportsession/shouldoptimizefornetworkuse.md): A Boolean value that indicates whether to optimize the movie for network use.
- [canPerformMultiplePassesOverSourceMediaData](avassetexportsession/canperformmultiplepassesoversourcemediadata.md): A Boolean value that indicates whether the export session can perform multiple passes over the source media to achieve better results.
- [timeRange](avassetexportsession/timerange.md): The time range of the source asset to export.
- [fileLengthLimit](avassetexportsession/filelengthlimit.md): The file length that the output of the session must not exceed.
- [directoryForTemporaryFiles](avassetexportsession/directoryfortemporaryfiles.md): A directory suitable to store temporary files that the export process generates.

### Configuring metadata

- [metadata](avassetexportsession/metadata.md): The metadata an export session writes to the output container file.
- [metadataItemFilter](avassetexportsession/metadataitemfilter.md): An object the export session uses to filter the metadata items it transfers to the output asset.

### Configuring video output

- [videoComposition](avassetexportsession/videocomposition.md): An optional object that provides instructions for how to composite frames of video.
- [customVideoCompositor](avassetexportsession/customvideocompositor.md): An optional custom object to use when compositing video frames.

### Configuring track groups

- [audioTrackGroupHandling](avassetexportsession/audiotrackgrouphandling.md): A policy that defines how the session exports alternate audio tracks.
- [AVAssetTrackGroupOutputHandling](avassettrackgroupoutputhandling.md): A type that specifies policies for how an export session processes alternate tracks in a track group.

### Configuring audio output

- [audioMix](avassetexportsession/audiomix.md): The parameters for audio mixing and an indication of whether to enable nondefault audio mixing for export.
- [audioTimePitchAlgorithm](avassetexportsession/audiotimepitchalgorithm.md): A processing algorithm for managing audio pitch for scaled audio edits.

### Exporting media

- [exportAsynchronouslyWithCompletionHandler:](avassetexportsession/exportasynchronously%28completionhandler_%29.md): Deprecated. Starts the asynchronous execution of an export session.
- [cancelExport](avassetexportsession/cancelexport%28%29.md): Deprecated. Cancels the execution of an export session.

### Monitoring export progress

- [status](avassetexportsession/status-swift.property.md): Deprecated. The status of the export session.
- [progress](avassetexportsession/progress.md): Deprecated. A value that indicates the progress of the export.
- [error](avassetexportsession/error.md): Deprecated. An optional error object.

### Estimating file length and duration

- [estimateOutputFileLengthWithCompletionHandler:](avassetexportsession/estimateoutputfilelength%28completionhandler_%29.md): Starts estimating the output file length of the export while considering the asset, preset, and time range configuration of the export session.

### Estimating duration

- [estimateMaximumDurationWithCompletionHandler:](avassetexportsession/estimatemaximumduration%28completionhandler_%29.md): Starts estimating the maximum duration of the export while considering the asset, preset, and time range configuration of the export session.

### Accessing the asset

- [asset](avassetexportsession/asset.md): An asset that a session exports.

### Configuring resumable export

- [configureForResumableExportWithCompletionHandler:](avassetexportsession/configureforresumableexportwithcompletionhandler_.md): Attempts to configure the export session into resumption mode.
- [AVAssetExportSessionResumptionState](avassetexportsessionresumptionstate.md): The current resumption state of the export session.
- [AVAssetExportSessionResumptionFailureReason](avassetexportsession/resumptionfailurereason.md): The reason that configuring the export session for resumption failed.

### Deprecated

- [Deprecated symbols](avassetexportsession-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Media export

- [Exporting video to alternative formats](exporting-video-to-alternative-formats.md): Convert an existing movie file to a different format.
