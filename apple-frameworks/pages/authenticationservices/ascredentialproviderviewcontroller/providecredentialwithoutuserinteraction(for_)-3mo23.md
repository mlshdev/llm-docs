> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialproviderviewcontroller/providecredentialwithoutuserinteraction(for:)-3mo23](https://developer.apple.com/documentation/authenticationservices/ascredentialproviderviewcontroller/providecredentialwithoutuserinteraction(for:)-3mo23)

# provideCredentialWithoutUserInteraction(for:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Attempts to provide the user-requested credential with no further user interaction.

## Declaration

```swift
func provideCredentialWithoutUserInteraction(for credentialRequest: any ASCredentialRequest)
```

## Parameters

- `credentialRequest`: The credential request.

## Mentioned In

- [Providing one-time passcodes to AutoFill](../providing-one-time-passcodes-to-autofill.md)

<a id="Discussion"></a>

## Discussion

After the person selects a credential identity, the system creates a credential request. The contents of the request depend on the type of credential requested. If the person requests a password or one-time passcode (OTP), the credential request (a [ASPasswordCredentialRequest](../aspasswordcredentialrequest.md) or [ASOneTimeCodeCredentialRequest](../asonetimecodecredentialrequest.md)) contains a credential identity. If the person requests a passkey, the [ASPasskeyCredentialRequest](../aspasskeycredentialrequest.md) also contains information about the passkey assertion challenge.

The system calls [provideCredentialWithoutUserInteraction(for:)](providecredentialwithoutuserinteraction%28for_%29-3mo23.md) to enhance the user experience. If your credential provider extension can provide the credential without user interaction, call the relevant completion method on the extension context. For password credential requests, call [completeRequest(withSelectedCredential:completionHandler:)](../ascredentialproviderextensioncontext/completerequest%28withselectedcredential_completionhandler_%29.md). For passkey credential requests, call [completeAssertionRequest(using:completionHandler:)](../ascredentialproviderextensioncontext/completeassertionrequest%28using_completionhandler_%29.md). For OTP requests, call [completeOneTimeCodeRequest(using:completionHandler:)](../ascredentialproviderextensioncontext/completeonetimecoderequest%28using_completionhandler_%29.md).

If your extension requires user interaction to provide the credential, like when someone needs to unlock their credentials database, call [cancelRequest(withError:)](../ascredentialproviderextensioncontext/cancelrequest%28witherror_%29.md). Use the error domain [ASExtensionErrorDomain](../asextensionerrordomain.md), and the code [ASExtensionError.Code.userInteractionRequired](../asextensionerror/code/userinteractionrequired.md).

If an error occurs, call [cancelRequest(withError:)](../ascredentialproviderextensioncontext/cancelrequest%28witherror_%29.md) using the error domain [ASExtensionErrorDomain](../asextensionerrordomain.md) and an appropriate code from [ASExtensionError.Code](../asextensionerror/code.md).

As your view controller isn’t presented while the system calls this method, don’t show or use any user interface from this method.

## See Also

### Selecting a credential

- [prepareCredentialList(for:)](preparecredentiallist%28for_%29.md): Prepares the interface to display a list of credentials from which the user can select.
- [prepareCredentialList(for:requestParameters:)](preparecredentiallist%28for_requestparameters_%29.md): Prepares the interface to display a list of passkey and password credentials from which the user can select.
- [prepareOneTimeCodeCredentialList(for:)](prepareonetimecodecredentiallist%28for_%29.md): Prepares the interface to display a list of one-time passcodes (OTPs) that people can select from.
- [prepareInterface(forPasskeyRegistration:)](prepareinterface%28forpasskeyregistration_%29.md): Prepare the view controller to show user interface for registering a new passkey.
- [prepareInterfaceToProvideCredential(for:)](prepareinterfacetoprovidecredential%28for_%29-68qpo.md): Prepare the view controller to show user interface for providing the requested credential.
- [performWithoutUserInteractionIfPossible(passkeyRegistration:)](performwithoutuserinteractionifpossible%28passkeyregistration_%29.md): Perform a conditional passkey registration, if possible.
- [ASCredentialServiceIdentifier](../ascredentialserviceidentifier.md): An identifier representing a particular service for which the user needs a credential, like a web site.
- [ASCredentialRequest](../ascredentialrequest.md): A protocol that describes a request from the user for your extension to provide a credential.
- [ASPasswordCredentialRequest](../aspasswordcredentialrequest.md): A class that represents a request to supply a password credential.
- [ASOneTimeCodeCredentialRequest](../asonetimecodecredentialrequest.md)
- [ASAuthorizationPublicKeyCredentialRegistrationRequest](../asauthorizationpublickeycredentialregistrationrequest.md): An interface that defines properties for a credential registration request.
- [ASPasskeyCredentialRequest](../aspasskeycredentialrequest.md): A class that represents a request to supply a passkey credential.
- [ASPasskeyCredentialRequestParameters](../aspasskeycredentialrequestparameters.md): A class that represents information about a passkey credential request.

# provideCredentialWithoutUserInteractionForRequest: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Attempts to provide the user-requested credential with no further user interaction.

## Declaration

```objectivec
- (void) provideCredentialWithoutUserInteractionForRequest:(id<ASCredentialRequest>) credentialRequest;
```

## Parameters

- `credentialRequest`: The credential request.

## Mentioned In

- [Providing one-time passcodes to AutoFill](../providing-one-time-passcodes-to-autofill.md)

<a id="Discussion"></a>

## Discussion

After the person selects a credential identity, the system creates a credential request. The contents of the request depend on the type of credential requested. If the person requests a password or one-time passcode (OTP), the credential request (a [ASPasswordCredentialRequest](../aspasswordcredentialrequest.md) or [ASOneTimeCodeCredentialRequest](../asonetimecodecredentialrequest.md)) contains a credential identity. If the person requests a passkey, the [ASPasskeyCredentialRequest](../aspasskeycredentialrequest.md) also contains information about the passkey assertion challenge.

The system calls [provideCredentialWithoutUserInteractionForRequest:](providecredentialwithoutuserinteraction%28for_%29-3mo23.md) to enhance the user experience. If your credential provider extension can provide the credential without user interaction, call the relevant completion method on the extension context. For password credential requests, call [completeRequestWithSelectedCredential:completionHandler:](../ascredentialproviderextensioncontext/completerequest%28withselectedcredential_completionhandler_%29.md). For passkey credential requests, call [completeAssertionRequestWithSelectedPasskeyCredential:completionHandler:](../ascredentialproviderextensioncontext/completeassertionrequest%28using_completionhandler_%29.md). For OTP requests, call [completeOneTimeCodeRequestWithSelectedCredential:completionHandler:](../ascredentialproviderextensioncontext/completeonetimecoderequest%28using_completionhandler_%29.md).

If your extension requires user interaction to provide the credential, like when someone needs to unlock their credentials database, call [cancelRequestWithError:](../ascredentialproviderextensioncontext/cancelrequest%28witherror_%29.md). Use the error domain [ASExtensionErrorDomain](../asextensionerrordomain.md), and the code [ASExtensionErrorCodeUserInteractionRequired](../asextensionerror/code/userinteractionrequired.md).

If an error occurs, call [cancelRequestWithError:](../ascredentialproviderextensioncontext/cancelrequest%28witherror_%29.md) using the error domain [ASExtensionErrorDomain](../asextensionerrordomain.md) and an appropriate code from [ASExtensionErrorCode](../asextensionerror/code.md).

As your view controller isn’t presented while the system calls this method, don’t show or use any user interface from this method.

## See Also

### Selecting a credential

- [prepareCredentialListForServiceIdentifiers:](preparecredentiallist%28for_%29.md): Prepares the interface to display a list of credentials from which the user can select.
- [prepareCredentialListForServiceIdentifiers:requestParameters:](preparecredentiallist%28for_requestparameters_%29.md): Prepares the interface to display a list of passkey and password credentials from which the user can select.
- [prepareOneTimeCodeCredentialListForServiceIdentifiers:](prepareonetimecodecredentiallist%28for_%29.md): Prepares the interface to display a list of one-time passcodes (OTPs) that people can select from.
- [prepareInterfaceForPasskeyRegistration:](prepareinterface%28forpasskeyregistration_%29.md): Prepare the view controller to show user interface for registering a new passkey.
- [prepareInterfaceToProvideCredentialForRequest:](prepareinterfacetoprovidecredential%28for_%29-68qpo.md): Prepare the view controller to show user interface for providing the requested credential.
- [performPasskeyRegistrationWithoutUserInteractionIfPossible:](performwithoutuserinteractionifpossible%28passkeyregistration_%29.md): Perform a conditional passkey registration, if possible.
- [ASCredentialServiceIdentifier](../ascredentialserviceidentifier.md): An identifier representing a particular service for which the user needs a credential, like a web site.
- [ASCredentialRequest](../ascredentialrequest.md): A protocol that describes a request from the user for your extension to provide a credential.
- [ASPasswordCredentialRequest](../aspasswordcredentialrequest.md): A class that represents a request to supply a password credential.
- [ASOneTimeCodeCredentialRequest](../asonetimecodecredentialrequest.md)
- [ASAuthorizationPublicKeyCredentialRegistrationRequest](../asauthorizationpublickeycredentialregistrationrequest.md): An interface that defines properties for a credential registration request.
- [ASPasskeyCredentialRequest](../aspasskeycredentialrequest.md): A class that represents a request to supply a passkey credential.
- [ASPasskeyCredentialRequestParameters](../aspasskeycredentialrequestparameters.md): A class that represents information about a passkey credential request.
