> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/remotekeylessentryenduringaction](https://developer.apple.com/documentation/carkey/remotekeylessentryenduringaction)

# RemoteKeylessEntryEnduringAction

**Framework:** CarKey  
**Kind:** Structure  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.3+ (deprecated in 15.0) · watchOS 9.0+ (deprecated in 11.0)

An action with an optional stopping point that you want to perform on a vehicle.

> Use [perform(\_:continuationStrategy:)](carkeyremotecontrolsession/perform%28__continuationstrategy_%29.md) instead.

## Declaration

```swift
struct RemoteKeylessEntryEnduringAction
```

<a id="overview"></a>

## Overview

Use a [RemoteKeylessEntryEnduringAction](remotekeylessentryenduringaction.md) object to store details about an action that you can stop or let run to completion. For example, you might use this type of action to lower or raise the top of a convertible vehicle. The object stores information about the vehicle feature to control and the action to take on that feature. It also stores the identifier for the vehicle itself.

After you create a [RemoteKeylessEntryEnduringAction](remotekeylessentryenduringaction.md) object, call your session’s [perform(\_:)](carkeyremotecontrolsession/perform%28__%29-7mpsy.md) method to execute the action. Use the returned [RemoteKeylessEntryAction.ExecutionRequest](remotekeylessentryaction/executionrequest.md) object to determine the success or failure of the request.

## Topics

### Creating the Action Request

- [init(functionID:actionID:vehicleID:)](remotekeylessentryenduringaction/init%28functionid_actionid_vehicleid_%29.md): Deprecated. Creates a new action object with the specified action-specific details and vehicle ID.

### Receiving the Action’s Response

- [RemoteKeylessEntryEnduringAction.EnduringExecutionRequest](remotekeylessentryenduringaction/enduringexecutionrequest.md): Deprecated. An object that reports the results of an action with an optional stopping point.

### Getting the Action Details

- [functionID](remotekeylessentryenduringaction/functionid.md): Deprecated. The vehicle-specific code that identifies which feature you want to control.
- [actionID](remotekeylessentryenduringaction/actionid.md): Deprecated. The vehicle-specific code that identifies what action to take on the targeted feature.
- [recipientVehicleID](remotekeylessentryenduringaction/recipientvehicleid.md): Deprecated. The vehicle to receive the action request.

## See Also

### Vehicle Actions

- [RemoteKeylessEntryAction](remotekeylessentryaction.md): An automatically ending action that you want to perform on a vehicle.
- [FunctionIdentifier](functionidentifier.md): A type that stores the designation code for one of your vehicle’s features.
- [ActionIdentifier](actionidentifier.md): A type that stores the designation code for one of the actions that a vehicle feature supports.
