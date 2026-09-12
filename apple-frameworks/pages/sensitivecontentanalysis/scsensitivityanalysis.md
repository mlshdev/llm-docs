> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sensitivecontentanalysis/scsensitivityanalysis](https://developer.apple.com/documentation/sensitivecontentanalysis/scsensitivityanalysis)

# SCSensitivityAnalysis (Swift)

**Framework:** Sensitive Content Analysis  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 2.0+

An object that indicates whether sensitive content is present and includes intervention guidance.

## Declaration

```swift
class SCSensitivityAnalysis
```

## Mentioned In

- [Testing your app’s response to sensitive media](testing-your-app-s-response-to-sensitive-media.md)

<a id="overview"></a>

## Overview

The framework provides an instance of this class to convey the results of content sensitivity checks, for example:

- The [SCSensitivityAnalyzer](scsensitivityanalyzer.md) completion handler [analyzeImage(\_:completionHandler:)](scsensitivityanalyzer/analyzeimage%28__completionhandler_%29.md)
- The [SCVideoStreamAnalyzer](scvideostreamanalyzer.md) callback [SCVideoStreamAnalysisChangeHandler](scvideostreamanalysischangehandler.md)

## Topics

### Confirming the presence of sensitive content

- [isSensitive](scsensitivityanalysis/issensitive.md): A Boolean value that indicates whether the checked content contains sensitive material.

### Identifying content categories

- [detectedTypes](scsensitivityanalysis/detectedtypes.md): A property that contains the categories of sensitive content that analysis detects.
- [SCSensitivityAnalysis.ContentType](scsensitivityanalysis/contenttype.md): A type that identifies a category of sensitive content.

### Receiving intervention guidance

- [shouldIndicateSensitivity](scsensitivityanalysis/shouldindicatesensitivity.md): Intervention guidance that suggests the app indicate the presence of sensitive content.
- [shouldInterruptVideo](scsensitivityanalysis/shouldinterruptvideo.md): Intervention guidance that suggests the app interrupt the video stream.
- [shouldMuteAudio](scsensitivityanalysis/shouldmuteaudio.md): Intervention guidance that suggests the app mute the audio of the current video stream.

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

# SCSensitivityAnalysis (Objective-C)

**Framework:** Sensitive Content Analysis  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 2.0+

An object that indicates whether sensitive content is present and includes intervention guidance.

## Declaration

```objectivec
@interface SCSensitivityAnalysis : NSObject
```

## Mentioned In

- [Testing your app’s response to sensitive media](testing-your-app-s-response-to-sensitive-media.md)

<a id="overview"></a>

## Overview

The framework provides an instance of this class to convey the results of content sensitivity checks, for example:

- The [SCSensitivityAnalyzer](scsensitivityanalyzer.md) completion handler [analyzeCGImage:completionHandler:](scsensitivityanalyzer/analyzeimage%28__completionhandler_%29.md)
- The [SCVideoStreamAnalyzer](scvideostreamanalyzer.md) callback [SCVideoStreamAnalysisChangeHandler](scvideostreamanalysischangehandler.md)

## Topics

### Confirming the presence of sensitive content

- [sensitive](scsensitivityanalysis/issensitive.md): A Boolean value that indicates whether the checked content contains sensitive material.

### Identifying content categories

- [detectedTypes](scsensitivityanalysis/detectedtypes.md): A property that contains the categories of sensitive content that analysis detects.
- [SCSensitiveContentType](scsensitivityanalysis/contenttype.md): A type that identifies a category of sensitive content.

### Receiving intervention guidance

- [shouldIndicateSensitivity](scsensitivityanalysis/shouldindicatesensitivity.md): Intervention guidance that suggests the app indicate the presence of sensitive content.
- [shouldInterruptVideo](scsensitivityanalysis/shouldinterruptvideo.md): Intervention guidance that suggests the app interrupt the video stream.
- [shouldMuteAudio](scsensitivityanalysis/shouldmuteaudio.md): Intervention guidance that suggests the app mute the audio of the current video stream.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
