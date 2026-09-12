> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnikev2proxiesobject](https://developer.apple.com/documentation/devicemanagement/networkvpnikev2proxiesobject)

# NetworkVPNIKEV2ProxiesObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The dictionary to use to configure `Proxies` for use with `VPN`.

## Declaration

```
object NetworkVPNIKEV2ProxiesObject
```

## Properties

- `AutoConfigEnable` — `boolean`: If `true`, enables automatic proxy configuration.
  **Default:** `false`
- `AutoConfigURLString` — `string`: The URL to the location of the proxy auto-configuration file. Used only when `ProxyAutoConfigEnable` is `true`.
- `AutoDiscoveryEnable` — `boolean`: If `true`, enables proxy auto discovery.
  **Default:** `true`
- `Protocol` — `NetworkVPNIKEV2Proxies_ProtocolObject`: The dictionary to use to configure HTTP servers  for `Proxies` for use with `VPN`.
- `SupplementalMatchDomains` — `[string]`: An array of domains that defines which hosts use proxy settings for hosts.

## Topics

### Objects

- [NetworkVPNIKEV2Proxies_ProtocolObject](networkvpnikev2proxies_protocolobject.md): The dictionary to use to configure HTTP servers for `Proxies` for use with `VPN`.

## See Also

### Objects

- [NetworkVPNIKEV2AuthenticationObject](networkvpnikev2authenticationobject.md): Settings that control authentication.
- [NetworkVPNIKEV2DNSObject](networkvpnikev2dnsobject.md): A dictionary to use for all VPN types.
- [NetworkVPNIKEV2IdleObject](networkvpnikev2idleobject.md): Specifies details about how the system handles idle VPN connections.
- [NetworkVPNIKEV2NetworkRoutingObject](networkvpnikev2networkroutingobject.md): Specifies details about how the VPN routes different types of network traffic.
- [NetworkVPNIKEV2OnDemandObject](networkvpnikev2ondemandobject.md): Specifies details about how the system controls on-demand VPN.
- [NetworkVPNIKEV2PostQuantumKeyExchangeObject](networkvpnikev2postquantumkeyexchangeobject.md): Post Quantum Key Exchange settings.
- [NetworkVPNIKEV2SecurityAssociationParametersObject](networkvpnikev2securityassociationparametersobject.md): These parameters apply to Child Security Association unless `ChildSecurityAssociationParameters` is specified.
