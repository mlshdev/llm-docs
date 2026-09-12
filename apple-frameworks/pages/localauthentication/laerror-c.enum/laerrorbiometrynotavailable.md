> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laerror-c.enum/laerrorbiometrynotavailable](https://developer.apple.com/documentation/localauthentication/laerror-c.enum/laerrorbiometrynotavailable)

# LAErrorBiometryNotAvailable

**Interface language:** Objective-C

**Framework:** Local Authentication  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Biometry is not available on the device.

## Declaration

```objectivec
LAErrorBiometryNotAvailable
```

## See Also

### Biometry failure

- [LAErrorBiometryDisconnected](../laerror-swift.struct/code/biometrydisconnected.md): The device supports biometry only using a removable accessory, but the paired accessory isn’t connected.
- [LAErrorBiometryLockout](laerrorbiometrylockout.md): Biometry is locked because there were too many failed attempts.
- [LAErrorBiometryNotEnrolled](laerrorbiometrynotenrolled.md): The user has no enrolled biometric identities.
- [LAErrorBiometryNotPaired](../laerror-swift.struct/code/biometrynotpaired.md): The device supports biometry only using a removable accessory, but no accessory is paired.
- [LAErrorTouchIDLockout](../laerror-swift.struct/code/touchidlockout.md): Deprecated. Touch ID is locked because there were too many failed attempts.
- [LAErrorTouchIDNotAvailable](../laerror-swift.struct/code/touchidnotavailable.md): Deprecated. Touch ID is not available on the device.
- [LAErrorTouchIDNotEnrolled](../laerror-swift.struct/code/touchidnotenrolled.md): Deprecated. The user has no enrolled Touch ID fingers.
