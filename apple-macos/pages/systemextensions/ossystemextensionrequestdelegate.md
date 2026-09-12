> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionrequestdelegate](https://developer.apple.com/documentation/systemextensions/ossystemextensionrequestdelegate)

# OSSystemExtensionRequestDelegate (Swift)

**Framework:** System Extensions  
**Kind:** Protocol  
**Availability:** macOS 10.15+

A type that receives updates about the progress of a request.

## Declaration

```swift
protocol OSSystemExtensionRequestDelegate : NSObjectProtocol
```

## Mentioned In

- [Installing System Extensions and Drivers](installing-system-extensions-and-drivers.md)

## Topics

### Handling Success and Failure

- [request(\_:didFinishWithResult:)](ossystemextensionrequestdelegate/request%28__didfinishwithresult_%29.md): Tells the delegate that the manager completed the request.
- [OSSystemExtensionRequest.Result](ossystemextensionrequest/result.md): The result of a completed request, possibly including additional information about the extension’s state.
- [request(\_:didFailWithError:)](ossystemextensionrequestdelegate/request%28__didfailwitherror_%29.md): Tells the delegate the manager failed to complete the request.

### Handling Indeterminate Installs

- [requestNeedsUserApproval(\_:)](ossystemextensionrequestdelegate/requestneedsuserapproval%28__%29.md): Tells the delegate that the user must grant approval before the manager can activate the extension.
- [request(\_:actionForReplacingExtension:withExtension:)](ossystemextensionrequestdelegate/request%28__actionforreplacingextension_withextension_%29.md): Tells the delegate that the user has a different version of the extension installed on their system.
- [OSSystemExtensionProperties](ossystemextensionproperties.md): Properties that identify a specific version of a system extension.
- [OSSystemExtensionRequest.ReplacementAction](ossystemextensionrequest/replacementaction.md): Actions for describing how the extension manager should resolve a version conflict.

### Instance Methods

- [request(\_:foundProperties:)](ossystemextensionrequestdelegate/request%28__foundproperties_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Working with a Delegate

- [delegate](ossystemextensionrequest/delegate.md): A delegate to receive updates about the progress of a request.

# OSSystemExtensionRequestDelegate (Objective-C)

**Framework:** System Extensions  
**Kind:** Protocol  
**Availability:** macOS 10.15+

A type that receives updates about the progress of a request.

## Declaration

```objectivec
@protocol OSSystemExtensionRequestDelegate <NSObject>
```

## Mentioned In

- [Installing System Extensions and Drivers](installing-system-extensions-and-drivers.md)

## Topics

### Handling Success and Failure

- [request:didFinishWithResult:](ossystemextensionrequestdelegate/request%28__didfinishwithresult_%29.md): Tells the delegate that the manager completed the request.
- [OSSystemExtensionRequestResult](ossystemextensionrequest/result.md): The result of a completed request, possibly including additional information about the extension’s state.
- [request:didFailWithError:](ossystemextensionrequestdelegate/request%28__didfailwitherror_%29.md): Tells the delegate the manager failed to complete the request.

### Handling Indeterminate Installs

- [requestNeedsUserApproval:](ossystemextensionrequestdelegate/requestneedsuserapproval%28__%29.md): Tells the delegate that the user must grant approval before the manager can activate the extension.
- [request:actionForReplacingExtension:withExtension:](ossystemextensionrequestdelegate/request%28__actionforreplacingextension_withextension_%29.md): Tells the delegate that the user has a different version of the extension installed on their system.
- [OSSystemExtensionProperties](ossystemextensionproperties.md): Properties that identify a specific version of a system extension.
- [OSSystemExtensionReplacementAction](ossystemextensionrequest/replacementaction.md): Actions for describing how the extension manager should resolve a version conflict.

### Instance Methods

- [request:foundProperties:](ossystemextensionrequestdelegate/request%28__foundproperties_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Working with a Delegate

- [delegate](ossystemextensionrequest/delegate.md): A delegate to receive updates about the progress of a request.
