> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialproviderviewcontroller/prepareinterfacetoprovidecredential(for:)-68qpo](https://developer.apple.com/documentation/authenticationservices/ascredentialproviderviewcontroller/prepareinterfacetoprovidecredential(for:)-68qpo)

# prepareInterfaceToProvideCredential(for:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Prepare the view controller to show user interface for providing the requested credential.

## Declaration

```swift
func prepareInterfaceToProvideCredential(for credentialRequest: any ASCredentialRequest)
```

## Parameters

- `credentialRequest`: The credential request.

## Mentioned In

- [Providing one-time passcodes to AutoFill](../providing-one-time-passcodes-to-autofill.md)

<a id="Discussion"></a>

## Discussion

The system calls this method when your extension can’t supply the requested credential without user interaction. Limit user interaction to operations required for providing the requested credential, like showing an authentication UI to unlock the person’s passwords database.

Call the appropriate completion method on the extension context to provide the credential. For password credentials, call [completeRequest(withSelectedCredential:completionHandler:)](../ascredentialproviderextensioncontext/completerequest%28withselectedcredential_completionhandler_%29.md). For passkey credentials, call [completeAssertionRequest(using:completionHandler:)](../ascredentialproviderextensioncontext/completeassertionrequest%28using_completionhandler_%29.md). For one-time passcodes, call [completeOneTimeCodeRequest(using:completionHandler:)](../ascredentialproviderextensioncontext/completeonetimecoderequest%28using_completionhandler_%29.md).

Alternatively, if an error occurs, call [cancelRequest(withError:)](../ascredentialproviderextensioncontext/cancelrequest%28witherror_%29.md) instead and pass an error with domain [ASExtensionErrorDomain](../asextensionerrordomain.md) and an appropriate error code from [ASExtensionError.Code](../asextensionerror/code.md). For example, if your app can’t find the credential identity in the database, pass an error with code [ASExtensionError.Code.credentialIdentityNotFound](../asextensionerror/code/credentialidentitynotfound.md).

## See Also

### Selecting a credential

- [prepareCredentialList(for:)](preparecredentiallist%28for_%29.md): Prepares the interface to display a list of credentials from which the user can select.
- [prepareCredentialList(for:requestParameters:)](preparecredentiallist%28for_requestparameters_%29.md): Prepares the interface to display a list of passkey and password credentials from which the user can select.
- [prepareOneTimeCodeCredentialList(for:)](prepareonetimecodecredentiallist%28for_%29.md): Prepares the interface to display a list of one-time passcodes (OTPs) that people can select from.
- [prepareInterface(forPasskeyRegistration:)](prepareinterface%28forpasskeyregistration_%29.md): Prepare the view controller to show user interface for registering a new passkey.
- [provideCredentialWithoutUserInteraction(for:)](providecredentialwithoutuserinteraction%28for_%29-3mo23.md): Attempts to provide the user-requested credential with no further user interaction.
- [performWithoutUserInteractionIfPossible(passkeyRegistration:)](performwithoutuserinteractionifpossible%28passkeyregistration_%29.md): Perform a conditional passkey registration, if possible.
- [ASCredentialServiceIdentifier](../ascredentialserviceidentifier.md): An identifier representing a particular service for which the user needs a credential, like a web site.
- [ASCredentialRequest](../ascredentialrequest.md): A protocol that describes a request from the user for your extension to provide a credential.
- [ASPasswordCredentialRequest](../aspasswordcredentialrequest.md): A class that represents a request to supply a password credential.
- [ASOneTimeCodeCredentialRequest](../asonetimecodecredentialrequest.md)
- [ASAuthorizationPublicKeyCredentialRegistrationRequest](../asauthorizationpublickeycredentialregistrationrequest.md): An interface that defines properties for a credential registration request.
- [ASPasskeyCredentialRequest](../aspasskeycredentialrequest.md): A class that represents a request to supply a passkey credential.
- [ASPasskeyCredentialRequestParameters](../aspasskeycredentialrequestparameters.md): A class that represents information about a passkey credential request.

# prepareInterfaceToProvideCredentialForRequest: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Prepare the view controller to show user interface for providing the requested credential.

## Declaration

```objectivec
- (void) prepareInterfaceToProvideCredentialForRequest:(id<ASCredentialRequest>) credentialRequest;
```

## Parameters

- `credentialRequest`: The credential request.

## Mentioned In

- [Providing one-time passcodes to AutoFill](../providing-one-time-passcodes-to-autofill.md)

<a id="Discussion"></a>

## Discussion

The system calls this method when your extension can’t supply the requested credential without user interaction. Limit user interaction to operations required for providing the requested credential, like showing an authentication UI to unlock the person’s passwords database.

Call the appropriate completion method on the extension context to provide the credential. For password credentials, call [completeRequestWithSelectedCredential:completionHandler:](../ascredentialproviderextensioncontext/completerequest%28withselectedcredential_completionhandler_%29.md). For passkey credentials, call [completeAssertionRequestWithSelectedPasskeyCredential:completionHandler:](../ascredentialproviderextensioncontext/completeassertionrequest%28using_completionhandler_%29.md). For one-time passcodes, call [completeOneTimeCodeRequestWithSelectedCredential:completionHandler:](../ascredentialproviderextensioncontext/completeonetimecoderequest%28using_completionhandler_%29.md).

Alternatively, if an error occurs, call [cancelRequestWithError:](../ascredentialproviderextensioncontext/cancelrequest%28witherror_%29.md) instead and pass an error with domain [ASExtensionErrorDomain](../asextensionerrordomain.md) and an appropriate error code from [ASExtensionErrorCode](../asextensionerror/code.md). For example, if your app can’t find the credential identity in the database, pass an error with code [ASExtensionErrorCodeCredentialIdentityNotFound](../asextensionerror/code/credentialidentitynotfound.md).

## See Also

### Selecting a credential

- [prepareCredentialListForServiceIdentifiers:](preparecredentiallist%28for_%29.md): Prepares the interface to display a list of credentials from which the user can select.
- [prepareCredentialListForServiceIdentifiers:requestParameters:](preparecredentiallist%28for_requestparameters_%29.md): Prepares the interface to display a list of passkey and password credentials from which the user can select.
- [prepareOneTimeCodeCredentialListForServiceIdentifiers:](prepareonetimecodecredentiallist%28for_%29.md): Prepares the interface to display a list of one-time passcodes (OTPs) that people can select from.
- [prepareInterfaceForPasskeyRegistration:](prepareinterface%28forpasskeyregistration_%29.md): Prepare the view controller to show user interface for registering a new passkey.
- [provideCredentialWithoutUserInteractionForRequest:](providecredentialwithoutuserinteraction%28for_%29-3mo23.md): Attempts to provide the user-requested credential with no further user interaction.
- [performPasskeyRegistrationWithoutUserInteractionIfPossible:](performwithoutuserinteractionifpossible%28passkeyregistration_%29.md): Perform a conditional passkey registration, if possible.
- [ASCredentialServiceIdentifier](../ascredentialserviceidentifier.md): An identifier representing a particular service for which the user needs a credential, like a web site.
- [ASCredentialRequest](../ascredentialrequest.md): A protocol that describes a request from the user for your extension to provide a credential.
- [ASPasswordCredentialRequest](../aspasswordcredentialrequest.md): A class that represents a request to supply a password credential.
- [ASOneTimeCodeCredentialRequest](../asonetimecodecredentialrequest.md)
- [ASAuthorizationPublicKeyCredentialRegistrationRequest](../asauthorizationpublickeycredentialregistrationrequest.md): An interface that defines properties for a credential registration request.
- [ASPasskeyCredentialRequest](../aspasskeycredentialrequest.md): A class that represents a request to supply a passkey credential.
- [ASPasskeyCredentialRequestParameters](../aspasskeycredentialrequestparameters.md): A class that represents information about a passkey credential request.
