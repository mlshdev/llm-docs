> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensorreaderdelegate/sensorreader(_:didfetch:)](https://developer.apple.com/documentation/sensorkit/srsensorreaderdelegate/sensorreader(_:didfetch:))

# sensorReader(\_:didFetch:) (Swift)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0)

Provides the delegate with one or more devices.

> Use SRReader\<Sensor\> class

## Declaration

```swift
optional func sensorReader(_ reader: SRSensorReader, didFetch devices: [SRDevice])
```

## Parameters

- `reader`: The sensor reader that fetched the device(s).
- `devices`: The fetched devices.

## See Also

### Fetching Devices

- [sensorReader(\_:fetchDevicesDidFailWithError:)](sensorreader%28__fetchdevicesdidfailwitherror_%29.md): Deprecated. Provides the delegate a reason when the reader fails to fetch devices.
- [SRDevice](../srdevice.md): A representation of a device that provides sample data.

# sensorReader:didFetchDevices: (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Provides the delegate with one or more devices.

## Declaration

```objectivec
- (void) sensorReader:(SRSensorReader *) reader didFetchDevices:(NSArray<SRDevice *> *) devices;
```

## Parameters

- `reader`: The sensor reader that fetched the device(s).
- `devices`: The fetched devices.

## See Also

### Fetching Devices

- [sensorReader:fetchDevicesDidFailWithError:](sensorreader%28__fetchdevicesdidfailwitherror_%29.md): Deprecated. Provides the delegate a reason when the reader fails to fetch devices.
- [SRDevice](../srdevice.md): A representation of a device that provides sample data.
