> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sensitivecontentanalysis/scsensitivityanalysispolicy/disabled](https://developer.apple.com/documentation/sensitivecontentanalysis/scsensitivityanalysispolicy/disabled)

# SCSensitivityAnalysisPolicy.disabled (Swift)

**Framework:** Sensitive Content Analysis  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 2.0+

An indicator that the app lacks access to use the framework.

## Declaration

```swift
case disabled
```

## Mentioned In

- [Detecting sensitive content in media and providing intervention options](../detecting-nudity-in-media-and-providing-intervention-options.md)

<a id="discussion"></a>

## Discussion

If this value is [analysisPolicy](../scsensitivityanalyzer/analysispolicy.md), the framework doesn’t detect sensitive content. The system disables sensitive content analysis under any of the following conditions:

- The app lacks the necessary [com.apple.developer.sensitivecontentanalysis.client](../../bundleresources/entitlements/com.apple.developer.sensitivecontentanalysis.client.md) entitlement.
- Neither the Sensitive Content Warning user preference nor the Communication Safety parental control in Screen Time are active.
- The person disables the Sensitive Content Warnings toggle in your app’s Settings.

## See Also

### Checking and intervention strategies

- [SCSensitivityAnalysisPolicy.simpleInterventions](simpleinterventions.md): An indicator that user preference requests discrete detection of sensitive content.
- [SCSensitivityAnalysisPolicy.descriptiveInterventions](descriptiveinterventions.md): An indicator that the person requests overt detection of sensitive content.

# SCSensitivityAnalysisPolicyDisabled (Objective-C)

**Framework:** Sensitive Content Analysis  
**Kind:** Enumeration Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 2.0+

An indicator that the app lacks access to use the framework.

## Declaration

```objectivec
SCSensitivityAnalysisPolicyDisabled
```

## Mentioned In

- [Detecting sensitive content in media and providing intervention options](../detecting-nudity-in-media-and-providing-intervention-options.md)

<a id="discussion"></a>

## Discussion

If this value is [analysisPolicy](../scsensitivityanalyzer/analysispolicy.md), the framework doesn’t detect sensitive content. The system disables sensitive content analysis under any of the following conditions:

- The app lacks the necessary [com.apple.developer.sensitivecontentanalysis.client](../../bundleresources/entitlements/com.apple.developer.sensitivecontentanalysis.client.md) entitlement.
- Neither the Sensitive Content Warning user preference nor the Communication Safety parental control in Screen Time are active.
- The person disables the Sensitive Content Warnings toggle in your app’s Settings.

## See Also

### Checking and intervention strategies

- [SCSensitivityAnalysisPolicySimpleInterventions](simpleinterventions.md): An indicator that user preference requests discrete detection of sensitive content.
- [SCSensitivityAnalysisPolicyDescriptiveInterventions](descriptiveinterventions.md): An indicator that the person requests overt detection of sensitive content.
