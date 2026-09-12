> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationwebbrowserpublickeycredentialmanager/platformcredentials(forrelyingparty:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationwebbrowserpublickeycredentialmanager/platformcredentials(forrelyingparty:))

# platformCredentials(forRelyingParty:)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 16.4+ · macOS 13.3+

Gets a list of passkeys available for authenticating with the given relying party.

## Declaration

```swift
func platformCredentials(forRelyingParty relyingParty: String) async -> [ASAuthorizationWebBrowserPlatformPublicKeyCredential]
```

## Parameters

- `relyingParty`: The name of the relying party, which you receive from the web server that issues the authentication challenge.

<a id="return-value"></a>

## Return Value

A list of credentials stored on the keychain, or managed by third-party credential managers, that are appropriate for responding to the current challenge.

<a id="Discussion"></a>

## Discussion

Before calling this method, check that the value of [authorizationStateForPlatformCredentials](authorizationstateforplatformcredentials.md) is [ASAuthorizationWebBrowserPublicKeyCredentialManager.AuthorizationState.authorized](authorizationstate/authorized.md) and call [requestAuthorizationForPublicKeyCredentials(\_:)](requestauthorizationforpublickeycredentials%28__%29.md) if your app needs authorization. If you call this method without authorization, it returns an empty array.

## See Also

### Using passkeys

- [ASAuthorizationWebBrowserPlatformPublicKeyCredential](../asauthorizationwebbrowserplatformpublickeycredential-swift.struct.md): A structure that describes a passkey stored in the keychain, or managed by a third-party credential manager.
