> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnipsecproxies_protocolobject](https://developer.apple.com/documentation/devicemanagement/networkvpnipsecproxies_protocolobject)

# NetworkVPNIPSecProxies_ProtocolObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The dictionary to use to configure HTTP servers  for `Proxies` for use with `VPN`.

## Declaration

```
object NetworkVPNIPSecProxies_ProtocolObject
```

## Properties

- `CredentialsAssetReference` — `string`: The identifier of an asset declaration that contains the credentials (user name and password) to authenticate with the proxy server.
- `HTTP` — `NetworkVPNIPSecProxies_Protocol_HTTPObject`: The dictionary to use to configure the HTTP (non-TLS) server.
- `HTTPS` — `NetworkVPNIPSecProxies_Protocol_HTTPSObject`: The dictionary to use to configure the HTTPS (TLS) server.

## Topics

### Objects

- [NetworkVPNIPSecProxies_Protocol_HTTPObject](networkvpnipsecproxies_protocol_httpobject.md): The dictionary to use to configure the HTTP (non-TLS) server.
- [NetworkVPNIPSecProxies_Protocol_HTTPSObject](networkvpnipsecproxies_protocol_httpsobject.md): The dictionary to use to configure the HTTPS (TLS) server.
