> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensorreader/stoprecording()](https://developer.apple.com/documentation/sensorkit/srsensorreader/stoprecording())

# stopRecording() (Swift)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0)

Stops recording sensor data.

> Use SRReader\<Sensor\> class

## Declaration

```swift
func stopRecording()
```

<a id="Discussion"></a>

## Discussion

This function requests that the framework stop recording for this reader’s sensor. The framework records on this device and any paired devices. Call [fetchDevices()](fetchdevices%28%29.md) to get acquire the full list of devices on which the framework records.

The framework allows a sensor to be recorded simultaneously by multiple readers, either in the same app, or across different apps on the same system. As a result, this function signifies that the caller relinquishes interest in recording the reader’s sensor.

Upon success, the framework calls the delegate’s [sensorReaderDidStopRecording(\_:)](../srsensorreaderdelegate/sensorreaderdidstoprecording%28__%29.md) callback. Upon failure, the framework calls the delegate’s [sensorReader(\_:stopRecordingFailedWithError:)](../srsensorreaderdelegate/sensorreader%28__stoprecordingfailedwitherror_%29.md).

The reader must be authorized (see [authorizationStatus](authorizationstatus.md)) for this function to succeed.

## See Also

### Recording sensor data

- [startRecording()](startrecording%28%29.md): Deprecated. Starts recording sensor data.

# stopRecording (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Stops recording sensor data.

## Declaration

```objectivec
- (void) stopRecording;
```

<a id="Discussion"></a>

## Discussion

This function requests that the framework stop recording for this reader’s sensor. The framework records on this device and any paired devices. Call [fetchDevices](fetchdevices%28%29.md) to get acquire the full list of devices on which the framework records.

The framework allows a sensor to be recorded simultaneously by multiple readers, either in the same app, or across different apps on the same system. As a result, this function signifies that the caller relinquishes interest in recording the reader’s sensor.

Upon success, the framework calls the delegate’s [sensorReaderDidStopRecording:](../srsensorreaderdelegate/sensorreaderdidstoprecording%28__%29.md) callback. Upon failure, the framework calls the delegate’s [sensorReader:stopRecordingFailedWithError:](../srsensorreaderdelegate/sensorreader%28__stoprecordingfailedwitherror_%29.md).

The reader must be authorized (see [authorizationStatus](authorizationstatus.md)) for this function to succeed.

## See Also

### Recording sensor data

- [startRecording](startrecording%28%29.md): Deprecated. Starts recording sensor data.
