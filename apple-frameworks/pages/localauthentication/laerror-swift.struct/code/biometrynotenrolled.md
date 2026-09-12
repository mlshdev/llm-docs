> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laerror-swift.struct/code/biometrynotenrolled](https://developer.apple.com/documentation/localauthentication/laerror-swift.struct/code/biometrynotenrolled)

# biometryNotEnrolled

**Framework:** Local Authentication  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

The user has no enrolled biometric identities.

## Declaration

```swift
static var biometryNotEnrolled: LAError.Code { get }
```

## See Also

### Biometry failure

- [LAError.Code.biometryDisconnected](biometrydisconnected.md): The device supports biometry only using a removable accessory, but the paired accessory isn’t connected.
- [biometryLockout](biometrylockout.md): Biometry is locked because there were too many failed attempts.
- [biometryNotAvailable](biometrynotavailable.md): Biometry is not available on the device.
- [LAError.Code.biometryNotPaired](biometrynotpaired.md): The device supports biometry only using a removable accessory, but no accessory is paired.
- [LAError.Code.touchIDLockout](touchidlockout.md): Deprecated. Touch ID is locked because there were too many failed attempts.
- [LAError.Code.touchIDNotAvailable](touchidnotavailable.md): Deprecated. Touch ID is not available on the device.
- [LAError.Code.touchIDNotEnrolled](touchidnotenrolled.md): Deprecated. The user has no enrolled Touch ID fingers.
