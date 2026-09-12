> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sensitivecontentanalysis/scsensitivityanalyzer](https://developer.apple.com/documentation/sensitivecontentanalysis/scsensitivityanalyzer)

# SCSensitivityAnalyzer (Swift)

**Framework:** Sensitive Content Analysis  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 2.0+

An object that analyzes media for sensitive content.

## Declaration

```swift
class SCSensitivityAnalyzer
```

## Mentioned In

- [Detecting sensitive content in media and providing intervention options](detecting-nudity-in-media-and-providing-intervention-options.md)
- [Testing your app’s response to sensitive media](testing-your-app-s-response-to-sensitive-media.md)

<a id="overview"></a>

## Overview

To check an image for sensitive content, call one of this class’s `analyzeImage` methods and pass in a user-provided image, or a URL to the image.

```swift
// Analyze an image file at a particular URL.
let response = try await analyzer.analyzeImage(at: url)
```

To analyze a video file, pass a URL to a video on disk into [videoAnalysis(forFileAt:)](scsensitivityanalyzer/videoanalysis%28forfileat_%29.md) and wait for the [hasSensitiveContent()](scsensitivityanalyzer/videoanalysishandler/hassensitivecontent%28%29.md) method to complete.

```swift
let handler = analyzer.videoAnalysis(forFileAt: videoFileUrl)
let response = try await handler.hasSensitiveContent()
```

This class successfully detects sensitive content only when [analysisPolicy](scsensitivityanalyzer/analysispolicy.md) is a value other than [SCSensitivityAnalysisPolicy.disabled](scsensitivityanalysispolicy/disabled.md).

> **Note**

>  To analyze a video stream rather than static files, see [SCVideoStreamAnalyzer](scvideostreamanalyzer.md).

## Topics

### Creating a sensitivity analyzer

- [init()](scsensitivityanalyzer/init%28%29.md): Creates a sensitivity analyzer.

### Determining a detection strategy

- [analysisPolicy](scsensitivityanalyzer/analysispolicy.md): A property that determines if the app detects nudity and how the app responds.

### Analyzing images

- [analyzeImage(\_:completionHandler:)](scsensitivityanalyzer/analyzeimage%28__completionhandler_%29.md): Analyzes an image for sensitive content and runs code on completion.
- [analyzeImage(at:completionHandler:)](scsensitivityanalyzer/analyzeimage%28at_completionhandler_%29.md): Analyzes an image file on disk at a URL and runs code on completion.

### Analyzing video

- [videoAnalysis(forFileAt:)](scsensitivityanalyzer/videoanalysis%28forfileat_%29.md): Analyzes a video file on disk at a URL for sensitive content.
- [SCSensitivityAnalyzer.VideoAnalysisHandler](scsensitivityanalyzer/videoanalysishandler.md): An object that checks if a video contains sensitive content and provides status updates.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Image and video file analysis

- [SCSensitivityAnalysisPolicy](scsensitivityanalysispolicy.md): Configurations that represent the way the framework checks for sensitive content and how the app responds.

# SCSensitivityAnalyzer (Objective-C)

**Framework:** Sensitive Content Analysis  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 2.0+

An object that analyzes media for sensitive content.

## Declaration

```objectivec
@interface SCSensitivityAnalyzer : NSObject
```

## Mentioned In

- [Detecting sensitive content in media and providing intervention options](detecting-nudity-in-media-and-providing-intervention-options.md)
- [Testing your app’s response to sensitive media](testing-your-app-s-response-to-sensitive-media.md)

<a id="overview"></a>

## Overview

To check an image for sensitive content, call one of this class’s `analyzeImage` methods and pass in a user-provided image, or a URL to the image.

```swift
// Analyze an image file at a particular URL.
let response = try await analyzer.analyzeImage(at: url)
```

To analyze a video file, pass a URL to a video on disk into [videoAnalysis(forFileAt:)](scsensitivityanalyzer/videoanalysis%28forfileat_%29.md) and wait for the [hasSensitiveContent()](scsensitivityanalyzer/videoanalysishandler/hassensitivecontent%28%29.md) method to complete.

```swift
let handler = analyzer.videoAnalysis(forFileAt: videoFileUrl)
let response = try await handler.hasSensitiveContent()
```

This class successfully detects sensitive content only when [analysisPolicy](scsensitivityanalyzer/analysispolicy.md) is a value other than [SCSensitivityAnalysisPolicyDisabled](scsensitivityanalysispolicy/disabled.md).

> **Note**

>  To analyze a video stream rather than static files, see [SCVideoStreamAnalyzer](scvideostreamanalyzer.md).

## Topics

### Creating a sensitivity analyzer

- [init](scsensitivityanalyzer/init%28%29.md): Creates a sensitivity analyzer.

### Determining a detection strategy

- [analysisPolicy](scsensitivityanalyzer/analysispolicy.md): A property that determines if the app detects nudity and how the app responds.

### Analyzing images

- [analyzeCGImage:completionHandler:](scsensitivityanalyzer/analyzeimage%28__completionhandler_%29.md): Analyzes an image for sensitive content and runs code on completion.
- [analyzeImageFile:completionHandler:](scsensitivityanalyzer/analyzeimage%28at_completionhandler_%29.md): Analyzes an image file on disk at a URL and runs code on completion.

### Analyzing video

- [analyzeVideoFile:completionHandler:](scsensitivityanalyzer/analyzevideofile_completionhandler_.md): Analyzes a video file on disk at the given URL and runs the given code on completion.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Image and video file analysis

- [SCSensitivityAnalysisPolicy](scsensitivityanalysispolicy.md): Configurations that represent the way the framework checks for sensitive content and how the app responds.
