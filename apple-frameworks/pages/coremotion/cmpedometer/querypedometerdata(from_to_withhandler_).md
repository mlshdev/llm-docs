> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmpedometer/querypedometerdata(from:to:withhandler:)](https://developer.apple.com/documentation/coremotion/cmpedometer/querypedometerdata(from:to:withhandler:))

# queryPedometerData(from:to:withHandler:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

Retrieves the data between the specified start and end dates.

## Declaration

```swift
func queryPedometerData(from start: Date, to end: Date, withHandler handler: @escaping CMPedometerHandler)
```

## Parameters

- `start`: The start date for the data you want. This parameter must not be `nil`.
- `end`: The end date for the data you want. This parameter must not be `nil`.
- `handler`: The block to execute with the resulting data. This block is called once on the same serial dispatch queue used to process continuous updates. This parameter must not be `nil`. For information about this block, see [CMPedometerHandler](../cmpedometerhandler.md).

<a id="Discussion"></a>

## Discussion

Use this method to retrieve historical pedestrian data between the specified dates. This method runs asynchronously and delivers the data to the block you provide. Only the past seven days worth of data is stored and available for you to retrieve. Specifying a start date that is more than seven days in the past returns only the available data.

It is safe to call this method at the same time that you are generating continuous updates using the [startUpdates(from:withHandler:)](startupdates%28from_withhandler_%29.md) method.

# queryPedometerDataFromDate:toDate:withHandler: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

Retrieves the data between the specified start and end dates.

## Declaration

```objectivec
- (void) queryPedometerDataFromDate:(NSDate *) start toDate:(NSDate *) end withHandler:(CMPedometerHandler) handler;
```

## Parameters

- `start`: The start date for the data you want. This parameter must not be `nil`.
- `end`: The end date for the data you want. This parameter must not be `nil`.
- `handler`: The block to execute with the resulting data. This block is called once on the same serial dispatch queue used to process continuous updates. This parameter must not be `nil`. For information about this block, see [CMPedometerHandler](../cmpedometerhandler.md).

<a id="Discussion"></a>

## Discussion

Use this method to retrieve historical pedestrian data between the specified dates. This method runs asynchronously and delivers the data to the block you provide. Only the past seven days worth of data is stored and available for you to retrieve. Specifying a start date that is more than seven days in the past returns only the available data.

It is safe to call this method at the same time that you are generating continuous updates using the [startPedometerUpdatesFromDate:withHandler:](startupdates%28from_withhandler_%29.md) method.
