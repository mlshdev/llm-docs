> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensorreader](https://developer.apple.com/documentation/sensorkit/srsensorreader)

# SRSensorReader (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0)

An object that establishes user authorization and records data for a particular sensor.

> Use SRReader\<Sensor\> class

## Declaration

```swift
class SRSensorReader
```

<a id="overview"></a>

## Overview

To acquire data from a particular sensor using a reader, an app creates an instance of this class using [init(sensor:)](srsensorreader/init%28sensor_%29.md) and passes in one sensor from the available options in `Sensors`.

A reader is a data stream for a particular sensor that the user must authorize before use. When an app calls [requestAuthorization(sensors:completion:)](srsensorreader/requestauthorization%28sensors_completion_%29.md), the OS prompts the user for approval to use the particular sensor and determines the app’s authorization according to the user’s answer. The framework notifies the delegate with the  [sensorReader(\_:didChange:)](srsensorreaderdelegate/sensorreader%28__didchange_%29.md) callback if the authorization status changes as a result of the [requestAuthorization(sensors:completion:)](srsensorreader/requestauthorization%28sensors_completion_%29.md) call. When a reader’s [authorizationStatus](srsensorreader/authorizationstatus.md) is [SRAuthorizationStatus.authorized](srauthorizationstatus/authorized.md), an app starts collecting sensor data by beginning recording.

When an app calls [startRecording()](srsensorreader/startrecording%28%29.md), the framework starts the reader’s sensor if it isn’t already running because of a request from another app or a system process. An app has access to 7 days of prior recorded data for an active sensor. When an app calls [stopRecording()](srsensorreader/stoprecording%28%29.md), the app relinquishes stakeholdership in the sensor. When a sensor has no app or system stakeholders, the framework deactivates the sensor and, thereby, stops recording data.

To fetch a sensor’s data, pass a request object to the [fetch(\_:)](srsensorreader/fetch%28__%29.md) function. [SRFetchRequest](srfetchrequest.md) specifies a time range that defines the age of the data, and a device, such as a phone or a watch, from which to collect the data. Use [fetchDevices()](srsensorreader/fetchdevices%28%29.md) to list the available devices, and use the time convenience-functions in Defining the Time Range to specify the time range.

If the fetch query succeeds, the framework notifies the delegate with [sensorReader(\_:didCompleteFetch:)](srsensorreaderdelegate/sensorreader%28__didcompletefetch_%29.md). The delegate receives sensor data in the form of *samples* from [sensorReader(\_:fetching:didFetchResult:)](srsensorreaderdelegate/sensorreader%28__fetching_didfetchresult_%29.md). A fetch result’s [sample](srfetchresult/sample.md) type is different depending on the particular sensor for the reader. For a mapping of sensors to their samples, see [Sample types](srfetchresult/sample.md#Sample-types).

## Topics

### Checking user authorization

- [authorizationStatus](srsensorreader/authorizationstatus.md): Deprecated. The status of the user’s agreement to let the app access this reader’s sensor.
- [requestAuthorization(sensors:completion:)](srsensorreader/requestauthorization%28sensors_completion_%29.md): Deprecated. Requests user permission to read one or more sensors.
- [SRAuthorizationStatus](srauthorizationstatus.md): The states that model whether the user approves the app to read a particular sensor.

### Creating a sensor reader

- [init(sensor:)](srsensorreader/init%28sensor_%29.md): Deprecated. Initializes a new sensor reader object.
- [SRSensor](srsensor.md): The sensors an app can read.
- [sensor](srsensorreader/sensor.md): Deprecated. The particular sensor that this object reads.

### Recording sensor data

- [startRecording()](srsensorreader/startrecording%28%29.md): Deprecated. Starts recording sensor data.
- [stopRecording()](srsensorreader/stoprecording%28%29.md): Deprecated. Stops recording sensor data.

### Reading recorded data

- [fetch(\_:)](srsensorreader/fetch%28__%29.md): Deprecated. Fetches the samples that a fetch request specifies.
- [fetchDevices()](srsensorreader/fetchdevices%28%29.md): Deprecated. Acquires device information for all devices that store data for this reader’s sensor.
- [SRDevice](srdevice.md): A representation of a device that provides sample data.

### Responding to sensor events

- [delegate](srsensorreader/delegate.md): Deprecated. An object that responds to sensor-related events.
- [SRSensorReaderDelegate](srsensorreaderdelegate.md): Deprecated. A set of callbacks the framework invokes to notify the app of sensor-related events.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Setup

- [Configuring your project for sensor reading](configuring-your-project-for-sensor-reading.md): Add metadata to your app to attain system and user permission to access sensor data.

# SRSensorReader (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

An object that establishes user authorization and records data for a particular sensor.

## Declaration

```objectivec
@interface SRSensorReader : NSObject
```

<a id="overview"></a>

## Overview

To acquire data from a particular sensor using a reader, an app creates an instance of this class using [initWithSensor:](srsensorreader/init%28sensor_%29.md) and passes in one sensor from the available options in `Sensors`.

A reader is a data stream for a particular sensor that the user must authorize before use. When an app calls [requestAuthorizationForSensors:completion:](srsensorreader/requestauthorization%28sensors_completion_%29.md), the OS prompts the user for approval to use the particular sensor and determines the app’s authorization according to the user’s answer. The framework notifies the delegate with the  [sensorReader:didChangeAuthorizationStatus:](srsensorreaderdelegate/sensorreader%28__didchange_%29.md) callback if the authorization status changes as a result of the [requestAuthorizationForSensors:completion:](srsensorreader/requestauthorization%28sensors_completion_%29.md) call. When a reader’s [authorizationStatus](srsensorreader/authorizationstatus.md) is [SRAuthorizationStatusAuthorized](srauthorizationstatus/authorized.md), an app starts collecting sensor data by beginning recording.

When an app calls [startRecording](srsensorreader/startrecording%28%29.md), the framework starts the reader’s sensor if it isn’t already running because of a request from another app or a system process. An app has access to 7 days of prior recorded data for an active sensor. When an app calls [stopRecording](srsensorreader/stoprecording%28%29.md), the app relinquishes stakeholdership in the sensor. When a sensor has no app or system stakeholders, the framework deactivates the sensor and, thereby, stops recording data.

To fetch a sensor’s data, pass a request object to the [fetch:](srsensorreader/fetch%28__%29.md) function. [SRFetchRequest](srfetchrequest.md) specifies a time range that defines the age of the data, and a device, such as a phone or a watch, from which to collect the data. Use [fetchDevices](srsensorreader/fetchdevices%28%29.md) to list the available devices, and use the time convenience-functions in Defining the Time Range to specify the time range.

If the fetch query succeeds, the framework notifies the delegate with [sensorReader:didCompleteFetch:](srsensorreaderdelegate/sensorreader%28__didcompletefetch_%29.md). The delegate receives sensor data in the form of *samples* from [sensorReader:fetchingRequest:didFetchResult:](srsensorreaderdelegate/sensorreader%28__fetching_didfetchresult_%29.md). A fetch result’s [sample](srfetchresult/sample.md) type is different depending on the particular sensor for the reader. For a mapping of sensors to their samples, see [Sample types](srfetchresult/sample.md#Sample-types).

## Topics

### Checking user authorization

- [authorizationStatus](srsensorreader/authorizationstatus.md): Deprecated. The status of the user’s agreement to let the app access this reader’s sensor.
- [requestAuthorizationForSensors:completion:](srsensorreader/requestauthorization%28sensors_completion_%29.md): Deprecated. Requests user permission to read one or more sensors.
- [SRAuthorizationStatus](srauthorizationstatus.md): The states that model whether the user approves the app to read a particular sensor.

### Creating a sensor reader

- [initWithSensor:](srsensorreader/init%28sensor_%29.md): Deprecated. Initializes a new sensor reader object.
- [SRSensor](srsensor.md): The sensors an app can read.
- [sensor](srsensorreader/sensor.md): Deprecated. The particular sensor that this object reads.

### Recording sensor data

- [startRecording](srsensorreader/startrecording%28%29.md): Deprecated. Starts recording sensor data.
- [stopRecording](srsensorreader/stoprecording%28%29.md): Deprecated. Stops recording sensor data.

### Reading recorded data

- [fetch:](srsensorreader/fetch%28__%29.md): Deprecated. Fetches the samples that a fetch request specifies.
- [fetchDevices](srsensorreader/fetchdevices%28%29.md): Deprecated. Acquires device information for all devices that store data for this reader’s sensor.
- [SRDevice](srdevice.md): A representation of a device that provides sample data.

### Responding to sensor events

- [delegate](srsensorreader/delegate.md): Deprecated. An object that responds to sensor-related events.
- [SRSensorReaderDelegate](srsensorreaderdelegate.md): Deprecated. A set of callbacks the framework invokes to notify the app of sensor-related events.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Setup

- [Configuring your project for sensor reading](configuring-your-project-for-sensor-reading.md): Add metadata to your app to attain system and user permission to access sensor data.
