> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeycredentialrequestparameters](https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialrequestparameters)

# ASPasskeyCredentialRequestParameters (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A class that represents information about a passkey credential request.

## Declaration

```swift
class ASPasskeyCredentialRequestParameters
```

<a id="overview"></a>

## Overview

The system creates instances of this class to handle active passkey requests, and passes them to your extension by calling [prepareCredentialList(for:requestParameters:)](ascredentialproviderviewcontroller/preparecredentiallist%28for_requestparameters_%29.md). Use the properties of the given request parameters object, along with the passkey credential that the person chooses, to construct a passkey credential response that you return to the system using [completeAssertionRequest(using:completionHandler:)](ascredentialproviderextensioncontext/completeassertionrequest%28using_completionhandler_%29.md).

## Topics

### Viewing credential request parameters

- [allowedCredentials](aspasskeycredentialrequestparameters/allowedcredentials.md): A list of passkey credentials that the relying party accepts for this challenge.
- [clientDataHash](aspasskeycredentialrequestparameters/clientdatahash.md): The client data that you sign as part of the response.
- [relyingPartyIdentifier](aspasskeycredentialrequestparameters/relyingpartyidentifier.md): The relying party that issues the challenge.
- [userVerificationPreference](aspasskeycredentialrequestparameters/userverificationpreference.md): The relying party’s preference for user verification.

### Working with WebAuthn extensions

- [extensionInput](aspasskeycredentialrequestparameters/extensioninput-2edlv.md): An input for WebAuthn extensions.
- [ASPasskeyAssertionCredentialExtensionInput](aspasskeyassertioncredentialextensioninput-swift.struct.md): A type that encapsulates input for various WebAuthn extensions during passkey assertion.

### Initializers

