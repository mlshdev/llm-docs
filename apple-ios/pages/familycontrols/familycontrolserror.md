> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/familycontrols/familycontrolserror](https://developer.apple.com/documentation/familycontrols/familycontrolserror)

# FamilyControlsError

**Framework:** Family Controls  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · macOS 13.0+

Errors the Family Controls framework reports.

## Declaration

```swift
enum FamilyControlsError
```

## Topics

### Error values

- [FamilyControlsError.invalidAccountType](familycontrolserror/invalidaccounttype.md): The device isn’t signed into a valid iCloud account.
- [FamilyControlsError.authorizationConflict](familycontrolserror/authorizationconflict.md): Another authorized app already provides parental controls.
- [FamilyControlsError.authorizationCanceled](familycontrolserror/authorizationcanceled.md): The parent or guardian canceled a request for authorization.
- [FamilyControlsError.invalidArgument](familycontrolserror/invalidargument.md): The method’s arguments are invalid.
- [FamilyControlsError.unavailable](familycontrolserror/unavailable.md): The system failed to set up the Family Control framework.
- [FamilyControlsError.restricted](familycontrolserror/restricted.md): A restriction prevents your app from using Family Controls on this device.
- [FamilyControlsError.networkError](familycontrolserror/networkerror.md): The device must be connected to the network in order to enroll with parental controls.
- [FamilyControlsError.authenticationMethodUnavailable](familycontrolserror/authenticationmethodunavailable.md): The device must have a passcode set in order for an individual to enroll with parental controls.

### Error data

- [errorDescription](familycontrolserror/errordescription.md): A nonlocalized description of the error, suitable for debugging.
- [errorDescription](familycontrolserror/errordescription.md): A nonlocalized description of the error, suitable for debugging.

### Enumeration Cases

- [FamilyControlsError.unauthorized](familycontrolserror/unauthorized.md): The calling app must be authorized to provide parental controls and access data.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomNSError](https://developer.apple.com/documentation/foundation/customnserror)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
