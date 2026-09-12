> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensor/telephonyspeechmetrics](https://developer.apple.com/documentation/sensorkit/srsensor/telephonyspeechmetrics)

# telephonySpeechMetrics (Swift)

**Framework:** SensorKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A sensor that provides data describing speech during phone calls.

## Declaration

```swift
static let telephonySpeechMetrics: SRSensor
```

<a id="Discussion"></a>

## Discussion

The [sample](../srfetchresult/sample.md) type for this sensor is [SRSpeechMetrics](../srspeechmetrics.md).

The metrics provide details about the user’s voice, such as tenor, pitch, cadence, and speech timing, which includes words per minute and the average duration between words.

This sensor doesn’t provide raw audio data.

You need to provide a reason to analyze speech by adding the [SRSensorUsageSpeechMetrics](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail/srsensorusagespeechmetrics) dictionary to the [NSSensorKitUsageDetail](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail) key in the information property list.

## See Also

### Reading user activity sensors

- [accelerometer](accelerometer.md): A sensor that provides acceleration motion data.
- [faceMetrics](facemetrics.md): A sensor that provides data describing a user’s face.
- [heartRate](heartrate.md): A sensor that provides the user’s heart rate data.
- [mediaEvents](mediaevents.md): A sensor that provides information about interactions with media, such as images and videos, in messaging apps.
- [odometer](odometer.md): A sensor that provides information about speed and slope.
- [pedometerData](pedometerdata.md): A sensor that provides information about the user’s steps.
- [rotationRate](rotationrate.md): A sensor that provides rotation motion data.
- [siriSpeechMetrics](sirispeechmetrics.md): A sensor that provides data describing a user’s speech to Siri.
- [visits](visits.md): A sensor that provides information about frequently visited locations.
- [wristTemperature](wristtemperature.md): A sensor that provides wrist temperature while the user sleeps.
- [photoplethysmogram](photoplethysmogram.md): A sensor that streams sample PPG sensor data.
- [electrocardiogram](electrocardiogram.md): A sensor that streams sample ECG sensor data.

# SRSensorTelephonySpeechMetrics (Objective-C)

**Framework:** SensorKit  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A sensor that provides data describing speech during phone calls.

## Declaration

```objectivec
extern SRSensor const SRSensorTelephonySpeechMetrics;
```

<a id="Discussion"></a>

## Discussion

The [sample](../srfetchresult/sample.md) type for this sensor is [SRSpeechMetrics](../srspeechmetrics.md).

The metrics provide details about the user’s voice, such as tenor, pitch, cadence, and speech timing, which includes words per minute and the average duration between words.

This sensor doesn’t provide raw audio data.

You need to provide a reason to analyze speech by adding the [SRSensorUsageSpeechMetrics](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail/srsensorusagespeechmetrics) dictionary to the [NSSensorKitUsageDetail](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail) key in the information property list.

## See Also

### Reading user activity sensors

- [SRSensorAccelerometer](accelerometer.md): A sensor that provides acceleration motion data.
- [SRSensorFaceMetrics](facemetrics.md): A sensor that provides data describing a user’s face.
- [SRSensorHeartRate](heartrate.md): A sensor that provides the user’s heart rate data.
- [SRSensorMediaEvents](mediaevents.md): A sensor that provides information about interactions with media, such as images and videos, in messaging apps.
- [SRSensorOdometer](odometer.md): A sensor that provides information about speed and slope.
- [SRSensorPedometerData](pedometerdata.md): A sensor that provides information about the user’s steps.
- [SRSensorRotationRate](rotationrate.md): A sensor that provides rotation motion data.
- [SRSensorSiriSpeechMetrics](sirispeechmetrics.md): A sensor that provides data describing a user’s speech to Siri.
- [SRSensorVisits](visits.md): A sensor that provides information about frequently visited locations.
- [SRSensorWristTemperature](wristtemperature.md): A sensor that provides wrist temperature while the user sleeps.
- [SRSensorPhotoplethysmogram](photoplethysmogram.md): A sensor that streams sample PPG sensor data.
- [SRSensorElectrocardiogram](electrocardiogram.md): A sensor that streams sample ECG sensor data.
