> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensor/electrocardiogram](https://developer.apple.com/documentation/sensorkit/srsensor/electrocardiogram)

# electrocardiogram (Swift)

**Framework:** SensorKit  
**Kind:** Type Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A sensor that streams sample ECG sensor data.

## Declaration

```swift
static let electrocardiogram: SRSensor
```

<a id="Discussion"></a>

## Discussion

The sample for this sensor is an array of [SRElectrocardiogramSample](../srelectrocardiogramsample.md) objects.

You need to provide a reason to record electrocardiogram (ECG) data by adding the `SRSensorUsageECG` dictionary to the [NSSensorKitUsageDetail](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail) key in the information property list.

You also need to add the `ecg` key to the `com.apple.developer.sensorkit.reader.allow` entitlement, as in:

```plist
<plist version="1.0">
<dict>
        <key>com.apple.developer.sensorkit.reader.allow</key>
        <array>
                <string>ecg</string>
        </array>
</dict>
</plist>
```

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
- [telephonySpeechMetrics](telephonyspeechmetrics.md): A sensor that provides data describing speech during phone calls.
- [visits](visits.md): A sensor that provides information about frequently visited locations.
- [wristTemperature](wristtemperature.md): A sensor that provides wrist temperature while the user sleeps.
- [photoplethysmogram](photoplethysmogram.md): A sensor that streams sample PPG sensor data.

# SRSensorElectrocardiogram (Objective-C)

**Framework:** SensorKit  
**Kind:** Global Variable  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A sensor that streams sample ECG sensor data.

## Declaration

```objectivec
extern SRSensor const SRSensorElectrocardiogram;
```

<a id="Discussion"></a>

## Discussion

The sample for this sensor is an array of [SRElectrocardiogramSample](../srelectrocardiogramsample.md) objects.

You need to provide a reason to record electrocardiogram (ECG) data by adding the `SRSensorUsageECG` dictionary to the [NSSensorKitUsageDetail](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail) key in the information property list.

You also need to add the `ecg` key to the `com.apple.developer.sensorkit.reader.allow` entitlement, as in:

```plist
<plist version="1.0">
<dict>
        <key>com.apple.developer.sensorkit.reader.allow</key>
        <array>
                <string>ecg</string>
        </array>
</dict>
</plist>
```

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
- [SRSensorTelephonySpeechMetrics](telephonyspeechmetrics.md): A sensor that provides data describing speech during phone calls.
- [SRSensorVisits](visits.md): A sensor that provides information about frequently visited locations.
- [SRSensorWristTemperature](wristtemperature.md): A sensor that provides wrist temperature while the user sleeps.
- [SRSensorPhotoplethysmogram](photoplethysmogram.md): A sensor that streams sample PPG sensor data.
