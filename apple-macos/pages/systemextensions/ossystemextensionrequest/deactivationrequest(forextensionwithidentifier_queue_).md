> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionrequest/deactivationrequest(forextensionwithidentifier:queue:)](https://developer.apple.com/documentation/systemextensions/ossystemextensionrequest/deactivationrequest(forextensionwithidentifier:queue:))

# deactivationRequest(forExtensionWithIdentifier:queue:) (Swift)

**Framework:** System Extensions  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Creates a request to deactivate a System Extension.

## Declaration

```swift
class func deactivationRequest(forExtensionWithIdentifier identifier: String, queue: dispatch_queue_t) -> Self
```

## Parameters

- `identifier`: The bundle identifier of the extension to deactivate.
- `queue`: The dispatch queue to use when calling delegate methods.

## Mentioned In

- [Installing System Extensions and Drivers](../installing-system-extensions-and-drivers.md)

<a id="Discussion"></a>

## Discussion

The system discovers existing system extensions in the `Contents/Library/SystemExtensions` directory of the main app bundle.

A deactivation request may require a restart before deactivating the extension. If the request succeeds but requires a restart to complete, the extension may still appear operational until the next restart.

## See Also

### Creating Requests

- [activationRequest(forExtensionWithIdentifier:queue:)](activationrequest%28forextensionwithidentifier_queue_%29.md): Creates a request to activate a System Extension.

# deactivationRequestForExtension:queue: (Objective-C)

**Framework:** System Extensions  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Creates a request to deactivate a System Extension.

## Declaration

```objectivec
+ (instancetype) deactivationRequestForExtension:(NSString *) identifier queue:(dispatch_queue_t) queue;
```

## Parameters

- `identifier`: The bundle identifier of the extension to deactivate.
- `queue`: The dispatch queue to use when calling delegate methods.

## Mentioned In

- [Installing System Extensions and Drivers](../installing-system-extensions-and-drivers.md)

<a id="Discussion"></a>

## Discussion

The system discovers existing system extensions in the `Contents/Library/SystemExtensions` directory of the main app bundle.

A deactivation request may require a restart before deactivating the extension. If the request succeeds but requires a restart to complete, the extension may still appear operational until the next restart.

## See Also

### Creating Requests

- [activationRequestForExtension:queue:](activationrequest%28forextensionwithidentifier_queue_%29.md): Creates a request to activate a System Extension.
