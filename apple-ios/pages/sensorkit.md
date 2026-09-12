> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit](https://developer.apple.com/documentation/sensorkit)

# SensorKit (Swift)

**Framework:** SensorKit  
**Kind:** Framework  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Retrieve data and derived metrics from sensors on an iPhone, or paired Apple Watch.

<a id="overview"></a>

## Overview

As the system gathers information using various sensors on a device, SensorKit enables an app to access select raw data, or metrics that the system processes from a sensor, such as:

- Steps information
- Accelerometer or rotation-rate data
- The configuration of a watch on the user’s wrist
- Ambient light in the physical environment
- Details about a user’s routine commute or travel

See [SRSensor](sensorkit/srsensor.md) for the complete list.

> **Note**

>  This framework ignores calls from Mac apps that you build with Mac Catalyst, and from compatible iPad and iPhone apps running in visionOS.

## Topics

### Essentials

- [SensorKit updates](https://developer.apple.com/documentation/updates/sensorkit): Learn about important changes to SensorKit.

### Setup

- [Configuring your project for sensor reading](sensorkit/configuring-your-project-for-sensor-reading.md): Add metadata to your app to attain system and user permission to access sensor data.
- [SRSensorReader](sensorkit/srsensorreader.md): Deprecated. An object that establishes user authorization and records data for a particular sensor.

### Authorization

- [com.apple.developer.sensorkit.reader.allow](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.sensorkit.reader.allow): The necessary entitlement to access sensor data that’s required by your app’s preapproved research study.

### Querying data

- [SRFetchRequest](sensorkit/srfetchrequest.md): An object that defines the criteria for a sample query.
- [SRFetchResult](sensorkit/srfetchresult.md): Recorded data that a sensor reader fetches.

### Interpreting data

- [SRAmbientLightSample](sensorkit/srambientlightsample.md): The amount of ambient light in the user’s environment.
- [SRDeviceUsageReport](sensorkit/srdeviceusagereport.md): The frequency and relative duration that the user uses their device, particular Apple apps, or websites.
- [SRKeyboardMetrics](sensorkit/srkeyboardmetrics.md): The configuration of a device’s keyboard and its usage patterns.
- [SRMediaEvent](sensorkit/srmediaevent.md): A user interaction with a media object, such as an image or a video.
- [SRMessagesUsageReport](sensorkit/srmessagesusagereport.md): An object that describes the user’s Messages app activity over a period of time.
- [SRPhoneUsageReport](sensorkit/srphoneusagereport.md): An object that describes the user’s phone activity over a period of time.
- [SRVisit](sensorkit/srvisit.md): The user’s progress in their daily travel routine.
- [SRWristDetection](sensorkit/srwristdetection.md): The configuration of a watch on the wearer’s wrist.

### Deleting samples

- [SRDeletionRecord](sensorkit/srdeletionrecord.md): An object that describes the reason the framework deletes samples.

### Analyzing speech

- [SRSpeechMetrics](sensorkit/srspeechmetrics.md): An object that represents metrics about a range of speech.
- [SRSpeechExpression](sensorkit/srspeechexpression.md): An object that represents the metrics and voice analytics for a range of speech.

### Analyzing faces

- [SRFaceMetrics](sensorkit/srfacemetrics.md): An object that represents metrics about the user’s face.
- [SR_ARKIT_SUPPORTED](sensorkit/sr_arkit_supported.md): A flag that indicates whether the ARKit framework is available in the SDK for the SensorKit framework.

### Recording wrist temperatures

- [SRWristTemperatureSession](sensorkit/srwristtemperaturesession.md): An object that represents wrist temperatures that a device records during a period of time.
- [SRWristTemperature](sensorkit/srwristtemperature.md): The temperature of the user’s wrist while the user sleeps.

### Recording ectrocardiogram data

- [SRElectrocardiogramSample](sensorkit/srelectrocardiogramsample.md): The sample electrocardiogram sensor data.

### Recording photoplethysmogram data

- [SRPhotoplethysmogramSample](sensorkit/srphotoplethysmogramsample.md): The sample photoplethysmogram (PPG) sensor data.

### Classes

- [SRAcousticSettings](sensorkit/sracousticsettings.md)
- [SRHeadphoneSettings](sensorkit/srheadphonesettings.md)
- [SRReader](sensorkit/srreader.md): `SRReader` serves as the primary interface for accessing sensor data from various device sensors.
- [SRSleepSession](sensorkit/srsleepsession.md)
- [SRSourceDevice](sensorkit/srsourcedevice.md)

### Protocols

- [SRDataSensor](sensorkit/srdatasensor.md): `SRDataSensor` serves as the foundational protocol for all sensor types, providing type safety and consistency across the SensorKit ecosystem. Each conforming sensor type specifies the kind of data it produces, enabling compile-time verification and type-safe data access patterns.

### Structures

- [SRAccelerometerSensor](sensorkit/sraccelerometersensor.md)
- [SRAcousticSettingsSensor](sensorkit/sracousticsettingssensor.md)
- [SRAmbientLightSensor](sensorkit/srambientlightsensor.md)
- [SRAmbientPressureSensor](sensorkit/srambientpressuresensor.md)
- [SRDeviceUsageSensor](sensorkit/srdeviceusagesensor.md)
- [SRElectrocardiogramSensor](sensorkit/srelectrocardiogramsensor.md)
- [SRFaceMetricsSensor](sensorkit/srfacemetricssensor.md)
- [SRFetchResponse](sensorkit/srfetchresponse.md): A generic container that holds sensor data samples retrieved from SensorKit data streams.
- [SRHeadphoneMotionSensor](sensorkit/srheadphonemotionsensor.md)
- [SRHeadphoneSettingsSensor](sensorkit/srheadphonesettingssensor.md)
- [SRHeartRateSensor](sensorkit/srheartratesensor.md)
- [SRKeyboardMetricsSensor](sensorkit/srkeyboardmetricssensor.md)
- [SRMediaEventsSensor](sensorkit/srmediaeventssensor.md)
- [SRMessagesUsageSensor](sensorkit/srmessagesusagesensor.md)
- [SROdometerSensor](sensorkit/srodometersensor.md)
- [SROnWristStateSensor](sensorkit/sronwriststatesensor.md)
- [SRPedometerDataSensor](sensorkit/srpedometerdatasensor.md)
- [SRPhoneUsageSensor](sensorkit/srphoneusagesensor.md)
- [SRPhotoplethysmogramSensor](sensorkit/srphotoplethysmogramsensor.md)
- [SRRotationRateSensor](sensorkit/srrotationratesensor.md)
- [SRSiriSpeechMetricsSensor](sensorkit/srsirispeechmetricssensor.md)
- [SRSleepSessionsSensor](sensorkit/srsleepsessionssensor.md)
- [SRTelephonySpeechMetricsSensor](sensorkit/srtelephonyspeechmetricssensor.md)
- [SRVisitsSensor](sensorkit/srvisitssensor.md)
- [SRWristTemperatureSensor](sensorkit/srwristtemperaturesensor.md)

# SensorKit (Objective-C)

**Framework:** SensorKit  
**Kind:** Framework  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Retrieve data and derived metrics from sensors on an iPhone, or paired Apple Watch.

<a id="overview"></a>

## Overview

As the system gathers information using various sensors on a device, SensorKit enables an app to access select raw data, or metrics that the system processes from a sensor, such as:

- Steps information
- Accelerometer or rotation-rate data
- The configuration of a watch on the user’s wrist
- Ambient light in the physical environment
- Details about a user’s routine commute or travel

See [SRSensor](sensorkit/srsensor.md) for the complete list.

> **Note**

>  This framework ignores calls from Mac apps that you build with Mac Catalyst, and from compatible iPad and iPhone apps running in visionOS.

## Topics

### Essentials

- [SensorKit updates](https://developer.apple.com/documentation/updates/sensorkit): Learn about important changes to SensorKit.

### Setup

- [Configuring your project for sensor reading](sensorkit/configuring-your-project-for-sensor-reading.md): Add metadata to your app to attain system and user permission to access sensor data.
- [SRSensorReader](sensorkit/srsensorreader.md): Deprecated. An object that establishes user authorization and records data for a particular sensor.

### Authorization

- [com.apple.developer.sensorkit.reader.allow](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.sensorkit.reader.allow): The necessary entitlement to access sensor data that’s required by your app’s preapproved research study.

### Querying data

- [SRFetchRequest](sensorkit/srfetchrequest.md): An object that defines the criteria for a sample query.
- [SRFetchResult](sensorkit/srfetchresult.md): Recorded data that a sensor reader fetches.

### Interpreting data

- [SRAmbientLightSample](sensorkit/srambientlightsample.md): The amount of ambient light in the user’s environment.
- [SRDeviceUsageReport](sensorkit/srdeviceusagereport.md): The frequency and relative duration that the user uses their device, particular Apple apps, or websites.
- [SRKeyboardMetrics](sensorkit/srkeyboardmetrics.md): The configuration of a device’s keyboard and its usage patterns.
- [SRMediaEvent](sensorkit/srmediaevent.md): A user interaction with a media object, such as an image or a video.
- [SRMessagesUsageReport](sensorkit/srmessagesusagereport.md): An object that describes the user’s Messages app activity over a period of time.
- [SRPhoneUsageReport](sensorkit/srphoneusagereport.md): An object that describes the user’s phone activity over a period of time.
- [SRVisit](sensorkit/srvisit.md): The user’s progress in their daily travel routine.
- [SRWristDetection](sensorkit/srwristdetection.md): The configuration of a watch on the wearer’s wrist.

### Deleting samples

- [SRDeletionRecord](sensorkit/srdeletionrecord.md): An object that describes the reason the framework deletes samples.

### Analyzing speech

- [SRSpeechMetrics](sensorkit/srspeechmetrics.md): An object that represents metrics about a range of speech.
- [SRSpeechExpression](sensorkit/srspeechexpression.md): An object that represents the metrics and voice analytics for a range of speech.

### Analyzing faces

- [SRFaceMetrics](sensorkit/srfacemetrics.md): An object that represents metrics about the user’s face.
- [SR_ARKIT_SUPPORTED](sensorkit/sr_arkit_supported.md): A flag that indicates whether the ARKit framework is available in the SDK for the SensorKit framework.

### Recording wrist temperatures

- [SRWristTemperatureSession](sensorkit/srwristtemperaturesession.md): An object that represents wrist temperatures that a device records during a period of time.
- [SRWristTemperature](sensorkit/srwristtemperature.md): The temperature of the user’s wrist while the user sleeps.

### Recording ectrocardiogram data

- [SRElectrocardiogramSample](sensorkit/srelectrocardiogramsample.md): The sample electrocardiogram sensor data.

### Recording photoplethysmogram data

- [SRPhotoplethysmogramSample](sensorkit/srphotoplethysmogramsample.md): The sample photoplethysmogram (PPG) sensor data.

### Classes

- [SRAcousticSettings](sensorkit/sracousticsettings.md)
- [SRAcousticSettingsAccessibility](sensorkit/sracousticsettings/accessibility.md)
- [SRAcousticSettingsAccessibilityBackgroundSounds](sensorkit/sracousticsettings/accessibility/backgroundsounds-swift.class.md)
- [SRAcousticSettingsAccessibilityHeadphoneAccommodations](sensorkit/sracousticsettings/accessibility/headphoneaccommodations-swift.class.md)
- [SRAcousticSettingsMusicEQ](sensorkit/sracousticsettings/musiceq.md)
- [SRHeadphoneSettings](sensorkit/srheadphonesettings.md)
- [SRHeadphoneSettingsHearingAssistance](sensorkit/srheadphonesettings/hearingassistance-swift.class.md)
- [SRSleepSession](sensorkit/srsleepsession.md)
- [SRSourceDevice](sensorkit/srsourcedevice.md)

### Variables

- [SRSensorAcousticSettings](sensorkit/srsensor/acousticsettings.md)
- [SRSensorHeadphoneMotion](sensorkit/srsensor/headphonemotion.md)
- [SRSensorHeadphoneSettings](sensorkit/srsensor/headphonesettings.md)
- [SRSensorSleepSessions](sensorkit/srsensor/sleepsessions.md)

### Macros

- [SR_EXTERN](sensorkit/sr_extern.md)
- [SR_EXTERN_HIDDEN](sensorkit/sr_extern_hidden.md)

### Enumerations

- [SRAcousticSettingsAccessibilityBackgroundSoundsName](sensorkit/sracousticsettings/accessibility/backgroundsounds-swift.class/name.md)
- [SRAcousticSettingsAccessibilityHeadphoneAccommodationsMediaEnhanceApplication](sensorkit/sracousticsettings/accessibility/headphoneaccommodations-swift.class/mediaenhanceapplication-swift.enum.md)
- [SRAcousticSettingsAccessibilityHeadphoneAccommodationsMediaEnhanceBoosting](sensorkit/sracousticsettings/accessibility/headphoneaccommodations-swift.class/mediaenhanceboosting-swift.enum.md)
- [SRAcousticSettingsAccessibilityHeadphoneAccommodationsMediaEnhanceTuning](sensorkit/sracousticsettings/accessibility/headphoneaccommodations-swift.class/mediaenhancetuning-swift.enum.md)
- [SRAcousticSettingsSampleLifetime](sensorkit/sracousticsettings/samplelifetime.md)
- [SRHeadphoneSettingsAdaptiveAudioStrength](sensorkit/srheadphonesettings/adaptiveaudiostrength-swift.enum.md)
- [SRHeadphoneSettingsListeningMode](sensorkit/srheadphonesettings/listeningmode-swift.enum.md)
- [SRHeadphoneSettingsSettingEnablement](sensorkit/srheadphonesettings/settingenablement.md)
