> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapppushmanagererror-swift.struct](https://developer.apple.com/documentation/networkextension/neapppushmanagererror-swift.struct)

# NEAppPushManagerError

**Framework:** Network Extension  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An error that the push manager encounters.

## Declaration

```swift
struct NEAppPushManagerError
```

## Topics

### Inspecting error properties

- [NEAppPushManagerError.Code](neapppushmanagererror-swift.struct/code.md): Error codes that the local push API declares.

### Error constants

- [configurationInvalid](neapppushmanagererror-swift.struct/configurationinvalid.md): An error that indicates the app push configuration is invalid.
- [configurationNotLoaded](neapppushmanagererror-swift.struct/configurationnotloaded.md): An error that indicates the manager hasn’t loaded the app push configuration.
- [inactiveSession](neapppushmanagererror-swift.struct/inactivesession.md): An error that indicates an invalid attempt to perform an operation on an inactive session.
- [internalError](neapppushmanagererror-swift.struct/internalerror.md): An error that indicates an internal error in the local push connectivity framework.

### Type Properties

- [errorDomain](neapppushmanagererror-swift.struct/errordomain.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling errors

- [NEAppPushErrorDomain](neapppusherrordomain.md): The error domain string for local push errors.
- [NEAppPushManagerError.Code](neapppushmanagererror-swift.struct/code.md): Error codes that the local push API declares.
