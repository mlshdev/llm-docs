> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialrequest](https://developer.apple.com/documentation/authenticationservices/ascredentialrequest)

# ASCredentialRequest (Swift)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A protocol that describes a request from the user for your extension to provide a credential.

## Declaration

```swift
protocol ASCredentialRequest : NSCopying, NSSecureCoding, NSObjectProtocol
```

## Topics

### Identifying the requested credential type

- [type](ascredentialrequest/type.md): The type of credential used for this request.
- [ASCredentialRequestType](ascredentialrequesttype.md): An enumeration that identifies different types of credentials that apps and websites can request.

### Identifying credentials

- [credentialIdentity](ascredentialrequest/credentialidentity.md): The credential identity the user selected for authentication.

## Relationships

### Inherits From

- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

### Conforming Types

- [ASOneTimeCodeCredentialRequest](asonetimecodecredentialrequest.md)
- [ASPasskeyCredentialRequest](aspasskeycredentialrequest.md)
- [ASPasswordCredentialRequest](aspasswordcredentialrequest.md)

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
- [ASPasswordCredentialRequest](aspasswordcredentialrequest.md): A class that represents a request to supply a password credential.
- [ASOneTimeCodeCredentialRequest](asonetimecodecredentialrequest.md)
- [ASAuthorizationPublicKeyCredentialRegistrationRequest](asauthorizationpublickeycredentialregistrationrequest.md): An interface that defines properties for a credential registration request.
- [ASPasskeyCredentialRequest](aspasskeycredentialrequest.md): A class that represents a request to supply a passkey credential.
- [ASPasskeyCredentialRequestParameters](aspasskeycredentialrequestparameters.md): A class that represents information about a passkey credential request.

# ASCredentialRequest (Objective-C)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A protocol that describes a request from the user for your extension to provide a credential.

## Declaration

```objectivec
@protocol ASCredentialRequest <NSObject, NSSecureCoding, NSCopying>
```

## Topics

### Identifying the requested credential type

- [type](ascredentialrequest/type.md): The type of credential used for this request.
- [ASCredentialRequestType](ascredentialrequesttype.md): An enumeration that identifies different types of credentials that apps and websites can request.

### Identifying credentials

- [credentialIdentity](ascredentialrequest/credentialidentity.md): The credential identity the user selected for authentication.

## Relationships

### Inherits From

- [NSCopying](../foundation/nscopying.md)
- [NSObject](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

### Conforming Types

- [ASOneTimeCodeCredentialRequest](asonetimecodecredentialrequest.md)
- [ASPasskeyCredentialRequest](aspasskeycredentialrequest.md)
- [ASPasswordCredentialRequest](aspasswordcredentialrequest.md)

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
- [ASPasswordCredentialRequest](aspasswordcredentialrequest.md): A class that represents a request to supply a password credential.
- [ASOneTimeCodeCredentialRequest](asonetimecodecredentialrequest.md)
- [ASAuthorizationPublicKeyCredentialRegistrationRequest](asauthorizationpublickeycredentialregistrationrequest.md): An interface that defines properties for a credential registration request.
- [ASPasskeyCredentialRequest](aspasskeycredentialrequest.md): A class that represents a request to supply a passkey credential.
- [ASPasskeyCredentialRequestParameters](aspasskeycredentialrequestparameters.md): A class that represents information about a passkey credential request.
