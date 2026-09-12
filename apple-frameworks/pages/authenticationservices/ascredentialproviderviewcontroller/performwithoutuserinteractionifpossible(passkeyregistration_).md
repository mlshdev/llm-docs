> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialproviderviewcontroller/performwithoutuserinteractionifpossible(passkeyregistration:)](https://developer.apple.com/documentation/authenticationservices/ascredentialproviderviewcontroller/performwithoutuserinteractionifpossible(passkeyregistration:))

# performWithoutUserInteractionIfPossible(passkeyRegistration:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Perform a conditional passkey registration, if possible.

## Declaration

```swift
func performWithoutUserInteractionIfPossible(passkeyRegistration registrationRequest: ASPasskeyCredentialRequest)
```

<a id="discussion"></a>

## Discussion

This method will be called for handling conditional passkey registration requests. A conditional passkey registration request allows your extension to opportunistically register passkeys in the background, if and only if you believe the user is in a good state to do so. Your extension decides can decide what conditions make sense for whether to fulfill or reject this request. For example, an extension may decide to register a passkey only if all of the following conditions are met:

- The user’s vault is currently unlocked.
- The user name for the registration request matches that for an existing saved password.
- The matching saved password was filled recently.
- The user does not already have a passkey for this account.

Fulfilling this request should not remove a user’s saved password for this account, but it may mean that the passkey will be preferred over the password in future AutoFill invocations, if both are supported.

Your extension should complete this request by calling `-[ASCredentialProviderExtensionContext completeRegistrationRequestWithSelectedPasskeyCredential:completionHandler:]` or`-[ASCredentialProviderExtensionContext cancelRequestWithError:]`, like for standard registration requests. However, this request is not allowed to show UI and `ASExtensionErrorCodeUserInteractionRequired` will be treated like any other error. The intent of this API is to provide a method of performing a background registration only where easy and convenient, so no blocking UI or error should ever be shown.

To indicate support for this feature, add `SupportsConditionalPasskeyRegistration` under the `ASCredentialProviderExtensionCapabilities` dictionary.

```
Info.plist
├─ NSExtension
    ├─ NSExtensionAttributes
        ├─ ASCredentialProviderExtensionCapabilities
            ├─ SupportsConditionalPasskeyRegistration => true
```

## See Also

### Selecting a credential

- [prepareCredentialList(for:)](preparecredentiallist%28for_%29.md): Prepares the interface to display a list of credentials from which the user can select.
- [prepareCredentialList(for:requestParameters:)](preparecredentiallist%28for_requestparameters_%29.md): Prepares the interface to display a list of passkey and password credentials from which the user can select.
- [prepareOneTimeCodeCredentialList(for:)](prepareonetimecodecredentiallist%28for_%29.md): Prepares the interface to display a list of one-time passcodes (OTPs) that people can select from.
- [prepareInterface(forPasskeyRegistration:)](prepareinterface%28forpasskeyregistration_%29.md): Prepare the view controller to show user interface for registering a new passkey.
- [prepareInterfaceToProvideCredential(for:)](prepareinterfacetoprovidecredential%28for_%29-68qpo.md): Prepare the view controller to show user interface for providing the requested credential.
- [provideCredentialWithoutUserInteraction(for:)](providecredentialwithoutuserinteraction%28for_%29-3mo23.md): Attempts to provide the user-requested credential with no further user interaction.
- [ASCredentialServiceIdentifier](../ascredentialserviceidentifier.md): An identifier representing a particular service for which the user needs a credential, like a web site.
- [ASCredentialRequest](../ascredentialrequest.md): A protocol that describes a request from the user for your extension to provide a credential.
- [ASPasswordCredentialRequest](../aspasswordcredentialrequest.md): A class that represents a request to supply a password credential.
- [ASOneTimeCodeCredentialRequest](../asonetimecodecredentialrequest.md)
- [ASAuthorizationPublicKeyCredentialRegistrationRequest](../asauthorizationpublickeycredentialregistrationrequest.md): An interface that defines properties for a credential registration request.
- [ASPasskeyCredentialRequest](../aspasskeycredentialrequest.md): A class that represents a request to supply a passkey credential.
- [ASPasskeyCredentialRequestParameters](../aspasskeycredentialrequestparameters.md): A class that represents information about a passkey credential request.

# performPasskeyRegistrationWithoutUserInteractionIfPossible: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Perform a conditional passkey registration, if possible.

## Declaration

```objectivec
- (void) performPasskeyRegistrationWithoutUserInteractionIfPossible:(ASPasskeyCredentialRequest *) registrationRequest;
```

<a id="discussion"></a>

## Discussion

This method will be called for handling conditional passkey registration requests. A conditional passkey registration request allows your extension to opportunistically register passkeys in the background, if and only if you believe the user is in a good state to do so. Your extension decides can decide what conditions make sense for whether to fulfill or reject this request. For example, an extension may decide to register a passkey only if all of the following conditions are met:

- The user’s vault is currently unlocked.
- The user name for the registration request matches that for an existing saved password.
- The matching saved password was filled recently.
- The user does not already have a passkey for this account.

Fulfilling this request should not remove a user’s saved password for this account, but it may mean that the passkey will be preferred over the password in future AutoFill invocations, if both are supported.

Your extension should complete this request by calling `-[ASCredentialProviderExtensionContext completeRegistrationRequestWithSelectedPasskeyCredential:completionHandler:]` or`-[ASCredentialProviderExtensionContext cancelRequestWithError:]`, like for standard registration requests. However, this request is not allowed to show UI and `ASExtensionErrorCodeUserInteractionRequired` will be treated like any other error. The intent of this API is to provide a method of performing a background registration only where easy and convenient, so no blocking UI or error should ever be shown.

To indicate support for this feature, add `SupportsConditionalPasskeyRegistration` under the `ASCredentialProviderExtensionCapabilities` dictionary.

```
Info.plist
├─ NSExtension
    ├─ NSExtensionAttributes
        ├─ ASCredentialProviderExtensionCapabilities
            ├─ SupportsConditionalPasskeyRegistration => true
```

## See Also

### Selecting a credential

- [prepareCredentialListForServiceIdentifiers:](preparecredentiallist%28for_%29.md): Prepares the interface to display a list of credentials from which the user can select.
- [prepareCredentialListForServiceIdentifiers:requestParameters:](preparecredentiallist%28for_requestparameters_%29.md): Prepares the interface to display a list of passkey and password credentials from which the user can select.
- [prepareOneTimeCodeCredentialListForServiceIdentifiers:](prepareonetimecodecredentiallist%28for_%29.md): Prepares the interface to display a list of one-time passcodes (OTPs) that people can select from.
- [prepareInterfaceForPasskeyRegistration:](prepareinterface%28forpasskeyregistration_%29.md): Prepare the view controller to show user interface for registering a new passkey.
- [prepareInterfaceToProvideCredentialForRequest:](prepareinterfacetoprovidecredential%28for_%29-68qpo.md): Prepare the view controller to show user interface for providing the requested credential.
- [provideCredentialWithoutUserInteractionForRequest:](providecredentialwithoutuserinteraction%28for_%29-3mo23.md): Attempts to provide the user-requested credential with no further user interaction.
- [ASCredentialServiceIdentifier](../ascredentialserviceidentifier.md): An identifier representing a particular service for which the user needs a credential, like a web site.
- [ASCredentialRequest](../ascredentialrequest.md): A protocol that describes a request from the user for your extension to provide a credential.
- [ASPasswordCredentialRequest](../aspasswordcredentialrequest.md): A class that represents a request to supply a password credential.
- [ASOneTimeCodeCredentialRequest](../asonetimecodecredentialrequest.md)
- [ASAuthorizationPublicKeyCredentialRegistrationRequest](../asauthorizationpublickeycredentialregistrationrequest.md): An interface that defines properties for a credential registration request.
- [ASPasskeyCredentialRequest](../aspasskeycredentialrequest.md): A class that represents a request to supply a passkey credential.
- [ASPasskeyCredentialRequestParameters](../aspasskeycredentialrequestparameters.md): A class that represents information about a passkey credential request.
