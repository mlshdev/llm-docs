> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensorreader/startrecording()](https://developer.apple.com/documentation/sensorkit/srsensorreader/startrecording())

# startRecording() (Swift)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0)

Starts recording sensor data.

> Use SRReader\<Sensor\> class

## Declaration

```swift
func startRecording()
```

<a id="Discussion"></a>

## Discussion

This function instructs the framework to start recording for this reader’s sensor. The framework records on this device and any paired devices. Call [fetchDevices()](fetchdevices%28%29.md) to acquire the full list of devices on which the framework records.

The framework allows a sensor to be recorded simultaneously by multiple readers, either in the same app or across different apps on the same system. On multiple calls to this function, the framework just ensures that recording for the sensor is active.

Upon success, the framework calls the delegate’s [sensorReaderWillStartRecording(\_:)](../srsensorreaderdelegate/sensorreaderwillstartrecording%28__%29.md) callback. Upon failure, the framework calls the delegate’s [sensorReader(\_:startRecordingFailedWithError:)](../srsensorreaderdelegate/sensorreader%28__startrecordingfailedwitherror_%29.md).

The reader must be authorized (see [authorizationStatus](authorizationstatus.md)) for this function to succeed.

## See Also

### Recording sensor data

- [stopRecording()](stoprecording%28%29.md): Deprecated. Stops recording sensor data.

# startRecording (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Starts recording sensor data.

## Declaration

```objectivec
- (void) startRecording;
```

<a id="Discussion"></a>

## Discussion

This function instructs the framework to start recording for this reader’s sensor. The framework records on this device and any paired devices. Call [fetchDevices](fetchdevices%28%29.md) to acquire the full list of devices on which the framework records.

The framework allows a sensor to be recorded simultaneously by multiple readers, either in the same app or across different apps on the same system. On multiple calls to this function, the framework just ensures that recording for the sensor is active.

Upon success, the framework calls the delegate’s [sensorReaderWillStartRecording:](../srsensorreaderdelegate/sensorreaderwillstartrecording%28__%29.md) callback. Upon failure, the framework calls the delegate’s [sensorReader:startRecordingFailedWithError:](../srsensorreaderdelegate/sensorreader%28__startrecordingfailedwitherror_%29.md).

The reader must be authorized (see [authorizationStatus](authorizationstatus.md)) for this function to succeed.

## See Also

### Recording sensor data

- [stopRecording](stoprecording%28%29.md): Deprecated. Stops recording sensor data.
