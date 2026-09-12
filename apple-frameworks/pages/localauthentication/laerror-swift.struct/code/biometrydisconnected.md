> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laerror-swift.struct/code/biometrydisconnected](https://developer.apple.com/documentation/localauthentication/laerror-swift.struct/code/biometrydisconnected)

# LAError.Code.biometryDisconnected (Swift)

**Framework:** Local Authentication  
**Kind:** Case  
**Availability:** macOS 11.2+

The device supports biometry only using a removable accessory, but the paired accessory isn’t connected.

## Declaration

```swift
case biometryDisconnected
```

## See Also

### Biometry failure

- [biometryLockout](biometrylockout.md): Biometry is locked because there were too many failed attempts.
- [biometryNotAvailable](biometrynotavailable.md): Biometry is not available on the device.
- [biometryNotEnrolled](biometrynotenrolled.md): The user has no enrolled biometric identities.
- [LAError.Code.biometryNotPaired](biometrynotpaired.md): The device supports biometry only using a removable accessory, but no accessory is paired.
- [LAError.Code.touchIDLockout](touchidlockout.md): Deprecated. Touch ID is locked because there were too many failed attempts.
- [LAError.Code.touchIDNotAvailable](touchidnotavailable.md): Deprecated. Touch ID is not available on the device.
- [LAError.Code.touchIDNotEnrolled](touchidnotenrolled.md): Deprecated. The user has no enrolled Touch ID fingers.

# LAErrorBiometryDisconnected (Objective-C)

**Framework:** Local Authentication  
**Kind:** Enumeration Case  
**Availability:** macOS 11.2+

The device supports biometry only using a removable accessory, but the paired accessory isn’t connected.

## Declaration

```objectivec
LAErrorBiometryDisconnected
```

## See Also

### Biometry failure

- [LAErrorBiometryLockout](../../laerror-c.enum/laerrorbiometrylockout.md): Biometry is locked because there were too many failed attempts.
- [LAErrorBiometryNotAvailable](../../laerror-c.enum/laerrorbiometrynotavailable.md): Biometry is not available on the device.
- [LAErrorBiometryNotEnrolled](../../laerror-c.enum/laerrorbiometrynotenrolled.md): The user has no enrolled biometric identities.
- [LAErrorBiometryNotPaired](biometrynotpaired.md): The device supports biometry only using a removable accessory, but no accessory is paired.
- [LAErrorTouchIDLockout](touchidlockout.md): Deprecated. Touch ID is locked because there were too many failed attempts.
- [LAErrorTouchIDNotAvailable](touchidnotavailable.md): Deprecated. Touch ID is not available on the device.
- [LAErrorTouchIDNotEnrolled](touchidnotenrolled.md): Deprecated. The user has no enrolled Touch ID fingers.
