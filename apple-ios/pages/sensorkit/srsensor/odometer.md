> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensor/odometer](https://developer.apple.com/documentation/sensorkit/srsensor/odometer)

# odometer (Swift)

**Framework:** SensorKit  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

A sensor that provides information about speed and slope.

## Declaration

```swift
static let odometer: SRSensor
```

<a id="Discussion"></a>

## Discussion

The [sample](../srfetchresult/sample.md) type for this sensor is [CMOdometerData](https://developer.apple.com/documentation/coremotion/cmodometerdata).

You need to provide a reason to record the user’s odometer by adding the [SRSensorUsageOdometer](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail/srsensorusageodometer) dictionary to the [NSSensorKitUsageDetail](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail) key in the information property list.

## See Also

### Reading user activity sensors

- [accelerometer](accelerometer.md): A sensor that provides acceleration motion data.
- [faceMetrics](facemetrics.md): A sensor that provides data describing a user’s face.
- [heartRate](heartrate.md): A sensor that provides the user’s heart rate data.
- [mediaEvents](mediaevents.md): A sensor that provides information about interactions with media, such as images and videos, in messaging apps.
- [pedometerData](pedometerdata.md): A sensor that provides information about the user’s steps.
- [rotationRate](rotationrate.md): A sensor that provides rotation motion data.
- [siriSpeechMetrics](sirispeechmetrics.md): A sensor that provides data describing a user’s speech to Siri.
- [telephonySpeechMetrics](telephonyspeechmetrics.md): A sensor that provides data describing speech during phone calls.
- [visits](visits.md): A sensor that provides information about frequently visited locations.
- [wristTemperature](wristtemperature.md): A sensor that provides wrist temperature while the user sleeps.
- [photoplethysmogram](photoplethysmogram.md): A sensor that streams sample PPG sensor data.
- [electrocardiogram](electrocardiogram.md): A sensor that streams sample ECG sensor data.

# SRSensorOdometer (Objective-C)

**Framework:** SensorKit  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

A sensor that provides information about speed and slope.

## Declaration

```objectivec
extern SRSensor const SRSensorOdometer;
```

<a id="Discussion"></a>

## Discussion

The [sample](../srfetchresult/sample.md) type for this sensor is [CMOdometerData](https://developer.apple.com/documentation/coremotion/cmodometerdata).

You need to provide a reason to record the user’s odometer by adding the [SRSensorUsageOdometer](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail/srsensorusageodometer) dictionary to the [NSSensorKitUsageDetail](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail) key in the information property list.

## See Also

### Reading user activity sensors

- [SRSensorAccelerometer](accelerometer.md): A sensor that provides acceleration motion data.
- [SRSensorFaceMetrics](facemetrics.md): A sensor that provides data describing a user’s face.
- [SRSensorHeartRate](heartrate.md): A sensor that provides the user’s heart rate data.
- [SRSensorMediaEvents](mediaevents.md): A sensor that provides information about interactions with media, such as images and videos, in messaging apps.
- [SRSensorPedometerData](pedometerdata.md): A sensor that provides information about the user’s steps.
- [SRSensorRotationRate](rotationrate.md): A sensor that provides rotation motion data.
- [SRSensorSiriSpeechMetrics](sirispeechmetrics.md): A sensor that provides data describing a user’s speech to Siri.
- [SRSensorTelephonySpeechMetrics](telephonyspeechmetrics.md): A sensor that provides data describing speech during phone calls.
- [SRSensorVisits](visits.md): A sensor that provides information about frequently visited locations.
- [SRSensorWristTemperature](wristtemperature.md): A sensor that provides wrist temperature while the user sleeps.
- [SRSensorPhotoplethysmogram](photoplethysmogram.md): A sensor that streams sample PPG sensor data.
- [SRSensorElectrocardiogram](electrocardiogram.md): A sensor that streams sample ECG sensor data.
