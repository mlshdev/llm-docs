> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensorreaderdelegate](https://developer.apple.com/documentation/sensorkit/srsensorreaderdelegate)

# SRSensorReaderDelegate (Swift)

**Framework:** SensorKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0)

A set of callbacks the framework invokes to notify the app of sensor-related events.

> Use SRReader\<Sensor\> class

## Declaration

```swift
protocol SRSensorReaderDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

To access sensor data, assign an object as the delegate and implement its callbacks.

## Topics

### Checking Authorization Status

- [sensorReader(\_:didChange:)](srsensorreaderdelegate/sensorreader%28__didchange_%29.md): Deprecated. Notifies the delegate of the reader’s new authorization status.

### Fetching Devices

- [sensorReader(\_:didFetch:)](srsensorreaderdelegate/sensorreader%28__didfetch_%29.md): Deprecated. Provides the delegate with one or more devices.
- [sensorReader(\_:fetchDevicesDidFailWithError:)](srsensorreaderdelegate/sensorreader%28__fetchdevicesdidfailwitherror_%29.md): Deprecated. Provides the delegate a reason when the reader fails to fetch devices.
- [SRDevice](srdevice.md): A representation of a device that provides sample data.

### Recording Data

- [sensorReaderWillStartRecording(\_:)](srsensorreaderdelegate/sensorreaderwillstartrecording%28__%29.md): Deprecated. Notifies the delegate when a reader starts recording.
- [sensorReader(\_:startRecordingFailedWithError:)](srsensorreaderdelegate/sensorreader%28__startrecordingfailedwitherror_%29.md): Deprecated. Provides the delegate with a reason when the reader fails to record.
- [sensorReaderDidStopRecording(\_:)](srsensorreaderdelegate/sensorreaderdidstoprecording%28__%29.md): Deprecated. Notifies the delegate when a reader stops recording.
- [sensorReader(\_:stopRecordingFailedWithError:)](srsensorreaderdelegate/sensorreader%28__stoprecordingfailedwitherror_%29.md): Deprecated. Provides the delegate with a reason when the reader fails to stop recording.

### Reading Recorded Data

- [sensorReader(\_:fetching:didFetchResult:)](srsensorreaderdelegate/sensorreader%28__fetching_didfetchresult_%29.md): Deprecated. Provides the delegate with a fetch result.
- [sensorReader(\_:didCompleteFetch:)](srsensorreaderdelegate/sensorreader%28__didcompletefetch_%29.md): Deprecated. Provides the delegate with a completed fetch request.
- [sensorReader(\_:fetching:failedWithError:)](srsensorreaderdelegate/sensorreader%28__fetching_failedwitherror_%29.md): Deprecated. Provides the delegate with a fetch failure reason.

### Interpreting Errors

- [SRErrorDomain](srerrordomain.md): An error domain that’s unique to the framework.
- [SRError](srerror.md): An error that SensorKit reports.
- [SRError.Code](srerror/code.md): The kinds of problems that stop a recording or a fetch.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Responding to sensor events

- [delegate](srsensorreader/delegate.md): Deprecated. An object that responds to sensor-related events.

# SRSensorReaderDelegate (Objective-C)

**Framework:** SensorKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A set of callbacks the framework invokes to notify the app of sensor-related events.

## Declaration

```objectivec
@protocol SRSensorReaderDelegate <NSObject>
```

<a id="overview"></a>

## Overview

To access sensor data, assign an object as the delegate and implement its callbacks.

## Topics

### Checking Authorization Status

- [sensorReader:didChangeAuthorizationStatus:](srsensorreaderdelegate/sensorreader%28__didchange_%29.md): Deprecated. Notifies the delegate of the reader’s new authorization status.

### Fetching Devices

- [sensorReader:didFetchDevices:](srsensorreaderdelegate/sensorreader%28__didfetch_%29.md): Deprecated. Provides the delegate with one or more devices.
- [sensorReader:fetchDevicesDidFailWithError:](srsensorreaderdelegate/sensorreader%28__fetchdevicesdidfailwitherror_%29.md): Deprecated. Provides the delegate a reason when the reader fails to fetch devices.
- [SRDevice](srdevice.md): A representation of a device that provides sample data.

### Recording Data

- [sensorReaderWillStartRecording:](srsensorreaderdelegate/sensorreaderwillstartrecording%28__%29.md): Deprecated. Notifies the delegate when a reader starts recording.
- [sensorReader:startRecordingFailedWithError:](srsensorreaderdelegate/sensorreader%28__startrecordingfailedwitherror_%29.md): Deprecated. Provides the delegate with a reason when the reader fails to record.
- [sensorReaderDidStopRecording:](srsensorreaderdelegate/sensorreaderdidstoprecording%28__%29.md): Deprecated. Notifies the delegate when a reader stops recording.
- [sensorReader:stopRecordingFailedWithError:](srsensorreaderdelegate/sensorreader%28__stoprecordingfailedwitherror_%29.md): Deprecated. Provides the delegate with a reason when the reader fails to stop recording.

### Reading Recorded Data

- [sensorReader:fetchingRequest:didFetchResult:](srsensorreaderdelegate/sensorreader%28__fetching_didfetchresult_%29.md): Deprecated. Provides the delegate with a fetch result.
- [sensorReader:didCompleteFetch:](srsensorreaderdelegate/sensorreader%28__didcompletefetch_%29.md): Deprecated. Provides the delegate with a completed fetch request.
- [sensorReader:fetchingRequest:failedWithError:](srsensorreaderdelegate/sensorreader%28__fetching_failedwitherror_%29.md): Deprecated. Provides the delegate with a fetch failure reason.

### Interpreting Errors

- [SRErrorDomain](srerrordomain.md): An error domain that’s unique to the framework.
- [SRErrorCode](srerror/code.md): The kinds of problems that stop a recording or a fetch.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Responding to sensor events

- [delegate](srsensorreader/delegate.md): Deprecated. An object that responds to sensor-related events.
