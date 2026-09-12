> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnipsecproxiesobject](https://developer.apple.com/documentation/devicemanagement/networkvpnipsecproxiesobject)

# NetworkVPNIPSecProxiesObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The dictionary to use to configure `Proxies` for use with `VPN`.

## Declaration

```
object NetworkVPNIPSecProxiesObject
```

## Properties

- `AutoConfigEnable` — `boolean`: If `true`, enables automatic proxy configuration.
  **Default:** `false`
- `AutoConfigURLString` — `string`: The URL to the location of the proxy auto-configuration file. Used only when `ProxyAutoConfigEnable` is `true`.
- `AutoDiscoveryEnable` — `boolean`: If `true`, enables proxy auto discovery.
  **Default:** `true`
- `Protocol` — `NetworkVPNIPSecProxies_ProtocolObject`: The dictionary to use to configure HTTP servers  for `Proxies` for use with `VPN`.
- `SupplementalMatchDomains` — `[string]`: An array of domains that defines which hosts use proxy settings for hosts.

## Topics

### Objects

- [NetworkVPNIPSecProxies_ProtocolObject](networkvpnipsecproxies_protocolobject.md): The dictionary to use to configure HTTP servers for `Proxies` for use with `VPN`.

## See Also

### Objects

- [NetworkVPNIPSecAuthenticationObject](networkvpnipsecauthenticationobject.md): Settings that control authentication.
- [NetworkVPNIPSecDNSObject](networkvpnipsecdnsobject.md): A dictionary to use for all VPN types.
- [NetworkVPNIPSecIdleObject](networkvpnipsecidleobject.md): Specifies details about how the system handles idle VPN connections.
- [NetworkVPNIPSecOnDemandObject](networkvpnipsecondemandobject.md): Specifies details about how the system controls on-demand VPN.
