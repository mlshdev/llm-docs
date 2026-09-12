> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctquickswitchmanager](https://developer.apple.com/documentation/coretelephony/ctquickswitchmanager)

# CTQuickSwitchManager (Swift)

**Framework:** Core Telephony  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An object that enables an app to register and query a device’s quick switch state.

## Declaration

```swift
class CTQuickSwitchManager
```

## Topics

### Getting the state of the device

- [getDeviceState(\_:)](ctquickswitchmanager/getdevicestate%28__%29.md): Gets the quick switch state of the current device.
- [getPhoneNumberState(forSuffix:completion:)](ctquickswitchmanager/getphonenumberstate%28forsuffix_completion_%29.md): Queries the quick switch state for a phone number whose suffix matches the provided phone number suffix.

### Registering and unregistering a device

- [registerForLaunch(onQuickSwitchStateEvents:)](ctquickswitchmanager/registerforlaunch%28onquickswitchstateevents_%29.md): Registers the calling app for background launch whenever the device’s quick switch state changes.
- [unregisterForLaunch(onQuickSwitchStateEvents:)](ctquickswitchmanager/unregisterforlaunch%28onquickswitchstateevents_%29.md): Removes the calling app’s registration for background launch on quick switch state changes.

### Responding to changes in the quick switch state

- [delegate](ctquickswitchmanager/delegate-swift.property.md): An object the system notifies to respond to quick switch events.
- [quickSwitchManager(\_:didChangeTo:)](ctquickswitchmanager/delegate-swift.protocol/quickswitchmanager%28__didchangeto_%29.md): Indicates there’s been a change in device’s quick switch state.
- [CTQuickSwitchState](ctquickswitchstate.md): Values that describe a device’s quick switch status.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Adopting iPhone quick switch

- [delegate](ctquickswitchmanager/delegate-swift.property.md): An object the system notifies to respond to quick switch events.
- [CTQuickSwitchManager.Delegate](ctquickswitchmanager/delegate-swift.protocol.md): Methods you implement to respond to changes in a device’s quick switch state.

# CTQuickSwitchManager (Objective-C)

**Framework:** Core Telephony  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An object that enables an app to register and query a device’s quick switch state.

## Declaration

```objectivec
@interface CTQuickSwitchManager : NSObject
```

## Topics

### Getting the state of the device

- [getDeviceState:](ctquickswitchmanager/getdevicestate%28__%29.md): Gets the quick switch state of the current device.
- [getPhoneNumberStateForSuffix:completion:](ctquickswitchmanager/getphonenumberstate%28forsuffix_completion_%29.md): Queries the quick switch state for a phone number whose suffix matches the provided phone number suffix.

### Registering and unregistering a device

- [registerForLaunchOnQuickSwitchStateEvents:](ctquickswitchmanager/registerforlaunch%28onquickswitchstateevents_%29.md): Registers the calling app for background launch whenever the device’s quick switch state changes.
- [unregisterForLaunchOnQuickSwitchStateEvents:](ctquickswitchmanager/unregisterforlaunch%28onquickswitchstateevents_%29.md): Removes the calling app’s registration for background launch on quick switch state changes.

### Responding to changes in the quick switch state

- [delegate](ctquickswitchmanager/delegate-swift.property.md): An object the system notifies to respond to quick switch events.
- [quickSwitchManager:didChangeToState:](ctquickswitchmanager/delegate-swift.protocol/quickswitchmanager%28__didchangeto_%29.md): Indicates there’s been a change in device’s quick switch state.
- [CTQuickSwitchState](ctquickswitchstate.md): Values that describe a device’s quick switch status.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Adopting iPhone quick switch

- [delegate](ctquickswitchmanager/delegate-swift.property.md): An object the system notifies to respond to quick switch events.
- [CTQuickSwitchManagerDelegate](ctquickswitchmanager/delegate-swift.protocol.md): Methods you implement to respond to changes in a device’s quick switch state.
