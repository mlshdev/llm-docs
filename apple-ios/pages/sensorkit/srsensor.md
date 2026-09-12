> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensor](https://developer.apple.com/documentation/sensorkit/srsensor)

# SRSensor (Swift)

**Framework:** SensorKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The sensors an app can read.

## Declaration

```swift
struct SRSensor
```

## Mentioned In

- [Configuring your project for sensor reading](configuring-your-project-for-sensor-reading.md)

<a id="Discussion"></a>

## Discussion

Use the properties in this structure to access the different sensors.

## Topics

### Reading device sensors

- [deviceUsageReport](srsensor/deviceusagereport.md): A sensor that provides information about device usage.
- [keyboardMetrics](srsensor/keyboardmetrics.md): A sensor that provides information about keyboard usage.
- [onWristState](srsensor/onwriststate.md): A sensor that describes the watch’s position on the wrist.

### Reading app activity sensors

- [messagesUsageReport](srsensor/messagesusagereport.md): A sensor that provides information about use of the Messages app.
- [phoneUsageReport](srsensor/phoneusagereport.md): A sensor that reports the amount of time that the user is on phone calls.

### Reading user activity sensors

- [accelerometer](srsensor/accelerometer.md): A sensor that provides acceleration motion data.
- [faceMetrics](srsensor/facemetrics.md): A sensor that provides data describing a user’s face.
- [heartRate](srsensor/heartrate.md): A sensor that provides the user’s heart rate data.
- [mediaEvents](srsensor/mediaevents.md): A sensor that provides information about interactions with media, such as images and videos, in messaging apps.
- [odometer](srsensor/odometer.md): A sensor that provides information about speed and slope.
- [pedometerData](srsensor/pedometerdata.md): A sensor that provides information about the user’s steps.
- [rotationRate](srsensor/rotationrate.md): A sensor that provides rotation motion data.
- [siriSpeechMetrics](srsensor/sirispeechmetrics.md): A sensor that provides data describing a user’s speech to Siri.
- [telephonySpeechMetrics](srsensor/telephonyspeechmetrics.md): A sensor that provides data describing speech during phone calls.
- [visits](srsensor/visits.md): A sensor that provides information about frequently visited locations.
- [wristTemperature](srsensor/wristtemperature.md): A sensor that provides wrist temperature while the user sleeps.
- [photoplethysmogram](srsensor/photoplethysmogram.md): A sensor that streams sample PPG sensor data.
- [electrocardiogram](srsensor/electrocardiogram.md): A sensor that streams sample ECG sensor data.

### Reading environment sensors

- [ambientLightSensor](srsensor/ambientlightsensor.md): A sensor that provides ambient light information.
- [ambientPressure](srsensor/ambientpressure.md): A sensor that provides pressure and temperature metrics.

### Creating a sensor

- [init(rawValue:)](srsensor/init%28rawvalue_%29.md): Creates a sensor from a raw value.

### Type Properties

- [acousticSettings](srsensor/acousticsettings.md)
- [headphoneMotion](srsensor/headphonemotion.md)
- [headphoneSettings](srsensor/headphonesettings.md)
- [sleepSessions](srsensor/sleepsessions.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a sensor reader

- [init(sensor:)](srsensorreader/init%28sensor_%29.md): Deprecated. Initializes a new sensor reader object.
- [sensor](srsensorreader/sensor.md): Deprecated. The particular sensor that this object reads.

# SRSensor (Objective-C)

**Framework:** SensorKit  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The sensors an app can read.

## Declaration

```objectivec
typedef NSString * SRSensor;
```

## Mentioned In

- [Configuring your project for sensor reading](configuring-your-project-for-sensor-reading.md)

<a id="Discussion"></a>

## Discussion

Use the properties in this structure to access the different sensors.

## Topics

### Reading device sensors

- [SRSensorDeviceUsageReport](srsensor/deviceusagereport.md): A sensor that provides information about device usage.
- [SRSensorKeyboardMetrics](srsensor/keyboardmetrics.md): A sensor that provides information about keyboard usage.
- [SRSensorOnWristState](srsensor/onwriststate.md): A sensor that describes the watch’s position on the wrist.

### Reading app activity sensors

- [SRSensorMessagesUsageReport](srsensor/messagesusagereport.md): A sensor that provides information about use of the Messages app.
- [SRSensorPhoneUsageReport](srsensor/phoneusagereport.md): A sensor that reports the amount of time that the user is on phone calls.

### Reading user activity sensors

- [SRSensorAccelerometer](srsensor/accelerometer.md): A sensor that provides acceleration motion data.
- [SRSensorFaceMetrics](srsensor/facemetrics.md): A sensor that provides data describing a user’s face.
- [SRSensorHeartRate](srsensor/heartrate.md): A sensor that provides the user’s heart rate data.
- [SRSensorMediaEvents](srsensor/mediaevents.md): A sensor that provides information about interactions with media, such as images and videos, in messaging apps.
- [SRSensorOdometer](srsensor/odometer.md): A sensor that provides information about speed and slope.
- [SRSensorPedometerData](srsensor/pedometerdata.md): A sensor that provides information about the user’s steps.
- [SRSensorRotationRate](srsensor/rotationrate.md): A sensor that provides rotation motion data.
- [SRSensorSiriSpeechMetrics](srsensor/sirispeechmetrics.md): A sensor that provides data describing a user’s speech to Siri.
- [SRSensorTelephonySpeechMetrics](srsensor/telephonyspeechmetrics.md): A sensor that provides data describing speech during phone calls.
- [SRSensorVisits](srsensor/visits.md): A sensor that provides information about frequently visited locations.
- [SRSensorWristTemperature](srsensor/wristtemperature.md): A sensor that provides wrist temperature while the user sleeps.
- [SRSensorPhotoplethysmogram](srsensor/photoplethysmogram.md): A sensor that streams sample PPG sensor data.
- [SRSensorElectrocardiogram](srsensor/electrocardiogram.md): A sensor that streams sample ECG sensor data.

### Reading environment sensors

- [SRSensorAmbientLightSensor](srsensor/ambientlightsensor.md): A sensor that provides ambient light information.
- [SRSensorAmbientPressure](srsensor/ambientpressure.md): A sensor that provides pressure and temperature metrics.

## See Also

### Creating a sensor reader

- [initWithSensor:](srsensorreader/init%28sensor_%29.md): Deprecated. Initializes a new sensor reader object.
- [sensor](srsensorreader/sensor.md): Deprecated. The particular sensor that this object reads.
