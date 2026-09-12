> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeycredentialrequest](https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialrequest)

# ASPasskeyCredentialRequest (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A class that represents a request to supply a passkey credential.

## Declaration

```swift
class ASPasskeyCredentialRequest
```

## Topics

### Creating passkey credential requests

- [init(credentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:)](aspasskeycredentialrequest/init%28credentialidentity_clientdatahash_userverificationpreference_supportedalgorithms_%29-1jihy.md): Initializes a passkey credential request, identifying supported algorithms by number.
- [init(credentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:)](aspasskeycredentialrequest/init%28credentialidentity_clientdatahash_userverificationpreference_supportedalgorithms_%29-52txr.md): Initializes a passkey credential request, identifying supported algorithms with constants.
- [init(credentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:extensionInput:)](aspasskeycredentialrequest/init%28credentialidentity_clientdatahash_userverificationpreference_supportedalgorithms_extensioninput_%29-9hsyv.md): Initializes a passkey credential request, providing additional passkey assertion data.
- [init(credentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:extensionInput:)](aspasskeycredentialrequest/init%28credentialidentity_clientdatahash_userverificationpreference_supportedalgorithms_extensioninput_%29-1258o.md): Initializes a passkey credential request, providing additional passkey registration data.

### Viewing passkey challenge information

- [clientDataHash](aspasskeycredentialrequest/clientdatahash.md): The hash of the client data for this assertion.
- [userVerificationPreference](aspasskeycredentialrequest/userverificationpreference.md): The relying party’s user verification preference.
- [supportedAlgorithms](aspasskeycredentialrequest/supportedalgorithms-74mad.md): A list of cryptographic signature algorithms that the relying party supports.
- [extensionInput](aspasskeycredentialrequest/extensioninput.md): An input for WebAuthn extensions.
- [ASPasskeyCredentialExtensionInput](aspasskeycredentialextensioninput.md): A type for WebAuthn extension inputs.

### Initializers

- [init(coder:)](aspasskeycredentialrequest/init%28coder_%29.md)

### Instance Properties

- [excludedCredentials](aspasskeycredentialrequest/excludedcredentials.md): A list of IDs that represent existing passkeys for the account, to prevent creation of duplicate passkeys.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASCredentialRequest](ascredentialrequest.md)
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
- [ASPasskeyCredentialRequestParameters](aspasskeycredentialrequestparameters.md): A class that represents information about a passkey credential request.

# ASPasskeyCredentialRequest (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A class that represents a request to supply a passkey credential.

## Declaration

```objectivec
@interface ASPasskeyCredentialRequest : NSObject
```

## Topics

### Creating passkey credential requests

- [requestWithCredentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:](aspasskeycredentialrequest/init%28credentialidentity_clientdatahash_userverificationpreference_supportedalgorithms_%29-1jihy.md): Initializes a passkey credential request, identifying supported algorithms by number.
- [initWithCredentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:](aspasskeycredentialrequest/initwithcredentialidentity_clientdatahash_userverificationpreference_supportedalgorithms_.md): Initializes a passkey credential request.
- [initWithCredentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:assertionExtensionInput:](aspasskeycredentialrequest/initwithcredentialidentity_clientdatahash_userverificationpreference_supportedalgorithms_assertionextensioninput_.md): Initializes a passkey credential request, providing additional passkey registration data.
- [initWithCredentialIdentity:clientDataHash:userVerificationPreference:supportedAlgorithms:registrationExtensionInput:](aspasskeycredentialrequest/initwithcredentialidentity_clientdatahash_userverificationpreference_supportedalgorithms_registrationextensioninput_.md): Initializes a passkey credential request, providing additional passkey registration data.

### Viewing passkey challenge information

- [clientDataHash](aspasskeycredentialrequest/clientdatahash.md): The hash of the client data for this assertion.
- [userVerificationPreference](aspasskeycredentialrequest/userverificationpreference.md): The relying party’s user verification preference.
- [supportedAlgorithms](aspasskeycredentialrequest/supportedalgorithms-27z68.md): A list of cryptographic signature algorithms that the relying party supports.
- [assertionExtensionInput](aspasskeycredentialrequest/assertionextensioninput.md): An input for WebAuthn extensions.
- [ASPasskeyAssertionCredentialExtensionInput](aspasskeyassertioncredentialextensioninput-c.class.md): A type that encapsulates input for various WebAuthn extensions during passkey assertion.
- [registrationExtensionInput](aspasskeycredentialrequest/registrationextensioninput.md): An input for WebAuthn extensions.
- [ASPasskeyRegistrationCredentialExtensionInput](aspasskeyregistrationcredentialextensioninput-c.class.md): A type that encapsulates input for various WebAuthn extensions during passkey registration.

### Instance Properties

- [excludedCredentials](aspasskeycredentialrequest/excludedcredentials.md): A list of IDs that represent existing passkeys for the account, to prevent creation of duplicate passkeys.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASCredentialRequest](ascredentialrequest.md)

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
- [ASPasskeyCredentialRequestParameters](aspasskeycredentialrequestparameters.md): A class that represents information about a passkey credential request.
