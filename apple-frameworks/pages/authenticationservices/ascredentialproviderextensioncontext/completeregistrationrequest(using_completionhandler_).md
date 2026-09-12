> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialproviderextensioncontext/completeregistrationrequest(using:completionhandler:)](https://developer.apple.com/documentation/authenticationservices/ascredentialproviderextensioncontext/completeregistrationrequest(using:completionhandler:))

# completeRegistrationRequest(using:completionHandler:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Complete the registration request by providing the newly-created passkey credential.

## Declaration

```swift
func completeRegistrationRequest(using credential: ASPasskeyRegistrationCredential, completionHandler: (@Sendable (Bool) -> Void)? = nil)
```

```swift
func completeRegistrationRequest(using credential: ASPasskeyRegistrationCredential) async -> Bool
```

## Parameters

- `credential`: The credential your extension created in response to the registration request.
- `completionHandler`: An optional block your extension can provide to perform any cleanup work after the system has used the credential. The expired parameter is [true](https://developer.apple.com/documentation/swift/true) if the system decides to prematurely end a previous non-expiration invocation of the completion handler.

<a id="Discussion"></a>

## Discussion

The synchronous version of this method calls its completion handler with [background](../../dispatch/dispatchqos/background.md) priority.

## See Also

### Providing credentials

- [completeRequest(withSelectedCredential:completionHandler:)](completerequest%28withselectedcredential_completionhandler_%29.md): Provides the user-selected credential.
- [completeAssertionRequest(using:completionHandler:)](completeassertionrequest%28using_completionhandler_%29.md): Complete the passkey assertion request by providing the user-selected passkey credential.
- [completeOneTimeCodeRequest(using:completionHandler:)](completeonetimecoderequest%28using_completionhandler_%29.md): Provides the user-selected one-time passcode (OTP).
- [ASPasswordCredential](../aspasswordcredential.md): A password credential.
- [ASPasskeyAssertionCredential](../aspasskeyassertioncredential.md): A passkey assertion credential.
- [ASPasskeyRegistrationCredential](../aspasskeyregistrationcredential.md): A passkey registration credential.
- [ASOneTimeCodeCredential](../asonetimecodecredential.md): A one-time passcode (OTP) credential.

# completeRegistrationRequestWithSelectedPasskeyCredential:completionHandler: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Complete the registration request by providing the newly-created passkey credential.

## Declaration

```objectivec
- (void) completeRegistrationRequestWithSelectedPasskeyCredential:(ASPasskeyRegistrationCredential *) credential completionHandler:(void (^)(BOOL expired)) completionHandler;
```

## Parameters

- `credential`: The credential your extension created in response to the registration request.
- `completionHandler`: An optional block your extension can provide to perform any cleanup work after the system has used the credential. The expired parameter is [true](https://developer.apple.com/documentation/swift/true) if the system decides to prematurely end a previous non-expiration invocation of the completion handler.

<a id="Discussion"></a>

## Discussion

The synchronous version of this method calls its completion handler with [background](../../dispatch/dispatchqos/background.md) priority.

## See Also

### Providing credentials

- [completeRequestWithSelectedCredential:completionHandler:](completerequest%28withselectedcredential_completionhandler_%29.md): Provides the user-selected credential.
- [completeAssertionRequestWithSelectedPasskeyCredential:completionHandler:](completeassertionrequest%28using_completionhandler_%29.md): Complete the passkey assertion request by providing the user-selected passkey credential.
- [completeOneTimeCodeRequestWithSelectedCredential:completionHandler:](completeonetimecoderequest%28using_completionhandler_%29.md): Provides the user-selected one-time passcode (OTP).
- [ASPasswordCredential](../aspasswordcredential.md): A password credential.
- [ASPasskeyAssertionCredential](../aspasskeyassertioncredential.md): A passkey assertion credential.
- [ASPasskeyRegistrationCredential](../aspasskeyregistrationcredential.md): A passkey registration credential.
- [ASOneTimeCodeCredential](../asonetimecodecredential.md): A one-time passcode (OTP) credential.
