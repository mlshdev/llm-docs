> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/accessoryaccess/aaerror](https://developer.apple.com/documentation/accessoryaccess/aaerror)

# AAError

**Framework:** Accessory Access  
**Kind:** Structure  
**Availability:** macOS 27.0+

Values that describe errors the AccessoryAccess framework returns.

## Declaration

```swift
struct AAError
```

## Topics

### Errors

- [accessoryListenerAlreadyRegistered](aaerror/accessorylisteneralreadyregistered.md): An error that indicates the accessory listener is already registered, and therefore the app can’t re-register it.
- [accessoryNotAccessible](aaerror/accessorynotaccessible.md): An error that indicates the USB accessory isn’t accessible.
- [internalError](aaerror/internalerror.md): An error that represents an internal error.
- [invalidAccessoryState](aaerror/invalidaccessorystate.md): An error that indicates the accessory isn’t in the correct state for the current operation.
- [AAError.Code](aaerror/code.md): Values that represent error codes that the AccessoryAccess framework returns.

### Type properties

- [errorDomain](aaerror/errordomain.md): A value that represents the Accessory Access framework’s error domain.

## Relationships

### Conforms To

- [CustomNSError](https://developer.apple.com/documentation/foundation/customnserror)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [AAErrorDomain](aaerrordomain.md): The string that represents the framework’s error domain.
