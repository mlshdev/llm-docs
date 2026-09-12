> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristicvaluelockmechanismlastknownaction](https://developer.apple.com/documentation/homekit/hmcharacteristicvaluelockmechanismlastknownaction)

# HMCharacteristicValueLockMechanismLastKnownAction (Swift)

**Framework:** HomeKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Possible values for the last known action of the locking mechanism.

## Declaration

```swift
enum HMCharacteristicValueLockMechanismLastKnownAction
```

## Topics

### Lock Mechanism Actions

- [HMCharacteristicValueLockMechanismLastKnownAction.securedRemotely](hmcharacteristicvaluelockmechanismlastknownaction/securedremotely.md): The last known action was for the lock to be secured remotely.
- [HMCharacteristicValueLockMechanismLastKnownAction.securedUsingPhysicalMovement](hmcharacteristicvaluelockmechanismlastknownaction/securedusingphysicalmovement.md): The last known action was for the lock to be secured using physical movement.
- [HMCharacteristicValueLockMechanismLastKnownAction.securedUsingPhysicalMovementExterior](hmcharacteristicvaluelockmechanismlastknownaction/securedusingphysicalmovementexterior.md): The last known action was for the lock to be secured using physical movement on the exterior of the door.
- [HMCharacteristicValueLockMechanismLastKnownAction.securedUsingPhysicalMovementInterior](hmcharacteristicvaluelockmechanismlastknownaction/securedusingphysicalmovementinterior.md): The last known action was for the lock to be secured using physical movement on the interior of the door.
- [HMCharacteristicValueLockMechanismLastKnownAction.securedWithAutomaticSecureTimeout](hmcharacteristicvaluelockmechanismlastknownaction/securedwithautomaticsecuretimeout.md): The last known action was for the lock to be secured automatically after a timeout period expired.
- [HMCharacteristicValueLockMechanismLastKnownAction.securedWithKeypad](hmcharacteristicvaluelockmechanismlastknownaction/securedwithkeypad.md): The last known action was for the lock to be secured using a keypad.
- [HMCharacteristicValueLockMechanismLastKnownAction.unsecuredRemotely](hmcharacteristicvaluelockmechanismlastknownaction/unsecuredremotely.md): The last known action was for the lock to be unsecured remotely.
- [HMCharacteristicValueLockMechanismLastKnownAction.unsecuredUsingPhysicalMovement](hmcharacteristicvaluelockmechanismlastknownaction/unsecuredusingphysicalmovement.md): The last known action was for the lock to be unsecured using physical movement.
- [HMCharacteristicValueLockMechanismLastKnownAction.unsecuredUsingPhysicalMovementExterior](hmcharacteristicvaluelockmechanismlastknownaction/unsecuredusingphysicalmovementexterior.md): The last known action was for the lock to be unsecured using physical movement on the exterior of the door.
- [HMCharacteristicValueLockMechanismLastKnownAction.unsecuredUsingPhysicalMovementInterior](hmcharacteristicvaluelockmechanismlastknownaction/unsecuredusingphysicalmovementinterior.md): The last known action was for the lock to be unsecured using physical movement on the interior of the door.
- [HMCharacteristicValueLockMechanismLastKnownAction.unsecuredWithKeypad](hmcharacteristicvaluelockmechanismlastknownaction/unsecuredwithkeypad.md): The last known action was for the lock to be unsecured using a keypad.

### Initializers

- [init(rawValue:)](hmcharacteristicvaluelockmechanismlastknownaction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# HMCharacteristicValueLockMechanismLastKnownAction (Objective-C)

**Framework:** HomeKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Possible values for the last known action of the locking mechanism.

## Declaration

```objectivec
enum HMCharacteristicValueLockMechanismLastKnownAction : NSInteger;
```

## Topics

### Lock Mechanism Actions

- [HMCharacteristicValueLockMechanismLastKnownActionSecuredRemotely](hmcharacteristicvaluelockmechanismlastknownaction/securedremotely.md): The last known action was for the lock to be secured remotely.
- [HMCharacteristicValueLockMechanismLastKnownActionSecuredUsingPhysicalMovement](hmcharacteristicvaluelockmechanismlastknownaction/securedusingphysicalmovement.md): The last known action was for the lock to be secured using physical movement.
- [HMCharacteristicValueLockMechanismLastKnownActionSecuredUsingPhysicalMovementExterior](hmcharacteristicvaluelockmechanismlastknownaction/securedusingphysicalmovementexterior.md): The last known action was for the lock to be secured using physical movement on the exterior of the door.
- [HMCharacteristicValueLockMechanismLastKnownActionSecuredUsingPhysicalMovementInterior](hmcharacteristicvaluelockmechanismlastknownaction/securedusingphysicalmovementinterior.md): The last known action was for the lock to be secured using physical movement on the interior of the door.
- [HMCharacteristicValueLockMechanismLastKnownActionSecuredWithAutomaticSecureTimeout](hmcharacteristicvaluelockmechanismlastknownaction/securedwithautomaticsecuretimeout.md): The last known action was for the lock to be secured automatically after a timeout period expired.
- [HMCharacteristicValueLockMechanismLastKnownActionSecuredWithKeypad](hmcharacteristicvaluelockmechanismlastknownaction/securedwithkeypad.md): The last known action was for the lock to be secured using a keypad.
- [HMCharacteristicValueLockMechanismLastKnownActionUnsecuredRemotely](hmcharacteristicvaluelockmechanismlastknownaction/unsecuredremotely.md): The last known action was for the lock to be unsecured remotely.
- [HMCharacteristicValueLockMechanismLastKnownActionUnsecuredUsingPhysicalMovement](hmcharacteristicvaluelockmechanismlastknownaction/unsecuredusingphysicalmovement.md): The last known action was for the lock to be unsecured using physical movement.
- [HMCharacteristicValueLockMechanismLastKnownActionUnsecuredUsingPhysicalMovementExterior](hmcharacteristicvaluelockmechanismlastknownaction/unsecuredusingphysicalmovementexterior.md): The last known action was for the lock to be unsecured using physical movement on the exterior of the door.
- [HMCharacteristicValueLockMechanismLastKnownActionUnsecuredUsingPhysicalMovementInterior](hmcharacteristicvaluelockmechanismlastknownaction/unsecuredusingphysicalmovementinterior.md): The last known action was for the lock to be unsecured using physical movement on the interior of the door.
- [HMCharacteristicValueLockMechanismLastKnownActionUnsecuredWithKeypad](hmcharacteristicvaluelockmechanismlastknownaction/unsecuredwithkeypad.md): The last known action was for the lock to be unsecured using a keypad.
