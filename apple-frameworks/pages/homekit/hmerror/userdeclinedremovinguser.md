> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmerror/userdeclinedremovinguser

# userDeclinedRemovingUser

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An error indicating the user canceled the remove user operation.

## Declaration

```swift
static var userDeclinedRemovingUser: HMError.Code { get }
```

## See Also

### Detecting user errors

- [userDeclinedAddingUser](userdeclinedaddinguser.md): An error indicating the user canceled the add user operation.
- [userDeclinedInvite](userdeclinedinvite.md): An error indicating the user declined the invitation.
- [userIDNotEmailAddress](useridnotemailaddress.md): An error indicating the user’s ID is not a valid email address.
- [userManagementFailed](usermanagementfailed.md): A user management error not covered by the other errors.
