> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/aserror/code](https://developer.apple.com/documentation/accessorysetupkit/aserror/code)

# ASError.Code (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Codes that describe errors encountered during accessory discovery.

## Declaration

```swift
enum Code
```

## Topics

### Activation errors

- [ASError.Code.activationFailed](code/activationfailed.md): Session activation failed.

### Timeout and life cycle errors

- [ASError.Code.discoveryTimeout](code/discoverytimeout.md): Accessory discovery timed out.
- [ASError.Code.invalidated](code/invalidated.md): The session invalidated prior to completing the operation.

### Configuration errors

- [ASError.Code.extensionNotFound](code/extensionnotfound.md): The framework couldn’t find the app extension.
- [ASError.Code.userRestricted](code/userrestricted.md): The person using the app restricted access.
- [ASError.Code.invalidRequest](code/invalidrequest.md): The session received an invalid request.

### Picker errors

- [ASError.Code.pickerRestricted](code/pickerrestricted.md): The picker can’t be used because the app is in the background.
- [ASError.Code.pickerAlreadyActive](code/pickeralreadyactive.md): The picker received a show request when it was already active.

### Cancellation errors

- [ASError.Code.userCancelled](code/usercancelled.md): The person using the app canceled the operation.

### Communication errors

- [ASError.Code.connectionFailed](code/connectionfailed.md): The session was unable to establish a connection.

### Success cases

- [ASError.Code.success](code/success.md): A code that represents a successful action.

### Unclassified errors

- [ASError.Code.unknown](code/unknown.md): An underlying failure with an unknown cause.

### Accessing the error domain

- [errorDomain](errordomain.md)
- [ASErrorDomain](../aserrordomain.md): NSError domain for AccessorySetupKit errors.

### Working with raw values

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [ASError](../aserror.md): An error encountered during accessory discovery.
- [ASErrorDomain](../aserrordomain.md): NSError domain for AccessorySetupKit errors.

# ASErrorCode (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Codes that describe errors encountered during accessory discovery.

## Declaration

```objectivec
enum ASErrorCode : NSInteger;
```

## Topics

### Activation errors

- [ASErrorCodeActivationFailed](code/activationfailed.md): Session activation failed.

### Timeout and life cycle errors

- [ASErrorCodeDiscoveryTimeout](code/discoverytimeout.md): Accessory discovery timed out.
- [ASErrorCodeInvalidated](code/invalidated.md): The session invalidated prior to completing the operation.

### Configuration errors

- [ASErrorCodeExtensionNotFound](code/extensionnotfound.md): The framework couldn’t find the app extension.
- [ASErrorCodeUserRestricted](code/userrestricted.md): The person using the app restricted access.
- [ASErrorCodeInvalidRequest](code/invalidrequest.md): The session received an invalid request.

### Picker errors

- [ASErrorCodePickerRestricted](code/pickerrestricted.md): The picker can’t be used because the app is in the background.
- [ASErrorCodePickerAlreadyActive](code/pickeralreadyactive.md): The picker received a show request when it was already active.

### Cancellation errors

- [ASErrorCodeUserCancelled](code/usercancelled.md): The person using the app canceled the operation.

### Communication errors

- [ASErrorCodeConnectionFailed](code/connectionfailed.md): The session was unable to establish a connection.

### Success cases

- [ASErrorCodeSuccess](code/success.md): A code that represents a successful action.

### Unclassified errors

- [ASErrorCodeUnknown](code/unknown.md): An underlying failure with an unknown cause.

### Accessing the error domain

- [ASErrorDomain](../aserrordomain.md): NSError domain for AccessorySetupKit errors.

## See Also

### Errors

- [ASErrorDomain](../aserrordomain.md): NSError domain for AccessorySetupKit errors.
