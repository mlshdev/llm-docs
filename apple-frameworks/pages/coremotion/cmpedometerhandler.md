> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmpedometerhandler](https://developer.apple.com/documentation/coremotion/cmpedometerhandler)

# CMPedometerHandler (Swift)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · watchOS 2.0+

A block for processing pedometer-related data.

## Declaration

```swift
typealias CMPedometerHandler = (CMPedometerData?, (any Error)?) -> Void
```

<a id="Discussion"></a>

## Discussion

You provide a block of this type when requesting data from the `CMPedometer` object. When the data becomes available, the pedometer object delivers that data to your block for processing. If there was an error retrieving the data, the pedometer object provides an error object instead.

This block has no return value and takes the following parameters:

- **`pedometerData`**: A [CMPedometerData](cmpedometerdata.md) object containing the available data. If there was an error retrieving the data, this parameter is `nil`.
- **`error`**: An [NSError](../foundation/nserror.md) object if there was a problem or `nil` if the pedometer data was retrieved successfully.

## See Also

### Gathering Live Pedometer Data

- [startUpdates(from:withHandler:)](cmpedometer/startupdates%28from_withhandler_%29.md): Starts the delivery of recent pedestrian-related data to your app.
- [stopUpdates()](cmpedometer/stopupdates%28%29.md): Stops the delivery of recent pedestrian data updates to your app.
- [startEventUpdates(handler:)](cmpedometer/starteventupdates%28handler_%29.md): Starts the delivery of pedometer events to your app.
- [stopEventUpdates()](cmpedometer/stopeventupdates%28%29.md): Stops the delivery of pedometer events to your app.
- [CMPedometerEventHandler](cmpedometereventhandler.md): A block for processing pedometer events.

# CMPedometerHandler (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · watchOS 2.0+

A block for processing pedometer-related data.

## Declaration

```objectivec
typedef void (^)(CMPedometerData *, NSError *) CMPedometerHandler;
```

<a id="Discussion"></a>

## Discussion

You provide a block of this type when requesting data from the `CMPedometer` object. When the data becomes available, the pedometer object delivers that data to your block for processing. If there was an error retrieving the data, the pedometer object provides an error object instead.

This block has no return value and takes the following parameters:

- **`pedometerData`**: A [CMPedometerData](cmpedometerdata.md) object containing the available data. If there was an error retrieving the data, this parameter is `nil`.
- **`error`**: An [NSError](../foundation/nserror.md) object if there was a problem or `nil` if the pedometer data was retrieved successfully.

## See Also

### Gathering Live Pedometer Data

- [startPedometerUpdatesFromDate:withHandler:](cmpedometer/startupdates%28from_withhandler_%29.md): Starts the delivery of recent pedestrian-related data to your app.
- [stopPedometerUpdates](cmpedometer/stopupdates%28%29.md): Stops the delivery of recent pedestrian data updates to your app.
- [startPedometerEventUpdatesWithHandler:](cmpedometer/starteventupdates%28handler_%29.md): Starts the delivery of pedometer events to your app.
- [stopPedometerEventUpdates](cmpedometer/stopeventupdates%28%29.md): Stops the delivery of pedometer events to your app.
- [CMPedometerEventHandler](cmpedometereventhandler.md): A block for processing pedometer events.
