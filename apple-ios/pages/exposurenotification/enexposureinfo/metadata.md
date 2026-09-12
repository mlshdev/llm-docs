> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enexposureinfo/metadata](https://developer.apple.com/documentation/exposurenotification/enexposureinfo/metadata)

# metadata (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The metadata associated with the exposure information.

> No longer supported.

## Declaration

```swift
var metadata: [AnyHashable : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

Not used.

## See Also

### Exposure Criteria

- [attenuationDurations](attenuationdurations.md): Deprecated. An array of durations at specific radio signal attenuations.
- [attenuationValue](attenuationvalue.md): Deprecated. The attenutation risk level value for the exposure.
- [date](date.md): Deprecated. The date the exposure occurred.
- [duration](duration.md): Deprecated. The length of time that the contact was in proximity to the user.
- [totalRiskScore](totalriskscore.md): Deprecated. The value that represents the total risk score the framework calculates for this exposure incident.
- [totalRiskScoreFullRange](totalriskscorefullrange.md): Deprecated. The value that represents the full-range total risk score the framework calculates for this exposure incident.
- [transmissionRiskLevel](transmissionrisklevel.md): Deprecated. The transmission risk associated with a diagnosis key.
- [ENAttenuation](../enattenuation.md): Deprecated. The signal strength value.
- [daysSinceOnsetOfSymptoms](dayssinceonsetofsymptoms.md): Deprecated. The number of days since the onset of symptoms.
- [diagnosisReportType](diagnosisreporttype.md): Deprecated. The method used to report the positive diagnosis.
- [ENDaysSinceOnsetOfSymptomsUnknown](../endayssinceonsetofsymptomsunknown.md): Deprecated. A value used when the number of days since onset of symptoms is unknown.

# metadata (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The metadata associated with the exposure information.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDictionary * metadata;
```

<a id="Discussion"></a>

## Discussion

Not used.

## See Also

### Exposure Criteria

- [attenuationDurations](attenuationdurations.md): Deprecated. An array of durations at specific radio signal attenuations.
- [attenuationValue](attenuationvalue.md): Deprecated. The attenutation risk level value for the exposure.
- [date](date.md): Deprecated. The date the exposure occurred.
- [duration](duration.md): Deprecated. The length of time that the contact was in proximity to the user.
- [totalRiskScore](totalriskscore.md): Deprecated. The value that represents the total risk score the framework calculates for this exposure incident.
- [totalRiskScoreFullRange](totalriskscorefullrange.md): Deprecated. The value that represents the full-range total risk score the framework calculates for this exposure incident.
- [transmissionRiskLevel](transmissionrisklevel.md): Deprecated. The transmission risk associated with a diagnosis key.
- [ENAttenuation](../enattenuation.md): Deprecated. The signal strength value.
- [daysSinceOnsetOfSymptoms](dayssinceonsetofsymptoms.md): Deprecated. The number of days since the onset of symptoms.
- [diagnosisReportType](diagnosisreporttype.md): Deprecated. The method used to report the positive diagnosis.
- [ENDaysSinceOnsetOfSymptomsUnknown](../endayssinceonsetofsymptomsunknown.md): Deprecated. A value used when the number of days since onset of symptoms is unknown.
