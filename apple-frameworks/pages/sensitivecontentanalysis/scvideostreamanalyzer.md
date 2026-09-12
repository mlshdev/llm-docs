> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sensitivecontentanalysis/scvideostreamanalyzer](https://developer.apple.com/documentation/sensitivecontentanalysis/scvideostreamanalyzer)

# SCVideoStreamAnalyzer (Swift)

**Framework:** Sensitive Content Analysis  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An object that monitors a stream of video by analyzing frames for sensitive content.

## Declaration

```swift
class SCVideoStreamAnalyzer
```

## Mentioned In

- [Detecting sensitive content in media and providing intervention options](detecting-nudity-in-media-and-providing-intervention-options.md)

<a id="overview"></a>

## Overview

Use this class to detect sensitive content in a video stream, such as on a conference call that your app implements. The class detects sensitive content in the video stream from either the device’s camera or the remote devices signed into the call, depending on how you configure the analyzer.

Create an instance of this class for each video stream in the call.

To begin analyzing the stream, pass it to either [beginAnalysis(of:)](scvideostreamanalyzer/beginanalysis%28of_%29-78qm.md) ([AVCaptureDeviceInput](../avfoundation/avcapturedeviceinput.md)) or [beginAnalysis(of:)](scvideostreamanalyzer/beginanalysis%28of_%29-9ehkx.md) ([VTDecompressionSession](../videotoolbox/vtdecompressionsession.md)), depending on your video playback implementation.

> **Important**

>  This class works only when the Communication Safety parental control in Screen Time is enabled, or when the Sensitive Content Warnings setting is turned on. The initializers of this class throw an error if both settings are off.

<a id="React-to-sensitive-content"></a>

### React to sensitive content

When the framework detects sensitive content in the stream, it calls [analysisChangedHandler](scvideostreamanalyzer/analysischangedhandler.md) immediately with an [SCSensitivityAnalysis](scsensitivityanalysis.md) object that includes information about the detection.

You implement the [analysisChangedHandler](scvideostreamanalyzer/analysischangedhandler.md) callback to inspect the detection results, which includes confirmation that content is sensitive as well as guidance on next steps your app can take. The framework offers your app suggestions in the handler, which include:

- Alerting the person to the presence of sensitive content ([shouldIndicateSensitivity](scsensitivityanalysis/shouldindicatesensitivity.md))
- Interrupting video playback ([shouldInterruptVideo](scsensitivityanalysis/shouldinterruptvideo.md))
- Muting audio ([shouldMuteAudio](scsensitivityanalysis/shouldmuteaudio.md))

To stop analyzing the stream, call [endAnalysis()](scvideostreamanalyzer/endanalysis%28%29.md). If your app implements a custom stream decoder, you can analyze individual frames by passing pixel buffers to [analyze(\_:)](scvideostreamanalyzer/analyze%28__%29.md).

In the event of an error during analysis, the handler receives an error object that details what went wrong. For more information, see: [SCVideoStreamAnalysisChangeHandler](scvideostreamanalysischangehandler.md).

<a id="Add-the-app-entitlement"></a>

### Add the app entitlement

To use this class, the system requires the [com.apple.developer.sensitivecontentanalysis.client](../bundleresources/entitlements/com.apple.developer.sensitivecontentanalysis.client.md) entitlement in your app’s code signature. Calls to the framework fail to return positive results without it. You can add this entitlement to your app by enabling the Sensitive Content Analysis capability in Xcode; see [Adding capabilities to your app](https://developer.apple.com/documentation/xcode/adding-capabilities-to-your-app).

For more information, see [Detecting sensitive content in media and providing intervention options](detecting-nudity-in-media-and-providing-intervention-options.md).

## Topics

### Creating a video stream analyzer

- [init(participantUUID:streamDirection:)](scvideostreamanalyzer/init%28participantuuid_streamdirection_%29.md): Creates a video stream analyzer for the given call participant and stream option.
- [SCVideoStreamAnalyzer.StreamDirection](scvideostreamanalyzer/streamdirection.md): Options for the different types of analyzed video streams.

### Analyzing a video stream

- [analyze(\_:)](scvideostreamanalyzer/analyze%28__%29.md): Analyzes individual video-stream frames for sensitive content.
- [beginAnalysis(of:)](scvideostreamanalyzer/beginanalysis%28of_%29-78qm.md): Analyzes video frames for the given capture device input.
- [beginAnalysis(of:)](scvideostreamanalyzer/beginanalysis%28of_%29-9ehkx.md): Analyzes video frames for the given decompression session.
- [analysisChanges](scvideostreamanalyzer/analysischanges.md): A stream your app uses to receive video-stream analysis results.
- [endAnalysis()](scvideostreamanalyzer/endanalysis%28%29.md): Stops stream analysis.

### Responding to sensitive content

- [analysis](scvideostreamanalyzer/analysis.md): The results of the first detected sensitive video frame.
- [continueStream()](scvideostreamanalyzer/continuestream%28%29.md): Indicates that your app is ready to resume video stream analysis.

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

# SCVideoStreamAnalyzer (Objective-C)

**Framework:** Sensitive Content Analysis  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An object that monitors a stream of video by analyzing frames for sensitive content.

## Declaration

```objectivec
@interface SCVideoStreamAnalyzer : NSObject
```

## Mentioned In

- [Detecting sensitive content in media and providing intervention options](detecting-nudity-in-media-and-providing-intervention-options.md)

<a id="overview"></a>

## Overview

Use this class to detect sensitive content in a video stream, such as on a conference call that your app implements. The class detects sensitive content in the video stream from either the device’s camera or the remote devices signed into the call, depending on how you configure the analyzer.

Create an instance of this class for each video stream in the call.

To begin analyzing the stream, pass it to either [beginAnalysisOfCaptureDeviceInput:error:](scvideostreamanalyzer/beginanalysis%28of_%29-78qm.md) ([AVCaptureDeviceInput](../avfoundation/avcapturedeviceinput.md)) or [beginAnalysisOfDecompressionSession:error:](scvideostreamanalyzer/beginanalysis%28of_%29-9ehkx.md) ([VTDecompressionSessionRef](../videotoolbox/vtdecompressionsession.md)), depending on your video playback implementation.

> **Important**

>  This class works only when the Communication Safety parental control in Screen Time is enabled, or when the Sensitive Content Warnings setting is turned on. The initializers of this class throw an error if both settings are off.

<a id="React-to-sensitive-content"></a>

### React to sensitive content

When the framework detects sensitive content in the stream, it calls [analysisChangedHandler](scvideostreamanalyzer/analysischangedhandler.md) immediately with an [SCSensitivityAnalysis](scsensitivityanalysis.md) object that includes information about the detection.

You implement the [analysisChangedHandler](scvideostreamanalyzer/analysischangedhandler.md) callback to inspect the detection results, which includes confirmation that content is sensitive as well as guidance on next steps your app can take. The framework offers your app suggestions in the handler, which include:

- Alerting the person to the presence of sensitive content ([shouldIndicateSensitivity](scsensitivityanalysis/shouldindicatesensitivity.md))
- Interrupting video playback ([shouldInterruptVideo](scsensitivityanalysis/shouldinterruptvideo.md))
- Muting audio ([shouldMuteAudio](scsensitivityanalysis/shouldmuteaudio.md))

To stop analyzing the stream, call [endAnalysis](scvideostreamanalyzer/endanalysis%28%29.md). If your app implements a custom stream decoder, you can analyze individual frames by passing pixel buffers to [analyzePixelBuffer:](scvideostreamanalyzer/analyze%28__%29.md).

In the event of an error during analysis, the handler receives an error object that details what went wrong. For more information, see: [SCVideoStreamAnalysisChangeHandler](scvideostreamanalysischangehandler.md).

<a id="Add-the-app-entitlement"></a>

### Add the app entitlement

To use this class, the system requires the [com.apple.developer.sensitivecontentanalysis.client](../bundleresources/entitlements/com.apple.developer.sensitivecontentanalysis.client.md) entitlement in your app’s code signature. Calls to the framework fail to return positive results without it. You can add this entitlement to your app by enabling the Sensitive Content Analysis capability in Xcode; see [Adding capabilities to your app](https://developer.apple.com/documentation/xcode/adding-capabilities-to-your-app).

For more information, see [Detecting sensitive content in media and providing intervention options](detecting-nudity-in-media-and-providing-intervention-options.md).

## Topics

### Creating a video stream analyzer

- [initWithParticipantUUID:streamDirection:error:](scvideostreamanalyzer/init%28participantuuid_streamdirection_%29.md): Creates a video stream analyzer for the given call participant and stream option.
- [SCVideoStreamAnalyzerStreamDirection](scvideostreamanalyzer/streamdirection.md): Options for the different types of analyzed video streams.

### Analyzing a video stream

- [analyzePixelBuffer:](scvideostreamanalyzer/analyze%28__%29.md): Analyzes individual video-stream frames for sensitive content.
- [beginAnalysisOfCaptureDeviceInput:error:](scvideostreamanalyzer/beginanalysis%28of_%29-78qm.md): Analyzes video frames for the given capture device input.
- [beginAnalysisOfDecompressionSession:error:](scvideostreamanalyzer/beginanalysis%28of_%29-9ehkx.md): Analyzes video frames for the given decompression session.
- [endAnalysis](scvideostreamanalyzer/endanalysis%28%29.md): Stops stream analysis.

### Responding to sensitive content

- [analysis](scvideostreamanalyzer/analysis.md): The results of the first detected sensitive video frame.
- [analysisChangedHandler](scvideostreamanalyzer/analysischangedhandler.md): A handler that your app provides to react to sensitive content detection.
- [SCVideoStreamAnalysisChangeHandler](scvideostreamanalysischangehandler.md): A handler your app provides to receive video-stream analysis results.
- [continueStream](scvideostreamanalyzer/continuestream%28%29.md): Indicates that your app is ready to resume video stream analysis.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
