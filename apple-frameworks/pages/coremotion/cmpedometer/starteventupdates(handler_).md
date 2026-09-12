> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmpedometer/starteventupdates(handler:)](https://developer.apple.com/documentation/coremotion/cmpedometer/starteventupdates(handler:))

# startEventUpdates(handler:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · watchOS 3.0+

Starts the delivery of pedometer events to your app.

## Declaration

```swift
func startEventUpdates(handler: @escaping CMPedometerEventHandler)
```

## Parameters

- `handler`: The block to execute when a pedometer event is available. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Pedometer events report changes in the user’s pedestrian activity.

## See Also

### Gathering Live Pedometer Data

- [startUpdates(from:withHandler:)](startupdates%28from_withhandler_%29.md): Starts the delivery of recent pedestrian-related data to your app.
- [stopUpdates()](stopupdates%28%29.md): Stops the delivery of recent pedestrian data updates to your app.
- [stopEventUpdates()](stopeventupdates%28%29.md): Stops the delivery of pedometer events to your app.
- [CMPedometerHandler](../cmpedometerhandler.md): A block for processing pedometer-related data.
- [CMPedometerEventHandler](../cmpedometereventhandler.md): A block for processing pedometer events.

# startPedometerEventUpdatesWithHandler: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · watchOS 3.0+

Starts the delivery of pedometer events to your app.

## Declaration

```objectivec
- (void) startPedometerEventUpdatesWithHandler:(CMPedometerEventHandler) handler;
```

## Parameters

- `handler`: The block to execute when a pedometer event is available. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Pedometer events report changes in the user’s pedestrian activity.

## See Also

### Gathering Live Pedometer Data

- [startPedometerUpdatesFromDate:withHandler:](startupdates%28from_withhandler_%29.md): Starts the delivery of recent pedestrian-related data to your app.
- [stopPedometerUpdates](stopupdates%28%29.md): Stops the delivery of recent pedestrian data updates to your app.
- [stopPedometerEventUpdates](stopeventupdates%28%29.md): Stops the delivery of pedometer events to your app.
- [CMPedometerHandler](../cmpedometerhandler.md): A block for processing pedometer-related data.
- [CMPedometerEventHandler](../cmpedometereventhandler.md): A block for processing pedometer events.
