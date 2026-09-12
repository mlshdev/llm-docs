> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enexposureinfo/date](https://developer.apple.com/documentation/exposurenotification/enexposureinfo/date)

# date (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The date the exposure occurred.

> No longer supported.

## Declaration

```swift
var date: Date { get }
```

<a id="Discussion"></a>

## Discussion

This property may report a date of relative precision, such as within one day of the actual event.

## See Also

### Exposure Criteria

- [attenuationDurations](attenuationdurations.md): Deprecated. An array of durations at specific radio signal attenuations.
- [attenuationValue](attenuationvalue.md): Deprecated. The attenutation risk level value for the exposure.
- [duration](duration.md): Deprecated. The length of time that the contact was in proximity to the user.
- [totalRiskScore](totalriskscore.md): Deprecated. The value that represents the total risk score the framework calculates for this exposure incident.
- [totalRiskScoreFullRange](totalriskscorefullrange.md): Deprecated. The value that represents the full-range total risk score the framework calculates for this exposure incident.
- [transmissionRiskLevel](transmissionrisklevel.md): Deprecated. The transmission risk associated with a diagnosis key.
- [ENAttenuation](../enattenuation.md): Deprecated. The signal strength value.
- [metadata](metadata.md): Deprecated. The metadata associated with the exposure information.
- [daysSinceOnsetOfSymptoms](dayssinceonsetofsymptoms.md): Deprecated. The number of days since the onset of symptoms.
- [diagnosisReportType](diagnosisreporttype.md): Deprecated. The method used to report the positive diagnosis.
- [ENDaysSinceOnsetOfSymptomsUnknown](../endayssinceonsetofsymptomsunknown.md): Deprecated. A value used when the number of days since onset of symptoms is unknown.

# date (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The date the exposure occurred.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDate * date;
```

<a id="Discussion"></a>

## Discussion

This property may report a date of relative precision, such as within one day of the actual event.

## See Also

### Exposure Criteria

- [attenuationDurations](attenuationdurations.md): Deprecated. An array of durations at specific radio signal attenuations.
- [attenuationValue](attenuationvalue.md): Deprecated. The attenutation risk level value for the exposure.
- [duration](duration.md): Deprecated. The length of time that the contact was in proximity to the user.
- [totalRiskScore](totalriskscore.md): Deprecated. The value that represents the total risk score the framework calculates for this exposure incident.
- [totalRiskScoreFullRange](totalriskscorefullrange.md): Deprecated. The value that represents the full-range total risk score the framework calculates for this exposure incident.
- [transmissionRiskLevel](transmissionrisklevel.md): Deprecated. The transmission risk associated with a diagnosis key.
- [ENAttenuation](../enattenuation.md): Deprecated. The signal strength value.
- [metadata](metadata.md): Deprecated. The metadata associated with the exposure information.
- [daysSinceOnsetOfSymptoms](dayssinceonsetofsymptoms.md): Deprecated. The number of days since the onset of symptoms.
- [diagnosisReportType](diagnosisreporttype.md): Deprecated. The method used to report the positive diagnosis.
- [ENDaysSinceOnsetOfSymptomsUnknown](../endayssinceonsetofsymptomsunknown.md): Deprecated. A value used when the number of days since onset of symptoms is unknown.
