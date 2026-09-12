> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnikeauthenticationmethod/none](https://developer.apple.com/documentation/networkextension/nevpnikeauthenticationmethod/none)

# NEVPNIKEAuthenticationMethod.none (Swift)

**Framework:** Network Extension  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Do not authenticate with the IPSec server. Note that extended authentication may still be performed if the [useExtendedAuthentication](../nevpnprotocolipsec/useextendedauthentication.md) property is set. This value is only valid for IKE version 2 (IKEv2)

## Declaration

```swift
case none
```

## See Also

### Authentication methods

- [NEVPNIKEAuthenticationMethod.certificate](certificate.md): Use a certificate and private key as the authentication credential. The certificate and private key set in the [identityReference](../nevpnprotocol/identityreference.md) or [identityData](../nevpnprotocol/identitydata.md) property will be used.
- [NEVPNIKEAuthenticationMethod.sharedSecret](sharedsecret.md): Use a shared secret as the authentication credential. The shared secret set in the [sharedSecretReference](../nevpnprotocolipsec/sharedsecretreference.md) property will be used.

# NEVPNIKEAuthenticationMethodNone (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Do not authenticate with the IPSec server. Note that extended authentication may still be performed if the [useExtendedAuthentication](../nevpnprotocolipsec/useextendedauthentication.md) property is set. This value is only valid for IKE version 2 (IKEv2)

## Declaration

```objectivec
NEVPNIKEAuthenticationMethodNone
```

## See Also

### Authentication methods

- [NEVPNIKEAuthenticationMethodCertificate](certificate.md): Use a certificate and private key as the authentication credential. The certificate and private key set in the [identityReference](../nevpnprotocol/identityreference.md) or [identityData](../nevpnprotocol/identitydata.md) property will be used.
- [NEVPNIKEAuthenticationMethodSharedSecret](sharedsecret.md): Use a shared secret as the authentication credential. The shared secret set in the [sharedSecretReference](../nevpnprotocolipsec/sharedsecretreference.md) property will be used.
