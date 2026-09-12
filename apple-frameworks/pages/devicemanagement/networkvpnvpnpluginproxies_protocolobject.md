> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnvpnpluginproxies_protocolobject](https://developer.apple.com/documentation/devicemanagement/networkvpnvpnpluginproxies_protocolobject)

# NetworkVPNVPNPluginProxies_ProtocolObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The dictionary to use to configure HTTP servers  for `Proxies` for use with `VPN`.

## Declaration

```
object NetworkVPNVPNPluginProxies_ProtocolObject
```

## Properties

- `CredentialsAssetReference` — `string`: The identifier of an asset declaration that contains the credentials (user name and password) to authenticate with the proxy server.
- `HTTP` — `NetworkVPNVPNPluginProxies_Protocol_HTTPObject`: The dictionary to use to configure the HTTP (non-TLS) server.
- `HTTPS` — `NetworkVPNVPNPluginProxies_Protocol_HTTPSObject`: The dictionary to use to configure the HTTPS (TLS) server.

## Topics

### Objects

- [NetworkVPNVPNPluginProxies_Protocol_HTTPObject](networkvpnvpnpluginproxies_protocol_httpobject.md): The dictionary to use to configure the HTTP (non-TLS) server.
- [NetworkVPNVPNPluginProxies_Protocol_HTTPSObject](networkvpnvpnpluginproxies_protocol_httpsobject.md): The dictionary to use to configure the HTTPS (TLS) server.
