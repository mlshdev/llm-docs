> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionrequest/activationrequest(forextensionwithidentifier:queue:)](https://developer.apple.com/documentation/systemextensions/ossystemextensionrequest/activationrequest(forextensionwithidentifier:queue:))

# activationRequest(forExtensionWithIdentifier:queue:) (Swift)

**Framework:** System Extensions  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Creates a request to activate a System Extension.

## Declaration

```swift
class func activationRequest(forExtensionWithIdentifier identifier: String, queue: dispatch_queue_t) -> Self
```

## Parameters

- `identifier`: The bundle identifier of the target extension.
- `queue`: The dispatch queue to use when calling delegate methods.

<a id="return-value"></a>

## Return Value

A new extension request.

## Mentioned In

- [Installing System Extensions and Drivers](../installing-system-extensions-and-drivers.md)

<a id="Discussion"></a>

## Discussion

Create and submit an activation request whenever you want to use a given extension. If the extension is inactive, the system may need to prompt the user for approval. The request succeeds only after the user gives their approval.

If the extension is already active, the request succeeds in short order, without significant delay or user interaction. If you request activation of a new version of an already-active extension, the system prompts the user to resolve the conflict before proceeding.

An activation request may succeed, but also indicate that the extension requires a restart to become active. This can occur when replacing an extension that required a restart to deactivate. The most recently activated extension becomes active when the user restarts their Mac.

## See Also

### Creating Requests

- [deactivationRequest(forExtensionWithIdentifier:queue:)](deactivationrequest%28forextensionwithidentifier_queue_%29.md): Creates a request to deactivate a System Extension.

# activationRequestForExtension:queue: (Objective-C)

**Framework:** System Extensions  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Creates a request to activate a System Extension.

## Declaration

```objectivec
+ (instancetype) activationRequestForExtension:(NSString *) identifier queue:(dispatch_queue_t) queue;
```

## Parameters

- `identifier`: The bundle identifier of the target extension.
- `queue`: The dispatch queue to use when calling delegate methods.

<a id="return-value"></a>

## Return Value

A new extension request.

## Mentioned In

- [Installing System Extensions and Drivers](../installing-system-extensions-and-drivers.md)

<a id="Discussion"></a>

## Discussion

Create and submit an activation request whenever you want to use a given extension. If the extension is inactive, the system may need to prompt the user for approval. The request succeeds only after the user gives their approval.

If the extension is already active, the request succeeds in short order, without significant delay or user interaction. If you request activation of a new version of an already-active extension, the system prompts the user to resolve the conflict before proceeding.

An activation request may succeed, but also indicate that the extension requires a restart to become active. This can occur when replacing an extension that required a restart to deactivate. The most recently activated extension becomes active when the user restarts their Mac.

## See Also

### Creating Requests

- [deactivationRequestForExtension:queue:](deactivationrequest%28forextensionwithidentifier_queue_%29.md): Creates a request to deactivate a System Extension.
