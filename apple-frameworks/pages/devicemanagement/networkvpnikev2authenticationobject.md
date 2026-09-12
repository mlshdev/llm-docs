> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnikev2authenticationobject](https://developer.apple.com/documentation/devicemanagement/networkvpnikev2authenticationobject)

# NetworkVPNIKEV2AuthenticationObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Settings that control authentication.

## Declaration

```
object NetworkVPNIKEV2AuthenticationObject
```

## Properties

- `CredentialsAssetReference` — `string`: The identifier of an asset declaration that contains the credentials (password) to authenticate with the VPN server. Required when `Authentication.Method` is set to `SharedSecret`.
- `ExtendedAuth` — `NetworkVPNIKEV2Authentication_ExtendedAuthObject`: Specifies details about how the VPN routes different types of network traffic.
- `IdentityAssetReference` — `string`: The identifier of a credential asset declaration that contains the identity that this account requires to authenticate with the VPN server. If the value of `AuthenticationMethod` is `Certificate`, the system sends this certificate out for IKEv2 machine authentication. If extended authentication (EAP) is used, the system sends this certificate out for EAP-TLS authentication. Required when `Authentication.Method` is set to `Certificate`.
- `IdentityCertificateType` — `string`: The type of key used by the identity set in the `IdentityAssetReference` to use for IKEv2 machine authentication. If this key is included, the system requires a value for `ServerCertificateIssuerCommonName`.
  **Default:** `RSA`  
  **Allowed values:** `RSA`, `ECDSA256`, `ECDSA384`, `ECDSA521`, `RSA-PSS`
- `Method` — `string` (required): The type of authentication method for the VPN.

  To enable EAP-only authentication, set this to `None` and `ExtendedAuthEnabled` to `true`. If this is `None` and the `ExtendedAuthEnabled` key isn’t set, the authentication configuration defaults to `SharedSecret`.  
  **Allowed values:** `None`, `SharedSecret`, `Certificate`

## Topics

### Objects

- [NetworkVPNIKEV2Authentication_ExtendedAuthObject](networkvpnikev2authentication_extendedauthobject.md): Specifies details about how the VPN routes different types of network traffic.

## See Also

### Objects

- [NetworkVPNIKEV2DNSObject](networkvpnikev2dnsobject.md): A dictionary to use for all VPN types.
- [NetworkVPNIKEV2IdleObject](networkvpnikev2idleobject.md): Specifies details about how the system handles idle VPN connections.
- [NetworkVPNIKEV2NetworkRoutingObject](networkvpnikev2networkroutingobject.md): Specifies details about how the VPN routes different types of network traffic.
- [NetworkVPNIKEV2OnDemandObject](networkvpnikev2ondemandobject.md): Specifies details about how the system controls on-demand VPN.
- [NetworkVPNIKEV2PostQuantumKeyExchangeObject](networkvpnikev2postquantumkeyexchangeobject.md): Post Quantum Key Exchange settings.
- [NetworkVPNIKEV2ProxiesObject](networkvpnikev2proxiesobject.md): The dictionary to use to configure `Proxies` for use with `VPN`.
- [NetworkVPNIKEV2SecurityAssociationParametersObject](networkvpnikev2securityassociationparametersobject.md): These parameters apply to Child Security Association unless `ChildSecurityAssociationParameters` is specified.
