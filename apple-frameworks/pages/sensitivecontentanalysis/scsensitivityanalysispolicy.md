> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sensitivecontentanalysis/scsensitivityanalysispolicy](https://developer.apple.com/documentation/sensitivecontentanalysis/scsensitivityanalysispolicy)

# SCSensitivityAnalysisPolicy (Swift)

**Framework:** Sensitive Content Analysis  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 2.0+

Configurations that represent the way the framework checks for sensitive content and how the app responds.

## Declaration

```swift
enum SCSensitivityAnalysisPolicy
```

<a id="overview"></a>

## Overview

This enumeration defines the possible values for the [SCSensitivityAnalyzer](scsensitivityanalyzer.md) property [analysisPolicy](scsensitivityanalyzer/analysispolicy.md). The values of the policy determine how your app manages sensitive content detection.

```swift
// Check the current analysis policy. 
let policy = analyzer.analysisPolicy
if policy == .disabled { return } 
else if policy == .simpleInterventions {
    // The Sensitive Content Warning setting is active.
} else if policy == .descriptiveInterventions {
    // The Communication Safety setting is active.
}
```

For guidance about observing the active analysis policy, see [Detecting sensitive content in media and providing intervention options](detecting-nudity-in-media-and-providing-intervention-options.md).

## Topics

### Checking and intervention strategies

- [SCSensitivityAnalysisPolicy.disabled](scsensitivityanalysispolicy/disabled.md): An indicator that the app lacks access to use the framework.
- [SCSensitivityAnalysisPolicy.simpleInterventions](scsensitivityanalysispolicy/simpleinterventions.md): An indicator that user preference requests discrete detection of sensitive content.
- [SCSensitivityAnalysisPolicy.descriptiveInterventions](scsensitivityanalysispolicy/descriptiveinterventions.md): An indicator that the person requests overt detection of sensitive content.

### Creating an analysis policy value

- [init(rawValue:)](scsensitivityanalysispolicy/init%28rawvalue_%29.md): Creates an analysis policy value from the enumeration’s underlying type.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Image and video file analysis

- [SCSensitivityAnalyzer](scsensitivityanalyzer.md): An object that analyzes media for sensitive content.

# SCSensitivityAnalysisPolicy (Objective-C)

**Framework:** Sensitive Content Analysis  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 2.0+

Configurations that represent the way the framework checks for sensitive content and how the app responds.

## Declaration

```objectivec
enum SCSensitivityAnalysisPolicy : NSInteger;
```

<a id="overview"></a>

## Overview

This enumeration defines the possible values for the [SCSensitivityAnalyzer](scsensitivityanalyzer.md) property [analysisPolicy](scsensitivityanalyzer/analysispolicy.md). The values of the policy determine how your app manages sensitive content detection.

```swift
// Check the current analysis policy. 
let policy = analyzer.analysisPolicy
if policy == .disabled { return } 
else if policy == .simpleInterventions {
    // The Sensitive Content Warning setting is active.
} else if policy == .descriptiveInterventions {
    // The Communication Safety setting is active.
}
```

For guidance about observing the active analysis policy, see [Detecting sensitive content in media and providing intervention options](detecting-nudity-in-media-and-providing-intervention-options.md).

## Topics

### Checking and intervention strategies

- [SCSensitivityAnalysisPolicyDisabled](scsensitivityanalysispolicy/disabled.md): An indicator that the app lacks access to use the framework.
- [SCSensitivityAnalysisPolicySimpleInterventions](scsensitivityanalysispolicy/simpleinterventions.md): An indicator that user preference requests discrete detection of sensitive content.
- [SCSensitivityAnalysisPolicyDescriptiveInterventions](scsensitivityanalysispolicy/descriptiveinterventions.md): An indicator that the person requests overt detection of sensitive content.

## See Also

### Image and video file analysis

- [SCSensitivityAnalyzer](scsensitivityanalyzer.md): An object that analyzes media for sensitive content.
