> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asonetimecodecredential](https://developer.apple.com/documentation/authenticationservices/asonetimecodecredential)

# ASOneTimeCodeCredential (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A one-time passcode (OTP) credential.

## Declaration

```swift
class ASOneTimeCodeCredential
```

## Topics

### Creating an OTP credential

- [init(code:)](asonetimecodecredential/init%28code_%29.md): Creates a one-time passcode (OTP) credential.

### Accessing the OTP

- [code](asonetimecodecredential/code.md): The one-time passcode.

### Initializers

- [init(coder:)](asonetimecodecredential/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASAuthorizationCredential](asauthorizationcredential.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Providing credentials

- [completeRequest(withSelectedCredential:completionHandler:)](ascredentialproviderextensioncontext/completerequest%28withselectedcredential_completionhandler_%29.md): Provides the user-selected credential.
- [completeAssertionRequest(using:completionHandler:)](ascredentialproviderextensioncontext/completeassertionrequest%28using_completionhandler_%29.md): Complete the passkey assertion request by providing the user-selected passkey credential.
- [completeRegistrationRequest(using:completionHandler:)](ascredentialproviderextensioncontext/completeregistrationrequest%28using_completionhandler_%29.md): Complete the registration request by providing the newly-created passkey credential.
- [completeOneTimeCodeRequest(using:completionHandler:)](ascredentialproviderextensioncontext/completeonetimecoderequest%28using_completionhandler_%29.md): Provides the user-selected one-time passcode (OTP).
- [ASPasswordCredential](aspasswordcredential.md): A password credential.
- [ASPasskeyAssertionCredential](aspasskeyassertioncredential.md): A passkey assertion credential.
- [ASPasskeyRegistrationCredential](aspasskeyregistrationcredential.md): A passkey registration credential.

# ASOneTimeCodeCredential (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A one-time passcode (OTP) credential.

## Declaration

```objectivec
@interface ASOneTimeCodeCredential : NSObject
```

## Topics

### Creating an OTP credential

- [initWithCode:](asonetimecodecredential/init%28code_%29.md): Creates a one-time passcode (OTP) credential.

### Accessing the OTP

- [code](asonetimecodecredential/code.md): The one-time passcode.

### Type Methods

- [credentialWithCode:](asonetimecodecredential/credentialwithcode_.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASAuthorizationCredential](asauthorizationcredential.md)

## See Also

### Providing credentials

- [completeRequestWithSelectedCredential:completionHandler:](ascredentialproviderextensioncontext/completerequest%28withselectedcredential_completionhandler_%29.md): Provides the user-selected credential.
- [completeAssertionRequestWithSelectedPasskeyCredential:completionHandler:](ascredentialproviderextensioncontext/completeassertionrequest%28using_completionhandler_%29.md): Complete the passkey assertion request by providing the user-selected passkey credential.
- [completeRegistrationRequestWithSelectedPasskeyCredential:completionHandler:](ascredentialproviderextensioncontext/completeregistrationrequest%28using_completionhandler_%29.md): Complete the registration request by providing the newly-created passkey credential.
- [completeOneTimeCodeRequestWithSelectedCredential:completionHandler:](ascredentialproviderextensioncontext/completeonetimecoderequest%28using_completionhandler_%29.md): Provides the user-selected one-time passcode (OTP).
- [ASPasswordCredential](aspasswordcredential.md): A password credential.
- [ASPasskeyAssertionCredential](aspasskeyassertioncredential.md): A passkey assertion credential.
- [ASPasskeyRegistrationCredential](aspasskeyregistrationcredential.md): A passkey registration credential.
