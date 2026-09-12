> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laerror-swift.struct/code/touchidnotavailable](https://developer.apple.com/documentation/localauthentication/laerror-swift.struct/code/touchidnotavailable)

# LAError.Code.touchIDNotAvailable (Swift)

**Framework:** Local Authentication  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.13) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

Touch ID is not available on the device.

> Use [biometryNotAvailable](biometrynotavailable.md)(Swift) and [LAErrorBiometryNotAvailable](../../laerror-c.enum/laerrorbiometrynotavailable.md) (Objective-C) instead.

## Declaration

```swift
case touchIDNotAvailable
```

## See Also

### Biometry failure

- [LAError.Code.biometryDisconnected](biometrydisconnected.md): The device supports biometry only using a removable accessory, but the paired accessory isn’t connected.
- [biometryLockout](biometrylockout.md): Biometry is locked because there were too many failed attempts.
- [biometryNotAvailable](biometrynotavailable.md): Biometry is not available on the device.
- [biometryNotEnrolled](biometrynotenrolled.md): The user has no enrolled biometric identities.
- [LAError.Code.biometryNotPaired](biometrynotpaired.md): The device supports biometry only using a removable accessory, but no accessory is paired.
- [LAError.Code.touchIDLockout](touchidlockout.md): Deprecated. Touch ID is locked because there were too many failed attempts.
- [LAError.Code.touchIDNotEnrolled](touchidnotenrolled.md): Deprecated. The user has no enrolled Touch ID fingers.

# LAErrorTouchIDNotAvailable (Objective-C)

**Framework:** Local Authentication  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.13) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

Touch ID is not available on the device.

> Use [biometryNotAvailable](biometrynotavailable.md)(Swift) and [LAErrorBiometryNotAvailable](../../laerror-c.enum/laerrorbiometrynotavailable.md) (Objective-C) instead.

## Declaration

```objectivec
LAErrorTouchIDNotAvailable
```

## See Also

### Biometry failure

- [LAErrorBiometryDisconnected](biometrydisconnected.md): The device supports biometry only using a removable accessory, but the paired accessory isn’t connected.
- [LAErrorBiometryLockout](../../laerror-c.enum/laerrorbiometrylockout.md): Biometry is locked because there were too many failed attempts.
- [LAErrorBiometryNotAvailable](../../laerror-c.enum/laerrorbiometrynotavailable.md): Biometry is not available on the device.
- [LAErrorBiometryNotEnrolled](../../laerror-c.enum/laerrorbiometrynotenrolled.md): The user has no enrolled biometric identities.
- [LAErrorBiometryNotPaired](biometrynotpaired.md): The device supports biometry only using a removable accessory, but no accessory is paired.
- [LAErrorTouchIDLockout](touchidlockout.md): Deprecated. Touch ID is locked because there were too many failed attempts.
- [LAErrorTouchIDNotEnrolled](touchidnotenrolled.md): Deprecated. The user has no enrolled Touch ID fingers.
