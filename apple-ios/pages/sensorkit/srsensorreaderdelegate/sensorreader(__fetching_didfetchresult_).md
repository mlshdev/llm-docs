> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsensorreaderdelegate/sensorreader(_:fetching:didfetchresult:)](https://developer.apple.com/documentation/sensorkit/srsensorreaderdelegate/sensorreader(_:fetching:didfetchresult:))

# sensorReader(\_:fetching:didFetchResult:) (Swift)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0)

Provides the delegate with a fetch result.

> Use SRReader\<Sensor\> class

## Declaration

```swift
optional func sensorReader(_ reader: SRSensorReader, fetching fetchRequest: SRFetchRequest, didFetchResult result: SRFetchResult<AnyObject>) -> Bool
```

## Parameters

- `reader`: The sensor reader for which the fetch provides results.
- `fetchRequest`: The completed fetch request.
- `result`: The fetch request’s result.

<a id="Discussion"></a>

## Discussion

The framework expects the app to know the result’s type based on the reader’s sensor. To see a list of result types per sensor, see [Sample types](../srfetchresult/sample.md#Sample-types).

When a fetch produces multiple results, the framework invokes this callback once for each result.

To reuse a fetch result within the scope of this function, create a copy of `fetchResult` rather than assigning a strong reference to it.

## See Also

### Reading Recorded Data

- [sensorReader(\_:didCompleteFetch:)](sensorreader%28__didcompletefetch_%29.md): Deprecated. Provides the delegate with a completed fetch request.
- [sensorReader(\_:fetching:failedWithError:)](sensorreader%28__fetching_failedwitherror_%29.md): Deprecated. Provides the delegate with a fetch failure reason.

# sensorReader:fetchingRequest:didFetchResult: (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Provides the delegate with a fetch result.

## Declaration

```objectivec
- (BOOL) sensorReader:(SRSensorReader *) reader fetchingRequest:(SRFetchRequest *) fetchRequest didFetchResult:(SRFetchResult *) result;
```

## Parameters

- `reader`: The sensor reader for which the fetch provides results.
- `fetchRequest`: The completed fetch request.
- `result`: The fetch request’s result.

<a id="Discussion"></a>

## Discussion

The framework expects the app to know the result’s type based on the reader’s sensor. To see a list of result types per sensor, see [Sample types](../srfetchresult/sample.md#Sample-types).

When a fetch produces multiple results, the framework invokes this callback once for each result.

To reuse a fetch result within the scope of this function, create a copy of `fetchResult` rather than assigning a strong reference to it.

## See Also

### Reading Recorded Data

- [sensorReader:didCompleteFetch:](sensorreader%28__didcompletefetch_%29.md): Deprecated. Provides the delegate with a completed fetch request.
- [sensorReader:fetchingRequest:failedWithError:](sensorreader%28__fetching_failedwitherror_%29.md): Deprecated. Provides the delegate with a fetch failure reason.
