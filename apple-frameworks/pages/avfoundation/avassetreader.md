> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreader](https://developer.apple.com/documentation/avfoundation/avassetreader)

# AVAssetReader (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An object that reads media data from an asset.

## Declaration

```swift
class AVAssetReader
```

<a id="overview"></a>

## Overview

Use an asset reader to read media data from instances of [AVAsset](avasset.md). The assets you read may represent file-based media like QuickTime movies or MPEG-4 files, or media that you compose from multiple sources using [AVComposition](avcomposition.md).

## Topics

### Creating an asset reader

- [init(asset:)](avassetreader/init%28asset_%29.md): Creates an object to read media data from an asset.

### Managing outputs

- [canAdd(\_:)](avassetreader/canadd%28__%29.md): Determines whether you can add the output to the asset reader.
- [add(\_:)](avassetreader/add%28__%29.md): Deprecated. Adds an output to the reader.
- [outputs](avassetreader/outputs.md): The outputs from which you read media data.

### Accessing output providers

- [outputProvider(for:)](avassetreader/outputprovider%28for_%29.md): Attaches the output to the reader and returns an output provider for reading sample buffers.
- [outputProviderWithRandomAccess(for:)](avassetreader/outputproviderwithrandomaccess%28for_%29.md): Attaches the output to the reader and returns a tuple with an output provider for reading sample buffers, and an associated random access controller.
- [outputCaptionProvider(for:validationDelegate:)](avassetreader/outputcaptionprovider%28for_validationdelegate_%29.md): Attaches the output to the reader and returns an output provider for reading caption groups.
- [outputCaptionProviderWithRandomAccess(for:validationDelegate:)](avassetreader/outputcaptionproviderwithrandomaccess%28for_validationdelegate_%29.md): Attaches the output to the reader and returns a tuple with an output provider for reading caption groups, and an associated random access controller.
- [outputMetadataProvider(for:)](avassetreader/outputmetadataprovider%28for_%29.md): Attaches the output to the reader and returns an output provider for reading timed metadata groups.
- [outputMetadataProviderWithRandomAccess(for:)](avassetreader/outputmetadataproviderwithrandomaccess%28for_%29.md): Attaches the output to the reader and returns a tuple with an output provider for timed metadata groups buffers, and an associated random access controller.

### Configuring reading

- [timeRange](avassetreader/timerange.md): The time range within the asset to read.
- [status](avassetreader/status-swift.property.md): The status of reading sample buffers from the asset.
- [AVAssetReader.Status](avassetreader/status-swift.enum.md): Values that represent the possible states of an asset reader.
- [error](avassetreader/error.md): An error that describes the reason for a failure.

### Controlling reading

- [start()](avassetreader/start%28%29.md): Prepares the reader to read media data from the asset.
- [startReading()](avassetreader/startreading%28%29.md): Deprecated. Prepares the asset reader to start reading sample buffers from the asset.
- [cancelReading()](avassetreader/cancelreading%28%29.md): Cancels any background work and stops the reader’s outputs from reading more samples.

### Inspecting the asset

- [asset](avassetreader/asset.md): The asset from which to read media data.

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
- [AVAssetReaderOutput](avassetreaderoutput.md): An abstract class that defines the interface to read media samples from an asset reader.
- [AVAssetReaderTrackOutput](avassetreadertrackoutput.md): An object that reads media data from a single track of an asset.
- [AVAssetReaderAudioMixOutput](avassetreaderaudiomixoutput.md): An object that reads audio samples that result from mixing audio from one or more tracks.
- [AVAssetReaderVideoCompositionOutput](avassetreadervideocompositionoutput.md): An object that reads composited video frames from one or more tracks of an asset.
- [AVAssetReaderSampleReferenceOutput](avassetreadersamplereferenceoutput.md): An object that reads sample references from an asset track.
- [AVAssetReaderOutputMetadataAdaptor](avassetreaderoutputmetadataadaptor.md): Deprecated. An object that creates timed metadata group objects for an asset track.

# AVAssetReader (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An object that reads media data from an asset.

## Declaration

```objectivec
@interface AVAssetReader : NSObject
```

<a id="overview"></a>

## Overview

Use an asset reader to read media data from instances of [AVAsset](avasset.md). The assets you read may represent file-based media like QuickTime movies or MPEG-4 files, or media that you compose from multiple sources using [AVComposition](avcomposition.md).

## Topics

### Creating an asset reader

- [initWithAsset:error:](avassetreader/init%28asset_%29.md): Creates an object to read media data from an asset.
- [assetReaderWithAsset:error:](avassetreader/assetreaderwithasset_error_.md): Returns a new object to read media data from an asset.

### Managing outputs

- [canAddOutput:](avassetreader/canadd%28__%29.md): Determines whether you can add the output to the asset reader.
- [addOutput:](avassetreader/add%28__%29.md): Deprecated. Adds an output to the reader.
- [outputs](avassetreader/outputs.md): The outputs from which you read media data.

### Configuring reading

- [timeRange](avassetreader/timerange.md): The time range within the asset to read.
- [status](avassetreader/status-swift.property.md): The status of reading sample buffers from the asset.
- [AVAssetReaderStatus](avassetreader/status-swift.enum.md): Values that represent the possible states of an asset reader.
- [error](avassetreader/error.md): An error that describes the reason for a failure.

### Controlling reading

- [startReading](avassetreader/startreading%28%29.md): Deprecated. Prepares the asset reader to start reading sample buffers from the asset.
- [cancelReading](avassetreader/cancelreading%28%29.md): Cancels any background work and stops the reader’s outputs from reading more samples.

### Inspecting the asset

- [asset](avassetreader/asset.md): The asset from which to read media data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Media reading

- [Reading multiview 3D video files](reading-multiview-3d-video-files.md): Render single images for the left eye and right eye from a multiview High Efficiency Video Coding format file by reading individual video frames.
- [AVAssetReaderOutput](avassetreaderoutput.md): An abstract class that defines the interface to read media samples from an asset reader.
- [AVAssetReaderTrackOutput](avassetreadertrackoutput.md): An object that reads media data from a single track of an asset.
- [AVAssetReaderAudioMixOutput](avassetreaderaudiomixoutput.md): An object that reads audio samples that result from mixing audio from one or more tracks.
- [AVAssetReaderVideoCompositionOutput](avassetreadervideocompositionoutput.md): An object that reads composited video frames from one or more tracks of an asset.
- [AVAssetReaderSampleReferenceOutput](avassetreadersamplereferenceoutput.md): An object that reads sample references from an asset track.
- [AVAssetReaderOutputMetadataAdaptor](avassetreaderoutputmetadataadaptor.md): Deprecated. An object that creates timed metadata group objects for an asset track.
