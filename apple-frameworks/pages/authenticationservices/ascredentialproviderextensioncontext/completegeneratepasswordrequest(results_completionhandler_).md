> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialproviderextensioncontext/completegeneratepasswordrequest(results:completionhandler:)](https://developer.apple.com/documentation/authenticationservices/ascredentialproviderextensioncontext/completegeneratepasswordrequest(results:completionhandler:))

# completeGeneratePasswordRequest(results:completionHandler:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

Return potential passwords for the given request.

## Declaration

```swift
func completeGeneratePasswordRequest(results: [ASGeneratedPassword], completionHandler: (@Sendable (Bool) -> Void)? = nil)
```

```swift
func completeGeneratePasswordRequest(results: [ASGeneratedPassword]) async -> Bool
```

## Parameters

- `results`: Potential passwords that the user can select. You can provide multiple options for increased flexibility on the user’s behalf. These results should be returned in priority order.
- `completionHandler`: An optional block your extension can provide to perform any cleanup work after the system has captured the results. The expired parameter is true if the system decides to prematurely end a previous non-expiration invocation of the completion handler.

# completeGeneratePasswordRequestWithResults:completionHandler: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

Return potential passwords for the given request.

## Declaration

```objectivec
- (void) completeGeneratePasswordRequestWithResults:(NSArray<ASGeneratedPassword *> *) results completionHandler:(void (^)(BOOL expired)) completionHandler;
```

## Parameters

- `results`: Potential passwords that the user can select. You can provide multiple options for increased flexibility on the user’s behalf. These results should be returned in priority order.
- `completionHandler`: An optional block your extension can provide to perform any cleanup work after the system has captured the results. The expired parameter is true if the system decides to prematurely end a previous non-expiration invocation of the completion handler.
