> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnipsecproxies_protocol_httpobject](https://developer.apple.com/documentation/devicemanagement/networkvpnipsecproxies_protocol_httpobject)

# NetworkVPNIPSecProxies_Protocol_HTTPObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The dictionary to use to configure the HTTP (non-TLS) server.

## Declaration

```
object NetworkVPNIPSecProxies_Protocol_HTTPObject
```

## Properties

- `Enable` — `boolean`: If `true`, enables proxy for HTTP traffic.
  **Default:** `false`
- `HostName` — `string`: The host name of the HTTP proxy.
- `Port` — `integer`: The port number of the HTTP proxy. This field is required if `HostName` is specified.
  **Minimum:** `0`  
  **Maximum:** `65535`

## See Also

### Objects

- [NetworkVPNIPSecProxies_Protocol_HTTPSObject](networkvpnipsecproxies_protocol_httpsobject.md): The dictionary to use to configure the HTTPS (TLS) server.
