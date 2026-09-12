> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialproviderviewcontroller/prepareinterface(forpasskeyregistration:)](https://developer.apple.com/documentation/authenticationservices/ascredentialproviderviewcontroller/prepareinterface(forpasskeyregistration:))

# prepareInterface(forPasskeyRegistration:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Prepare the view controller to show user interface for registering a new passkey.

## Declaration

```swift
func prepareInterface(forPasskeyRegistration registrationRequest: any ASCredentialRequest)
```

## Parameters

- `registrationRequest`: The passkey registration request.

<a id="Discussion"></a>

## Discussion

The system calls this method when the user selects your extension to create a passkey. Your app and extension must declare the key [ProvidesPasskeys](../../bundleresources/information-property-list/nsextension/nsextensionattributes/ascredentialproviderextensioncapabilities/providespasskeys.md) with value `YES` in the [ASCredentialProviderExtensionCapabilities](../../bundleresources/information-property-list/nsextension/nsextensionattributes/ascredentialproviderextensioncapabilities.md) dictionaries of their information property lists to be available for the user to select. The system presents your extension’s authentication user interface before creating the passkey.

Call the context’s [completeRegistrationRequest(using:completionHandler:)](../ascredentialproviderextensioncontext/completeregistrationrequest%28using_completionhandler_%29.md) method with the created passkey credential. Alternatively, if an error occurs, call [cancelRequest(withError:)](../ascredentialproviderextensioncontext/cancelrequest%28witherror_%29.md), using [ASExtensionErrorDomain](../asextensionerrordomain.md) as the error domain and an appropriate error code from [ASExtensionError.Code](../asextensionerror/code.md).

## See Also

### Selecting a credential

- [prepareCredentialList(for:)](preparecredentiallist%28for_%29.md): Prepares the interface to display a list of credentials from which the user can select.
- [prepareCredentialList(for:requestParameters:)](preparecredentiallist%28for_requestparameters_%29.md): Prepares the interface to display a list of passkey and password credentials from which the user can select.
- [prepareOneTimeCodeCredentialList(for:)](prepareonetimecodecredentiallist%28for_%29.md): Prepares the interface to display a list of one-time passcodes (OTPs) that people can select from.
- [prepareInterfaceToProvideCredential(for:)](prepareinterfacetoprovidecredential%28for_%29-68qpo.md): Prepare the view controller to show user interface for providing the requested credential.
- [provideCredentialWithoutUserInteraction(for:)](providecredentialwithoutuserinteraction%28for_%29-3mo23.md): Attempts to provide the user-requested credential with no further user interaction.
- [performWithoutUserInteractionIfPossible(passkeyRegistration:)](performwithoutuserinteractionifpossible%28passkeyregistration_%29.md): Perform a conditional passkey registration, if possible.
- [ASCredentialServiceIdentifier](../ascredentialserviceidentifier.md): An identifier representing a particular service for which the user needs a credential, like a web site.
- [ASCredentialRequest](../ascredentialrequest.md): A protocol that describes a request from the user for your extension to provide a credential.
- [ASPasswordCredentialRequest](../aspasswordcredentialrequest.md): A class that represents a request to supply a password credential.
- [ASOneTimeCodeCredentialRequest](../asonetimecodecredentialrequest.md)
- [ASAuthorizationPublicKeyCredentialRegistrationRequest](../asauthorizationpublickeycredentialregistrationrequest.md): An interface that defines properties for a credential registration request.
- [ASPasskeyCredentialRequest](../aspasskeycredentialrequest.md): A class that represents a request to supply a passkey credential.
- [ASPasskeyCredentialRequestParameters](../aspasskeycredentialrequestparameters.md): A class that represents information about a passkey credential request.

# prepareInterfaceForPasskeyRegistration: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Prepare the view controller to show user interface for registering a new passkey.

## Declaration

```objectivec
- (void) prepareInterfaceForPasskeyRegistration:(id<ASCredentialRequest>) registrationRequest;
```

## Parameters

- `registrationRequest`: The passkey registration request.

<a id="Discussion"></a>

## Discussion

The system calls this method when the user selects your extension to create a passkey. Your app and extension must declare the key [ProvidesPasskeys](../../bundleresources/information-property-list/nsextension/nsextensionattributes/ascredentialproviderextensioncapabilities/providespasskeys.md) with value `YES` in the [ASCredentialProviderExtensionCapabilities](../../bundleresources/information-property-list/nsextension/nsextensionattributes/ascredentialproviderextensioncapabilities.md) dictionaries of their information property lists to be available for the user to select. The system presents your extension’s authentication user interface before creating the passkey.

Call the context’s [completeRegistrationRequestWithSelectedPasskeyCredential:completionHandler:](../ascredentialproviderextensioncontext/completeregistrationrequest%28using_completionhandler_%29.md) method with the created passkey credential. Alternatively, if an error occurs, call [cancelRequestWithError:](../ascredentialproviderextensioncontext/cancelrequest%28witherror_%29.md), using [ASExtensionErrorDomain](../asextensionerrordomain.md) as the error domain and an appropriate error code from [ASExtensionErrorCode](../asextensionerror/code.md).

## See Also

### Selecting a credential

- [prepareCredentialListForServiceIdentifiers:](preparecredentiallist%28for_%29.md): Prepares the interface to display a list of credentials from which the user can select.
- [prepareCredentialListForServiceIdentifiers:requestParameters:](preparecredentiallist%28for_requestparameters_%29.md): Prepares the interface to display a list of passkey and password credentials from which the user can select.
- [prepareOneTimeCodeCredentialListForServiceIdentifiers:](prepareonetimecodecredentiallist%28for_%29.md): Prepares the interface to display a list of one-time passcodes (OTPs) that people can select from.
- [prepareInterfaceToProvideCredentialForRequest:](prepareinterfacetoprovidecredential%28for_%29-68qpo.md): Prepare the view controller to show user interface for providing the requested credential.
- [provideCredentialWithoutUserInteractionForRequest:](providecredentialwithoutuserinteraction%28for_%29-3mo23.md): Attempts to provide the user-requested credential with no further user interaction.
- [performPasskeyRegistrationWithoutUserInteractionIfPossible:](performwithoutuserinteractionifpossible%28passkeyregistration_%29.md): Perform a conditional passkey registration, if possible.
- [ASCredentialServiceIdentifier](../ascredentialserviceidentifier.md): An identifier representing a particular service for which the user needs a credential, like a web site.
- [ASCredentialRequest](../ascredentialrequest.md): A protocol that describes a request from the user for your extension to provide a credential.
- [ASPasswordCredentialRequest](../aspasswordcredentialrequest.md): A class that represents a request to supply a password credential.
- [ASOneTimeCodeCredentialRequest](../asonetimecodecredentialrequest.md)
- [ASAuthorizationPublicKeyCredentialRegistrationRequest](../asauthorizationpublickeycredentialregistrationrequest.md): An interface that defines properties for a credential registration request.
- [ASPasskeyCredentialRequest](../aspasskeycredentialrequest.md): A class that represents a request to supply a passkey credential.
- [ASPasskeyCredentialRequestParameters](../aspasskeycredentialrequestparameters.md): A class that represents information about a passkey credential request.
