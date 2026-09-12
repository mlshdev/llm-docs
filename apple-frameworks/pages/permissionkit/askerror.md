> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/askerror](https://developer.apple.com/documentation/permissionkit/askerror)

# AskError

**Framework:** PermissionKit  
**Kind:** Enumeration  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+ · macOS 26.1+ · visionOS 26.1+

Represents errors you encounter when asking a person to send a communication permission question.

## Declaration

```swift
enum AskError
```

## Topics

### Handling errors

- [AskError.unknown](askerror/unknown.md): Indicates an unknown error response.
- [AskError.communicationLimitsNotEnabled](askerror/communicationlimitsnotenabled.md): Indicates communication limits isn’t enabled to send permission requests.
- [AskError.contactSyncNotSetup](askerror/contactsyncnotsetup.md): Indicates contact sync isn’t enabled to send permission requests.
- [AskError.invalidQuestion](askerror/invalidquestion.md): Indicates your permission request is invalid.
- [AskError.systemError(underlyingError:)](askerror/systemerror%28underlyingerror_%29.md): Deprecated.

### Enumeration Cases

- [AskError.notAvailable](askerror/notavailable.md)

### Instance Properties

- [errorDescription](askerror/errordescription.md): The localized description of the error.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
