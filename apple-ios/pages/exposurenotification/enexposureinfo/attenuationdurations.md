> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enexposureinfo/attenuationdurations](https://developer.apple.com/documentation/exposurenotification/enexposureinfo/attenuationdurations)

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

An array that contains the duration, in seconds, at certain attenuations, using an aggregated maximum exposures of 30 minutes.

`array[0]` =  Sum of durations for all exposures when the attenuation value was `Attenuation <= X`.

`array[1]` =  Sum of durations for all exposures when attenuation value was `X < Attenuation <= Y`.

`array[2]` =  Sum of durations for all exposures when attenuation value was `Y < Attenuation`.

Use the [attenuationDurationThresholds](../enexposureconfiguration/attenuationdurationthresholds.md) to configure the `X` and `Y` values.

## See Also

### Exposure Criteria

- [attenuationValue](attenuationvalue.md): Deprecated. The attenutation risk level value for the exposure.
- [date](date.md): Deprecated. The date the exposure occurred.
- [duration](duration.md): Deprecated. The length of time that the contact was in proximity to the user.
- [totalRiskScore](totalriskscore.md): Deprecated. The value that represents the total risk score the framework calculates for this exposure incident.
- [totalRiskScoreFullRange](totalriskscorefullrange.md): Deprecated. The value that represents the full-range total risk score the framework calculates for this exposure incident.
- [transmissionRiskLevel](transmissionrisklevel.md): Deprecated. The transmission risk associated with a diagnosis key.
- [ENAttenuation](../enattenuation.md): Deprecated. The signal strength value.
- [metadata](metadata.md): Deprecated. The metadata associated with the exposure information.
- [daysSinceOnsetOfSymptoms](dayssinceonsetofsymptoms.md): Deprecated. The number of days since the onset of symptoms.
- [diagnosisReportType](diagnosisreporttype.md): Deprecated. The method used to report the positive diagnosis.
- [ENDaysSinceOnsetOfSymptomsUnknown](../endayssinceonsetofsymptomsunknown.md): Deprecated. A value used when the number of days since onset of symptoms is unknown.

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

An array that contains the duration, in seconds, at certain attenuations, using an aggregated maximum exposures of 30 minutes.

`array[0]` =  Sum of durations for all exposures when the attenuation value was `Attenuation <= X`.

`array[1]` =  Sum of durations for all exposures when attenuation value was `X < Attenuation <= Y`.

`array[2]` =  Sum of durations for all exposures when attenuation value was `Y < Attenuation`.

Use the [attenuationDurationThresholds](../enexposureconfiguration/attenuationdurationthresholds.md) to configure the `X` and `Y` values.

## See Also

### Exposure Criteria

- [attenuationValue](attenuationvalue.md): Deprecated. The attenutation risk level value for the exposure.
- [date](date.md): Deprecated. The date the exposure occurred.
- [duration](duration.md): Deprecated. The length of time that the contact was in proximity to the user.
- [totalRiskScore](totalriskscore.md): Deprecated. The value that represents the total risk score the framework calculates for this exposure incident.
- [totalRiskScoreFullRange](totalriskscorefullrange.md): Deprecated. The value that represents the full-range total risk score the framework calculates for this exposure incident.
- [transmissionRiskLevel](transmissionrisklevel.md): Deprecated. The transmission risk associated with a diagnosis key.
- [ENAttenuation](../enattenuation.md): Deprecated. The signal strength value.
- [metadata](metadata.md): Deprecated. The metadata associated with the exposure information.
- [daysSinceOnsetOfSymptoms](dayssinceonsetofsymptoms.md): Deprecated. The number of days since the onset of symptoms.
- [diagnosisReportType](diagnosisreporttype.md): Deprecated. The method used to report the positive diagnosis.
- [ENDaysSinceOnsetOfSymptomsUnknown](../endayssinceonsetofsymptomsunknown.md): Deprecated. A value used when the number of days since onset of symptoms is unknown.
