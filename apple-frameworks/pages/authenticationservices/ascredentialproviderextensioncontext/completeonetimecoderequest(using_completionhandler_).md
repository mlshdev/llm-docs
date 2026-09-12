> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialproviderextensioncontext/completeonetimecoderequest(using:completionhandler:)](https://developer.apple.com/documentation/authenticationservices/ascredentialproviderextensioncontext/completeonetimecoderequest(using:completionhandler:))

# completeOneTimeCodeRequest(using:completionHandler:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Provides the user-selected one-time passcode (OTP).

## Declaration

```swift
func completeOneTimeCodeRequest(using credential: ASOneTimeCodeCredential, completionHandler: (@Sendable (Bool) -> Void)? = nil)
```

```swift
func completeOneTimeCodeRequest(using credential: ASOneTimeCodeCredential) async -> Bool
```

## Parameters

- `credential`: The OTP credential chosen by the person.
- `completionHandler`: Optional work that the extension performs as a background priority task after the request completes. The `expired` parameter is `YES` if the system prematurely terminates a previous non-expiration invocation of the `completionHandler`.

## Mentioned In

- [Providing one-time passcodes to AutoFill](../providing-one-time-passcodes-to-autofill.md)

<a id="Overview"></a>

## Overview

After calling this method, the system dismisses the associated view controller.

## See Also

### Providing credentials

- [completeRequest(withSelectedCredential:completionHandler:)](completerequest%28withselectedcredential_completionhandler_%29.md): Provides the user-selected credential.
- [completeAssertionRequest(using:completionHandler:)](completeassertionrequest%28using_completionhandler_%29.md): Complete the passkey assertion request by providing the user-selected passkey credential.
- [completeRegistrationRequest(using:completionHandler:)](completeregistrationrequest%28using_completionhandler_%29.md): Complete the registration request by providing the newly-created passkey credential.
- [ASPasswordCredential](../aspasswordcredential.md): A password credential.
- [ASPasskeyAssertionCredential](../aspasskeyassertioncredential.md): A passkey assertion credential.
- [ASPasskeyRegistrationCredential](../aspasskeyregistrationcredential.md): A passkey registration credential.
- [ASOneTimeCodeCredential](../asonetimecodecredential.md): A one-time passcode (OTP) credential.

# completeOneTimeCodeRequestWithSelectedCredential:completionHandler: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Provides the user-selected one-time passcode (OTP).

## Declaration

```objectivec
- (void) completeOneTimeCodeRequestWithSelectedCredential:(ASOneTimeCodeCredential *) credential completionHandler:(void (^)(BOOL expired)) completionHandler;
```

## Parameters

- `credential`: The OTP credential chosen by the person.
- `completionHandler`: Optional work that the extension performs as a background priority task after the request completes. The `expired` parameter is `YES` if the system prematurely terminates a previous non-expiration invocation of the `completionHandler`.

## Mentioned In

- [Providing one-time passcodes to AutoFill](../providing-one-time-passcodes-to-autofill.md)

<a id="Overview"></a>

## Overview

After calling this method, the system dismisses the associated view controller.

## See Also

### Providing credentials

- [completeRequestWithSelectedCredential:completionHandler:](completerequest%28withselectedcredential_completionhandler_%29.md): Provides the user-selected credential.
- [completeAssertionRequestWithSelectedPasskeyCredential:completionHandler:](completeassertionrequest%28using_completionhandler_%29.md): Complete the passkey assertion request by providing the user-selected passkey credential.
- [completeRegistrationRequestWithSelectedPasskeyCredential:completionHandler:](completeregistrationrequest%28using_completionhandler_%29.md): Complete the registration request by providing the newly-created passkey credential.
- [ASPasswordCredential](../aspasswordcredential.md): A password credential.
- [ASPasskeyAssertionCredential](../aspasskeyassertioncredential.md): A passkey assertion credential.
- [ASPasskeyRegistrationCredential](../aspasskeyregistrationcredential.md): A passkey registration credential.
- [ASOneTimeCodeCredential](../asonetimecodecredential.md): A one-time passcode (OTP) credential.
