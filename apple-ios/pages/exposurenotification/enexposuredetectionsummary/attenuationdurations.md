> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enexposuredetectionsummary/attenuationdurations](https://developer.apple.com/documentation/exposurenotification/enexposuredetectionsummary/attenuationdurations)

# attenuationDurations (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

An array of durations at specific radio signal attenuations.

> No longer supported.

## Declaration

```swift
var attenuationDurations: [NSNumber] { get }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

An array that contains the duration, in seconds, at certain attenuations, using an aggregated maximum exposures of 30 minutes.

`array[0]` =  Sum of durations for all exposures when attenuation value was `A <= X`.

`array[1]` =  Sum of durations for all exposures when attenuation value was `X < A <= Y`.

`array[2]` =  Sum of durations for all exposures when attenuation value was `Y < A`.

Use the [attenuationDurationThresholds](../enexposureconfiguration/attenuationdurationthresholds.md) to configure the `X` and `Y` values.

> **Note**

>  This value is only available when `ENAPIVersion` is set to `1` in the app’s Info.plist file.

## See Also

### Exposure Criteria

- [daysSinceLastExposure](dayssincelastexposure.md): Deprecated. Number of days since the most recent exposure.
- [matchedKeyCount](matchedkeycount.md): Deprecated. The number of keys that matched for an exposure detection.
- [maximumRiskScore](maximumriskscore.md): Deprecated. The vaue that represents the highest risk score of all exposure incidents.
- [maximumRiskScoreFullRange](maximumriskscorefullrange.md): Deprecated. The value that represents the highest, full-range risk score of all the exposures for the user.
- [riskScoreSumFullRange](riskscoresumfullrange.md): Deprecated. The sum of the full-range risk scores for all exposures for the user.
- [metadata](metadata.md): Deprecated. The metadata associated with the summary.
- [daySummaries](daysummaries.md): Deprecated. The summary of each day that contains an exposure.

# attenuationDurations (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

An array of durations at specific radio signal attenuations.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSNumber *> * attenuationDurations;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

An array that contains the duration, in seconds, at certain attenuations, using an aggregated maximum exposures of 30 minutes.

`array[0]` =  Sum of durations for all exposures when attenuation value was `A <= X`.

`array[1]` =  Sum of durations for all exposures when attenuation value was `X < A <= Y`.

`array[2]` =  Sum of durations for all exposures when attenuation value was `Y < A`.

Use the [attenuationDurationThresholds](../enexposureconfiguration/attenuationdurationthresholds.md) to configure the `X` and `Y` values.

> **Note**

>  This value is only available when `ENAPIVersion` is set to `1` in the app’s Info.plist file.

## See Also

### Exposure Criteria

- [daysSinceLastExposure](dayssincelastexposure.md): Deprecated. Number of days since the most recent exposure.
- [matchedKeyCount](matchedkeycount.md): Deprecated. The number of keys that matched for an exposure detection.
- [maximumRiskScore](maximumriskscore.md): Deprecated. The vaue that represents the highest risk score of all exposure incidents.
- [maximumRiskScoreFullRange](maximumriskscorefullrange.md): Deprecated. The value that represents the highest, full-range risk score of all the exposures for the user.
- [riskScoreSumFullRange](riskscoresumfullrange.md): Deprecated. The sum of the full-range risk scores for all exposures for the user.
- [metadata](metadata.md): Deprecated. The metadata associated with the summary.
- [daySummaries](daysummaries.md): Deprecated. The summary of each day that contains an exposure.
