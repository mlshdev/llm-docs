> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnprotocolipsec/remoteidentifier](https://developer.apple.com/documentation/networkextension/nevpnprotocolipsec/remoteidentifier)

# remoteIdentifier (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A string identifying the IPSec server for authentication purposes

## Declaration

```swift
var remoteIdentifier: String? { get set }
```

## See Also

### Accessing IPSec properties

- [authenticationMethod](authenticationmethod.md): The method used to authenticate the device with the IPSec server. For IKE version 2, when using extended authentication, this authentication method only affects how the client validates the authentication payload presented by the server.
- [NEVPNIKEAuthenticationMethod](../nevpnikeauthenticationmethod.md): Internet Key Exchange (IKE) authentication methods used to authenticate with the IPSec server.
- [useExtendedAuthentication](useextendedauthentication.md): A flag indicating if extended authentication will be negotiated.
- [sharedSecretReference](sharedsecretreference.md): A persistent keychain reference to a keychain item containing the IKE shared secret.
- [localIdentifier](localidentifier.md): A string identifying the iOS or macOS device for authentication purposes

# remoteIdentifier (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A string identifying the IPSec server for authentication purposes

## Declaration

```objectivec
@property (copy, nullable) NSString * remoteIdentifier;
```

## See Also

### Accessing IPSec properties

- [authenticationMethod](authenticationmethod.md): The method used to authenticate the device with the IPSec server. For IKE version 2, when using extended authentication, this authentication method only affects how the client validates the authentication payload presented by the server.
- [NEVPNIKEAuthenticationMethod](../nevpnikeauthenticationmethod.md): Internet Key Exchange (IKE) authentication methods used to authenticate with the IPSec server.
- [useExtendedAuthentication](useextendedauthentication.md): A flag indicating if extended authentication will be negotiated.
- [sharedSecretReference](sharedsecretreference.md): A persistent keychain reference to a keychain item containing the IKE shared secret.
- [localIdentifier](localidentifier.md): A string identifying the iOS or macOS device for authentication purposes
