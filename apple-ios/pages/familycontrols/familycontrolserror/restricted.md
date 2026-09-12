> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/familycontrols/familycontrolserror/restricted](https://developer.apple.com/documentation/familycontrols/familycontrolserror/restricted)

# FamilyControlsError.restricted

**Framework:** Family Controls  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · macOS 13.0+

A restriction prevents your app from using Family Controls on this device.

## Declaration

```swift
case restricted
```

## See Also

### Error values

- [FamilyControlsError.invalidAccountType](invalidaccounttype.md): The device isn’t signed into a valid iCloud account.
- [FamilyControlsError.authorizationConflict](authorizationconflict.md): Another authorized app already provides parental controls.
- [FamilyControlsError.authorizationCanceled](authorizationcanceled.md): The parent or guardian canceled a request for authorization.
- [FamilyControlsError.invalidArgument](invalidargument.md): The method’s arguments are invalid.
- [FamilyControlsError.unavailable](unavailable.md): The system failed to set up the Family Control framework.
- [FamilyControlsError.networkError](networkerror.md): The device must be connected to the network in order to enroll with parental controls.
- [FamilyControlsError.authenticationMethodUnavailable](authenticationmethodunavailable.md): The device must have a passcode set in order for an individual to enroll with parental controls.
