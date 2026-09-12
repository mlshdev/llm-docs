> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialproviderextensioncontext](https://developer.apple.com/documentation/authenticationservices/ascredentialproviderextensioncontext)

# ASCredentialProviderExtensionContext (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A mechanism that credential provider extensions use to communicate with the system.

## Declaration

```swift
class ASCredentialProviderExtensionContext
```

## Topics

### Configuring the extension

- [completeExtensionConfigurationRequest()](ascredentialproviderextensioncontext/completeextensionconfigurationrequest%28%29.md): Completes the request to configure the extension.

### Providing credentials

- [completeRequest(withSelectedCredential:completionHandler:)](ascredentialproviderextensioncontext/completerequest%28withselectedcredential_completionhandler_%29.md): Provides the user-selected credential.
- [completeAssertionRequest(using:completionHandler:)](ascredentialproviderextensioncontext/completeassertionrequest%28using_completionhandler_%29.md): Complete the passkey assertion request by providing the user-selected passkey credential.
- [completeRegistrationRequest(using:completionHandler:)](ascredentialproviderextensioncontext/completeregistrationrequest%28using_completionhandler_%29.md): Complete the registration request by providing the newly-created passkey credential.
- [completeOneTimeCodeRequest(using:completionHandler:)](ascredentialproviderextensioncontext/completeonetimecoderequest%28using_completionhandler_%29.md): Provides the user-selected one-time passcode (OTP).
- [ASPasswordCredential](aspasswordcredential.md): A password credential.
- [ASPasskeyAssertionCredential](aspasskeyassertioncredential.md): A passkey assertion credential.
- [ASPasskeyRegistrationCredential](aspasskeyregistrationcredential.md): A passkey registration credential.
- [ASOneTimeCodeCredential](asonetimecodecredential.md): A one-time passcode (OTP) credential.

### Providing text to AutoFill

- [completeRequest(withTextToInsert:completionHandler:)](ascredentialproviderextensioncontext/completerequest%28withtexttoinsert_completionhandler_%29.md): Provides the user-selected text.

### Canceling

- [cancelRequest(withError:)](ascredentialproviderextensioncontext/cancelrequest%28witherror_%29.md): Cancels the request.

### Instance Methods

- [completeGeneratePasswordRequest(results:completionHandler:)](ascredentialproviderextensioncontext/completegeneratepasswordrequest%28results_completionhandler_%29.md): Return potential passwords for the given request.
- [completeSavePasswordRequest(completionHandler:)](ascredentialproviderextensioncontext/completesavepasswordrequest%28completionhandler_%29.md): Signal that a password request was successfully saved.

## Relationships

### Inherits From

- [NSExtensionContext](../foundation/nsextensioncontext.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the extension context

- [extensionContext](ascredentialproviderviewcontroller/extensioncontext.md): The context your credential provider extension uses to provide information to the system.

# ASCredentialProviderExtensionContext (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A mechanism that credential provider extensions use to communicate with the system.

## Declaration

```objectivec
@interface ASCredentialProviderExtensionContext : NSExtensionContext
```

## Topics

### Configuring the extension

- [completeExtensionConfigurationRequest](ascredentialproviderextensioncontext/completeextensionconfigurationrequest%28%29.md): Completes the request to configure the extension.

### Providing credentials

- [completeRequestWithSelectedCredential:completionHandler:](ascredentialproviderextensioncontext/completerequest%28withselectedcredential_completionhandler_%29.md): Provides the user-selected credential.
- [completeAssertionRequestWithSelectedPasskeyCredential:completionHandler:](ascredentialproviderextensioncontext/completeassertionrequest%28using_completionhandler_%29.md): Complete the passkey assertion request by providing the user-selected passkey credential.
- [completeRegistrationRequestWithSelectedPasskeyCredential:completionHandler:](ascredentialproviderextensioncontext/completeregistrationrequest%28using_completionhandler_%29.md): Complete the registration request by providing the newly-created passkey credential.
- [completeOneTimeCodeRequestWithSelectedCredential:completionHandler:](ascredentialproviderextensioncontext/completeonetimecoderequest%28using_completionhandler_%29.md): Provides the user-selected one-time passcode (OTP).
- [ASPasswordCredential](aspasswordcredential.md): A password credential.
- [ASPasskeyAssertionCredential](aspasskeyassertioncredential.md): A passkey assertion credential.
- [ASPasskeyRegistrationCredential](aspasskeyregistrationcredential.md): A passkey registration credential.
- [ASOneTimeCodeCredential](asonetimecodecredential.md): A one-time passcode (OTP) credential.

### Providing text to AutoFill

- [completeRequestWithTextToInsert:completionHandler:](ascredentialproviderextensioncontext/completerequest%28withtexttoinsert_completionhandler_%29.md): Provides the user-selected text.

### Canceling

- [cancelRequestWithError:](ascredentialproviderextensioncontext/cancelrequest%28witherror_%29.md): Cancels the request.

### Instance Methods

- [completeGeneratePasswordRequestWithResults:completionHandler:](ascredentialproviderextensioncontext/completegeneratepasswordrequest%28results_completionhandler_%29.md): Return potential passwords for the given request.
- [completeSavePasswordRequestWithCompletionHandler:](ascredentialproviderextensioncontext/completesavepasswordrequest%28completionhandler_%29.md): Signal that a password request was successfully saved.

## Relationships

### Inherits From

- [NSExtensionContext](../foundation/nsextensioncontext.md)

## See Also

### Getting the extension context

- [extensionContext](ascredentialproviderviewcontroller/extensioncontext.md): The context your credential provider extension uses to provide information to the system.
