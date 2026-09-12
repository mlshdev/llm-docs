> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialproviderviewcontroller/prepareinterface(for:)-69elg](https://developer.apple.com/documentation/authenticationservices/ascredentialproviderviewcontroller/prepareinterface(for:)-69elg)

# prepareInterface(for:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

Prepares the interface to display a prompt to save a password credential.

## Declaration

```swift
func prepareInterface(for savePasswordRequest: ASSavePasswordRequest)
```

<a id="discussion"></a>

## Discussion

The system calls this method to tell your extension’s view controller to prepare to present a prompt to save a password credential. After calling this method, the system presents the view controller to the user.

Upon success, call [completeSavePasswordRequest(completionHandler:)](../ascredentialproviderextensioncontext/completesavepasswordrequest%28completionhandler_%29.md).

Always provide a way for someone to cancel the operation from your view controller, for example, by including a Cancel button in the navigation bar. When someone cancels the operation, call `ASCredentialProviderExtensionContext/cancelRequest(with:)`, using [userCanceled](../asextensionerror/usercanceled.md).

# prepareInterfaceForSavePasswordRequest: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

Prepares the interface to display a prompt to save a password credential.

## Declaration

```objectivec
- (void) prepareInterfaceForSavePasswordRequest:(ASSavePasswordRequest *) savePasswordRequest;
```

<a id="discussion"></a>

## Discussion

The system calls this method to tell your extension’s view controller to prepare to present a prompt to save a password credential. After calling this method, the system presents the view controller to the user.

Upon success, call [completeSavePasswordRequestWithCompletionHandler:](../ascredentialproviderextensioncontext/completesavepasswordrequest%28completionhandler_%29.md).

Always provide a way for someone to cancel the operation from your view controller, for example, by including a Cancel button in the navigation bar. When someone cancels the operation, call `ASCredentialProviderExtensionContext/cancelRequest(with:)`, using [userCanceled](../asextensionerror/usercanceled.md).
