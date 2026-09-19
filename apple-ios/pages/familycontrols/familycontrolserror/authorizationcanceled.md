> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/familycontrols/familycontrolserror/authorizationcanceled

# FamilyControlsError.authorizationCanceled

**Framework:** Family Controls  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · macOS 13.0+

The parent or guardian canceled a request for authorization.

## Declaration

```swift
case authorizationCanceled
```

## See Also

### Error values

- [FamilyControlsError.invalidAccountType](invalidaccounttype.md): The device isn’t signed into a valid iCloud account.
- [FamilyControlsError.authorizationConflict](authorizationconflict.md): Another authorized app already provides parental controls.
- [FamilyControlsError.invalidArgument](invalidargument.md): The method’s arguments are invalid.
- [FamilyControlsError.unavailable](unavailable.md): The system failed to set up the Family Control framework.
- [FamilyControlsError.restricted](restricted.md): A restriction prevents your app from using Family Controls on this device.
- [FamilyControlsError.networkError](networkerror.md): The device must be connected to the network in order to enroll with parental controls.
- [FamilyControlsError.authenticationMethodUnavailable](authenticationmethodunavailable.md): The device must have a passcode set in order for an individual to enroll with parental controls.
