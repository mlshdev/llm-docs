> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnipsecondemandobject](https://developer.apple.com/documentation/devicemanagement/networkvpnipsecondemandobject)

# NetworkVPNIPSecOnDemandObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Specifies details about how the system controls on-demand VPN.

## Declaration

```
object NetworkVPNIPSecOnDemandObject
```

## Properties

- `Enabled` — `boolean`: If `true`, enables VPN On Demand.
  **Default:** `false`
- `Rules` — `[NetworkVPNIPSecRulesElementObject]`: An array of dictionaries defining On Demand Rules.

## Topics

### Objects

- [NetworkVPNIPSecRulesElementObject](networkvpnipsecruleselementobject.md): An array of dictionaries defining On Demand Rules.

## See Also

### Objects

- [NetworkVPNIPSecAuthenticationObject](networkvpnipsecauthenticationobject.md): Settings that control authentication.
- [NetworkVPNIPSecDNSObject](networkvpnipsecdnsobject.md): A dictionary to use for all VPN types.
- [NetworkVPNIPSecIdleObject](networkvpnipsecidleobject.md): Specifies details about how the system handles idle VPN connections.
- [NetworkVPNIPSecProxiesObject](networkvpnipsecproxiesobject.md): The dictionary to use to configure `Proxies` for use with `VPN`.
