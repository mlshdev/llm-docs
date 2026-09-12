> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnikev2proxies_protocolobject](https://developer.apple.com/documentation/devicemanagement/networkvpnikev2proxies_protocolobject)

# NetworkVPNIKEV2Proxies_ProtocolObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The dictionary to use to configure HTTP servers  for `Proxies` for use with `VPN`.

## Declaration

```
object NetworkVPNIKEV2Proxies_ProtocolObject
```

## Properties

- `CredentialsAssetReference` — `string`: The identifier of an asset declaration that contains the credentials (user name and password) to authenticate with the proxy server.
- `HTTP` — `NetworkVPNIKEV2Proxies_Protocol_HTTPObject`: The dictionary to use to configure the HTTP (non-TLS) server.
- `HTTPS` — `NetworkVPNIKEV2Proxies_Protocol_HTTPSObject`: The dictionary to use to configure the HTTPS (TLS) server.

## Topics

### Objects

- [NetworkVPNIKEV2Proxies_Protocol_HTTPObject](networkvpnikev2proxies_protocol_httpobject.md): The dictionary to use to configure the HTTP (non-TLS) server.
- [NetworkVPNIKEV2Proxies_Protocol_HTTPSObject](networkvpnikev2proxies_protocol_httpsobject.md): The dictionary to use to configure the HTTPS (TLS) server.
