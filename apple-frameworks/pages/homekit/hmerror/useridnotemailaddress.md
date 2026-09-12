> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmerror/useridnotemailaddress](https://developer.apple.com/documentation/homekit/hmerror/useridnotemailaddress)

# userIDNotEmailAddress

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An error indicating the user’s ID is not a valid email address.

## Declaration

```swift
static var userIDNotEmailAddress: HMError.Code { get }
```

## See Also

### Detecting user errors

- [userDeclinedAddingUser](userdeclinedaddinguser.md): An error indicating the user canceled the add user operation.
- [userDeclinedRemovingUser](userdeclinedremovinguser.md): An error indicating the user canceled the remove user operation.
- [userDeclinedInvite](userdeclinedinvite.md): An error indicating the user declined the invitation.
- [userManagementFailed](usermanagementfailed.md): A user management error not covered by the other errors.
