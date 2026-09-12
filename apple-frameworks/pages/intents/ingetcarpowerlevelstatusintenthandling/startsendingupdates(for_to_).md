> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarpowerlevelstatusintenthandling/startsendingupdates(for:to:)](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintenthandling/startsendingupdates(for:to:))

# startSendingUpdates(for:to:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Starts the delivery of regular power level updates for a particular electric vehicle.

## Declaration

```swift
optional func startSendingUpdates(for intent: INGetCarPowerLevelStatusIntent, to observer: any INGetCarPowerLevelStatusIntentResponseObserver)
```

## Parameters

- `intent`: The intent object that indicates which electric vehicle you need to provide updates for. The [vocabularyIdentifier](../inspeakable/vocabularyidentifier.md) property of the [carName](../ingetcarpowerlevelstatusintent/carname.md) speakable string stores the unique [carIdentifier](../incar/caridentifier.md).
- `observer`: The observer you send the updates to. You must store a reference to this object and call its [didUpdate(getCarPowerLevelStatus:)](../ingetcarpowerlevelstatusintentresponseobserver/didupdate%28getcarpowerlevelstatus_%29.md) method when you have a power level update to deliver. For more information, see [INGetCarPowerLevelStatusIntentResponseObserver](../ingetcarpowerlevelstatusintentresponseobserver.md).

<a id="Discussion"></a>

## Discussion

Maps calls this method when it begins a navigation session, and you must use the observer to inform Maps of any abrupt changes in the electric vehicle’s battery charge. Store a reference to the observer, and continue providing updates until the system calls [stopSendingUpdates(for:)](stopsendingupdates%28for_%29.md).

To determine which vehicle you need to send updates for, you can extract the vehicle’s unique indentifer from the `vocabularyIdentifier` property of the intent’s `carName` speakable string. This is the same value as the `carIdentifier` in the vehicle’s corresponding [INCar](../incar.md) object that your [INListCarsIntentHandling](../inlistcarsintenthandling.md) handler returns.

> **Important**

>  An arbitrary thread of your Intents extension calls this method.

## See Also

### Providing Power Level Status Updates

- [stopSendingUpdates(for:)](stopsendingupdates%28for_%29.md): Stops the delivery of regular power level updates for a particular electric vehicle.

# startSendingUpdatesForGetCarPowerLevelStatus:toObserver: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Starts the delivery of regular power level updates for a particular electric vehicle.

## Declaration

```objectivec
- (void) startSendingUpdatesForGetCarPowerLevelStatus:(INGetCarPowerLevelStatusIntent *) intent toObserver:(id<INGetCarPowerLevelStatusIntentResponseObserver>) observer;
```

## Parameters

- `intent`: The intent object that indicates which electric vehicle you need to provide updates for. The [vocabularyIdentifier](../inspeakable/vocabularyidentifier.md) property of the [carName](../ingetcarpowerlevelstatusintent/carname.md) speakable string stores the unique [carIdentifier](../incar/caridentifier.md).
- `observer`: The observer you send the updates to. You must store a reference to this object and call its [getCarPowerLevelStatusResponseDidUpdate:](../ingetcarpowerlevelstatusintentresponseobserver/didupdate%28getcarpowerlevelstatus_%29.md) method when you have a power level update to deliver. For more information, see [INGetCarPowerLevelStatusIntentResponseObserver](../ingetcarpowerlevelstatusintentresponseobserver.md).

<a id="Discussion"></a>

## Discussion

Maps calls this method when it begins a navigation session, and you must use the observer to inform Maps of any abrupt changes in the electric vehicle’s battery charge. Store a reference to the observer, and continue providing updates until the system calls [stopSendingUpdatesForGetCarPowerLevelStatus:](stopsendingupdates%28for_%29.md).

To determine which vehicle you need to send updates for, you can extract the vehicle’s unique indentifer from the `vocabularyIdentifier` property of the intent’s `carName` speakable string. This is the same value as the `carIdentifier` in the vehicle’s corresponding [INCar](../incar.md) object that your [INListCarsIntentHandling](../inlistcarsintenthandling.md) handler returns.

> **Important**

>  An arbitrary thread of your Intents extension calls this method.

## See Also

### Providing Power Level Status Updates

- [stopSendingUpdatesForGetCarPowerLevelStatus:](stopsendingupdates%28for_%29.md): Stops the delivery of regular power level updates for a particular electric vehicle.
