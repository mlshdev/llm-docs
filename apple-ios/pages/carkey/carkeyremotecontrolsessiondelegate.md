> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/carkeyremotecontrolsessiondelegate](https://developer.apple.com/documentation/carkey/carkeyremotecontrolsessiondelegate)

# CarKeyRemoteControlSessionDelegate

**Framework:** CarKey  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.3+ · watchOS 9.0+

An interface you use to receive session- and vehicle-related information from the system.

## Declaration

```swift
protocol CarKeyRemoteControlSessionDelegate
```

<a id="overview"></a>

## Overview

The system uses the [CarKeyRemoteControlSessionDelegate](carkeyremotecontrolsessiondelegate.md) protocol to notify your app asynchronously when something happens. Adopt this protocol in one of your objects and detect when the system invalidates the session. If your vehicle is capable of sending data to your app, you also use this protocol to receive any data the vehicle sends.

## Topics

### Receiving Data from the Vehicle

- [remoteControlSession(\_:vehicleDidUpdateReport:)](carkeyremotecontrolsessiondelegate/remotecontrolsession%28__vehicledidupdatereport_%29.md): Notifies your delegate object that the status of the specified vehicle changed.
- [remoteControlSession(\_:didReceivePassthroughData:fromVehicle:)](carkeyremotecontrolsessiondelegate/remotecontrolsession%28__didreceivepassthroughdata_fromvehicle_%29.md): Notifies the delegate object that the vehicle sent passthrough data for you to handle.

### Handling Session Invalidation

- [remoteControlSession(\_:didInvalidateWithError:)](carkeyremotecontrolsessiondelegate/remotecontrolsession%28__didinvalidatewitherror_%29.md): Notifies your delegate object that the session become invalid for the specified reason.

### Instance Methods

- [remoteControlSession(\_:didCreateKey:forVehicle:)](carkeyremotecontrolsessiondelegate/remotecontrolsession%28__didcreatekey_forvehicle_%29.md): Called to notify your app when a new key has been created.

## See Also

### Setup

- [CarKeyRemoteControl](carkeyremotecontrol.md): The object you use to start a new vehicle-related session.
- [CarKeyRemoteControlSession](carkeyremotecontrolsession.md): The object that manages communication with the vehicles you manufacture.
- [VehicleReport](vehiclereport.md): A type that contains information about a vehicle configured for remote keyless entry in the user’s Apple Wallet.
