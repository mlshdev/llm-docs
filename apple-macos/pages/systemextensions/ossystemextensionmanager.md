> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionmanager](https://developer.apple.com/documentation/systemextensions/ossystemextensionmanager)

# OSSystemExtensionManager (Swift)

**Framework:** System Extensions  
**Kind:** Class  
**Availability:** macOS 10.15+

A type that facilitates activation and deactivation of system extensions.

## Declaration

```swift
class OSSystemExtensionManager
```

## Mentioned In

- [Installing System Extensions and Drivers](installing-system-extensions-and-drivers.md)

<a id="overview"></a>

## Overview

Create an instance of [OSSystemExtensionRequest](ossystemextensionrequest.md) with the class methods on that type, and submit it to the shared instance of the extension manager with [submitRequest(\_:)](ossystemextensionmanager/submitrequest%28__%29.md). Set the [delegate](ossystemextensionrequest/delegate.md) on the request to receive the result of the activation or deactivation. The delegate also receives notifications if the user needs to authorize the extension or if a version conflict occurs.

## Topics

### Accessing the Shared Extension Manager

- [shared](ossystemextensionmanager/shared.md): The shared instance of the extension manager.

### Submitting Requests

- [submitRequest(\_:)](ossystemextensionmanager/submitrequest%28__%29.md): Submits a system extension request to the manager.
- [OSSystemExtensionRequest](ossystemextensionrequest.md): A request to activate or deactivate a system extension.

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
- [OSSystemExtensionRequest](ossystemextensionrequest.md): A request to activate or deactivate a system extension.
- [System Extension Redistributable Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.system-extension.redistributable): A Boolean value that indicates whether other development teams may distribute a system extension you create.

# OSSystemExtensionManager (Objective-C)

**Framework:** System Extensions  
**Kind:** Class  
**Availability:** macOS 10.15+

A type that facilitates activation and deactivation of system extensions.

## Declaration

```objectivec
@interface OSSystemExtensionManager : NSObject
```

## Mentioned In

- [Installing System Extensions and Drivers](installing-system-extensions-and-drivers.md)

<a id="overview"></a>

## Overview

Create an instance of [OSSystemExtensionRequest](ossystemextensionrequest.md) with the class methods on that type, and submit it to the shared instance of the extension manager with [submitRequest:](ossystemextensionmanager/submitrequest%28__%29.md). Set the [delegate](ossystemextensionrequest/delegate.md) on the request to receive the result of the activation or deactivation. The delegate also receives notifications if the user needs to authorize the extension or if a version conflict occurs.

## Topics

### Accessing the Shared Extension Manager

- [sharedManager](ossystemextensionmanager/shared.md): The shared instance of the extension manager.

### Submitting Requests

- [submitRequest:](ossystemextensionmanager/submitrequest%28__%29.md): Submits a system extension request to the manager.
- [OSSystemExtensionRequest](ossystemextensionrequest.md): A request to activate or deactivate a system extension.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Extension activation and deactivation

- [Installing System Extensions and Drivers](installing-system-extensions-and-drivers.md): Activate system extensions and drivers to make them available to the system, and update or deactivate them as needed.
- [OSSystemExtensionRequest](ossystemextensionrequest.md): A request to activate or deactivate a system extension.
- [System Extension Redistributable Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.system-extension.redistributable): A Boolean value that indicates whether other development teams may distribute a system extension you create.
