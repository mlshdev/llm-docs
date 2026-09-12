> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialproviderextensioncontext/completerequest(withselectedcredential:completionhandler:)](https://developer.apple.com/documentation/authenticationservices/ascredentialproviderextensioncontext/completerequest(withselectedcredential:completionhandler:))

# completeRequest(withSelectedCredential:completionHandler:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Provides the user-selected credential.

## Declaration

```swift
func completeRequest(withSelectedCredential credential: ASPasswordCredential, completionHandler: ((Bool) -> Void)? = nil)
```

## Parameters

- `credential`: The credential that the user selected.
- `completionHandler`: Optional work that the extension performs as a background priority task after the request completes. The `expired` parameter is `YES` if the system prematurely terminates a previous non-expiration invocation of the `completionHandler`.

<a id="Discussion"></a>

## Discussion

After calling this method, the system dismisses the associated view controller.

## See Also

### Providing credentials

- [completeAssertionRequest(using:completionHandler:)](completeassertionrequest%28using_completionhandler_%29.md): Complete the passkey assertion request by providing the user-selected passkey credential.
- [completeRegistrationRequest(using:completionHandler:)](completeregistrationrequest%28using_completionhandler_%29.md): Complete the registration request by providing the newly-created passkey credential.
- [completeOneTimeCodeRequest(using:completionHandler:)](completeonetimecoderequest%28using_completionhandler_%29.md): Provides the user-selected one-time passcode (OTP).
- [ASPasswordCredential](../aspasswordcredential.md): A password credential.
- [ASPasskeyAssertionCredential](../aspasskeyassertioncredential.md): A passkey assertion credential.
- [ASPasskeyRegistrationCredential](../aspasskeyregistrationcredential.md): A passkey registration credential.
- [ASOneTimeCodeCredential](../asonetimecodecredential.md): A one-time passcode (OTP) credential.

# completeRequestWithSelectedCredential:completionHandler: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Provides the user-selected credential.

## Declaration

```objectivec
- (void) completeRequestWithSelectedCredential:(ASPasswordCredential *) credential completionHandler:(void (^)(BOOL expired)) completionHandler;
```

## Parameters

- `credential`: The credential that the user selected.
- `completionHandler`: Optional work that the extension performs as a background priority task after the request completes. The `expired` parameter is `YES` if the system prematurely terminates a previous non-expiration invocation of the `completionHandler`.

<a id="Discussion"></a>

## Discussion

After calling this method, the system dismisses the associated view controller.

## See Also

### Providing credentials

- [completeAssertionRequestWithSelectedPasskeyCredential:completionHandler:](completeassertionrequest%28using_completionhandler_%29.md): Complete the passkey assertion request by providing the user-selected passkey credential.
- [completeRegistrationRequestWithSelectedPasskeyCredential:completionHandler:](completeregistrationrequest%28using_completionhandler_%29.md): Complete the registration request by providing the newly-created passkey credential.
- [completeOneTimeCodeRequestWithSelectedCredential:completionHandler:](completeonetimecoderequest%28using_completionhandler_%29.md): Provides the user-selected one-time passcode (OTP).
- [ASPasswordCredential](../aspasswordcredential.md): A password credential.
- [ASPasskeyAssertionCredential](../aspasskeyassertioncredential.md): A passkey assertion credential.
- [ASPasskeyRegistrationCredential](../aspasskeyregistrationcredential.md): A passkey registration credential.
- [ASOneTimeCodeCredential](../asonetimecodecredential.md): A one-time passcode (OTP) credential.
