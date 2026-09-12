> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enexposuredetectionsummary/daysummaries](https://developer.apple.com/documentation/exposurenotification/enexposuredetectionsummary/daysummaries)

# daySummaries (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The summary of each day that contains an exposure.

> No longer supported.

## Declaration

```swift
var daySummaries: [ENExposureDaySummary] { get }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.7 and later.

Day summaries are only available in apps specifying an `ENAPIVersion` of 2 in their Info.plist.

## See Also

### Exposure Criteria

- [attenuationDurations](attenuationdurations.md): Deprecated. An array of durations at specific radio signal attenuations.
- [daysSinceLastExposure](dayssincelastexposure.md): Deprecated. Number of days since the most recent exposure.
- [matchedKeyCount](matchedkeycount.md): Deprecated. The number of keys that matched for an exposure detection.
- [maximumRiskScore](maximumriskscore.md): Deprecated. The vaue that represents the highest risk score of all exposure incidents.
- [maximumRiskScoreFullRange](maximumriskscorefullrange.md): Deprecated. The value that represents the highest, full-range risk score of all the exposures for the user.
- [riskScoreSumFullRange](riskscoresumfullrange.md): Deprecated. The sum of the full-range risk scores for all exposures for the user.
- [metadata](metadata.md): Deprecated. The metadata associated with the summary.

# daySummaries (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The summary of each day that contains an exposure.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<ENExposureDaySummary *> * daySummaries;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.7 and later.

Day summaries are only available in apps specifying an `ENAPIVersion` of 2 in their Info.plist.

## See Also

### Exposure Criteria

- [attenuationDurations](attenuationdurations.md): Deprecated. An array of durations at specific radio signal attenuations.
- [daysSinceLastExposure](dayssincelastexposure.md): Deprecated. Number of days since the most recent exposure.
- [matchedKeyCount](matchedkeycount.md): Deprecated. The number of keys that matched for an exposure detection.
- [maximumRiskScore](maximumriskscore.md): Deprecated. The vaue that represents the highest risk score of all exposure incidents.
- [maximumRiskScoreFullRange](maximumriskscorefullrange.md): Deprecated. The value that represents the highest, full-range risk score of all the exposures for the user.
- [riskScoreSumFullRange](riskscoresumfullrange.md): Deprecated. The sum of the full-range risk scores for all exposures for the user.
- [metadata](metadata.md): Deprecated. The metadata associated with the summary.
