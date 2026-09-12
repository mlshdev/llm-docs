> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmpedometer/stopupdates()](https://developer.apple.com/documentation/coremotion/cmpedometer/stopupdates())

# stopUpdates() (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

Stops the delivery of recent pedestrian data updates to your app.

## Declaration

```swift
func stopUpdates()
```

<a id="Discussion"></a>

## Discussion

Use this method to stop the delivery of continuous updates that were initiated by a call to the [startUpdates(from:withHandler:)](startupdates%28from_withhandler_%29.md) method.

## See Also

### Gathering Live Pedometer Data

- [startUpdates(from:withHandler:)](startupdates%28from_withhandler_%29.md): Starts the delivery of recent pedestrian-related data to your app.
- [startEventUpdates(handler:)](starteventupdates%28handler_%29.md): Starts the delivery of pedometer events to your app.
- [stopEventUpdates()](stopeventupdates%28%29.md): Stops the delivery of pedometer events to your app.
- [CMPedometerHandler](../cmpedometerhandler.md): A block for processing pedometer-related data.
- [CMPedometerEventHandler](../cmpedometereventhandler.md): A block for processing pedometer events.

# stopPedometerUpdates (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

Stops the delivery of recent pedestrian data updates to your app.

## Declaration

```objectivec
- (void) stopPedometerUpdates;
```

<a id="Discussion"></a>

## Discussion

Use this method to stop the delivery of continuous updates that were initiated by a call to the [startPedometerUpdatesFromDate:withHandler:](startupdates%28from_withhandler_%29.md) method.

## See Also

### Gathering Live Pedometer Data

- [startPedometerUpdatesFromDate:withHandler:](startupdates%28from_withhandler_%29.md): Starts the delivery of recent pedestrian-related data to your app.
- [startPedometerEventUpdatesWithHandler:](starteventupdates%28handler_%29.md): Starts the delivery of pedometer events to your app.
- [stopPedometerEventUpdates](stopeventupdates%28%29.md): Stops the delivery of pedometer events to your app.
- [CMPedometerHandler](../cmpedometerhandler.md): A block for processing pedometer-related data.
- [CMPedometerEventHandler](../cmpedometereventhandler.md): A block for processing pedometer events.
