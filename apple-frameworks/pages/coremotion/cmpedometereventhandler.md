> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmpedometereventhandler](https://developer.apple.com/documentation/coremotion/cmpedometereventhandler)

# CMPedometerEventHandler (Swift)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 3.0+

A block for processing pedometer events.

## Declaration

```swift
typealias CMPedometerEventHandler = (CMPedometerEvent?, (any Error)?) -> Void
```

<a id="Discussion"></a>

## Discussion

You provide a block of this type when requesting pedometer events from a [CMPedometer](cmpedometer.md) object. When a new event becomes available, the pedometer object delivers that data to your block for processing. If there was an error retrieving the data, the pedometer object provides an error object instead.

This block has no return value and takes the following parameters.

- **`pedometerEvent`**: A [CMPedometerEvent](cmpedometerevent.md) object containing the event information. If there was an error retrieving the data, this parameter is nil.
- **`error`**: An [NSError](../foundation/nserror.md) object if there was a problem or `nil` if the pedometer event was retrieved successfully.

## See Also

### Gathering Live Pedometer Data

- [startUpdates(from:withHandler:)](cmpedometer/startupdates%28from_withhandler_%29.md): Starts the delivery of recent pedestrian-related data to your app.
- [stopUpdates()](cmpedometer/stopupdates%28%29.md): Stops the delivery of recent pedestrian data updates to your app.
- [startEventUpdates(handler:)](cmpedometer/starteventupdates%28handler_%29.md): Starts the delivery of pedometer events to your app.
- [stopEventUpdates()](cmpedometer/stopeventupdates%28%29.md): Stops the delivery of pedometer events to your app.
- [CMPedometerHandler](cmpedometerhandler.md): A block for processing pedometer-related data.

# CMPedometerEventHandler (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 3.0+

A block for processing pedometer events.

## Declaration

```objectivec
typedef void (^)(CMPedometerEvent *, NSError *) CMPedometerEventHandler;
```

<a id="Discussion"></a>

## Discussion

You provide a block of this type when requesting pedometer events from a [CMPedometer](cmpedometer.md) object. When a new event becomes available, the pedometer object delivers that data to your block for processing. If there was an error retrieving the data, the pedometer object provides an error object instead.

This block has no return value and takes the following parameters.

- **`pedometerEvent`**: A [CMPedometerEvent](cmpedometerevent.md) object containing the event information. If there was an error retrieving the data, this parameter is nil.
- **`error`**: An [NSError](../foundation/nserror.md) object if there was a problem or `nil` if the pedometer event was retrieved successfully.

## See Also

### Gathering Live Pedometer Data

- [startPedometerUpdatesFromDate:withHandler:](cmpedometer/startupdates%28from_withhandler_%29.md): Starts the delivery of recent pedestrian-related data to your app.
- [stopPedometerUpdates](cmpedometer/stopupdates%28%29.md): Stops the delivery of recent pedestrian data updates to your app.
- [startPedometerEventUpdatesWithHandler:](cmpedometer/starteventupdates%28handler_%29.md): Starts the delivery of pedometer events to your app.
- [stopPedometerEventUpdates](cmpedometer/stopeventupdates%28%29.md): Stops the delivery of pedometer events to your app.
- [CMPedometerHandler](cmpedometerhandler.md): A block for processing pedometer-related data.