- [init(coder:)](aspasskeycredentialrequestparameters/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

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

### Selecting a credential

- [prepareCredentialList(for:)](ascredentialproviderviewcontroller/preparecredentiallist%28for_%29.md): Prepares the interface to display a list of credentials from which the user can select.
- [prepareCredentialList(for:requestParameters:)](ascredentialproviderviewcontroller/preparecredentiallist%28for_requestparameters_%29.md): Prepares the interface to display a list of passkey and password credentials from which the user can select.
- [prepareOneTimeCodeCredentialList(for:)](ascredentialproviderviewcontroller/prepareonetimecodecredentiallist%28for_%29.md): Prepares the interface to display a list of one-time passcodes (OTPs) that people can select from.
- [prepareInterface(forPasskeyRegistration:)](ascredentialproviderviewcontroller/prepareinterface%28forpasskeyregistration_%29.md): Prepare the view controller to show user interface for registering a new passkey.
- [prepareInterfaceToProvideCredential(for:)](ascredentialproviderviewcontroller/prepareinterfacetoprovidecredential%28for_%29-68qpo.md): Prepare the view controller to show user interface for providing the requested credential.
- [provideCredentialWithoutUserInteraction(for:)](ascredentialproviderviewcontroller/providecredentialwithoutuserinteraction%28for_%29-3mo23.md): Attempts to provide the user-requested credential with no further user interaction.
- [performWithoutUserInteractionIfPossible(passkeyRegistration:)](ascredentialproviderviewcontroller/performwithoutuserinteractionifpossible%28passkeyregistration_%29.md): Perform a conditional passkey registration, if possible.
- [ASCredentialServiceIdentifier](ascredentialserviceidentifier.md): An identifier representing a particular service for which the user needs a credential, like a web site.
- [ASCredentialRequest](ascredentialrequest.md): A protocol that describes a request from the user for your extension to provide a credential.
- [ASPasswordCredentialRequest](aspasswordcredentialrequest.md): A class that represents a request to supply a password credential.
- [ASOneTimeCodeCredentialRequest](asonetimecodecredentialrequest.md)
- [ASAuthorizationPublicKeyCredentialRegistrationRequest](asauthorizationpublickeycredentialregistrationrequest.md): An interface that defines properties for a credential registration request.
- [ASPasskeyCredentialRequest](aspasskeycredentialrequest.md): A class that represents a request to supply a passkey credential.

# ASPasskeyCredentialRequestParameters (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A class that represents information about a passkey credential request.

## Declaration

```objectivec
@interface ASPasskeyCredentialRequestParameters : NSObject
```

<a id="overview"></a>

## Overview

The system creates instances of this class to handle active passkey requests, and passes them to your extension by calling [prepareCredentialListForServiceIdentifiers:requestParameters:](ascredentialproviderviewcontroller/preparecredentiallist%28for_requestparameters_%29.md). Use the properties of the given request parameters object, along with the passkey credential that the person chooses, to construct a passkey credential response that you return to the system using [completeAssertionRequestWithSelectedPasskeyCredential:completionHandler:](ascredentialproviderextensioncontext/completeassertionrequest%28using_completionhandler_%29.md).

## Topics

### Viewing credential request parameters

- [allowedCredentials](aspasskeycredentialrequestparameters/allowedcredentials.md): A list of passkey credentials that the relying party accepts for this challenge.
- [clientDataHash](aspasskeycredentialrequestparameters/clientdatahash.md): The client data that you sign as part of the response.
- [relyingPartyIdentifier](aspasskeycredentialrequestparameters/relyingpartyidentifier.md): The relying party that issues the challenge.
- [userVerificationPreference](aspasskeycredentialrequestparameters/userverificationpreference.md): The relying party’s preference for user verification.

### Working with WebAuthn extensions

- [extensionInput](aspasskeycredentialrequestparameters/extensioninput-5ny4g.md): Inputs for WebAuthn extensions you use for passkey assertion.
- [ASPasskeyAssertionCredentialExtensionInput](aspasskeyassertioncredentialextensioninput-c.class.md): A type that encapsulates input for various WebAuthn extensions during passkey assertion.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Selecting a credential

- [prepareCredentialListForServiceIdentifiers:](ascredentialproviderviewcontroller/preparecredentiallist%28for_%29.md): Prepares the interface to display a list of credentials from which the user can select.
- [prepareCredentialListForServiceIdentifiers:requestParameters:](ascredentialproviderviewcontroller/preparecredentiallist%28for_requestparameters_%29.md): Prepares the interface to display a list of passkey and password credentials from which the user can select.
- [prepareOneTimeCodeCredentialListForServiceIdentifiers:](ascredentialproviderviewcontroller/prepareonetimecodecredentiallist%28for_%29.md): Prepares the interface to display a list of one-time passcodes (OTPs) that people can select from.
- [prepareInterfaceForPasskeyRegistration:](ascredentialproviderviewcontroller/prepareinterface%28forpasskeyregistration_%29.md): Prepare the view controller to show user interface for registering a new passkey.
- [prepareInterfaceToProvideCredentialForRequest:](ascredentialproviderviewcontroller/prepareinterfacetoprovidecredential%28for_%29-68qpo.md): Prepare the view controller to show user interface for providing the requested credential.
- [provideCredentialWithoutUserInteractionForRequest:](ascredentialproviderviewcontroller/providecredentialwithoutuserinteraction%28for_%29-3mo23.md): Attempts to provide the user-requested credential with no further user interaction.
- [performPasskeyRegistrationWithoutUserInteractionIfPossible:](ascredentialproviderviewcontroller/performwithoutuserinteractionifpossible%28passkeyregistration_%29.md): Perform a conditional passkey registration, if possible.
- [ASCredentialServiceIdentifier](ascredentialserviceidentifier.md): An identifier representing a particular service for which the user needs a credential, like a web site.
- [ASCredentialRequest](ascredentialrequest.md): A protocol that describes a request from the user for your extension to provide a credential.
- [ASPasswordCredentialRequest](aspasswordcredentialrequest.md): A class that represents a request to supply a password credential.
- [ASOneTimeCodeCredentialRequest](asonetimecodecredentialrequest.md)
- [ASAuthorizationPublicKeyCredentialRegistrationRequest](asauthorizationpublickeycredentialregistrationrequest.md): An interface that defines properties for a credential registration request.
- [ASPasskeyCredentialRequest](aspasskeycredentialrequest.md): A class that represents a request to supply a passkey credential.
