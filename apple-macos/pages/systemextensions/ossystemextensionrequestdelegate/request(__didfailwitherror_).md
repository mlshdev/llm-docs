> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionrequestdelegate/request(_:didfailwitherror:)](https://developer.apple.com/documentation/systemextensions/ossystemextensionrequestdelegate/request(_:didfailwitherror:))

# request(\_:didFailWithError:) (Swift)

**Framework:** System Extensions  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Tells the delegate the manager failed to complete the request.

## Declaration

```swift
func request(_ request: OSSystemExtensionRequest, didFailWithError error: any Error)
```

## Parameters

- `request`: The request that failed.
- `error`: The reason the request failed.

## Mentioned In

- [Installing System Extensions and Drivers](../installing-system-extensions-and-drivers.md)

## See Also

### Handling Success and Failure

- [request(\_:didFinishWithResult:)](request%28__didfinishwithresult_%29.md): Tells the delegate that the manager completed the request.
- [OSSystemExtensionRequest.Result](../ossystemextensionrequest/result.md): The result of a completed request, possibly including additional information about the extension’s state.

# request:didFailWithError: (Objective-C)

**Framework:** System Extensions  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Tells the delegate the manager failed to complete the request.

## Declaration

```objectivec
- (void) request:(OSSystemExtensionRequest *) request didFailWithError:(NSError *) error;
```

## Parameters

- `request`: The request that failed.
- `error`: The reason the request failed.

## Mentioned In

- [Installing System Extensions and Drivers](../installing-system-extensions-and-drivers.md)

## See Also

### Handling Success and Failure

- [request:didFinishWithResult:](request%28__didfinishwithresult_%29.md): Tells the delegate that the manager completed the request.
- [OSSystemExtensionRequestResult](../ossystemextensionrequest/result.md): The result of a completed request, possibly including additional information about the extension’s state.
