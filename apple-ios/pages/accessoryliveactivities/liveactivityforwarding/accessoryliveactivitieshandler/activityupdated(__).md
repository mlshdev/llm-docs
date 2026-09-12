> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessoryliveactivities/liveactivityforwarding/accessoryliveactivitieshandler/activityupdated(_:)](https://developer.apple.com/documentation/accessoryliveactivities/liveactivityforwarding/accessoryliveactivitieshandler/activityupdated(_:))

# activityUpdated(\_:)

**Framework:** Accessory Live Activities  
**Kind:** Instance Method  
**Availability:** iOS 26.5+ · iPadOS 26.5+

Provides an updated Live Activity.

## Declaration

```swift
func activityUpdated(_ activity: AccessoryLiveActivity)
```

## Parameters

- `activity`: The updated Live Activity.

## Mentioned In

- [Receiving Live Activity updates and alerts on an accessory](../../receiving-live-activities-on-an-accessory.md)

<a id="Overview"></a>

## Overview

Use this callback method to keep the accessory’s display in sync with the current state of the Live Activity. Parse the activity’s details, select the information to display on your accessory, and convert it to data for transmission. Then, send the data to your accessory using the Live Activity’s corresponding [LiveActivityForwarding.Session](../session.md) and its `LiveActivityForwarding/Session/send(message:)` method.

If the activity’s [state](../../accessoryliveactivity/state.md) property equals [ActivityState.dismissed](../../../activitykit/activitystate/dismissed.md), remove the Live Activity from the accessory’s display.

## See Also

### Receiving Live Activity updates

- [activityUpdatedForAlert(\_:)](activityupdatedforalert%28__%29.md): Provides an updated Live Activity and requests confirmation that the accessory displayed an alert.
