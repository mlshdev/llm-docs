> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristictyperemotekey](https://developer.apple.com/documentation/homekit/hmcharacteristictyperemotekey)

# HMCharacteristicTypeRemoteKey (Swift)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The accessory remote control key.

## Declaration

```swift
let HMCharacteristicTypeRemoteKey: String
```

<a id="Overview"></a>

## Overview

`HMCharacteristicTypeRemoteKey` describes a mechanism to send control key presses to televisions. The handling of the key presses depend on the current active input source, or the application that is running. The corresponding value is one of the constants in the [HMCharacteristicValueRemoteKey](hmcharacteristicvalueremotekey.md) enumeration.

## Topics

### Values

- [HMCharacteristicValueRemoteKey](hmcharacteristicvalueremotekey.md): Values for the state of the remote.

## See Also

### Locks and openers

- [HMCharacteristicTypeLockManagementAutoSecureTimeout](hmcharacteristictypelockmanagementautosecuretimeout.md): The automatic timeout for a lockable accessory that supports automatic lockout.
- [HMCharacteristicTypeLockManagementControlPoint](hmcharacteristictypelockmanagementcontrolpoint.md): A control that accepts vendor-specific actions for lock management.
- [HMCharacteristicTypeLockMechanismLastKnownAction](hmcharacteristictypelockmechanismlastknownaction.md): The last known action of the locking mechanism.
- [HMCharacteristicTypeLockPhysicalControls](hmcharacteristictypelockphysicalcontrols.md): The lock’s physical control state.
- [HMCharacteristicTypeMotionDetected](hmcharacteristictypemotiondetected.md): An indicator of whether the accessory has detected motion.
- [HMCharacteristicTypeCurrentLockMechanismState](hmcharacteristictypecurrentlockmechanismstate.md): The current state of the locking mechanism.
- [HMCharacteristicTypeTargetLockMechanismState](hmcharacteristictypetargetlockmechanismstate.md): The target state for the locking mechanism.

# HMCharacteristicTypeRemoteKey (Objective-C)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The accessory remote control key.

## Declaration

```objectivec
extern NSString * const HMCharacteristicTypeRemoteKey;
```

<a id="Overview"></a>

## Overview

`HMCharacteristicTypeRemoteKey` describes a mechanism to send control key presses to televisions. The handling of the key presses depend on the current active input source, or the application that is running. The corresponding value is one of the constants in the [HMCharacteristicValueRemoteKey](hmcharacteristicvalueremotekey.md) enumeration.

## Topics

### Values

- [HMCharacteristicValueRemoteKey](hmcharacteristicvalueremotekey.md): Values for the state of the remote.

## See Also

### Locks and openers

- [HMCharacteristicTypeLockManagementAutoSecureTimeout](hmcharacteristictypelockmanagementautosecuretimeout.md): The automatic timeout for a lockable accessory that supports automatic lockout.
- [HMCharacteristicTypeLockManagementControlPoint](hmcharacteristictypelockmanagementcontrolpoint.md): A control that accepts vendor-specific actions for lock management.
- [HMCharacteristicTypeLockMechanismLastKnownAction](hmcharacteristictypelockmechanismlastknownaction.md): The last known action of the locking mechanism.
- [HMCharacteristicTypeLockPhysicalControls](hmcharacteristictypelockphysicalcontrols.md): The lock’s physical control state.
- [HMCharacteristicTypeMotionDetected](hmcharacteristictypemotiondetected.md): An indicator of whether the accessory has detected motion.
- [HMCharacteristicTypeCurrentLockMechanismState](hmcharacteristictypecurrentlockmechanismstate.md): The current state of the locking mechanism.
- [HMCharacteristicTypeTargetLockMechanismState](hmcharacteristictypetargetlockmechanismstate.md): The target state for the locking mechanism.
