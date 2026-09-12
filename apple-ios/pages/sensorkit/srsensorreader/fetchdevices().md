> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensorreader/fetchdevices()](https://developer.apple.com/documentation/sensorkit/srsensorreader/fetchdevices())

# fetchDevices() (Swift)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0)

Acquires device information for all devices that store data for this reader’s sensor.

> Use SRReader\<Sensor\> class

## Declaration

```swift
func fetchDevices()
```

<a id="Discussion"></a>

## Discussion

Upon success, the framework provides an array of devices to the delegate via [sensorReader(\_:didFetch:)](../srsensorreaderdelegate/sensorreader%28__didfetch_%29.md). Upon failure, the framework invokes the delegate’s [sensorReader(\_:fetchDevicesDidFailWithError:)](../srsensorreaderdelegate/sensorreader%28__fetchdevicesdidfailwitherror_%29.md) callback.

## See Also

### Reading recorded data

- [fetch(\_:)](fetch%28__%29.md): Deprecated. Fetches the samples that a fetch request specifies.
- [SRDevice](../srdevice.md): A representation of a device that provides sample data.

# fetchDevices (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Acquires device information for all devices that store data for this reader’s sensor.

## Declaration

```objectivec
- (void) fetchDevices;
```

<a id="Discussion"></a>

## Discussion

Upon success, the framework provides an array of devices to the delegate via [sensorReader:didFetchDevices:](../srsensorreaderdelegate/sensorreader%28__didfetch_%29.md). Upon failure, the framework invokes the delegate’s [sensorReader:fetchDevicesDidFailWithError:](../srsensorreaderdelegate/sensorreader%28__fetchdevicesdidfailwitherror_%29.md) callback.

## See Also

### Reading recorded data

- [fetch:](fetch%28__%29.md): Deprecated. Fetches the samples that a fetch request specifies.
- [SRDevice](../srdevice.md): A representation of a device that provides sample data.
