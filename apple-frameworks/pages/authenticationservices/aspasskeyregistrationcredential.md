> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeyregistrationcredential](https://developer.apple.com/documentation/authenticationservices/aspasskeyregistrationcredential)

# ASPasskeyRegistrationCredential (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A passkey registration credential.

## Declaration

```swift
class ASPasskeyRegistrationCredential
```

<a id="overview"></a>

## Overview

Create a passkey registration credential to provide a response to a passkey registration request from your credential provider extension. Call [completeRegistrationRequest(using:completionHandler:)](ascredentialproviderextensioncontext/completeregistrationrequest%28using_completionhandler_%29.md), passing your passkey registration credential.

## Topics

### Creating a passkey registration credential

- [init(relyingParty:clientDataHash:credentialID:attestationObject:)](aspasskeyregistrationcredential/init%28relyingparty_clientdatahash_credentialid_attestationobject_%29.md): Initializes a passkey registration credential object.
- [init(relyingParty:clientDataHash:credentialID:attestationObject:extensionOutput:)](aspasskeyregistrationcredential/init%28relyingparty_clientdatahash_credentialid_attestationobject_extensionoutput_%29.md): Initializes a passkey registration credential object.

### Accessing credential information

- [attestationObject](aspasskeyregistrationcredential/attestationobject.md): The attestation object for this passkey.
- [clientDataHash](aspasskeyregistrationcredential/clientdatahash.md): A hash of the client data for this credential.
- [credentialID](aspasskeyregistrationcredential/credentialid.md): The identifier for this credential.
- [relyingParty](aspasskeyregistrationcredential/relyingparty.md): The relying party associated with this passkey.

### Accessing extension output

- [extensionOutput](aspasskeyregistrationcredential/extensionoutput-2lf9m.md): An output from WebAuthn extensions.
- [ASPasskeyRegistrationCredentialExtensionOutput](aspasskeyregistrationcredentialextensionoutput-swift.struct.md): A type that encapsulates output for various WebAuthn extensions during passkey assertion.

### Initializers

- [init(coder:)](aspasskeyregistrationcredential/init%28coder_%29.md)

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

## See Also

### Providing credentials

- [completeRequest(withSelectedCredential:completionHandler:)](ascredentialproviderextensioncontext/completerequest%28withselectedcredential_completionhandler_%29.md): Provides the user-selected credential.
- [completeAssertionRequest(using:completionHandler:)](ascredentialproviderextensioncontext/completeassertionrequest%28using_completionhandler_%29.md): Complete the passkey assertion request by providing the user-selected passkey credential.
- [completeRegistrationRequest(using:completionHandler:)](ascredentialproviderextensioncontext/completeregistrationrequest%28using_completionhandler_%29.md): Complete the registration request by providing the newly-created passkey credential.
- [completeOneTimeCodeRequest(using:completionHandler:)](ascredentialproviderextensioncontext/completeonetimecoderequest%28using_completionhandler_%29.md): Provides the user-selected one-time passcode (OTP).
- [ASPasswordCredential](aspasswordcredential.md): A password credential.
- [ASPasskeyAssertionCredential](aspasskeyassertioncredential.md): A passkey assertion credential.
- [ASOneTimeCodeCredential](asonetimecodecredential.md): A one-time passcode (OTP) credential.

# ASPasskeyRegistrationCredential (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A passkey registration credential.

## Declaration

```objectivec
@interface ASPasskeyRegistrationCredential : NSObject
```

<a id="overview"></a>

## Overview

Create a passkey registration credential to provide a response to a passkey registration request from your credential provider extension. Call [completeRegistrationRequestWithSelectedPasskeyCredential:completionHandler:](ascredentialproviderextensioncontext/completeregistrationrequest%28using_completionhandler_%29.md), passing your passkey registration credential.

## Topics

### Creating a passkey registration credential

- [credentialWithRelyingParty:clientDataHash:credentialID:attestationObject:](aspasskeyregistrationcredential/credentialwithrelyingparty_clientdatahash_credentialid_attestationobject_.md): Creates and initializes a new passkey registration credential.
- [initWithRelyingParty:clientDataHash:credentialID:attestationObject:](aspasskeyregistrationcredential/init%28relyingparty_clientdatahash_credentialid_attestationobject_%29.md): Initializes a passkey registration credential object.
- [initWithRelyingParty:clientDataHash:credentialID:attestationObject:extensionOutput:](aspasskeyregistrationcredential/initwithrelyingparty_clientdatahash_credentialid_attestationobject_extensionoutput_.md): Initializes a passkey registration credential object.

### Accessing credential information

- [attestationObject](aspasskeyregistrationcredential/attestationobject.md): The attestation object for this passkey.
- [clientDataHash](aspasskeyregistrationcredential/clientdatahash.md): A hash of the client data for this credential.
- [credentialID](aspasskeyregistrationcredential/credentialid.md): The identifier for this credential.
- [relyingParty](aspasskeyregistrationcredential/relyingparty.md): The relying party associated with this passkey.

### Accessing extension output

- [extensionOutput](aspasskeyregistrationcredential/extensionoutput-95gvu.md): An output from WebAuthn extensions.
- [ASPasskeyRegistrationCredentialExtensionOutput](aspasskeyregistrationcredentialextensionoutput-c.class.md): A class that encapsulates output for various WebAuthn extensions during passkey registration.

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
- [ASOneTimeCodeCredential](asonetimecodecredential.md): A one-time passcode (OTP) credential.
