> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enexposureinfo/duration](https://developer.apple.com/documentation/exposurenotification/enexposureinfo/duration)

# duration (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The length of time that the contact was in proximity to the user.

> No longer supported.

## Declaration

```swift
var duration: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

When reporting the duration of an exposure, the values are stored as seconds rounded up to the next minute. A duration value caps at 30 minutes (1800 seconds).

> **Note**

>  In iOS 13.5, duration values are rounded up to the next 5-minute interval.

## See Also

### Exposure Criteria

- [attenuationDurations](attenuationdurations.md): Deprecated. An array of durations at specific radio signal attenuations.
- [attenuationValue](attenuationvalue.md): Deprecated. The attenutation risk level value for the exposure.
- [date](date.md): Deprecated. The date the exposure occurred.
- [totalRiskScore](totalriskscore.md): Deprecated. The value that represents the total risk score the framework calculates for this exposure incident.
- [totalRiskScoreFullRange](totalriskscorefullrange.md): Deprecated. The value that represents the full-range total risk score the framework calculates for this exposure incident.
- [transmissionRiskLevel](transmissionrisklevel.md): Deprecated. The transmission risk associated with a diagnosis key.
- [ENAttenuation](../enattenuation.md): Deprecated. The signal strength value.
- [metadata](metadata.md): Deprecated. The metadata associated with the exposure information.
- [daysSinceOnsetOfSymptoms](dayssinceonsetofsymptoms.md): Deprecated. The number of days since the onset of symptoms.
- [diagnosisReportType](diagnosisreporttype.md): Deprecated. The method used to report the positive diagnosis.
- [ENDaysSinceOnsetOfSymptomsUnknown](../endayssinceonsetofsymptomsunknown.md): Deprecated. A value used when the number of days since onset of symptoms is unknown.

# duration (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The length of time that the contact was in proximity to the user.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSTimeInterval duration;
```

<a id="Discussion"></a>

## Discussion

When reporting the duration of an exposure, the values are stored as seconds rounded up to the next minute. A duration value caps at 30 minutes (1800 seconds).

> **Note**

>  In iOS 13.5, duration values are rounded up to the next 5-minute interval.

## See Also

### Exposure Criteria

- [attenuationDurations](attenuationdurations.md): Deprecated. An array of durations at specific radio signal attenuations.
- [attenuationValue](attenuationvalue.md): Deprecated. The attenutation risk level value for the exposure.
- [date](date.md): Deprecated. The date the exposure occurred.
- [totalRiskScore](totalriskscore.md): Deprecated. The value that represents the total risk score the framework calculates for this exposure incident.
- [totalRiskScoreFullRange](totalriskscorefullrange.md): Deprecated. The value that represents the full-range total risk score the framework calculates for this exposure incident.
- [transmissionRiskLevel](transmissionrisklevel.md): Deprecated. The transmission risk associated with a diagnosis key.
- [ENAttenuation](../enattenuation.md): Deprecated. The signal strength value.
- [metadata](metadata.md): Deprecated. The metadata associated with the exposure information.
- [daysSinceOnsetOfSymptoms](dayssinceonsetofsymptoms.md): Deprecated. The number of days since the onset of symptoms.
- [diagnosisReportType](diagnosisreporttype.md): Deprecated. The method used to report the positive diagnosis.
- [ENDaysSinceOnsetOfSymptomsUnknown](../endayssinceonsetofsymptomsunknown.md): Deprecated. A value used when the number of days since onset of symptoms is unknown.
