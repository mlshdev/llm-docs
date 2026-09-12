> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialproviderextensioncontext/completesavepasswordrequest(completionhandler:)](https://developer.apple.com/documentation/authenticationservices/ascredentialproviderextensioncontext/completesavepasswordrequest(completionhandler:))

# completeSavePasswordRequest(completionHandler:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

Signal that a password request was successfully saved.

## Declaration

```swift
func completeSavePasswordRequest(completionHandler: (@Sendable (Bool) -> Void)? = nil)
```

```swift
func completeSavePasswordRequest() async -> Bool
```

## Parameters

- `completionHandler`: An optional block your extension can provide to perform any cleanup work after the system has captured the results. The expired parameter is true if the system decides to prematurely end a previous non-expiration invocation of the completion handler.

<a id="discussion"></a>

## Discussion

> **Note**

> You are responsible for updating the ASCredentialIdentityStore.

# completeSavePasswordRequestWithCompletionHandler: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

Signal that a password request was successfully saved.

## Declaration

```objectivec
- (void) completeSavePasswordRequestWithCompletionHandler:(void (^)(BOOL expired)) completionHandler;
```

## Parameters

- `completionHandler`: An optional block your extension can provide to perform any cleanup work after the system has captured the results. The expired parameter is true if the system decides to prematurely end a previous non-expiration invocation of the completion handler.

<a id="discussion"></a>

## Discussion

> **Note**

> You are responsible for updating the ASCredentialIdentityStore.
