> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion](https://developer.apple.com/documentation/coremotion)

# Core Motion (Swift)

**Framework:** Core Motion  
**Kind:** Framework  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

Process accelerometer, gyroscope, pedometer, and environment-related events.

<a id="overview"></a>

## Overview

Core Motion reports motion- and environment-related data from the available onboard hardware of iOS, iPadOS, watchOS, and visionOS devices. This hardware includes the device’s accelerometers and gyroscopes, and, when available, the pedometer, magnetometer, and barometer. Use this data in your app as input for user interactions, fitness tracking, health-related matters, and more. For example, a game might use accelerometer and gyroscope input to control onscreen game behavior.

The services of this framework provide access to motion data either as raw or processed values, and many services provide both types of values. Raw values reflect the unmodified data from the hardware, while processed values eliminate forms of bias that might adversely affect your usage of the data. For example, a processed accelerometer value reflects only the acceleration caused by the user and not the acceleration caused by gravity.

Not all services are available on all devices, and some services might be unavailable even on devices with the required hardware. For example, many Core Motion services are available to visionOS apps, but those services aren’t available to compatible iPad and iPhone apps running in visionOS. Before you try to use any motion-related services, check the availability of those services using a [CMMotionManager](coremotion/cmmotionmanager.md) object.

> **Important**

>  An iOS app must include usage description keys in its `Info.plist` file for the types of data it needs. If these keys aren’t present, the app crashes when you try to access the corresponding service. To access motion and fitness data, include [NSMotionUsageDescription](bundleresources/information-property-list/nsmotionusagedescription.md). To access the fall-detection service, include [NSFallDetectionUsageDescription](bundleresources/information-property-list/nsfalldetectionusagedescription.md).

## Topics

### Essentials

- [Core Motion updates](https://developer.apple.com/documentation/updates/coremotion): Learn about important changes to Core Motion.
- [CMMotionManager](coremotion/cmmotionmanager.md): The object for starting and managing motion services.

### Device motion

Access acceleration, attitude, rotation, and magnetic field data that is adjusted for gravity and other forms of bias.

- [Getting processed device-motion data](coremotion/getting-processed-device-motion-data.md): Retrieve motion data that the system processed to remove environmental bias, such as the effects of gravity.
- [CMDeviceMotion](coremotion/cmdevicemotion.md): Encapsulated measurements of the attitude, rotation rate, and acceleration of a device.
- [CMAttitude](coremotion/cmattitude.md): The device’s orientation relative to a known frame of reference at a point in time.
- [CMAttitudeReferenceFrame](coremotion/cmattitudereferenceframe.md): Constants that indicate the frame of reference for attitude-related motion data.
- [CMHeadphoneMotionManager](coremotion/cmheadphonemotionmanager.md): An object that starts and manages headphone motion services.

### Accelerometers

Access accelerometer data for all three axes of the device.

- [Getting raw accelerometer events](coremotion/getting-raw-accelerometer-events.md): Retrieve data from the onboard accelerometers.
- [CMAccelerometerData](coremotion/cmaccelerometerdata.md): A data sample from the device’s three accelerometers.
- [CMRecordedAccelerometerData](coremotion/cmrecordedaccelerometerdata.md): A single piece of accelerometer data that was recorded by the device.
- [CMSensorRecorder](coremotion/cmsensorrecorder.md): An object that gathers and retrieves accelerometer data from a device.
- [CMSensorDataList](coremotion/cmsensordatalist.md): A list of the accelerometer data recorded by the system.

### Gyroscopes

Access the raw gyroscope data.

- [Getting raw gyroscope events](coremotion/getting-raw-gyroscope-events.md): Retrieve data from the onboard gyroscopes.
- [CMGyroData](coremotion/cmgyrodata.md): A single measurement of the device’s rotation rate.

### Magnetometer

Access raw magnetometer data.

- [CMMagnetometerData](coremotion/cmmagnetometerdata.md): Measurements of the Earth’s magnetic field relative to the device.

### Altitude data

Access altitude data based on barometric sensor information.

- [CMAltimeter](coremotion/cmaltimeter.md): An object that initiates the delivery of altitude-related changes.
- [CMAbsoluteAltitudeData](coremotion/cmabsolutealtitudedata.md): Data that records a change in absolute altitude.
- [CMAltitudeData](coremotion/cmaltitudedata.md): Data for a recorded change in altitude.

### Ambient pressure

- [CMRecordedPressureData](coremotion/cmrecordedpressuredata.md): A recorded measurement of pressure data.
- [CMAmbientPressureData](coremotion/cmambientpressuredata.md): A measurement of the ambient pressure and temperature.

### Water submersion

- [Accessing submersion data](coremotion/accessing-submersion-data.md): Use a water-submersion manager to receive water pressure, temperature, and depth data on Apple Watch Ultra.
- [CMWaterSubmersionManager](coremotion/cmwatersubmersionmanager.md): An object for managing the collection of pressure and temperature data during submersion.
- [CMWaterSubmersionManagerDelegate](coremotion/cmwatersubmersionmanagerdelegate.md): A delegate that receives updates about ambient pressure, water pressure, water temperature, and submersion events.
- [CMWaterSubmersionEvent](coremotion/cmwatersubmersionevent.md): An event indicating that the device’s submersion state has changed.
- [CMWaterSubmersionMeasurement](coremotion/cmwatersubmersionmeasurement.md): An update that contains data about the pressure and depth.
- [CMWaterTemperature](coremotion/cmwatertemperature.md): An update that contains data about the water temperature.

### Activity

- [CMMotionActivityManager](coremotion/cmmotionactivitymanager.md): An object that manages access to the motion data stored by the device.
- [CMHeadphoneActivityManager](coremotion/cmheadphoneactivitymanager.md): An object that starts and manages headphone activity services.
- [CMMotionActivity](coremotion/cmmotionactivity.md): The data for a single motion update event.
- [Getting motion-activity data from headphones](coremotion/getting-motion-activity-data-from-headphones.md): Configure your app to listen for motion-activity changes from headphones.

### Pedometer and fitness

Access step-counting data from the built-in motion processor.

- [CMPedometer](coremotion/cmpedometer.md): An object for fetching the system-generated live walking data.
- [CMPedometerData](coremotion/cmpedometerdata.md): Information about the distance traveled by a user on foot.
- [CMPedometerEvent](coremotion/cmpedometerevent.md): A change in the user’s pedestrian activity.
- [CMStepCounter](coremotion/cmstepcounter.md): Deprecated. The number of steps the user has taken with the device.
- [CMOdometerData](coremotion/cmodometerdata.md): A class that represents odometer data for workouts.
- [CMHighFrequencyHeartRateData](coremotion/cmhighfrequencyheartratedata.md): A class that represents heart rate data collected at 1 Hz.

### Movement disorder

- [Getting movement disorder symptom data](coremotion/getting-movement-disorder-symptom-data.md): Retrieve data from the Apple Watch’s movement disorder manager.
- [Adhering to the movement disorder data collection requirements](coremotion/adhering-to-the-movement-disorder-data-collection-requirements.md): Ensure that your users understand and have control over the data your app collects.
- [Movement disorder algorithm changelog](coremotion/movement-disorder-algorithm-changelog.md): A chronological log of notable changes to the movement disorder algorithm.
- [CMMovementDisorderManager](coremotion/cmmovementdisordermanager.md): A manager for recording and querying movement disorder data.
- [CMTremorResult](coremotion/cmtremorresult.md): A result object that contains data about the presence and strength of tremors during a one-minute interval.
- [CMDyskineticSymptomResult](coremotion/cmdyskineticsymptomresult.md): A result object that contains data about the likely presence of dyskinetic symptoms during a one-minute interval.

### Fall detection

- [CMFallDetectionManager](coremotion/cmfalldetectionmanager.md): An object for managing fall detection events.
- [CMFallDetectionDelegate](coremotion/cmfalldetectiondelegate.md): A delegate that receives information about fall detection events and authorization status changes.
- [CMFallDetectionEvent](coremotion/cmfalldetectionevent.md): An object that contains data about a fall detection event.
- [NSFallDetectionUsageDescription](bundleresources/information-property-list/nsfalldetectionusagedescription.md): A message to the user that explains the app’s request for permission to access fall detection event data.

### Historical data

Access recorded motion events to help you analyze movement patterns.

- [CMBatchedSensorManager](coremotion/cmbatchedsensormanager.md)

### Common data

- [CMLogItem](coremotion/cmlogitem.md): The base class for all motion-related data objects.

### Classes

- [CMRecordedDeviceMotion](coremotion/cmrecordeddevicemotion.md)

### Protocols

- [CMBodyIdentifiable](coremotion/cmbodyidentifiable.md)

# Core Motion (Objective-C)

**Framework:** Core Motion  
**Kind:** Framework  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

Process accelerometer, gyroscope, pedometer, and environment-related events.

<a id="overview"></a>

## Overview

Core Motion reports motion- and environment-related data from the available onboard hardware of iOS, iPadOS, watchOS, and visionOS devices. This hardware includes the device’s accelerometers and gyroscopes, and, when available, the pedometer, magnetometer, and barometer. Use this data in your app as input for user interactions, fitness tracking, health-related matters, and more. For example, a game might use accelerometer and gyroscope input to control onscreen game behavior.

The services of this framework provide access to motion data either as raw or processed values, and many services provide both types of values. Raw values reflect the unmodified data from the hardware, while processed values eliminate forms of bias that might adversely affect your usage of the data. For example, a processed accelerometer value reflects only the acceleration caused by the user and not the acceleration caused by gravity.

Not all services are available on all devices, and some services might be unavailable even on devices with the required hardware. For example, many Core Motion services are available to visionOS apps, but those services aren’t available to compatible iPad and iPhone apps running in visionOS. Before you try to use any motion-related services, check the availability of those services using a [CMMotionManager](coremotion/cmmotionmanager.md) object.

> **Important**

>  An iOS app must include usage description keys in its `Info.plist` file for the types of data it needs. If these keys aren’t present, the app crashes when you try to access the corresponding service. To access motion and fitness data, include [NSMotionUsageDescription](bundleresources/information-property-list/nsmotionusagedescription.md). To access the fall-detection service, include [NSFallDetectionUsageDescription](bundleresources/information-property-list/nsfalldetectionusagedescription.md).

## Topics

### Essentials

- [Core Motion updates](https://developer.apple.com/documentation/updates/coremotion): Learn about important changes to Core Motion.
- [CMMotionManager](coremotion/cmmotionmanager.md): The object for starting and managing motion services.

### Device motion

Access acceleration, attitude, rotation, and magnetic field data that is adjusted for gravity and other forms of bias.

- [Getting processed device-motion data](coremotion/getting-processed-device-motion-data.md): Retrieve motion data that the system processed to remove environmental bias, such as the effects of gravity.
- [CMDeviceMotion](coremotion/cmdevicemotion.md): Encapsulated measurements of the attitude, rotation rate, and acceleration of a device.
- [CMAttitude](coremotion/cmattitude.md): The device’s orientation relative to a known frame of reference at a point in time.
- [CMAttitudeReferenceFrame](coremotion/cmattitudereferenceframe.md): Constants that indicate the frame of reference for attitude-related motion data.
- [CMHeadphoneMotionManager](coremotion/cmheadphonemotionmanager.md): An object that starts and manages headphone motion services.

### Accelerometers

Access accelerometer data for all three axes of the device.

- [Getting raw accelerometer events](coremotion/getting-raw-accelerometer-events.md): Retrieve data from the onboard accelerometers.
- [CMAccelerometerData](coremotion/cmaccelerometerdata.md): A data sample from the device’s three accelerometers.
- [CMRecordedAccelerometerData](coremotion/cmrecordedaccelerometerdata.md): A single piece of accelerometer data that was recorded by the device.
- [CMSensorRecorder](coremotion/cmsensorrecorder.md): An object that gathers and retrieves accelerometer data from a device.
- [CMSensorDataList](coremotion/cmsensordatalist.md): A list of the accelerometer data recorded by the system.

### Gyroscopes

Access the raw gyroscope data.

- [Getting raw gyroscope events](coremotion/getting-raw-gyroscope-events.md): Retrieve data from the onboard gyroscopes.
- [CMGyroData](coremotion/cmgyrodata.md): A single measurement of the device’s rotation rate.

### Magnetometer

Access raw magnetometer data.

- [CMMagnetometerData](coremotion/cmmagnetometerdata.md): Measurements of the Earth’s magnetic field relative to the device.

### Altitude data

Access altitude data based on barometric sensor information.

- [CMAltimeter](coremotion/cmaltimeter.md): An object that initiates the delivery of altitude-related changes.
- [CMAbsoluteAltitudeData](coremotion/cmabsolutealtitudedata.md): Data that records a change in absolute altitude.
- [CMAltitudeData](coremotion/cmaltitudedata.md): Data for a recorded change in altitude.

### Ambient pressure

- [CMRecordedPressureData](coremotion/cmrecordedpressuredata.md): A recorded measurement of pressure data.
- [CMAmbientPressureData](coremotion/cmambientpressuredata.md): A measurement of the ambient pressure and temperature.

### Water submersion

- [Accessing submersion data](coremotion/accessing-submersion-data.md): Use a water-submersion manager to receive water pressure, temperature, and depth data on Apple Watch Ultra.
- [CMWaterSubmersionManager](coremotion/cmwatersubmersionmanager.md): An object for managing the collection of pressure and temperature data during submersion.
- [CMWaterSubmersionManagerDelegate](coremotion/cmwatersubmersionmanagerdelegate.md): A delegate that receives updates about ambient pressure, water pressure, water temperature, and submersion events.
- [CMWaterSubmersionEvent](coremotion/cmwatersubmersionevent.md): An event indicating that the device’s submersion state has changed.
- [CMWaterSubmersionMeasurement](coremotion/cmwatersubmersionmeasurement.md): An update that contains data about the pressure and depth.
- [CMWaterTemperature](coremotion/cmwatertemperature.md): An update that contains data about the water temperature.

### Activity

- [CMMotionActivityManager](coremotion/cmmotionactivitymanager.md): An object that manages access to the motion data stored by the device.
- [CMHeadphoneActivityManager](coremotion/cmheadphoneactivitymanager.md): An object that starts and manages headphone activity services.
- [CMMotionActivity](coremotion/cmmotionactivity.md): The data for a single motion update event.

### Pedometer and fitness

Access step-counting data from the built-in motion processor.

- [CMPedometer](coremotion/cmpedometer.md): An object for fetching the system-generated live walking data.
- [CMPedometerData](coremotion/cmpedometerdata.md): Information about the distance traveled by a user on foot.
- [CMPedometerEvent](coremotion/cmpedometerevent.md): A change in the user’s pedestrian activity.
- [CMStepCounter](coremotion/cmstepcounter.md): Deprecated. The number of steps the user has taken with the device.
- [CMOdometerData](coremotion/cmodometerdata.md): A class that represents odometer data for workouts.
- [CMHighFrequencyHeartRateData](coremotion/cmhighfrequencyheartratedata.md): A class that represents heart rate data collected at 1 Hz.

### Movement disorder

- [Getting movement disorder symptom data](coremotion/getting-movement-disorder-symptom-data.md): Retrieve data from the Apple Watch’s movement disorder manager.
- [Adhering to the movement disorder data collection requirements](coremotion/adhering-to-the-movement-disorder-data-collection-requirements.md): Ensure that your users understand and have control over the data your app collects.
- [Movement disorder algorithm changelog](coremotion/movement-disorder-algorithm-changelog.md): A chronological log of notable changes to the movement disorder algorithm.
- [CMMovementDisorderManager](coremotion/cmmovementdisordermanager.md): A manager for recording and querying movement disorder data.
- [CMTremorResult](coremotion/cmtremorresult.md): A result object that contains data about the presence and strength of tremors during a one-minute interval.
- [CMDyskineticSymptomResult](coremotion/cmdyskineticsymptomresult.md): A result object that contains data about the likely presence of dyskinetic symptoms during a one-minute interval.

### Fall detection

- [CMFallDetectionManager](coremotion/cmfalldetectionmanager.md): An object for managing fall detection events.
- [CMFallDetectionDelegate](coremotion/cmfalldetectiondelegate.md): A delegate that receives information about fall detection events and authorization status changes.
- [CMFallDetectionEvent](coremotion/cmfalldetectionevent.md): An object that contains data about a fall detection event.
- [NSFallDetectionUsageDescription](bundleresources/information-property-list/nsfalldetectionusagedescription.md): A message to the user that explains the app’s request for permission to access fall detection event data.

### Historical data

Access recorded motion events to help you analyze movement patterns.

- [CMBatchedSensorManager](coremotion/cmbatchedsensormanager.md)

### Common data

- [CMLogItem](coremotion/cmlogitem.md): The base class for all motion-related data objects.

### Classes

- [CMRecordedDeviceMotion](coremotion/cmrecordeddevicemotion.md)

### Protocols

- [CMBodyIdentifiable](coremotion/cmbodyidentifiable.md)

### Macros

- [CM_EXTERN](coremotion/cm_extern.md)
- [COREMOTION_EXPORT](coremotion/coremotion_export.md)
