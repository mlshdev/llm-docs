> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarpowerlevelstatusintenthandling/stopsendingupdates(for:)](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintenthandling/stopsendingupdates(for:))

# stopSendingUpdates(for:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Stops the delivery of regular power level updates for a particular electric vehicle.

## Declaration

```swift
optional func stopSendingUpdates(for intent: INGetCarPowerLevelStatusIntent)
```

## Parameters

- `intent`: The intent object that indicates which electric vehicle the power level updates relate to. The [vocabularyIdentifier](../inspeakable/vocabularyidentifier.md) property of the [carName](../ingetcarpowerlevelstatusintent/carname.md) speakable string stores the unique [carIdentifier](../incar/caridentifier.md).

<a id="Discussion"></a>

## Discussion

The system calls this method when it wants you to stop providing power level updates for a particular electric vehicle. Use this opportunity to perform any necessary cleanup and discard any references to the observer object that [startSendingUpdates(for:to:)](startsendingupdates%28for_to_%29.md) provides.

To determine which vehicle the request relates to, you can extract the vehicle’s unique indentifer from the `vocabularyIdentifier` property of the intent’s `carName` speakable string. This is the same value as the `carIdentifier` in the vehicle’s corresponding [INCar](../incar.md) object that your [INListCarsIntentHandling](../inlistcarsintenthandling.md) handler returns.

> **Important**

>  An arbitrary thread of your Intents extension calls this method.

## See Also

### Providing Power Level Status Updates

- [startSendingUpdates(for:to:)](startsendingupdates%28for_to_%29.md): Starts the delivery of regular power level updates for a particular electric vehicle.

# stopSendingUpdatesForGetCarPowerLevelStatus: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Stops the delivery of regular power level updates for a particular electric vehicle.

## Declaration

```objectivec
- (void) stopSendingUpdatesForGetCarPowerLevelStatus:(INGetCarPowerLevelStatusIntent *) intent;
```

## Parameters

- `intent`: The intent object that indicates which electric vehicle the power level updates relate to. The [vocabularyIdentifier](../inspeakable/vocabularyidentifier.md) property of the [carName](../ingetcarpowerlevelstatusintent/carname.md) speakable string stores the unique [carIdentifier](../incar/caridentifier.md).

<a id="Discussion"></a>

## Discussion

The system calls this method when it wants you to stop providing power level updates for a particular electric vehicle. Use this opportunity to perform any necessary cleanup and discard any references to the observer object that [startSendingUpdatesForGetCarPowerLevelStatus:toObserver:](startsendingupdates%28for_to_%29.md) provides.

To determine which vehicle the request relates to, you can extract the vehicle’s unique indentifer from the `vocabularyIdentifier` property of the intent’s `carName` speakable string. This is the same value as the `carIdentifier` in the vehicle’s corresponding [INCar](../incar.md) object that your [INListCarsIntentHandling](../inlistcarsintenthandling.md) handler returns.

> **Important**

>  An arbitrary thread of your Intents extension calls this method.

## See Also

### Providing Power Level Status Updates

- [startSendingUpdatesForGetCarPowerLevelStatus:toObserver:](startsendingupdates%28for_to_%29.md): Starts the delivery of regular power level updates for a particular electric vehicle.
