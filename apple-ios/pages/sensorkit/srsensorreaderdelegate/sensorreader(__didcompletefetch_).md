> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensorreaderdelegate/sensorreader(_:didcompletefetch:)](https://developer.apple.com/documentation/sensorkit/srsensorreaderdelegate/sensorreader(_:didcompletefetch:))

# sensorReader(\_:didCompleteFetch:) (Swift)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0)

Provides the delegate with a completed fetch request.

> Use SRReader\<Sensor\> class

## Declaration

```swift
optional func sensorReader(_ reader: SRSensorReader, didCompleteFetch fetchRequest: SRFetchRequest)
```

## Parameters

- `reader`: The reader that completed the fetch request.
- `fetchRequest`: The completed fetch request.

## See Also

### Reading Recorded Data

- [sensorReader(\_:fetching:didFetchResult:)](sensorreader%28__fetching_didfetchresult_%29.md): Deprecated. Provides the delegate with a fetch result.
- [sensorReader(\_:fetching:failedWithError:)](sensorreader%28__fetching_failedwitherror_%29.md): Deprecated. Provides the delegate with a fetch failure reason.

# sensorReader:didCompleteFetch: (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Provides the delegate with a completed fetch request.

## Declaration

```objectivec
- (void) sensorReader:(SRSensorReader *) reader didCompleteFetch:(SRFetchRequest *) fetchRequest;
```

## Parameters

- `reader`: The reader that completed the fetch request.
- `fetchRequest`: The completed fetch request.

## See Also

### Reading Recorded Data

- [sensorReader:fetchingRequest:didFetchResult:](sensorreader%28__fetching_didfetchresult_%29.md): Deprecated. Provides the delegate with a fetch result.
- [sensorReader:fetchingRequest:failedWithError:](sensorreader%28__fetching_failedwitherror_%29.md): Deprecated. Provides the delegate with a fetch failure reason.
