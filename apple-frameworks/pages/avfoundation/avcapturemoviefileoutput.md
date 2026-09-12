> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemoviefileoutput](https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput)

# AVCaptureMovieFileOutput (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

A capture output that records video and audio to a QuickTime movie file.

## Declaration

```swift
class AVCaptureMovieFileOutput
```

## Mentioned In

- [Recording movies in alternative formats](recording-movies-in-alternative-formats.md)
- [Setting up a capture session](setting-up-a-capture-session.md)

<a id="overview"></a>

## Overview

A movie file output provides a complete file recording interface for writing media data to QuickTime movie files. It includes the ability to configure QuickTime-specific options, including writing metadata collections to each file, specify media encoding options for each track, and specify the interval at which it writes movie fragments.

## Topics

### Creating a movie file output

- [init()](avcapturemoviefileoutput/init%28%29.md): Creates a new of movie file output.

### Configuring movies

- [movieFragmentInterval](avcapturemoviefileoutput/moviefragmentinterval.md): The number of seconds of output that are written per fragment.
- [metadata](avcapturemoviefileoutput/metadata.md): The metadata for the output file.

### Managing output settings

- [supportedOutputSettingsKeys(for:)](avcapturemoviefileoutput/supportedoutputsettingskeys%28for_%29.md): Returns a list of supported keys to use in the output settings dictionary.
- [outputSettings(for:)](avcapturemoviefileoutput/outputsettings%28for_%29.md): Returns the settings the output uses to encode media from the specified connection.
- [setOutputSettings(\_:for:)](avcapturemoviefileoutput/setoutputsettings%28__for_%29.md): Sets the options the output uses to encode media from the given connection while recording.
- [availableVideoCodecTypes](avcapturemoviefileoutput/availablevideocodectypes.md): The video codecs types the output supports for recording movie files.

### Enabling spatial capture

- [isSpatialVideoCaptureSupported](avcapturemoviefileoutput/isspatialvideocapturesupported.md): A Boolean value that indicates whether a movie file output supports capturing spatial videos.
- [isSpatialVideoCaptureEnabled](avcapturemoviefileoutput/isspatialvideocaptureenabled.md): A Boolean value that indicates whether a movie file output captures spatial videos.

### Setting orientation

- [recordsVideoOrientationAndMirroringChangesAsMetadataTrack(for:)](avcapturemoviefileoutput/recordsvideoorientationandmirroringchangesasmetadatatrack%28for_%29.md): A Boolean value that indicates whether the movie file output records video orientation and mirroring information as a metadata track.
- [setRecordsVideoOrientationAndMirroringChangesAsMetadataTrack(\_:for:)](avcapturemoviefileoutput/setrecordsvideoorientationandmirroringchangesasmetadatatrack%28__for_%29.md): Sets whether the movie file output creates a timed metadata track to capture changes to the connection’s video orientation and mirroring.

### Restricting camera switching

- [isPrimaryConstituentDeviceSwitchingBehaviorForRecordingEnabled](avcapturemoviefileoutput/isprimaryconstituentdeviceswitchingbehaviorforrecordingenabled.md): A Boolean value that indicates whether to restrict constituent device switching behavior during recording.
- [setPrimaryConstituentDeviceSwitchingBehaviorForRecording(\_:restrictedSwitchingBehaviorConditions:)](avcapturemoviefileoutput/setprimaryconstituentdeviceswitchingbehaviorforrecording%28__restrictedswitchingbehaviorconditions_%29.md): Sets the camera switching behavior to use during recording.
- [primaryConstituentDeviceSwitchingBehaviorForRecording](avcapturemoviefileoutput/primaryconstituentdeviceswitchingbehaviorforrecording.md): The camera switching behavior to use for recording.
- [primaryConstituentDeviceRestrictedSwitchingBehaviorConditionsForRecording](avcapturemoviefileoutput/primaryconstituentdevicerestrictedswitchingbehaviorconditionsforrecording.md): The conditions during which camera switching may occur while recording.

### Instance Properties

- [automaticallyAdjustsCinematicVideoMetadataCaptureEnabled](avcapturemoviefileoutput/automaticallyadjustscinematicvideometadatacaptureenabled.md): Controls whether cinematic video metadata capture is automatically managed by the framework.
- [isCinematicVideoMetadataCaptureEnabled](avcapturemoviefileoutput/iscinematicvideometadatacaptureenabled.md): Indicates whether cinematic video metadata is captured to movie files.
- [isCinematicVideoMetadataCaptureSupported](avcapturemoviefileoutput/iscinematicvideometadatacapturesupported.md): Returns whether capturing cinematic video metadata to the movie file is supported in the current session configuration.
- [isProVideoStorageSupported](avcapturemoviefileoutput/isprovideostoragesupported.md): Whether this movie file output supports writing to Pro Video Storage in its current configuration.
- [usesProVideoStorage](avcapturemoviefileoutput/usesprovideostorage.md): Whether this movie file output is configured to write to Pro Video Storage.

## Relationships

### Inherits From

