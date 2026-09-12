> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensorreaderdelegate/sensorreader(_:fetching:failedwitherror:)](https://developer.apple.com/documentation/sensorkit/srsensorreaderdelegate/sensorreader(_:fetching:failedwitherror:))

# sensorReader(\_:fetching:failedWithError:) (Swift)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0)

Provides the delegate with a fetch failure reason.

> Use SRReader\<Sensor\> class

## Declaration

```swift
optional func sensorReader(_ reader: SRSensorReader, fetching fetchRequest: SRFetchRequest, failedWithError error: any Error)
```

## Parameters

- `reader`: The sensor reader for which the fetch failed.
- `fetchRequest`: The original fetch request.
- `error`: An object that describes the cause of failure.

## See Also

### Reading Recorded Data

- [sensorReader(\_:fetching:didFetchResult:)](sensorreader%28__fetching_didfetchresult_%29.md): Deprecated. Provides the delegate with a fetch result.
- [sensorReader(\_:didCompleteFetch:)](sensorreader%28__didcompletefetch_%29.md): Deprecated. Provides the delegate with a completed fetch request.

# sensorReader:fetchingRequest:failedWithError: (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Provides the delegate with a fetch failure reason.

## Declaration

```objectivec
- (void) sensorReader:(SRSensorReader *) reader fetchingRequest:(SRFetchRequest *) fetchRequest failedWithError:(NSError *) error;
```

## Parameters

- `reader`: The sensor reader for which the fetch failed.
- `fetchRequest`: The original fetch request.
- `error`: An object that describes the cause of failure.

## See Also

### Reading Recorded Data

- [sensorReader:fetchingRequest:didFetchResult:](sensorreader%28__fetching_didfetchresult_%29.md): Deprecated. Provides the delegate with a fetch result.
- [sensorReader:didCompleteFetch:](sensorreader%28__didcompletefetch_%29.md): Deprecated. Provides the delegate with a completed fetch request.
