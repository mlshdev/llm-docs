> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/systemextensions/ossystemextensionmanager/submitrequest(_:)

# submitRequest(\_:) (Swift)

**Framework:** System Extensions  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Submits a system extension request to the manager.

## Declaration

```swift
func submitRequest(_ request: OSSystemExtensionRequest)
```

## Parameters

- `request`: The request to process.

## See Also

### Submitting Requests

- [OSSystemExtensionRequest](../ossystemextensionrequest.md): A request to activate or deactivate a system extension.

# submitRequest: (Objective-C)

**Framework:** System Extensions  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Submits a system extension request to the manager.

## Declaration

```objectivec
- (void) submitRequest:(OSSystemExtensionRequest *) request;
```

## Parameters

- `request`: The request to process.

## See Also

### Submitting Requests

- [OSSystemExtensionRequest](../ossystemextensionrequest.md): A request to activate or deactivate a system extension.
