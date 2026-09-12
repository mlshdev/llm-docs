> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionrequest/result](https://developer.apple.com/documentation/systemextensions/ossystemextensionrequest/result)

# OSSystemExtensionRequest.Result (Swift)

**Framework:** System Extensions  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

The result of a completed request, possibly including additional information about the extension’s state.

## Declaration

```swift
enum Result
```

## Topics

### Results

- [OSSystemExtensionRequest.Result.completed](result/completed.md): The request completed successfully.
- [OSSystemExtensionRequest.Result.willCompleteAfterReboot](result/willcompleteafterreboot.md): The request requires a restart to complete successfully.

### Initializers

- [init(rawValue:)](result/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling Success and Failure

- [request(\_:didFinishWithResult:)](../ossystemextensionrequestdelegate/request%28__didfinishwithresult_%29.md): Tells the delegate that the manager completed the request.
- [request(\_:didFailWithError:)](../ossystemextensionrequestdelegate/request%28__didfailwitherror_%29.md): Tells the delegate the manager failed to complete the request.

# OSSystemExtensionRequestResult (Objective-C)

**Framework:** System Extensions  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

The result of a completed request, possibly including additional information about the extension’s state.

## Declaration

```objectivec
enum OSSystemExtensionRequestResult : NSInteger;
```

## Topics

### Results

- [OSSystemExtensionRequestCompleted](result/completed.md): The request completed successfully.
- [OSSystemExtensionRequestWillCompleteAfterReboot](result/willcompleteafterreboot.md): The request requires a restart to complete successfully.

## See Also

### Handling Success and Failure

- [request:didFinishWithResult:](../ossystemextensionrequestdelegate/request%28__didfinishwithresult_%29.md): Tells the delegate that the manager completed the request.
- [request:didFailWithError:](../ossystemextensionrequestdelegate/request%28__didfailwitherror_%29.md): Tells the delegate the manager failed to complete the request.
