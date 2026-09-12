> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialserviceidentifier](https://developer.apple.com/documentation/authenticationservices/ascredentialserviceidentifier)

# ASCredentialServiceIdentifier (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

An identifier representing a particular service for which the user needs a credential, like a web site.

## Declaration

```swift
class ASCredentialServiceIdentifier
```

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](upgrading-account-security-with-an-account-authentication-modification-extension.md)

## Topics

### Creating a credential service identifier

- [init(identifier:type:)](ascredentialserviceidentifier/init%28identifier_type_%29.md): Initializes a credential service identifier instance.

### Identifying the credential service

- [identifier](ascredentialserviceidentifier/identifier.md): A string that names the identified service.
- [type](ascredentialserviceidentifier/type.md): The kind of services that the identifier represents.
- [ASCredentialServiceIdentifier.IdentifierType](ascredentialserviceidentifier/identifiertype.md): Possible values for the service identifier type.

### Initializers

- [init(coder:)](ascredentialserviceidentifier/init%28coder_%29.md)
- [init(identifier:type:displayName:)](ascredentialserviceidentifier/init%28identifier_type_displayname_%29.md): Initializes an ASCredentialServiceIdentifier object.

### Instance Properties

- [displayName](ascredentialserviceidentifier/displayname.md): A user visible name for the identifier. For `app` types it will contain the localized name of the app. For `URL` types it will contain the host name of the URL if it contains a valid host. For `URL` type identifiers that do not contain a valid host and for `domain` type identifiers, this will be equal to `identifier`. This property is meant only as a best effort suggestion for display purposes. It is not used by the system to identify the service or suggest a credential for AutoFill.

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
- [ASCredentialRequest](ascredentialrequest.md): A protocol that describes a request from the user for your extension to provide a credential.
- [ASPasswordCredentialRequest](aspasswordcredentialrequest.md): A class that represents a request to supply a password credential.
- [ASOneTimeCodeCredentialRequest](asonetimecodecredentialrequest.md)
- [ASAuthorizationPublicKeyCredentialRegistrationRequest](asauthorizationpublickeycredentialregistrationrequest.md): An interface that defines properties for a credential registration request.
- [ASPasskeyCredentialRequest](aspasskeycredentialrequest.md): A class that represents a request to supply a passkey credential.
- [ASPasskeyCredentialRequestParameters](aspasskeycredentialrequestparameters.md): A class that represents information about a passkey credential request.

# ASCredentialServiceIdentifier (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

An identifier representing a particular service for which the user needs a credential, like a web site.

## Declaration

```objectivec
@interface ASCredentialServiceIdentifier : NSObject
```

## Mentioned In

- [Upgrading Account Security With an Account Authentication Modification Extension](upgrading-account-security-with-an-account-authentication-modification-extension.md)

## Topics

### Creating a credential service identifier

- [initWithIdentifier:type:](ascredentialserviceidentifier/init%28identifier_type_%29.md): Initializes a credential service identifier instance.

### Identifying the credential service

- [identifier](ascredentialserviceidentifier/identifier.md): A string that names the identified service.
- [type](ascredentialserviceidentifier/type.md): The kind of services that the identifier represents.
- [ASCredentialServiceIdentifierType](ascredentialserviceidentifier/identifiertype.md): Possible values for the service identifier type.

### Instance Properties

- [displayName](ascredentialserviceidentifier/displayname.md): A user visible name for the identifier. For `app` types it will contain the localized name of the app. For `URL` types it will contain the host name of the URL if it contains a valid host. For `URL` type identifiers that do not contain a valid host and for `domain` type identifiers, this will be equal to `identifier`. This property is meant only as a best effort suggestion for display purposes. It is not used by the system to identify the service or suggest a credential for AutoFill.

### Instance Methods

- [initWithIdentifier:type:displayName:](ascredentialserviceidentifier/init%28identifier_type_displayname_%29.md): Initializes an ASCredentialServiceIdentifier object.

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
- [ASCredentialRequest](ascredentialrequest.md): A protocol that describes a request from the user for your extension to provide a credential.
- [ASPasswordCredentialRequest](aspasswordcredentialrequest.md): A class that represents a request to supply a password credential.
- [ASOneTimeCodeCredentialRequest](asonetimecodecredentialrequest.md)
- [ASAuthorizationPublicKeyCredentialRegistrationRequest](asauthorizationpublickeycredentialregistrationrequest.md): An interface that defines properties for a credential registration request.
- [ASPasskeyCredentialRequest](aspasskeycredentialrequest.md): A class that represents a request to supply a passkey credential.
- [ASPasskeyCredentialRequestParameters](aspasskeycredentialrequestparameters.md): A class that represents information about a passkey credential request.
