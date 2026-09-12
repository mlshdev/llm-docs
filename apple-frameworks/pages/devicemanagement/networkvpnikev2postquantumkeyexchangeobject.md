> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnikev2postquantumkeyexchangeobject](https://developer.apple.com/documentation/devicemanagement/networkvpnikev2postquantumkeyexchangeobject)

# NetworkVPNIKEV2PostQuantumKeyExchangeObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Post Quantum Key Exchange settings.

## Declaration

```
object NetworkVPNIKEV2PostQuantumKeyExchangeObject
```

## Properties

- `AllowFallback` — `boolean`: If set to `false`, the VPN doesn’t establish a connection if the server doesn’t support or doesn’t allow post-quantum key exchanges. Thd device ignores this key if `PostQuantumKeyExchangeMethods` isn’t present in `IKESecurityAssociationParameters` or `ChildSecurityAssociationParameters`.
  **Default:** `false`
- `PPK` — `string`: The Post-quantum Pre-shared key (PPK) the device uses for this VPN. This key is is used with VPN servers that support RFC 8784. If this key is present `PPKIdentifier` must also be present.
- `PPKIdentifier` — `string`: The identifier for the Post-quantum Pre-shared key (PPK) the device uses for this VPN. This key is is used with VPN servers that support RFC 8784. If this key is present `PPK` must also be present.
- `PPKMandatory` — `boolean`: If set to `true`, the VPN doesn’t establish a connection if the server doesn’t support RFC 8784 or doesn’t accept the PPK identifier specified in `PPKIdentifier`. The device ignores this key if `PPK` and `PPKIdentifier` aren’t present.
  **Default:** `true`

## See Also

### Objects

- [NetworkVPNIKEV2AuthenticationObject](networkvpnikev2authenticationobject.md): Settings that control authentication.
- [NetworkVPNIKEV2DNSObject](networkvpnikev2dnsobject.md): A dictionary to use for all VPN types.
- [NetworkVPNIKEV2IdleObject](networkvpnikev2idleobject.md): Specifies details about how the system handles idle VPN connections.
- [NetworkVPNIKEV2NetworkRoutingObject](networkvpnikev2networkroutingobject.md): Specifies details about how the VPN routes different types of network traffic.
- [NetworkVPNIKEV2OnDemandObject](networkvpnikev2ondemandobject.md): Specifies details about how the system controls on-demand VPN.
- [NetworkVPNIKEV2ProxiesObject](networkvpnikev2proxiesobject.md): The dictionary to use to configure `Proxies` for use with `VPN`.
- [NetworkVPNIKEV2SecurityAssociationParametersObject](networkvpnikev2securityassociationparametersobject.md): These parameters apply to Child Security Association unless `ChildSecurityAssociationParameters` is specified.
