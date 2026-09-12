> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristictypelockmanagementautosecuretimeout](https://developer.apple.com/documentation/homekit/hmcharacteristictypelockmanagementautosecuretimeout)

# HMCharacteristicTypeLockManagementAutoSecureTimeout (Swift)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The automatic timeout for a lockable accessory that supports automatic lockout.

## Declaration

```swift
let HMCharacteristicTypeLockManagementAutoSecureTimeout: String
```

<a id="Discussion"></a>

## Discussion

The corresponding value is the number of seconds the accessory waits after entering the [HMCharacteristicValueLockMechanismState.unsecured](hmcharacteristicvaluelockmechanismstate/unsecured.md) state until it attempts to enter the [HMCharacteristicValueLockMechanismState.secured](hmcharacteristicvaluelockmechanismstate/secured.md) state. Write a value of `0` to disable this feature.

## See Also

### Locks and openers

- [HMCharacteristicTypeLockManagementControlPoint](hmcharacteristictypelockmanagementcontrolpoint.md): A control that accepts vendor-specific actions for lock management.
- [HMCharacteristicTypeLockMechanismLastKnownAction](hmcharacteristictypelockmechanismlastknownaction.md): The last known action of the locking mechanism.
- [HMCharacteristicTypeLockPhysicalControls](hmcharacteristictypelockphysicalcontrols.md): The lock’s physical control state.
- [HMCharacteristicTypeMotionDetected](hmcharacteristictypemotiondetected.md): An indicator of whether the accessory has detected motion.
- [HMCharacteristicTypeCurrentLockMechanismState](hmcharacteristictypecurrentlockmechanismstate.md): The current state of the locking mechanism.
- [HMCharacteristicTypeTargetLockMechanismState](hmcharacteristictypetargetlockmechanismstate.md): The target state for the locking mechanism.
- [HMCharacteristicTypeRemoteKey](hmcharacteristictyperemotekey.md): The accessory remote control key.

# HMCharacteristicTypeLockManagementAutoSecureTimeout (Objective-C)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The automatic timeout for a lockable accessory that supports automatic lockout.

## Declaration

```objectivec
extern NSString * const HMCharacteristicTypeLockManagementAutoSecureTimeout;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is the number of seconds the accessory waits after entering the [HMCharacteristicValueLockMechanismStateUnsecured](hmcharacteristicvaluelockmechanismstate/unsecured.md) state until it attempts to enter the [HMCharacteristicValueLockMechanismStateSecured](hmcharacteristicvaluelockmechanismstate/secured.md) state. Write a value of `0` to disable this feature.

## See Also

### Locks and openers

- [HMCharacteristicTypeLockManagementControlPoint](hmcharacteristictypelockmanagementcontrolpoint.md): A control that accepts vendor-specific actions for lock management.
- [HMCharacteristicTypeLockMechanismLastKnownAction](hmcharacteristictypelockmechanismlastknownaction.md): The last known action of the locking mechanism.
- [HMCharacteristicTypeLockPhysicalControls](hmcharacteristictypelockphysicalcontrols.md): The lock’s physical control state.
- [HMCharacteristicTypeMotionDetected](hmcharacteristictypemotiondetected.md): An indicator of whether the accessory has detected motion.
- [HMCharacteristicTypeCurrentLockMechanismState](hmcharacteristictypecurrentlockmechanismstate.md): The current state of the locking mechanism.
- [HMCharacteristicTypeTargetLockMechanismState](hmcharacteristictypetargetlockmechanismstate.md): The target state for the locking mechanism.
- [HMCharacteristicTypeRemoteKey](hmcharacteristictyperemotekey.md): The accessory remote control key.
