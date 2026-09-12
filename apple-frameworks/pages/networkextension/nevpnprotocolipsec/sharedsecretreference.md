> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnprotocolipsec/sharedsecretreference](https://developer.apple.com/documentation/networkextension/nevpnprotocolipsec/sharedsecretreference)

# sharedSecretReference (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A persistent keychain reference to a keychain item containing the IKE shared secret.

## Declaration

```swift
var sharedSecretReference: Data? { get set }
```

<a id="Discussion"></a>

## Discussion

The persistent keychain reference must refer to a kerychain item of class [kSecClassGenericPassword](../../security/ksecclassgenericpassword.md)

## See Also

### Accessing IPSec properties

- [authenticationMethod](authenticationmethod.md): The method used to authenticate the device with the IPSec server. For IKE version 2, when using extended authentication, this authentication method only affects how the client validates the authentication payload presented by the server.
- [NEVPNIKEAuthenticationMethod](../nevpnikeauthenticationmethod.md): Internet Key Exchange (IKE) authentication methods used to authenticate with the IPSec server.
- [useExtendedAuthentication](useextendedauthentication.md): A flag indicating if extended authentication will be negotiated.
- [localIdentifier](localidentifier.md): A string identifying the iOS or macOS device for authentication purposes
- [remoteIdentifier](remoteidentifier.md): A string identifying the IPSec server for authentication purposes

# sharedSecretReference (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A persistent keychain reference to a keychain item containing the IKE shared secret.

## Declaration

```objectivec
@property (copy, nullable) NSData * sharedSecretReference;
```

<a id="Discussion"></a>

## Discussion

The persistent keychain reference must refer to a kerychain item of class [kSecClassGenericPassword](../../security/ksecclassgenericpassword.md)

## See Also

### Accessing IPSec properties

- [authenticationMethod](authenticationmethod.md): The method used to authenticate the device with the IPSec server. For IKE version 2, when using extended authentication, this authentication method only affects how the client validates the authentication payload presented by the server.
- [NEVPNIKEAuthenticationMethod](../nevpnikeauthenticationmethod.md): Internet Key Exchange (IKE) authentication methods used to authenticate with the IPSec server.
- [useExtendedAuthentication](useextendedauthentication.md): A flag indicating if extended authentication will be negotiated.
- [localIdentifier](localidentifier.md): A string identifying the iOS or macOS device for authentication purposes
- [remoteIdentifier](remoteidentifier.md): A string identifying the IPSec server for authentication purposes
