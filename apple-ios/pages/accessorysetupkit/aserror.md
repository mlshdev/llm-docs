> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/aserror](https://developer.apple.com/documentation/accessorysetupkit/aserror)

# ASError

**Framework:** AccessorySetupKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+

An error encountered during accessory discovery.

## Declaration

```swift
struct ASError
```

## Topics

### Activation errors

- [activationFailed](aserror/activationfailed.md)

### Life cycle errors

- [invalidated](aserror/invalidated.md)

### Configuration errors

- [extensionNotFound](aserror/extensionnotfound.md)
- [invalidRequest](aserror/invalidrequest.md)

### Picker errors

- [pickerRestricted](aserror/pickerrestricted.md)
- [pickerAlreadyActive](aserror/pickeralreadyactive.md)

### Cancellation and permission errors

- [userCancelled](aserror/usercancelled.md)
- [userRestricted](aserror/userrestricted.md)

### Communication errors

- [connectionFailed](aserror/connectionfailed.md)
- [discoveryTimeout](aserror/discoverytimeout.md)

### Success cases

- [success](aserror/success.md)

### Unclassified errors

- [unknown](aserror/unknown.md)

### Accessing the error domain

- [errorDomain](aserror/errordomain.md)
- [ASErrorDomain](aserrordomain.md): NSError domain for AccessorySetupKit errors.

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

- [ASErrorDomain](aserrordomain.md): NSError domain for AccessorySetupKit errors.
- [ASError.Code](aserror/code.md): Codes that describe errors encountered during accessory discovery.
