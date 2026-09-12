> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmerror/incompatiblehomehub](https://developer.apple.com/documentation/homekit/hmerror/incompatiblehomehub)

# incompatibleHomeHub

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ (deprecated in 11.0) · iPadOS 11.0+ (deprecated in 11.0) · tvOS 11.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 4.0)

No compatible home hub found.

> Use [noCompatibleHomeHub](nocompatiblehomehub.md) instead.

## Declaration

```swift
static var incompatibleHomeHub: HMError.Code { get }
```

## See Also

### Detecting general errors

- [alreadyExists](alreadyexists.md): An error indicating the container already contains the object you are trying to add.
- [genericError](genericerror.md): An error that does not have a more specific error code.
- [invalidClass](invalidclass.md): An attempt to use an abstract base class in an operation instead of a concrete subclass.
- [notFound](notfound.md): An error indicating the object was not found in the container.
- [notificationAlreadyEnabled](notificationalreadyenabled.md): An error indicating the notification is already enabled.
- [notificationNotSupported](notificationnotsupported.md): An attempt to register for notifications from an accessory that does not support notifications.
- [operationNotSupported](operationnotsupported.md): An attempt to use an unsupported operation.
- [unexpectedError](unexpectederror.md): An unexpected error.
- [missingEntitlement](missingentitlement.md): An error indicating a required entitlement is not available.
- [referToUserManual](refertousermanual.md): An error described in the device’s user manual.
