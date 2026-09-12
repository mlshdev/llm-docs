> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnipsecidleobject](https://developer.apple.com/documentation/devicemanagement/networkvpnipsecidleobject)

# NetworkVPNIPSecIdleObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Specifies details about how the system handles idle VPN connections.

## Declaration

```
object NetworkVPNIPSecIdleObject
```

## Properties

- `Disconnect` — `boolean`: If `true`, disconnects after an on-demand connection idles.
  **Default:** `false`
- `Timer` — `integer`: The length of time to wait, in seconds, before disconnecting an on-demand connection.

## See Also

### Objects

- [NetworkVPNIPSecAuthenticationObject](networkvpnipsecauthenticationobject.md): Settings that control authentication.
- [NetworkVPNIPSecDNSObject](networkvpnipsecdnsobject.md): A dictionary to use for all VPN types.
- [NetworkVPNIPSecOnDemandObject](networkvpnipsecondemandobject.md): Specifies details about how the system controls on-demand VPN.
- [NetworkVPNIPSecProxiesObject](networkvpnipsecproxiesobject.md): The dictionary to use to configure `Proxies` for use with `VPN`.
