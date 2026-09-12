> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmerror/missingentitlement](https://developer.apple.com/documentation/homekit/hmerror/missingentitlement)

# missingEntitlement

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An error indicating a required entitlement is not available.

## Declaration

```swift
static var missingEntitlement: HMError.Code { get }
```

## See Also

### Detecting general errors

- [alreadyExists](alreadyexists.md): An error indicating the container already contains the object you are trying to add.
- [genericError](genericerror.md): An error that does not have a more specific error code.
- [incompatibleHomeHub](incompatiblehomehub.md): Deprecated. No compatible home hub found.
- [invalidClass](invalidclass.md): An attempt to use an abstract base class in an operation instead of a concrete subclass.
- [notFound](notfound.md): An error indicating the object was not found in the container.
- [notificationAlreadyEnabled](notificationalreadyenabled.md): An error indicating the notification is already enabled.
- [notificationNotSupported](notificationnotsupported.md): An attempt to register for notifications from an accessory that does not support notifications.
- [operationNotSupported](operationnotsupported.md): An attempt to use an unsupported operation.
- [unexpectedError](unexpectederror.md): An unexpected error.
- [referToUserManual](refertousermanual.md): An error described in the device’s user manual.
