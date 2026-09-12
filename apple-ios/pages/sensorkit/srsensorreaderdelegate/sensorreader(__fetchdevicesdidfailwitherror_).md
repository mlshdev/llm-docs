> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensorreaderdelegate/sensorreader(_:fetchdevicesdidfailwitherror:)](https://developer.apple.com/documentation/sensorkit/srsensorreaderdelegate/sensorreader(_:fetchdevicesdidfailwitherror:))

# sensorReader(\_:fetchDevicesDidFailWithError:) (Swift)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0)

Provides the delegate a reason when the reader fails to fetch devices.

> Use SRReader\<Sensor\> class

## Declaration

```swift
optional func sensorReader(_ reader: SRSensorReader, fetchDevicesDidFailWithError error: any Error)
```

## Parameters

- `reader`: The reader that failed to fetch devices.
- `error`: An object that describes the cause of failure.

## See Also

### Fetching Devices

- [sensorReader(\_:didFetch:)](sensorreader%28__didfetch_%29.md): Deprecated. Provides the delegate with one or more devices.
- [SRDevice](../srdevice.md): A representation of a device that provides sample data.

# sensorReader:fetchDevicesDidFailWithError: (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Provides the delegate a reason when the reader fails to fetch devices.

## Declaration

```objectivec
- (void) sensorReader:(SRSensorReader *) reader fetchDevicesDidFailWithError:(NSError *) error;
```

## Parameters

- `reader`: The reader that failed to fetch devices.
- `error`: An object that describes the cause of failure.

## See Also

### Fetching Devices

- [sensorReader:didFetchDevices:](sensorreader%28__didfetch_%29.md): Deprecated. Provides the delegate with one or more devices.
- [SRDevice](../srdevice.md): A representation of a device that provides sample data.
