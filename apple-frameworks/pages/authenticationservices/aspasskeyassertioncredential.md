> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeyassertioncredential](https://developer.apple.com/documentation/authenticationservices/aspasskeyassertioncredential)

# ASPasskeyAssertionCredential (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A passkey assertion credential.

## Declaration

```swift
class ASPasskeyAssertionCredential
```

<a id="overview"></a>

## Overview

Create a passkey assertion credential to provide a response to a passkey authentication challenge from your credential provider extension. Call [completeAssertionRequest(using:completionHandler:)](ascredentialproviderextensioncontext/completeassertionrequest%28using_completionhandler_%29.md), passing your passkey assertion credential.

## Topics

### Creating a passkey assertion credential

- [init(userHandle:relyingParty:signature:clientDataHash:authenticatorData:credentialID:)](aspasskeyassertioncredential/init%28userhandle_relyingparty_signature_clientdatahash_authenticatordata_credentialid_%29.md): Initializes a passkey assertion credential object.
- [init(userHandle:relyingParty:signature:clientDataHash:authenticatorData:credentialID:extensionOutput:)](aspasskeyassertioncredential/init%28userhandle_relyingparty_signature_clientdatahash_authenticatordata_credentialid_extensionoutput_%29.md): Initializes a passkey assertion credential object, optionally specifying an extension output.

### Accessing credential information

- [authenticatorData](aspasskeyassertioncredential/authenticatordata.md): The authenticator data of the application that created this passkey assertion credential.
- [clientDataHash](aspasskeyassertioncredential/clientdatahash.md): A hash of the client data for this credential.
- [credentialID](aspasskeyassertioncredential/credentialid.md): The identifier for this credential.
- [relyingParty](aspasskeyassertioncredential/relyingparty.md): The relying party associated with this passkey.
- [signature](aspasskeyassertioncredential/signature.md): The cryptographic signature of this credential.
- [userHandle](aspasskeyassertioncredential/userhandle.md): The user handle of this passkey.

### Accessing extension output

- [extensionOutput](aspasskeyassertioncredential/extensionoutput-7t6rn.md): An output from WebAuthn extensions.
- [ASPasskeyAssertionCredentialExtensionOutput](aspasskeyassertioncredentialextensionoutput-swift.struct.md): A type that encapsulates output for various WebAuthn extensions during passkey assertion.

### Initializers

- [init(coder:)](aspasskeyassertioncredential/init%28coder_%29.md)

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
- [ASPasskeyRegistrationCredential](aspasskeyregistrationcredential.md): A passkey registration credential.
- [ASOneTimeCodeCredential](asonetimecodecredential.md): A one-time passcode (OTP) credential.

# ASPasskeyAssertionCredential (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A passkey assertion credential.

## Declaration

```objectivec
@interface ASPasskeyAssertionCredential : NSObject
```

<a id="overview"></a>

## Overview

Create a passkey assertion credential to provide a response to a passkey authentication challenge from your credential provider extension. Call [completeAssertionRequestWithSelectedPasskeyCredential:completionHandler:](ascredentialproviderextensioncontext/completeassertionrequest%28using_completionhandler_%29.md), passing your passkey assertion credential.

## Topics

### Creating a passkey assertion credential

- [credentialWithUserHandle:relyingParty:signature:clientDataHash:authenticatorData:credentialID:](aspasskeyassertioncredential/credentialwithuserhandle_relyingparty_signature_clientdatahash_authenticatordata_credentialid_.md): Creates and initializes a new passkey assertion credential.
- [initWithUserHandle:relyingParty:signature:clientDataHash:authenticatorData:credentialID:](aspasskeyassertioncredential/init%28userhandle_relyingparty_signature_clientdatahash_authenticatordata_credentialid_%29.md): Initializes a passkey assertion credential object.
- [initWithUserHandle:relyingParty:signature:clientDataHash:authenticatorData:credentialID:extensionOutput:](aspasskeyassertioncredential/initwithuserhandle_relyingparty_signature_clientdatahash_authenticatordata_credentialid_extensionoutput_.md): Initializes a passkey assertion credential object, optionally specifying an extension output.

### Accessing credential information

- [authenticatorData](aspasskeyassertioncredential/authenticatordata.md): The authenticator data of the application that created this passkey assertion credential.
- [clientDataHash](aspasskeyassertioncredential/clientdatahash.md): A hash of the client data for this credential.
- [credentialID](aspasskeyassertioncredential/credentialid.md): The identifier for this credential.
- [relyingParty](aspasskeyassertioncredential/relyingparty.md): The relying party associated with this passkey.
- [signature](aspasskeyassertioncredential/signature.md): The cryptographic signature of this credential.
- [userHandle](aspasskeyassertioncredential/userhandle.md): The user handle of this passkey.

### Accessing extension output

- [extensionOutput](aspasskeyassertioncredential/extensionoutput-46ib3.md): An output from WebAuthn extensions.
- [ASPasskeyAssertionCredentialExtensionOutput](aspasskeyassertioncredentialextensionoutput-c.class.md): A class that encapsulates output for various WebAuthn extensions during passkey assertion.

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
- [ASPasskeyRegistrationCredential](aspasskeyregistrationcredential.md): A passkey registration credential.
- [ASOneTimeCodeCredential](asonetimecodecredential.md): A one-time passcode (OTP) credential.
