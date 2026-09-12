> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnalwaysontunnelconfigurationelement_ikev2_idleobject](https://developer.apple.com/documentation/devicemanagement/networkvpnalwaysontunnelconfigurationelement_ikev2_idleobject)

# NetworkVPNAlwaysOnTunnelConfigurationElement_IKEV2_IdleObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Specifies details about how the system handles idle VPN connections.

## Declaration

```
object NetworkVPNAlwaysOnTunnelConfigurationElement_IKEV2_IdleObject
```

## Properties

- `DeadPeerDetectionRate` — `string`: One of the following:

  - `None`: No keepalive.
  - `Low`: Send keepalive every 30 minutes.
  - `Medium`: Send keepalive every 10 minutes.
  - `High`: Send keepalive every 1 minute.  
  **Default:** `Medium`  
  **Allowed values:** `None`, `Low`, `Medium`, `High`

## See Also

### Objects

- [NetworkVPNAlwaysOnSecurityAssociationParametersObject](networkvpnalwaysonsecurityassociationparametersobject.md): These parameters apply to Child Security Association unless `ChildSecurityAssociationParameters` is specified.
- [NetworkVPNAlwaysOnTunnelConfigurationElement_IKEV2_AuthenticationObject](networkvpnalwaysontunnelconfigurationelement_ikev2_authenticationobject.md): Settings that control authentication.
- [NetworkVPNAlwaysOnTunnelConfigurationElement_IKEV2_PostQuantumKeyExchangeObject](networkvpnalwaysontunnelconfigurationelement_ikev2_postquantumkeyexchangeobject.md): Post Quantum Key Exchange settings.
