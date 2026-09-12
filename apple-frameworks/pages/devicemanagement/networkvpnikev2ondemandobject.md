> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnikev2ondemandobject](https://developer.apple.com/documentation/devicemanagement/networkvpnikev2ondemandobject)

# NetworkVPNIKEV2OnDemandObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Specifies details about how the system controls on-demand VPN.

## Declaration

```
object NetworkVPNIKEV2OnDemandObject
```

## Properties

- `DisableUserOverride` — `boolean`: If `true`, the device disables the Connect On Demand toggle in Settings for this configuration.

  Available: iOS 27+ | iPadOS 27+ | tvOS 27+ | visionOS 27+  
  **Default:** `false`
- `Enabled` — `boolean`: If `true`, enables VPN On Demand.
  **Default:** `false`
- `Rules` — `[NetworkVPNIKEV2RulesElementObject]`: An array of dictionaries defining On Demand Rules.

## Topics

### Objects

- [NetworkVPNIKEV2RulesElementObject](networkvpnikev2ruleselementobject.md): An array of dictionaries defining On Demand Rules.

## See Also

### Objects

- [NetworkVPNIKEV2AuthenticationObject](networkvpnikev2authenticationobject.md): Settings that control authentication.
- [NetworkVPNIKEV2DNSObject](networkvpnikev2dnsobject.md): A dictionary to use for all VPN types.
- [NetworkVPNIKEV2IdleObject](networkvpnikev2idleobject.md): Specifies details about how the system handles idle VPN connections.
- [NetworkVPNIKEV2NetworkRoutingObject](networkvpnikev2networkroutingobject.md): Specifies details about how the VPN routes different types of network traffic.
- [NetworkVPNIKEV2PostQuantumKeyExchangeObject](networkvpnikev2postquantumkeyexchangeobject.md): Post Quantum Key Exchange settings.
- [NetworkVPNIKEV2ProxiesObject](networkvpnikev2proxiesobject.md): The dictionary to use to configure `Proxies` for use with `VPN`.
- [NetworkVPNIKEV2SecurityAssociationParametersObject](networkvpnikev2securityassociationparametersobject.md): These parameters apply to Child Security Association unless `ChildSecurityAssociationParameters` is specified.
