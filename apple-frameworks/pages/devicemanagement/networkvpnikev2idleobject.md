> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnikev2idleobject](https://developer.apple.com/documentation/devicemanagement/networkvpnikev2idleobject)

# NetworkVPNIKEV2IdleObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Specifies details about how the system handles idle VPN connections.

## Declaration

```
object NetworkVPNIKEV2IdleObject
```

## Properties

- `DeadPeerDetectionRate` — `string`: One of the following:

  - `None`: No keepalive.
  - `Low`: Send keepalive every 30 minutes.
  - `Medium`: Send keepalive every 10 minutes.
  - `High`: Send keepalive every 1 minute.  
  **Default:** `Medium`  
  **Allowed values:** `None`, `Low`, `Medium`, `High`
- `Disconnect` — `boolean`: If `true`, disconnects after an on-demand connection idles.
  **Default:** `false`
- `Timer` — `integer`: The length of time to wait, in seconds, before disconnecting an on-demand connection.

## See Also

### Objects

- [NetworkVPNIKEV2AuthenticationObject](networkvpnikev2authenticationobject.md): Settings that control authentication.
- [NetworkVPNIKEV2DNSObject](networkvpnikev2dnsobject.md): A dictionary to use for all VPN types.
- [NetworkVPNIKEV2NetworkRoutingObject](networkvpnikev2networkroutingobject.md): Specifies details about how the VPN routes different types of network traffic.
- [NetworkVPNIKEV2OnDemandObject](networkvpnikev2ondemandobject.md): Specifies details about how the system controls on-demand VPN.
- [NetworkVPNIKEV2PostQuantumKeyExchangeObject](networkvpnikev2postquantumkeyexchangeobject.md): Post Quantum Key Exchange settings.
- [NetworkVPNIKEV2ProxiesObject](networkvpnikev2proxiesobject.md): The dictionary to use to configure `Proxies` for use with `VPN`.
- [NetworkVPNIKEV2SecurityAssociationParametersObject](networkvpnikev2securityassociationparametersobject.md): These parameters apply to Child Security Association unless `ChildSecurityAssociationParameters` is specified.
