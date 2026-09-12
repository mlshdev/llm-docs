> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sensitivecontentanalysis/scsensitivityanalysis/issensitive](https://developer.apple.com/documentation/sensitivecontentanalysis/scsensitivityanalysis/issensitive)

# isSensitive (Swift)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 2.0+

A Boolean value that indicates whether the checked content contains sensitive material.

## Declaration

```swift
var isSensitive: Bool { get }
```

## Mentioned In

- [Testing your app’s response to sensitive media](../testing-your-app-s-response-to-sensitive-media.md)
- [Detecting sensitive content in media and providing intervention options](../detecting-nudity-in-media-and-providing-intervention-options.md)

<a id="discussion"></a>

## Discussion

The framework indicates that content is sensitive only when the active [analysisPolicy](../scsensitivityanalyzer/analysispolicy.md) is a value other than [SCSensitivityAnalysisPolicy.disabled](../scsensitivityanalysispolicy/disabled.md). When this property is `true`, check [detectedTypes](detectedtypes.md) to determine the specific categories of sensitive content that the framework detects in the media.

# sensitive (Objective-C)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 2.0+

A Boolean value that indicates whether the checked content contains sensitive material.

## Declaration

```objectivec
@property (readonly, getter=isSensitive) BOOL sensitive;
```

## Mentioned In

- [Testing your app’s response to sensitive media](../testing-your-app-s-response-to-sensitive-media.md)
- [Detecting sensitive content in media and providing intervention options](../detecting-nudity-in-media-and-providing-intervention-options.md)

<a id="discussion"></a>

## Discussion

The framework indicates that content is sensitive only when the active [analysisPolicy](../scsensitivityanalyzer/analysispolicy.md) is a value other than [SCSensitivityAnalysisPolicyDisabled](../scsensitivityanalysispolicy/disabled.md). When this property is `true`, check [detectedTypes](detectedtypes.md) to determine the specific categories of sensitive content that the framework detects in the media.
