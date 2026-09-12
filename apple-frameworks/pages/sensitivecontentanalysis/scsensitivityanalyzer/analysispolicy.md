> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sensitivecontentanalysis/scsensitivityanalyzer/analysispolicy](https://developer.apple.com/documentation/sensitivecontentanalysis/scsensitivityanalyzer/analysispolicy)

# analysisPolicy (Swift)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 2.0+

A property that determines if the app detects nudity and how the app responds.

## Declaration

```swift
var analysisPolicy: SCSensitivityAnalysisPolicy { get }
```

## Mentioned In

- [Detecting sensitive content in media and providing intervention options](../detecting-nudity-in-media-and-providing-intervention-options.md)

<a id="discussion"></a>

## Discussion

Before attempting to use the framework, first check the [analysisPolicy](analysispolicy.md):

```swift
let policy = analyzer.analysisPolicy
if policy == .disabled { return }
```

An app can utilize the Sensitive Content Analysis framework when the system sets the value of this property to either:

- [SCSensitivityAnalysisPolicy.simpleInterventions](../scsensitivityanalysispolicy/simpleinterventions.md), which indicates that someone activates the Communication Safety parental control in Screen Time.
- [SCSensitivityAnalysisPolicy.descriptiveInterventions](../scsensitivityanalysispolicy/descriptiveinterventions.md), which indicates that someone activates the Sensitive Content Warning user preference.

The framework won’t detect nudity if the system disables this property. For more information on why the system disables sensitive content analysis, see [SCSensitivityAnalysisPolicy.disabled](../scsensitivityanalysispolicy/disabled.md).

# analysisPolicy (Objective-C)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 2.0+

A property that determines if the app detects nudity and how the app responds.

## Declaration

```objectivec
@property (assign, readonly) SCSensitivityAnalysisPolicy analysisPolicy;
```

## Mentioned In

- [Detecting sensitive content in media and providing intervention options](../detecting-nudity-in-media-and-providing-intervention-options.md)

<a id="discussion"></a>

## Discussion

Before attempting to use the framework, first check the [analysisPolicy](analysispolicy.md):

```swift
let policy = analyzer.analysisPolicy
if policy == .disabled { return }
```

An app can utilize the Sensitive Content Analysis framework when the system sets the value of this property to either:

- [SCSensitivityAnalysisPolicySimpleInterventions](../scsensitivityanalysispolicy/simpleinterventions.md), which indicates that someone activates the Communication Safety parental control in Screen Time.
- [SCSensitivityAnalysisPolicyDescriptiveInterventions](../scsensitivityanalysispolicy/descriptiveinterventions.md), which indicates that someone activates the Sensitive Content Warning user preference.

The framework won’t detect nudity if the system disables this property. For more information on why the system disables sensitive content analysis, see [SCSensitivityAnalysisPolicyDisabled](../scsensitivityanalysispolicy/disabled.md).
