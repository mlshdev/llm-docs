> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srdatasensor](https://developer.apple.com/documentation/sensorkit/srdatasensor)

# SRDataSensor

**Framework:** SensorKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

`SRDataSensor` serves as the foundational protocol for all sensor types, providing type safety and consistency across the SensorKit ecosystem. Each conforming sensor type specifies the kind of data it produces, enabling compile-time verification and type-safe data access patterns.

## Declaration

```swift
protocol SRDataSensor : Hashable, Sendable
```

<a id="Protocol-Requirements"></a>

## Protocol Requirements

<a id="Usage-Example"></a>

## Usage Example

```swift
// Using a specific sensor type
let temperatureSensor: SRWristTemperatureSensor = .wristTemperature

// Creating a reader with type safety
guard let reader = SRReader(sensor: temperatureSensor) else {
    print("Failed to create reader")
    return
}

// The reader automatically knows the sample type
for try await response in reader.fetch(request) {
    if let sample: SRWristTemperatureSession = response.sample() {
        // Type-safe access to temperature data
        print("Temperature: \(sample.temperature)")
    }
}
```

## Topics

### Associated Types

- [Sample](srdatasensor/sample.md)

### Type Properties

- [accelerometer](srdatasensor/accelerometer.md): Conforms when `Self` is `SRAccelerometerSensor`.
- [acousticSettings](srdatasensor/acousticsettings.md): Conforms when `Self` is `SRAcousticSettingsSensor`.
- [ambientLight](srdatasensor/ambientlight.md): Conforms when `Self` is `SRAmbientLightSensor`.
- [ambientPressure](srdatasensor/ambientpressure.md): Conforms when `Self` is `SRAmbientPressureSensor`.
- [deviceUsage](srdatasensor/deviceusage.md): Conforms when `Self` is `SRDeviceUsageSensor`.
- [electrocardiogram](srdatasensor/electrocardiogram.md): Conforms when `Self` is `SRElectrocardiogramSensor`.
- [faceMetrics](srdatasensor/facemetrics.md): Conforms when `Self` is `SRFaceMetricsSensor`.
- [headphoneMotion](srdatasensor/headphonemotion.md): Conforms when `Self` is `SRHeadphoneMotionSensor`.
- [headphoneSettings](srdatasensor/headphonesettings.md): Conforms when `Self` is `SRHeadphoneSettingsSensor`.
- [heartRate](srdatasensor/heartrate.md): Conforms when `Self` is `SRHeartRateSensor`.
- [keyboardMetrics](srdatasensor/keyboardmetrics.md): Conforms when `Self` is `SRKeyboardMetricsSensor`.
- [mediaEvents](srdatasensor/mediaevents.md): Conforms when `Self` is `SRMediaEventsSensor`.
- [messagesUsage](srdatasensor/messagesusage.md): Conforms when `Self` is `SRMessagesUsageSensor`.
- [odometer](srdatasensor/odometer.md): Conforms when `Self` is `SROdometerSensor`.
- [onWristState](srdatasensor/onwriststate.md): Conforms when `Self` is `SROnWristStateSensor`.
- [pedometerData](srdatasensor/pedometerdata.md): Conforms when `Self` is `SRPedometerDataSensor`.
- [phoneUsage](srdatasensor/phoneusage.md): Conforms when `Self` is `SRPhoneUsageSensor`.
- [photoplethysmogram](srdatasensor/photoplethysmogram.md): Conforms when `Self` is `SRPhotoplethysmogramSensor`.
- [rotationRate](srdatasensor/rotationrate.md): Conforms when `Self` is `SRRotationRateSensor`.
- [siriSpeechMetrics](srdatasensor/sirispeechmetrics.md): Conforms when `Self` is `SRSiriSpeechMetricsSensor`.
- [sleepSessions](srdatasensor/sleepsessions.md): Conforms when `Self` is `SRSleepSessionsSensor`.
- [telephonySpeechMetrics](srdatasensor/telephonyspeechmetrics.md): Conforms when `Self` is `SRTelephonySpeechMetricsSensor`.
- [visits](srdatasensor/visits.md): Conforms when `Self` is `SRVisitsSensor`.
- [wristTemperature](srdatasensor/wristtemperature.md): Conforms when `Self` is `SRWristTemperatureSensor`.

## Relationships

### Inherits From

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [SRAccelerometerSensor](sraccelerometersensor.md)
- [SRAcousticSettingsSensor](sracousticsettingssensor.md)
- [SRAmbientLightSensor](srambientlightsensor.md)
- [SRAmbientPressureSensor](srambientpressuresensor.md)
- [SRDeviceUsageSensor](srdeviceusagesensor.md)
- [SRElectrocardiogramSensor](srelectrocardiogramsensor.md)
- [SRFaceMetricsSensor](srfacemetricssensor.md)
- [SRHeadphoneMotionSensor](srheadphonemotionsensor.md)
- [SRHeadphoneSettingsSensor](srheadphonesettingssensor.md)
- [SRHeartRateSensor](srheartratesensor.md)
- [SRKeyboardMetricsSensor](srkeyboardmetricssensor.md)
- [SRMediaEventsSensor](srmediaeventssensor.md)
- [SRMessagesUsageSensor](srmessagesusagesensor.md)
- [SROdometerSensor](srodometersensor.md)
- [SROnWristStateSensor](sronwriststatesensor.md)
- [SRPedometerDataSensor](srpedometerdatasensor.md)
- [SRPhoneUsageSensor](srphoneusagesensor.md)
- [SRPhotoplethysmogramSensor](srphotoplethysmogramsensor.md)
- [SRRotationRateSensor](srrotationratesensor.md)
- [SRSiriSpeechMetricsSensor](srsirispeechmetricssensor.md)
- [SRSleepSessionsSensor](srsleepsessionssensor.md)
- [SRTelephonySpeechMetricsSensor](srtelephonyspeechmetricssensor.md)
- [SRVisitsSensor](srvisitssensor.md)
- [SRWristTemperatureSensor](srwristtemperaturesensor.md)
