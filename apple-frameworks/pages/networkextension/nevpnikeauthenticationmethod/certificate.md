> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnikeauthenticationmethod/certificate](https://developer.apple.com/documentation/networkextension/nevpnikeauthenticationmethod/certificate)

# NEVPNIKEAuthenticationMethod.certificate (Swift)

**Framework:** Network Extension  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Use a certificate and private key as the authentication credential. The certificate and private key set in the [identityReference](../nevpnprotocol/identityreference.md) or [identityData](../nevpnprotocol/identitydata.md) property will be used.

## Declaration

```swift
case certificate
```

## See Also

### Authentication methods

- [NEVPNIKEAuthenticationMethod.none](none.md): Do not authenticate with the IPSec server. Note that extended authentication may still be performed if the [useExtendedAuthentication](../nevpnprotocolipsec/useextendedauthentication.md) property is set. This value is only valid for IKE version 2 (IKEv2)
- [NEVPNIKEAuthenticationMethod.sharedSecret](sharedsecret.md): Use a shared secret as the authentication credential. The shared secret set in the [sharedSecretReference](../nevpnprotocolipsec/sharedsecretreference.md) property will be used.

# NEVPNIKEAuthenticationMethodCertificate (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Use a certificate and private key as the authentication credential. The certificate and private key set in the [identityReference](../nevpnprotocol/identityreference.md) or [identityData](../nevpnprotocol/identitydata.md) property will be used.

## Declaration

```objectivec
NEVPNIKEAuthenticationMethodCertificate
```

## See Also

### Authentication methods

- [NEVPNIKEAuthenticationMethodNone](none.md): Do not authenticate with the IPSec server. Note that extended authentication may still be performed if the [useExtendedAuthentication](../nevpnprotocolipsec/useextendedauthentication.md) property is set. This value is only valid for IKE version 2 (IKEv2)
- [NEVPNIKEAuthenticationMethodSharedSecret](sharedsecret.md): Use a shared secret as the authentication credential. The shared secret set in the [sharedSecretReference](../nevpnprotocolipsec/sharedsecretreference.md) property will be used.
