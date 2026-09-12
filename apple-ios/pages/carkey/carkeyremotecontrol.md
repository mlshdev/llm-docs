> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/carkeyremotecontrol](https://developer.apple.com/documentation/carkey/carkeyremotecontrol)

# CarKeyRemoteControl

**Framework:** CarKey  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.3+ · watchOS 9.0+

The object you use to start a new vehicle-related session.

## Declaration

```swift
class CarKeyRemoteControl
```

<a id="overview"></a>

## Overview

Use a [CarKeyRemoteControl](carkeyremotecontrol.md) object to create the session your app uses to communicate with the vehicles your company manufactures. You don’t create an instance of this object. Instead, call the [start(delegate:subscriptionRange:with:)](carkeyremotecontrol/start%28delegate_subscriptionrange_with_%29.md) class method to request a new session object. The system retrieves the relevant vehicle information from person’s Apple Wallet and adds vehicles that match your company’s make to the session.

Start a new session only when your app is running in the foreground. If your app enters the background, end the current session and start a new one when your app returns to the foreground.

## Topics

### Creating the Session Object

- [start(delegate:subscriptionRange:with:)](carkeyremotecontrol/start%28delegate_subscriptionrange_with_%29.md): Creates and returns a new session object to access the provisioned vehicles.

### Type Methods

- [registerForLaunchOnCarKeyEvent()](carkeyremotecontrol/registerforlaunchoncarkeyevent%28%29.md): Register your app to be relaunched in the background on CarKey events. Under certain conditions the system will not relaunch the app regardless of CarKey events.
- [unregisterForLaunchOnCarKeyEvent()](carkeyremotecontrol/unregisterforlaunchoncarkeyevent%28%29.md): Unregister your app so it’s no longer relaunched in the background on CarKey events.

## See Also

### Setup

- [CarKeyRemoteControlSession](carkeyremotecontrolsession.md): The object that manages communication with the vehicles you manufacture.
- [CarKeyRemoteControlSessionDelegate](carkeyremotecontrolsessiondelegate.md): An interface you use to receive session- and vehicle-related information from the system.
- [VehicleReport](vehiclereport.md): A type that contains information about a vehicle configured for remote keyless entry in the user’s Apple Wallet.
