> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enexposuredetectionsummary/dayssincelastexposure](https://developer.apple.com/documentation/exposurenotification/enexposuredetectionsummary/dayssincelastexposure)

# daysSinceLastExposure (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Number of days since the most recent exposure.

> No longer supported.

## Declaration

```swift
var daysSinceLastExposure: Int { get }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

The values for this property represent the number of days since the most recent exposure, going backwards. For example, a value of `0` means that the person was exposed today, `1` was yesterday, `2` was two days ago, and so on.

This property is only valid if [matchedKeyCount](matchedkeycount.md) \> 0.

The framework computes this property’s value across all matching exposures, not just exposures that meet or exceed [minimumRiskScore](../enexposureconfiguration/minimumriskscore.md) or [minimumRiskScoreFullRange](../enexposureconfiguration/minimumriskscorefullrange.md).

> **Note**

>  This value is only available when `ENAPIVersion` is set to `1` in the app’s Info.plist file.

## See Also

### Exposure Criteria

- [attenuationDurations](attenuationdurations.md): Deprecated. An array of durations at specific radio signal attenuations.
- [matchedKeyCount](matchedkeycount.md): Deprecated. The number of keys that matched for an exposure detection.
- [maximumRiskScore](maximumriskscore.md): Deprecated. The vaue that represents the highest risk score of all exposure incidents.
- [maximumRiskScoreFullRange](maximumriskscorefullrange.md): Deprecated. The value that represents the highest, full-range risk score of all the exposures for the user.
- [riskScoreSumFullRange](riskscoresumfullrange.md): Deprecated. The sum of the full-range risk scores for all exposures for the user.
- [metadata](metadata.md): Deprecated. The metadata associated with the summary.
- [daySummaries](daysummaries.md): Deprecated. The summary of each day that contains an exposure.

# daysSinceLastExposure (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Number of days since the most recent exposure.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSInteger daysSinceLastExposure;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

The values for this property represent the number of days since the most recent exposure, going backwards. For example, a value of `0` means that the person was exposed today, `1` was yesterday, `2` was two days ago, and so on.

This property is only valid if [matchedKeyCount](matchedkeycount.md) \> 0.

The framework computes this property’s value across all matching exposures, not just exposures that meet or exceed [minimumRiskScore](../enexposureconfiguration/minimumriskscore.md) or [minimumRiskScoreFullRange](../enexposureconfiguration/minimumriskscorefullrange.md).

> **Note**

>  This value is only available when `ENAPIVersion` is set to `1` in the app’s Info.plist file.

## See Also

### Exposure Criteria

- [attenuationDurations](attenuationdurations.md): Deprecated. An array of durations at specific radio signal attenuations.
- [matchedKeyCount](matchedkeycount.md): Deprecated. The number of keys that matched for an exposure detection.
- [maximumRiskScore](maximumriskscore.md): Deprecated. The vaue that represents the highest risk score of all exposure incidents.
- [maximumRiskScoreFullRange](maximumriskscorefullrange.md): Deprecated. The value that represents the highest, full-range risk score of all the exposures for the user.
- [riskScoreSumFullRange](riskscoresumfullrange.md): Deprecated. The sum of the full-range risk scores for all exposures for the user.
- [metadata](metadata.md): Deprecated. The metadata associated with the summary.
- [daySummaries](daysummaries.md): Deprecated. The summary of each day that contains an exposure.
