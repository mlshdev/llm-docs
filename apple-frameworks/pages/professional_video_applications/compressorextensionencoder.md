> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressorextensionencoder](https://developer.apple.com/documentation/professional_video_applications/compressorextensionencoder)

# CompressorExtensionEncoder (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** ProVideo Encoder Extensions 1.0+

An interface an extension implements to convert source media to the output format supported in your extension.

## Declaration

```swift
protocol CompressorExtensionEncoder
```

<a id="overview"></a>

## Overview

Implement the methods in this interface to run an encoding job, support parallel processing, and send output files to a specified destination. To run an encoding job, the Compressor app calls the [runTranscode(for:start:duration:toFile:startTimeCode:)](compressorextensionencoder/runtranscode%28for_start_duration_tofile_starttimecode_%29.md) method. During the encoding process, the Compressor app calls the methods in the `CompressorExtensionEncoder` protocol to get updates on the status and progress of an encoding job.

Users sometimes request to pause a running encoder task to free up resources. You can choose to support resuming a job where it left off by saving the extension’s state while pausing in the implementation of the [cancel(forPause:)](compressorextensionencoder/cancel%28forpause_%29.md) method.

Increase the encoding speed in your extension by taking advantage of distributed processing, where multiple extension instances process segments of source media concurrently. Determine individual segments of the source media to process in extension instances by implementing the [splitPoints(forFrameStart:duration:serviceCount:)](compressorextensionencoder/splitpoints%28forframestart_duration_servicecount_%29.md) method. To combine the individual encoded segments into a single output file, implement the [mergeSegments(\_:andAudio:toFile:)](compressorextensionencoder/mergesegments%28__andaudio_tofile_%29.md) method.

## Topics

### Determining the Source Media Segments

- [splitPoints(forFrameStart:duration:serviceCount:)](compressorextensionencoder/splitpoints%28forframestart_duration_servicecount_%29.md): Determines the source media segments based on the number of available encoder services.

### Encoding and Merging Segments

- [runTranscode(for:start:duration:toFile:startTimeCode:)](compressorextensionencoder/runtranscode%28for_start_duration_tofile_starttimecode_%29.md): Encodes the source media files to an output format based on the encoder settings.
- [mergeSegments(\_:andAudio:toFile:)](compressorextensionencoder/mergesegments%28__andaudio_tofile_%29.md): Merges multiple encoded video segments with an encoded audio segment.
- [CompressorExtensionEncoderPtr](compressorextensionencoderptr.md): The type alias to use for referencing the `CompressorExtensionEncoder` object.

### Providing Updates of the Encoding Process

- [statusMessage()](compressorextensionencoder/statusmessage%28%29.md): Returns the status of an encoding job.
- [percentDone()](compressorextensionencoder/percentdone%28%29.md): Returns the completion percentage of an encoding job.

### Canceling or Pausing the Encoding Process

- [cancel(forPause:)](compressorextensionencoder/cancel%28forpause_%29.md): Pauses or cancels an encoding job.
- [setStateFromPause(\_:)](compressorextensionencoder/setstatefrompause%28__%29.md): Sets the extension to a previously saved state.
- [percentLostOnPause()](compressorextensionencoder/percentlostonpause%28%29.md): Returns the percentage of the encoding job lost on pausing.

### Setting Encoding Values

- [setSettings(\_:)](compressorextensionencoder/setsettings%28__%29.md): Sets the current encoding settings based on the given setting values.
- [setAnnotations(\_:)](compressorextensionencoder/setannotations%28__%29.md): Adds annotations to an encoded media file.
- [setChapters(\_:)](compressorextensionencoder/setchapters%28__%29.md): Sets chapter markers of an encoded file from the contents of the input dictionary.

### Supporting Pixel Formats

- [supportedPixelFormats](compressorextensionencoder/supportedpixelformats.md): The supported pixel formats in an encoder extension.

# CompressorExtensionEncoder (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

An interface an extension implements to convert source media to the output format supported in your extension.

## Declaration

```objectivec
@protocol CompressorExtensionEncoder
```

<a id="overview"></a>

## Overview

Implement the methods in this interface to run an encoding job, support parallel processing, and send output files to a specified destination. To run an encoding job, the Compressor app calls the [runTranscodeFor:start:duration:toFile:startTimeCode:](compressorextensionencoder/runtranscode%28for_start_duration_tofile_starttimecode_%29.md) method. During the encoding process, the Compressor app calls the methods in the `CompressorExtensionEncoder` protocol to get updates on the status and progress of an encoding job.

Users sometimes request to pause a running encoder task to free up resources. You can choose to support resuming a job where it left off by saving the extension’s state while pausing in the implementation of the [cancelForPause:](compressorextensionencoder/cancel%28forpause_%29.md) method.

Increase the encoding speed in your extension by taking advantage of distributed processing, where multiple extension instances process segments of source media concurrently. Determine individual segments of the source media to process in extension instances by implementing the [splitPointsForFrameStart:duration:serviceCount:](compressorextensionencoder/splitpoints%28forframestart_duration_servicecount_%29.md) method. To combine the individual encoded segments into a single output file, implement the [mergeSegments:andAudio:toFile:](compressorextensionencoder/mergesegments%28__andaudio_tofile_%29.md) method.

## Topics

### Determining the Source Media Segments

- [splitPointsForFrameStart:duration:serviceCount:](compressorextensionencoder/splitpoints%28forframestart_duration_servicecount_%29.md): Determines the source media segments based on the number of available encoder services.

### Encoding and Merging Segments

- [runTranscodeFor:start:duration:toFile:startTimeCode:](compressorextensionencoder/runtranscode%28for_start_duration_tofile_starttimecode_%29.md): Encodes the source media files to an output format based on the encoder settings.
- [mergeSegments:andAudio:toFile:](compressorextensionencoder/mergesegments%28__andaudio_tofile_%29.md): Merges multiple encoded video segments with an encoded audio segment.
- [CompressorExtensionEncoderPtr](compressorextensionencoderptr.md): The type alias to use for referencing the `CompressorExtensionEncoder` object.

### Providing Updates of the Encoding Process

- [statusMessage](compressorextensionencoder/statusmessage%28%29.md): Returns the status of an encoding job.
- [percentDone](compressorextensionencoder/percentdone%28%29.md): Returns the completion percentage of an encoding job.

### Canceling or Pausing the Encoding Process

- [cancelForPause:](compressorextensionencoder/cancel%28forpause_%29.md): Pauses or cancels an encoding job.
- [setStateFromPause:](compressorextensionencoder/setstatefrompause%28__%29.md): Sets the extension to a previously saved state.
- [percentLostOnPause](compressorextensionencoder/percentlostonpause%28%29.md): Returns the percentage of the encoding job lost on pausing.

### Setting Encoding Values

- [setSettings:](compressorextensionencoder/setsettings%28__%29.md): Sets the current encoding settings based on the given setting values.
- [setAnnotations:](compressorextensionencoder/setannotations%28__%29.md): Adds annotations to an encoded media file.
- [setChapters:](compressorextensionencoder/setchapters%28__%29.md): Sets chapter markers of an encoded file from the contents of the input dictionary.

### Supporting Pixel Formats

- [supportedPixelFormats](compressorextensionencoder/supportedpixelformats.md): The supported pixel formats in an encoder extension.
