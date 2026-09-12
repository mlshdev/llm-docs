> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enexposureinfo/transmissionrisklevel](https://developer.apple.com/documentation/exposurenotification/enexposureinfo/transmissionrisklevel)

# transmissionRiskLevel (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The transmission risk associated with a diagnosis key.

> No longer supported.

## Declaration

```swift
var transmissionRiskLevel: ENRiskLevel { get }
```

<a id="Discussion"></a>

## Discussion

Each app defines its own meaning for each of the risk levels (0-7).

Consistent Transmission Risk Levels across regions facilitate roaming, therefore it’s recommended that the Transmission Risk Levels describe the type of report. The supported report types are determined by the public health authority for each region. Your app must verify the report type with a public health authority before submitting it.

Recommended report types for the different risk levels are:

- `0` = Unused/Custom
- `1` = Confirmed test: Low transmission risk level
- `2` = Confirmed test: Standard transmission risk level
- `3` = Confirmed test: High transmission risk level
- `4` = Confirmed clinical diagnosis
- `5` = Self report
- `6` = Negative case
- `7` = Recursive case

## See Also

### Exposure Criteria

- [attenuationDurations](attenuationdurations.md): Deprecated. An array of durations at specific radio signal attenuations.
- [attenuationValue](attenuationvalue.md): Deprecated. The attenutation risk level value for the exposure.
- [date](date.md): Deprecated. The date the exposure occurred.
- [duration](duration.md): Deprecated. The length of time that the contact was in proximity to the user.
- [totalRiskScore](totalriskscore.md): Deprecated. The value that represents the total risk score the framework calculates for this exposure incident.
- [totalRiskScoreFullRange](totalriskscorefullrange.md): Deprecated. The value that represents the full-range total risk score the framework calculates for this exposure incident.
- [ENAttenuation](../enattenuation.md): Deprecated. The signal strength value.
- [metadata](metadata.md): Deprecated. The metadata associated with the exposure information.
- [daysSinceOnsetOfSymptoms](dayssinceonsetofsymptoms.md): Deprecated. The number of days since the onset of symptoms.
- [diagnosisReportType](diagnosisreporttype.md): Deprecated. The method used to report the positive diagnosis.
- [ENDaysSinceOnsetOfSymptomsUnknown](../endayssinceonsetofsymptomsunknown.md): Deprecated. A value used when the number of days since onset of symptoms is unknown.

# transmissionRiskLevel (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The transmission risk associated with a diagnosis key.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) ENRiskLevel transmissionRiskLevel;
```

<a id="Discussion"></a>

## Discussion

Each app defines its own meaning for each of the risk levels (0-7).

Consistent Transmission Risk Levels across regions facilitate roaming, therefore it’s recommended that the Transmission Risk Levels describe the type of report. The supported report types are determined by the public health authority for each region. Your app must verify the report type with a public health authority before submitting it.

Recommended report types for the different risk levels are:

- `0` = Unused/Custom
- `1` = Confirmed test: Low transmission risk level
- `2` = Confirmed test: Standard transmission risk level
- `3` = Confirmed test: High transmission risk level
- `4` = Confirmed clinical diagnosis
- `5` = Self report
- `6` = Negative case
- `7` = Recursive case

## See Also

### Exposure Criteria

- [attenuationDurations](attenuationdurations.md): Deprecated. An array of durations at specific radio signal attenuations.
- [attenuationValue](attenuationvalue.md): Deprecated. The attenutation risk level value for the exposure.
- [date](date.md): Deprecated. The date the exposure occurred.
- [duration](duration.md): Deprecated. The length of time that the contact was in proximity to the user.
- [totalRiskScore](totalriskscore.md): Deprecated. The value that represents the total risk score the framework calculates for this exposure incident.
- [totalRiskScoreFullRange](totalriskscorefullrange.md): Deprecated. The value that represents the full-range total risk score the framework calculates for this exposure incident.
- [ENAttenuation](../enattenuation.md): Deprecated. The signal strength value.
- [metadata](metadata.md): Deprecated. The metadata associated with the exposure information.
- [daysSinceOnsetOfSymptoms](dayssinceonsetofsymptoms.md): Deprecated. The number of days since the onset of symptoms.
- [diagnosisReportType](diagnosisreporttype.md): Deprecated. The method used to report the positive diagnosis.
- [ENDaysSinceOnsetOfSymptomsUnknown](../endayssinceonsetofsymptomsunknown.md): Deprecated. A value used when the number of days since onset of symptoms is unknown.
