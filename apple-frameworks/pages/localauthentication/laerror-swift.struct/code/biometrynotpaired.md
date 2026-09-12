> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laerror-swift.struct/code/biometrynotpaired](https://developer.apple.com/documentation/localauthentication/laerror-swift.struct/code/biometrynotpaired)

# LAError.Code.biometryNotPaired (Swift)

**Framework:** Local Authentication  
**Kind:** Case  
**Availability:** macOS 11.2+

The device supports biometry only using a removable accessory, but no accessory is paired.

## Declaration

```swift
case biometryNotPaired
```

## See Also

### Biometry failure

- [LAError.Code.biometryDisconnected](biometrydisconnected.md): The device supports biometry only using a removable accessory, but the paired accessory isn’t connected.
- [biometryLockout](biometrylockout.md): Biometry is locked because there were too many failed attempts.
- [biometryNotAvailable](biometrynotavailable.md): Biometry is not available on the device.
- [biometryNotEnrolled](biometrynotenrolled.md): The user has no enrolled biometric identities.
- [LAError.Code.touchIDLockout](touchidlockout.md): Deprecated. Touch ID is locked because there were too many failed attempts.
- [LAError.Code.touchIDNotAvailable](touchidnotavailable.md): Deprecated. Touch ID is not available on the device.
- [LAError.Code.touchIDNotEnrolled](touchidnotenrolled.md): Deprecated. The user has no enrolled Touch ID fingers.

# LAErrorBiometryNotPaired (Objective-C)

**Framework:** Local Authentication  
**Kind:** Enumeration Case  
**Availability:** macOS 11.2+

The device supports biometry only using a removable accessory, but no accessory is paired.

## Declaration

```objectivec
LAErrorBiometryNotPaired
```

## See Also

### Biometry failure

- [LAErrorBiometryDisconnected](biometrydisconnected.md): The device supports biometry only using a removable accessory, but the paired accessory isn’t connected.
- [LAErrorBiometryLockout](../../laerror-c.enum/laerrorbiometrylockout.md): Biometry is locked because there were too many failed attempts.
- [LAErrorBiometryNotAvailable](../../laerror-c.enum/laerrorbiometrynotavailable.md): Biometry is not available on the device.
- [LAErrorBiometryNotEnrolled](../../laerror-c.enum/laerrorbiometrynotenrolled.md): The user has no enrolled biometric identities.
- [LAErrorTouchIDLockout](touchidlockout.md): Deprecated. Touch ID is locked because there were too many failed attempts.
- [LAErrorTouchIDNotAvailable](touchidnotavailable.md): Deprecated. Touch ID is not available on the device.
- [LAErrorTouchIDNotEnrolled](touchidnotenrolled.md): Deprecated. The user has no enrolled Touch ID fingers.
