> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialproviderviewcontroller/preparecredentiallist(for:)](https://developer.apple.com/documentation/authenticationservices/ascredentialproviderviewcontroller/preparecredentiallist(for:))

# prepareCredentialList(for:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Prepares the interface to display a list of credentials from which the user can select.

## Declaration

```swift
func prepareCredentialList(for serviceIdentifiers: [ASCredentialServiceIdentifier])
```

## Parameters

- `serviceIdentifiers`: An array of service identifiers that provide a hint about the service for which the user needs credentials.

<a id="Discussion"></a>

## Discussion

The system calls this method to tell your extension’s view controller to prepare to present a list of credentials. After calling this method, the system presents the view controller to the user.

Use the given `serviceIdentifiers` array to filter or prioritize the credentials to display. The service identifier array might be empty, but your extension should still show credentials from which the user can pick.

Items in the array with lower indices represent more specific identifiers for which a credential’s requested. For example, if the array contains identifiers `[m.example.com, example.com]`, the item `m.example.com` represents the more specific service that requires a credential.

When the user selects a credential displayed by your view controller, encapsulate the corresponding user and password strings in an [ASPasswordCredential](../aspasswordcredential.md) instance and pass it to the extension context’s [completeRequest(withSelectedCredential:completionHandler:)](../ascredentialproviderextensioncontext/completerequest%28withselectedcredential_completionhandler_%29.md) method:

```swift
let passwordCredential = ASPasswordCredential(user: user, password: password)
extensionContext.completeRequest(withSelectedCredential: passwordCredential)
```

Alternatively, if the user cancels the operation, call the [cancelRequest(withError:)](../ascredentialproviderextensioncontext/cancelrequest%28witherror_%29.md) method instead with an error that indicates user cancelation:

```swift
let error = NSError(domain: ASExtensionErrorDomain,
                    code: ASExtensionError.userCanceled.rawValue)
extensionContext.cancelRequest(withError: error)
```

Always provide a way for the user to cancel the operation from your view controller, for example by including a cancel button in the navigation bar.

The system dismisses your view controller automatically after you call either the completion or cancelation method.

## See Also

### Selecting a credential

- [prepareCredentialList(for:requestParameters:)](preparecredentiallist%28for_requestparameters_%29.md): Prepares the interface to display a list of passkey and password credentials from which the user can select.
- [prepareOneTimeCodeCredentialList(for:)](prepareonetimecodecredentiallist%28for_%29.md): Prepares the interface to display a list of one-time passcodes (OTPs) that people can select from.
- [prepareInterface(forPasskeyRegistration:)](prepareinterface%28forpasskeyregistration_%29.md): Prepare the view controller to show user interface for registering a new passkey.
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

# prepareCredentialListForServiceIdentifiers: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Prepares the interface to display a list of credentials from which the user can select.

## Declaration

```objectivec
- (void) prepareCredentialListForServiceIdentifiers:(NSArray<ASCredentialServiceIdentifier *> *) serviceIdentifiers;
```

## Parameters

- `serviceIdentifiers`: An array of service identifiers that provide a hint about the service for which the user needs credentials.

<a id="Discussion"></a>

## Discussion

The system calls this method to tell your extension’s view controller to prepare to present a list of credentials. After calling this method, the system presents the view controller to the user.

Use the given `serviceIdentifiers` array to filter or prioritize the credentials to display. The service identifier array might be empty, but your extension should still show credentials from which the user can pick.

Items in the array with lower indices represent more specific identifiers for which a credential’s requested. For example, if the array contains identifiers `[m.example.com, example.com]`, the item `m.example.com` represents the more specific service that requires a credential.

When the user selects a credential displayed by your view controller, encapsulate the corresponding user and password strings in an [ASPasswordCredential](../aspasswordcredential.md) instance and pass it to the extension context’s [completeRequestWithSelectedCredential:completionHandler:](../ascredentialproviderextensioncontext/completerequest%28withselectedcredential_completionhandler_%29.md) method:

```swift
let passwordCredential = ASPasswordCredential(user: user, password: password)
extensionContext.completeRequest(withSelectedCredential: passwordCredential)
```

Alternatively, if the user cancels the operation, call the [cancelRequestWithError:](../ascredentialproviderextensioncontext/cancelrequest%28witherror_%29.md) method instead with an error that indicates user cancelation:

```swift
let error = NSError(domain: ASExtensionErrorDomain,
                    code: ASExtensionError.userCanceled.rawValue)
extensionContext.cancelRequest(withError: error)
```

Always provide a way for the user to cancel the operation from your view controller, for example by including a cancel button in the navigation bar.

The system dismisses your view controller automatically after you call either the completion or cancelation method.

## See Also

### Selecting a credential

- [prepareCredentialListForServiceIdentifiers:requestParameters:](preparecredentiallist%28for_requestparameters_%29.md): Prepares the interface to display a list of passkey and password credentials from which the user can select.
- [prepareOneTimeCodeCredentialListForServiceIdentifiers:](prepareonetimecodecredentiallist%28for_%29.md): Prepares the interface to display a list of one-time passcodes (OTPs) that people can select from.
- [prepareInterfaceForPasskeyRegistration:](prepareinterface%28forpasskeyregistration_%29.md): Prepare the view controller to show user interface for registering a new passkey.
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
