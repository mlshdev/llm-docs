> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationwebbrowserpublickeycredentialmanager/platformcredentialsforrelyingparty:completionhandler:

# platformCredentialsForRelyingParty:completionHandler:

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 16.4+ · macOS 13.3+

Gets a list of passkeys available for authenticating with the given relying party.

## Declaration

```objectivec
- (void) platformCredentialsForRelyingParty:(NSString *) relyingParty completionHandler:(void (^)(NSArray<ASAuthorizationWebBrowserPlatformPublicKeyCredential *> *)) completionHandler;
```

## Parameters

- `relyingParty`: The name of the relying party, which you receive from the web server that issues the authentication challenge.
- `completionHandler`: A block that the operating system calls to provide a list of passkeys available for authenticating with the given relying party.

<a id="Discussion"></a>

## Discussion

Before calling this method, check that the value of [authorizationStateForPlatformCredentials](authorizationstateforplatformcredentials.md) is [ASAuthorizationWebBrowserPublicKeyCredentialManagerAuthorizationStateAuthorized](authorizationstate/authorized.md) and call [requestAuthorizationForPublicKeyCredentials:](requestauthorizationforpublickeycredentials%28__%29.md) if your app needs authorization. If you call this method without authorization, it returns an empty array.

## See Also

### Using passkeys

- [ASAuthorizationWebBrowserPlatformPublicKeyCredential](../asauthorizationwebbrowserplatformpublickeycredential-c.class.md)
