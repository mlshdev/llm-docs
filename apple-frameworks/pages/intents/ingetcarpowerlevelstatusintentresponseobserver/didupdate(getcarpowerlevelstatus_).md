> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarpowerlevelstatusintentresponseobserver/didupdate(getcarpowerlevelstatus:)](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponseobserver/didupdate(getcarpowerlevelstatus:))

# didUpdate(getCarPowerLevelStatus:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Provides information about the vehicle’s power level.

## Declaration

```swift
func didUpdate(getCarPowerLevelStatus response: INGetCarPowerLevelStatusIntentResponse)
```

## Parameters

- `response`: The response object that contains current power level information.

<a id="Discussion"></a>

## Discussion

You call this method to deliver updated power level information to Maps, which only requests updates during an active navigation session. During that session, Maps regularly asks for the vehicle’s power level status using [INGetCarPowerLevelStatusIntent](../ingetcarpowerlevelstatusintent.md). Only call this method when there’s an abrupt change in the vehicle’s battery charge—a 3 percent or greater drop—since handling the last intent.

# getCarPowerLevelStatusResponseDidUpdate: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Provides information about the vehicle’s power level.

## Declaration

```objectivec
- (void) getCarPowerLevelStatusResponseDidUpdate:(INGetCarPowerLevelStatusIntentResponse *) response;
```

## Parameters

- `response`: The response object that contains current power level information.

<a id="Discussion"></a>

## Discussion

You call this method to deliver updated power level information to Maps, which only requests updates during an active navigation session. During that session, Maps regularly asks for the vehicle’s power level status using [INGetCarPowerLevelStatusIntent](../ingetcarpowerlevelstatusintent.md). Only call this method when there’s an abrupt change in the vehicle’s battery charge—a 3 percent or greater drop—since handling the last intent.
