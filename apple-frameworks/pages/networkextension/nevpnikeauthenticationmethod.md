> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnikeauthenticationmethod](https://developer.apple.com/documentation/networkextension/nevpnikeauthenticationmethod)

# NEVPNIKEAuthenticationMethod (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Internet Key Exchange (IKE) authentication methods used to authenticate with the IPSec server.

## Declaration

```swift
enum NEVPNIKEAuthenticationMethod
```

## Topics

### Authentication methods

- [NEVPNIKEAuthenticationMethod.none](nevpnikeauthenticationmethod/none.md): Do not authenticate with the IPSec server. Note that extended authentication may still be performed if the [useExtendedAuthentication](nevpnprotocolipsec/useextendedauthentication.md) property is set. This value is only valid for IKE version 2 (IKEv2)
- [NEVPNIKEAuthenticationMethod.certificate](nevpnikeauthenticationmethod/certificate.md): Use a certificate and private key as the authentication credential. The certificate and private key set in the [identityReference](nevpnprotocol/identityreference.md) or [identityData](nevpnprotocol/identitydata.md) property will be used.
- [NEVPNIKEAuthenticationMethod.sharedSecret](nevpnikeauthenticationmethod/sharedsecret.md): Use a shared secret as the authentication credential. The shared secret set in the [sharedSecretReference](nevpnprotocolipsec/sharedsecretreference.md) property will be used.

### Initializers

- [init(rawValue:)](nevpnikeauthenticationmethod/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing IPSec properties

- [authenticationMethod](nevpnprotocolipsec/authenticationmethod.md): The method used to authenticate the device with the IPSec server. For IKE version 2, when using extended authentication, this authentication method only affects how the client validates the authentication payload presented by the server.
- [useExtendedAuthentication](nevpnprotocolipsec/useextendedauthentication.md): A flag indicating if extended authentication will be negotiated.
- [sharedSecretReference](nevpnprotocolipsec/sharedsecretreference.md): A persistent keychain reference to a keychain item containing the IKE shared secret.
- [localIdentifier](nevpnprotocolipsec/localidentifier.md): A string identifying the iOS or macOS device for authentication purposes
- [remoteIdentifier](nevpnprotocolipsec/remoteidentifier.md): A string identifying the IPSec server for authentication purposes

# NEVPNIKEAuthenticationMethod (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Internet Key Exchange (IKE) authentication methods used to authenticate with the IPSec server.

## Declaration

```objectivec
enum NEVPNIKEAuthenticationMethod : NSInteger;
```

## Topics

### Authentication methods

- [NEVPNIKEAuthenticationMethodNone](nevpnikeauthenticationmethod/none.md): Do not authenticate with the IPSec server. Note that extended authentication may still be performed if the [useExtendedAuthentication](nevpnprotocolipsec/useextendedauthentication.md) property is set. This value is only valid for IKE version 2 (IKEv2)
- [NEVPNIKEAuthenticationMethodCertificate](nevpnikeauthenticationmethod/certificate.md): Use a certificate and private key as the authentication credential. The certificate and private key set in the [identityReference](nevpnprotocol/identityreference.md) or [identityData](nevpnprotocol/identitydata.md) property will be used.
- [NEVPNIKEAuthenticationMethodSharedSecret](nevpnikeauthenticationmethod/sharedsecret.md): Use a shared secret as the authentication credential. The shared secret set in the [sharedSecretReference](nevpnprotocolipsec/sharedsecretreference.md) property will be used.

## See Also

### Accessing IPSec properties

- [authenticationMethod](nevpnprotocolipsec/authenticationmethod.md): The method used to authenticate the device with the IPSec server. For IKE version 2, when using extended authentication, this authentication method only affects how the client validates the authentication payload presented by the server.
- [useExtendedAuthentication](nevpnprotocolipsec/useextendedauthentication.md): A flag indicating if extended authentication will be negotiated.
- [sharedSecretReference](nevpnprotocolipsec/sharedsecretreference.md): A persistent keychain reference to a keychain item containing the IKE shared secret.
- [localIdentifier](nevpnprotocolipsec/localidentifier.md): A string identifying the iOS or macOS device for authentication purposes
- [remoteIdentifier](nevpnprotocolipsec/remoteidentifier.md): A string identifying the IPSec server for authentication purposes