- [AVCaptureFileOutput](avcapturefileoutput.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### File capture

- [Recording movies in alternative formats](recording-movies-in-alternative-formats.md): Change the default format for capturing movie files.
- [AVCaptureAudioFileOutput](avcaptureaudiofileoutput.md): A capture output that records audio and saves the recorded audio to a file.
- [AVCaptureFileOutput](avcapturefileoutput.md): The abstract superclass for capture outputs that can record captured data to a file.
- [AVCaptureFileOutputDelegate](avcapturefileoutputdelegate.md): Methods for monitoring or controlling the output of a media file capture.
- [AVCaptureFileOutputRecordingDelegate](avcapturefileoutputrecordingdelegate.md): Methods for responding to events that occur while recording captured media to a file.

# AVCaptureMovieFileOutput (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

A capture output that records video and audio to a QuickTime movie file.

## Declaration

```objectivec
@interface AVCaptureMovieFileOutput : AVCaptureFileOutput
```

## Mentioned In

- [Recording movies in alternative formats](recording-movies-in-alternative-formats.md)
- [Setting up a capture session](setting-up-a-capture-session.md)

<a id="overview"></a>

## Overview

A movie file output provides a complete file recording interface for writing media data to QuickTime movie files. It includes the ability to configure QuickTime-specific options, including writing metadata collections to each file, specify media encoding options for each track, and specify the interval at which it writes movie fragments.

## Topics

### Creating a movie file output

- [init](avcapturemoviefileoutput/init%28%29.md): Creates a new of movie file output.
- [new](avcapturemoviefileoutput/new.md): Returns a new movie file output object.

### Configuring movies

- [movieFragmentInterval](avcapturemoviefileoutput/moviefragmentinterval.md): The number of seconds of output that are written per fragment.
- [metadata](avcapturemoviefileoutput/metadata.md): The metadata for the output file.

### Managing output settings

- [supportedOutputSettingsKeysForConnection:](avcapturemoviefileoutput/supportedoutputsettingskeys%28for_%29.md): Returns a list of supported keys to use in the output settings dictionary.
- [outputSettingsForConnection:](avcapturemoviefileoutput/outputsettings%28for_%29.md): Returns the settings the output uses to encode media from the specified connection.
- [setOutputSettings:forConnection:](avcapturemoviefileoutput/setoutputsettings%28__for_%29.md): Sets the options the output uses to encode media from the given connection while recording.
- [availableVideoCodecTypes](avcapturemoviefileoutput/availablevideocodectypes.md): The video codecs types the output supports for recording movie files.

### Enabling spatial capture

- [spatialVideoCaptureSupported](avcapturemoviefileoutput/isspatialvideocapturesupported.md): A Boolean value that indicates whether a movie file output supports capturing spatial videos.
- [spatialVideoCaptureEnabled](avcapturemoviefileoutput/isspatialvideocaptureenabled.md): A Boolean value that indicates whether a movie file output captures spatial videos.

### Setting orientation

- [recordsVideoOrientationAndMirroringChangesAsMetadataTrackForConnection:](avcapturemoviefileoutput/recordsvideoorientationandmirroringchangesasmetadatatrack%28for_%29.md): A Boolean value that indicates whether the movie file output records video orientation and mirroring information as a metadata track.
- [setRecordsVideoOrientationAndMirroringChanges:asMetadataTrackForConnection:](avcapturemoviefileoutput/setrecordsvideoorientationandmirroringchangesasmetadatatrack%28__for_%29.md): Sets whether the movie file output creates a timed metadata track to capture changes to the connection’s video orientation and mirroring.

### Restricting camera switching

- [primaryConstituentDeviceSwitchingBehaviorForRecordingEnabled](avcapturemoviefileoutput/isprimaryconstituentdeviceswitchingbehaviorforrecordingenabled.md): A Boolean value that indicates whether to restrict constituent device switching behavior during recording.
- [setPrimaryConstituentDeviceSwitchingBehaviorForRecording:restrictedSwitchingBehaviorConditions:](avcapturemoviefileoutput/setprimaryconstituentdeviceswitchingbehaviorforrecording%28__restrictedswitchingbehaviorconditions_%29.md): Sets the camera switching behavior to use during recording.
- [primaryConstituentDeviceSwitchingBehaviorForRecording](avcapturemoviefileoutput/primaryconstituentdeviceswitchingbehaviorforrecording.md): The camera switching behavior to use for recording.
- [primaryConstituentDeviceRestrictedSwitchingBehaviorConditionsForRecording](avcapturemoviefileoutput/primaryconstituentdevicerestrictedswitchingbehaviorconditionsforrecording.md): The conditions during which camera switching may occur while recording.

### Instance Properties

- [automaticallyAdjustsCinematicVideoMetadataCaptureEnabled](avcapturemoviefileoutput/automaticallyadjustscinematicvideometadatacaptureenabled.md): Controls whether cinematic video metadata capture is automatically managed by the framework.
- [cinematicVideoMetadataCaptureEnabled](avcapturemoviefileoutput/iscinematicvideometadatacaptureenabled.md): Indicates whether cinematic video metadata is captured to movie files.
- [cinematicVideoMetadataCaptureSupported](avcapturemoviefileoutput/iscinematicvideometadatacapturesupported.md): Returns whether capturing cinematic video metadata to the movie file is supported in the current session configuration.
- [proVideoStorageSupported](avcapturemoviefileoutput/isprovideostoragesupported.md): Whether this movie file output supports writing to Pro Video Storage in its current configuration.
- [usesProVideoStorage](avcapturemoviefileoutput/usesprovideostorage.md): Whether this movie file output is configured to write to Pro Video Storage.

## Relationships

### Inherits From

- [AVCaptureFileOutput](avcapturefileoutput.md)

## See Also

### File capture

- [Recording movies in alternative formats](recording-movies-in-alternative-formats.md): Change the default format for capturing movie files.
- [AVCaptureAudioFileOutput](avcaptureaudiofileoutput.md): A capture output that records audio and saves the recorded audio to a file.
- [AVCaptureFileOutput](avcapturefileoutput.md): The abstract superclass for capture outputs that can record captured data to a file.
- [AVCaptureFileOutputDelegate](avcapturefileoutputdelegate.md): Methods for monitoring or controlling the output of a media file capture.
- [AVCaptureFileOutputRecordingDelegate](avcapturefileoutputrecordingdelegate.md): Methods for responding to events that occur while recording captured media to a file.
