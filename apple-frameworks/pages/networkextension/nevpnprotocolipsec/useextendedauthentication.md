> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnprotocolipsec/useextendedauthentication](https://developer.apple.com/documentation/networkextension/nevpnprotocolipsec/useextendedauthentication)

# useExtendedAuthentication (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A flag indicating if extended authentication will be negotiated.

## Declaration

```swift
var useExtendedAuthentication: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This authentication is in addition to the IKE authentication used to authenticate the endpoints of the IKE session.

- For IKE version 1, when this flag is set X-Auth authentication will be negotiated as part of the IKE session, using the `username` and `passwordReference` properties as the credential.
- For IKE version 2, when this flag is set EAP authentication will be negotiated as part of the IKE session, using the `username`, `passwordReference`, and/or `identityReference` properties as the credential depending on which EAP method the server requires.

## See Also

### Accessing IPSec properties

- [authenticationMethod](authenticationmethod.md): The method used to authenticate the device with the IPSec server. For IKE version 2, when using extended authentication, this authentication method only affects how the client validates the authentication payload presented by the server.
- [NEVPNIKEAuthenticationMethod](../nevpnikeauthenticationmethod.md): Internet Key Exchange (IKE) authentication methods used to authenticate with the IPSec server.
- [sharedSecretReference](sharedsecretreference.md): A persistent keychain reference to a keychain item containing the IKE shared secret.
- [localIdentifier](localidentifier.md): A string identifying the iOS or macOS device for authentication purposes
- [remoteIdentifier](remoteidentifier.md): A string identifying the IPSec server for authentication purposes

# useExtendedAuthentication (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A flag indicating if extended authentication will be negotiated.

## Declaration

```objectivec
@property BOOL useExtendedAuthentication;
```

<a id="Discussion"></a>

## Discussion

This authentication is in addition to the IKE authentication used to authenticate the endpoints of the IKE session.

- For IKE version 1, when this flag is set X-Auth authentication will be negotiated as part of the IKE session, using the `username` and `passwordReference` properties as the credential.
- For IKE version 2, when this flag is set EAP authentication will be negotiated as part of the IKE session, using the `username`, `passwordReference`, and/or `identityReference` properties as the credential depending on which EAP method the server requires.

## See Also

### Accessing IPSec properties

- [authenticationMethod](authenticationmethod.md): The method used to authenticate the device with the IPSec server. For IKE version 2, when using extended authentication, this authentication method only affects how the client validates the authentication payload presented by the server.
- [NEVPNIKEAuthenticationMethod](../nevpnikeauthenticationmethod.md): Internet Key Exchange (IKE) authentication methods used to authenticate with the IPSec server.
- [sharedSecretReference](sharedsecretreference.md): A persistent keychain reference to a keychain item containing the IKE shared secret.
- [localIdentifier](localidentifier.md): A string identifying the iOS or macOS device for authentication purposes
- [remoteIdentifier](remoteidentifier.md): A string identifying the IPSec server for authentication purposes
