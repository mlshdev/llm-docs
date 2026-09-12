> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialproviderviewcontroller/prepareinterfacetoprovidecredential(for:)-18ukb](https://developer.apple.com/documentation/authenticationservices/ascredentialproviderviewcontroller/prepareinterfacetoprovidecredential(for:)-18ukb)

# prepareInterfaceToProvideCredential(for:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 17.0) · iPadOS 12.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Prepares the interface for a user interaction, like a database login, that enables it to access and return the credential for the given identity.

> Use [prepareInterfaceToProvideCredential(for:)](prepareinterfacetoprovidecredential%28for_%29-68qpo.md) instead.

## Declaration

```swift
func prepareInterfaceToProvideCredential(for credentialIdentity: ASPasswordCredentialIdentity)
```

## Parameters

- `credentialIdentity`: The credential identity for which a credential should be provided.

<a id="Discussion"></a>

## Discussion

The system calls this method when your extension can’t provide the requested credential without user interaction. Set up the view controller for any user interaction required to provide the requested credential. Limit user interaction to operations required for providing the requested credential, like showing an authentication UI to unlock the user’s passwords database.

Call the context’s [completeRequest(withSelectedCredential:completionHandler:)](../ascredentialproviderextensioncontext/completerequest%28withselectedcredential_completionhandler_%29.md) to provide the credential. Alternatively, if an error occurs, call [cancelRequest(withError:)](../ascredentialproviderextensioncontext/cancelrequest%28witherror_%29.md) instead and pass an error with domain [ASExtensionErrorDomain](../asextensionerrordomain.md) and an appropriate error code from [ASExtensionError.Code](../asextensionerror/code.md). For example, if your app can’t find the credential identity in the database, pass an error with code [ASExtensionError.Code.credentialIdentityNotFound](../asextensionerror/code/credentialidentitynotfound.md).

## See Also

### Deprecated methods

- [provideCredentialWithoutUserInteraction(for:)](providecredentialwithoutuserinteraction%28for_%29-7jlg0.md): Deprecated. Attempts to provide the user-requested credential with no further user interaction.

# prepareInterfaceToProvideCredentialForIdentity: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 17.0) · iPadOS 12.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Prepares the interface for a user interaction, like a database login, that enables it to access and return the credential for the given identity.

> Use [prepareInterfaceToProvideCredentialForRequest:](prepareinterfacetoprovidecredential%28for_%29-68qpo.md) instead.

## Declaration

```objectivec
- (void) prepareInterfaceToProvideCredentialForIdentity:(ASPasswordCredentialIdentity *) credentialIdentity;
```

## Parameters

- `credentialIdentity`: The credential identity for which a credential should be provided.

<a id="Discussion"></a>

## Discussion

The system calls this method when your extension can’t provide the requested credential without user interaction. Set up the view controller for any user interaction required to provide the requested credential. Limit user interaction to operations required for providing the requested credential, like showing an authentication UI to unlock the user’s passwords database.

Call the context’s [completeRequestWithSelectedCredential:completionHandler:](../ascredentialproviderextensioncontext/completerequest%28withselectedcredential_completionhandler_%29.md) to provide the credential. Alternatively, if an error occurs, call [cancelRequestWithError:](../ascredentialproviderextensioncontext/cancelrequest%28witherror_%29.md) instead and pass an error with domain [ASExtensionErrorDomain](../asextensionerrordomain.md) and an appropriate error code from [ASExtensionErrorCode](../asextensionerror/code.md). For example, if your app can’t find the credential identity in the database, pass an error with code [ASExtensionErrorCodeCredentialIdentityNotFound](../asextensionerror/code/credentialidentitynotfound.md).

## See Also

### Deprecated methods

- [provideCredentialWithoutUserInteractionForIdentity:](providecredentialwithoutuserinteraction%28for_%29-7jlg0.md): Deprecated. Attempts to provide the user-requested credential with no further user interaction.
