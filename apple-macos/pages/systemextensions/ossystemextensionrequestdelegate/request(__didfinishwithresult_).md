> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionrequestdelegate/request(_:didfinishwithresult:)](https://developer.apple.com/documentation/systemextensions/ossystemextensionrequestdelegate/request(_:didfinishwithresult:))

# request(\_:didFinishWithResult:) (Swift)

**Framework:** System Extensions  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Tells the delegate that the manager completed the request.

## Declaration

```swift
func request(_ request: OSSystemExtensionRequest, didFinishWithResult result: OSSystemExtensionRequest.Result)
```

## Parameters

- `request`: The request that completed.
- `result`: Additional information about the completion state.

<a id="Discussion"></a>

## Discussion

If the request completes with the [OSSystemExtensionRequest.Result.willCompleteAfterReboot](../ossystemextensionrequest/result/willcompleteafterreboot.md) result, then the extension isn’t active until after the next restart. After restarting, the most recently-processed request determines the extension’s state. Consider the following scenarios:

- Activate extension and restart: the extension is active upon restarting.
- Activate extension, deactivate extension, and restart: the extension is inactive upon restarting.

## See Also

### Handling Success and Failure

- [OSSystemExtensionRequest.Result](../ossystemextensionrequest/result.md): The result of a completed request, possibly including additional information about the extension’s state.
- [request(\_:didFailWithError:)](request%28__didfailwitherror_%29.md): Tells the delegate the manager failed to complete the request.

# request:didFinishWithResult: (Objective-C)

**Framework:** System Extensions  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Tells the delegate that the manager completed the request.

## Declaration

```objectivec
- (void) request:(OSSystemExtensionRequest *) request didFinishWithResult:(OSSystemExtensionRequestResult) result;
```

## Parameters

- `request`: The request that completed.
- `result`: Additional information about the completion state.

<a id="Discussion"></a>

## Discussion

If the request completes with the [OSSystemExtensionRequestWillCompleteAfterReboot](../ossystemextensionrequest/result/willcompleteafterreboot.md) result, then the extension isn’t active until after the next restart. After restarting, the most recently-processed request determines the extension’s state. Consider the following scenarios:

- Activate extension and restart: the extension is active upon restarting.
- Activate extension, deactivate extension, and restart: the extension is inactive upon restarting.

## See Also

### Handling Success and Failure

- [OSSystemExtensionRequestResult](../ossystemextensionrequest/result.md): The result of a completed request, possibly including additional information about the extension’s state.
- [request:didFailWithError:](request%28__didfailwitherror_%29.md): Tells the delegate the manager failed to complete the request.
