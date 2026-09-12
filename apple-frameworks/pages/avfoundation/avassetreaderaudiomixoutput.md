> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreaderaudiomixoutput](https://developer.apple.com/documentation/avfoundation/avassetreaderaudiomixoutput)

# AVAssetReaderAudioMixOutput (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An object that reads audio samples that result from mixing audio from one or more tracks.

## Declaration

```swift
class AVAssetReaderAudioMixOutput
```

<a id="overview"></a>

## Overview

Read audio data that you mix from one or more asset tracks by adding an audio mix output to an asset reader. You can read the samples in their stored format or you can convert them to an alternative format.

## Topics

### Creating an audio mix output

- [init(audioTracks:audioSettings:)](avassetreaderaudiomixoutput/init%28audiotracks_audiosettings_%29.md): Creates an object that reads mixed audio from the specified audio tracks.

### Configuring audio settings

- [audioMix](avassetreaderaudiomixoutput/audiomix.md): The audio mix to use with this output.
- [audioTimePitchAlgorithm](avassetreaderaudiomixoutput/audiotimepitchalgorithm.md): The processing algorithm to use for scaled audio edits.

### Inspecting an output

- [audioTracks](avassetreaderaudiomixoutput/audiotracks.md): The tracks from which the output reads audio.
- [audioSettings](avassetreaderaudiomixoutput/audiosettings.md): The audio settings that the output uses.

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
- [AVAssetReaderVideoCompositionOutput](avassetreadervideocompositionoutput.md): An object that reads composited video frames from one or more tracks of an asset.
- [AVAssetReaderSampleReferenceOutput](avassetreadersamplereferenceoutput.md): An object that reads sample references from an asset track.
- [AVAssetReaderOutputMetadataAdaptor](avassetreaderoutputmetadataadaptor.md): Deprecated. An object that creates timed metadata group objects for an asset track.

# AVAssetReaderAudioMixOutput (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An object that reads audio samples that result from mixing audio from one or more tracks.

## Declaration

```objectivec
@interface AVAssetReaderAudioMixOutput : AVAssetReaderOutput
```

<a id="overview"></a>

## Overview

Read audio data that you mix from one or more asset tracks by adding an audio mix output to an asset reader. You can read the samples in their stored format or you can convert them to an alternative format.

## Topics

### Creating an audio mix output

- [assetReaderAudioMixOutputWithAudioTracks:audioSettings:](avassetreaderaudiomixoutput/assetreaderaudiomixoutputwithaudiotracks_audiosettings_.md): Creates an object that reads mixed audio from the specified audio tracks.
- [initWithAudioTracks:audioSettings:](avassetreaderaudiomixoutput/init%28audiotracks_audiosettings_%29.md): Creates an object that reads mixed audio from the specified audio tracks.

### Configuring audio settings

- [audioMix](avassetreaderaudiomixoutput/audiomix.md): The audio mix to use with this output.
- [audioTimePitchAlgorithm](avassetreaderaudiomixoutput/audiotimepitchalgorithm.md): The processing algorithm to use for scaled audio edits.

### Inspecting an output

- [audioTracks](avassetreaderaudiomixoutput/audiotracks.md): The tracks from which the output reads audio.
- [audioSettings](avassetreaderaudiomixoutput/audiosettings.md): The audio settings that the output uses.

## Relationships

### Inherits From

- [AVAssetReaderOutput](avassetreaderoutput.md)

## See Also

### Media reading

- [Reading multiview 3D video files](reading-multiview-3d-video-files.md): Render single images for the left eye and right eye from a multiview High Efficiency Video Coding format file by reading individual video frames.
- [AVAssetReader](avassetreader.md): An object that reads media data from an asset.
- [AVAssetReaderOutput](avassetreaderoutput.md): An abstract class that defines the interface to read media samples from an asset reader.
- [AVAssetReaderTrackOutput](avassetreadertrackoutput.md): An object that reads media data from a single track of an asset.
- [AVAssetReaderVideoCompositionOutput](avassetreadervideocompositionoutput.md): An object that reads composited video frames from one or more tracks of an asset.
- [AVAssetReaderSampleReferenceOutput](avassetreadersamplereferenceoutput.md): An object that reads sample references from an asset track.
- [AVAssetReaderOutputMetadataAdaptor](avassetreaderoutputmetadataadaptor.md): Deprecated. An object that creates timed metadata group objects for an asset track.
