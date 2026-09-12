> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionrequest](https://developer.apple.com/documentation/systemextensions/ossystemextensionrequest)

# OSSystemExtensionRequest (Swift)

**Framework:** System Extensions  
**Kind:** Class  
**Availability:** macOS 10.15+

A request to activate or deactivate a system extension.

## Declaration

```swift
class OSSystemExtensionRequest
```

## Mentioned In

- [Installing System Extensions and Drivers](installing-system-extensions-and-drivers.md)

## Topics

### Creating Requests

- [activationRequest(forExtensionWithIdentifier:queue:)](ossystemextensionrequest/activationrequest%28forextensionwithidentifier_queue_%29.md): Creates a request to activate a System Extension.
- [deactivationRequest(forExtensionWithIdentifier:queue:)](ossystemextensionrequest/deactivationrequest%28forextensionwithidentifier_queue_%29.md): Creates a request to deactivate a System Extension.

### Working with a Delegate

- [delegate](ossystemextensionrequest/delegate.md): A delegate to receive updates about the progress of a request.
- [OSSystemExtensionRequestDelegate](ossystemextensionrequestdelegate.md): A type that receives updates about the progress of a request.

### Identifying the Target Extension

- [identifier](ossystemextensionrequest/identifier.md): The bundle identifier of the target extension.

### Type Methods

- [propertiesRequest(forExtensionWithIdentifier:queue:)](ossystemextensionrequest/propertiesrequest%28forextensionwithidentifier_queue_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Extension activation and deactivation

- [Installing System Extensions and Drivers](installing-system-extensions-and-drivers.md): Activate system extensions and drivers to make them available to the system, and update or deactivate them as needed.
- [OSSystemExtensionManager](ossystemextensionmanager.md): A type that facilitates activation and deactivation of system extensions.
- [System Extension Redistributable Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.system-extension.redistributable): A Boolean value that indicates whether other development teams may distribute a system extension you create.

# OSSystemExtensionRequest (Objective-C)

**Framework:** System Extensions  
**Kind:** Class  
**Availability:** macOS 10.15+

A request to activate or deactivate a system extension.

## Declaration

```objectivec
@interface OSSystemExtensionRequest : NSObject
```

## Mentioned In

- [Installing System Extensions and Drivers](installing-system-extensions-and-drivers.md)

## Topics

### Creating Requests

- [activationRequestForExtension:queue:](ossystemextensionrequest/activationrequest%28forextensionwithidentifier_queue_%29.md): Creates a request to activate a System Extension.
- [deactivationRequestForExtension:queue:](ossystemextensionrequest/deactivationrequest%28forextensionwithidentifier_queue_%29.md): Creates a request to deactivate a System Extension.

### Working with a Delegate

- [delegate](ossystemextensionrequest/delegate.md): A delegate to receive updates about the progress of a request.
- [OSSystemExtensionRequestDelegate](ossystemextensionrequestdelegate.md): A type that receives updates about the progress of a request.

### Identifying the Target Extension

- [identifier](ossystemextensionrequest/identifier.md): The bundle identifier of the target extension.

### Type Methods

- [propertiesRequestForExtension:queue:](ossystemextensionrequest/propertiesrequest%28forextensionwithidentifier_queue_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Extension activation and deactivation

- [Installing System Extensions and Drivers](installing-system-extensions-and-drivers.md): Activate system extensions and drivers to make them available to the system, and update or deactivate them as needed.
- [OSSystemExtensionManager](ossystemextensionmanager.md): A type that facilitates activation and deactivation of system extensions.
- [System Extension Redistributable Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.system-extension.redistributable): A Boolean value that indicates whether other development teams may distribute a system extension you create.
