> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensorreader/fetch(_:)](https://developer.apple.com/documentation/sensorkit/srsensorreader/fetch(_:))

# fetch(\_:) (Swift)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0)

Fetches the samples that a fetch request specifies.

> Use SRReader\<Sensor\> class

## Declaration

```swift
func fetch(_ request: SRFetchRequest)
```

## Parameters

- `request`: An object that describes the device from which to retrieve samples, and samaple age of interest.

<a id="Discussion"></a>

## Discussion

An app calls this function to access data for the caller’s sensor.

Upon success, the framework delivers results in the form of *samples* via the delegate’s [sensorReader(\_:fetching:didFetchResult:)](../srsensorreaderdelegate/sensorreader%28__fetching_didfetchresult_%29.md) callback. The framework invokes the delegate multiple times if this function results in multiple samples.

The framework returns sensor data only for the argument fetch-object’s device, and that’s dated only within the argument fetch-object’s time window. Within that window, this function returns only the data that the framework recorded (see [startRecording()](startrecording%28%29.md)), and that the framework hasn’t deleted (see [SRDeletionRecord](../srdeletionrecord.md)).

## See Also

### Reading recorded data

- [fetchDevices()](fetchdevices%28%29.md): Deprecated. Acquires device information for all devices that store data for this reader’s sensor.
- [SRDevice](../srdevice.md): A representation of a device that provides sample data.

# fetch: (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Fetches the samples that a fetch request specifies.

## Declaration

```objectivec
- (void) fetch:(SRFetchRequest *) request;
```

## Parameters

- `request`: An object that describes the device from which to retrieve samples, and samaple age of interest.

<a id="Discussion"></a>

## Discussion

An app calls this function to access data for the caller’s sensor.

Upon success, the framework delivers results in the form of *samples* via the delegate’s [sensorReader:fetchingRequest:didFetchResult:](../srsensorreaderdelegate/sensorreader%28__fetching_didfetchresult_%29.md) callback. The framework invokes the delegate multiple times if this function results in multiple samples.

The framework returns sensor data only for the argument fetch-object’s device, and that’s dated only within the argument fetch-object’s time window. Within that window, this function returns only the data that the framework recorded (see [startRecording](startrecording%28%29.md)), and that the framework hasn’t deleted (see [SRDeletionRecord](../srdeletionrecord.md)).

## See Also

### Reading recorded data

- [fetchDevices](fetchdevices%28%29.md): Deprecated. Acquires device information for all devices that store data for this reader’s sensor.
- [SRDevice](../srdevice.md): A representation of a device that provides sample data.
