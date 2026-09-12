> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enexposuredetectionsummary/maximumriskscorefullrange](https://developer.apple.com/documentation/exposurenotification/enexposuredetectionsummary/maximumriskscorefullrange)

# maximumRiskScoreFullRange (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The value that represents the highest, full-range risk score of all the exposures for the user.

> No longer supported.

## Declaration

```swift
var maximumRiskScoreFullRange: Double { get }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.6 and later.

This value is not limited by [ENRiskScoreMax](../enriskscoremax.md).

> **Note**

>  This value is only available when `ENAPIVersion` is set to `1` in the app’s Info.plist file.

## See Also

### Exposure Criteria

- [attenuationDurations](attenuationdurations.md): Deprecated. An array of durations at specific radio signal attenuations.
- [daysSinceLastExposure](dayssincelastexposure.md): Deprecated. Number of days since the most recent exposure.
- [matchedKeyCount](matchedkeycount.md): Deprecated. The number of keys that matched for an exposure detection.
- [maximumRiskScore](maximumriskscore.md): Deprecated. The vaue that represents the highest risk score of all exposure incidents.
- [riskScoreSumFullRange](riskscoresumfullrange.md): Deprecated. The sum of the full-range risk scores for all exposures for the user.
- [metadata](metadata.md): Deprecated. The metadata associated with the summary.
- [daySummaries](daysummaries.md): Deprecated. The summary of each day that contains an exposure.

# maximumRiskScoreFullRange (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The value that represents the highest, full-range risk score of all the exposures for the user.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) double maximumRiskScoreFullRange;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.6 and later.

This value is not limited by [ENRiskScoreMax](../enriskscoremax.md).

> **Note**

>  This value is only available when `ENAPIVersion` is set to `1` in the app’s Info.plist file.

## See Also

### Exposure Criteria

- [attenuationDurations](attenuationdurations.md): Deprecated. An array of durations at specific radio signal attenuations.
- [daysSinceLastExposure](dayssincelastexposure.md): Deprecated. Number of days since the most recent exposure.
- [matchedKeyCount](matchedkeycount.md): Deprecated. The number of keys that matched for an exposure detection.
- [maximumRiskScore](maximumriskscore.md): Deprecated. The vaue that represents the highest risk score of all exposure incidents.
- [riskScoreSumFullRange](riskscoresumfullrange.md): Deprecated. The sum of the full-range risk scores for all exposures for the user.
- [metadata](metadata.md): Deprecated. The metadata associated with the summary.
- [daySummaries](daysummaries.md): Deprecated. The summary of each day that contains an exposure.
