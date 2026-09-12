> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkvpnikev2securityassociationparametersobject](https://developer.apple.com/documentation/devicemanagement/networkvpnikev2securityassociationparametersobject)

# NetworkVPNIKEV2SecurityAssociationParametersObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

These parameters apply to Child Security Association unless `ChildSecurityAssociationParameters` is specified.

## Declaration

```
object NetworkVPNIKEV2SecurityAssociationParametersObject
```

## Properties

- `DiffieHellmanGroup` — `integer`: The Diffie-Hellman group.

  For `AlwaysOn` VPN, the minimum allowed value is `14`.  
  **Default:** `14`  
  **Allowed values:** `14`, `15`, `16`, `17`, `18`, `19`, `20`, `21`, `31`, `32`
- `EncryptionAlgorithm` — `string`: The encryption algorithm.

  On tvOS, the default value is `AES-256-GCM`.  
  **Default:** `AES-256`  
  **Allowed values:** `AES-128`, `AES-256`, `AES-128-GCM`, `AES-256-GCM`, `ChaCha20Poly1305`
- `IntegrityAlgorithm` — `string`: The integrity algorithm.
  **Default:** `SHA2-256`  
  **Allowed values:** `SHA2-256`, `SHA2-384`, `SHA2-512`
- `LifeTimeInMinutes` — `integer`: The SA lifetime (rekey interval) in minutes.
  **Default:** `1440`  
  **Minimum:** `10`  
  **Maximum:** `1440`
- `PostQuantumKeyExchangeMethods` — `[integer]`: An array of integers representing postquantum key exchange methods the device uses during SA establishment and rekey. You can specify up to seven items, which correspond to ADDKE1 - ADDKE7 from RFC 9370.
  **Allowed values:** `0`, `36`, `37`

## See Also

### Objects

- [NetworkVPNIKEV2AuthenticationObject](networkvpnikev2authenticationobject.md): Settings that control authentication.
- [NetworkVPNIKEV2DNSObject](networkvpnikev2dnsobject.md): A dictionary to use for all VPN types.
- [NetworkVPNIKEV2IdleObject](networkvpnikev2idleobject.md): Specifies details about how the system handles idle VPN connections.
- [NetworkVPNIKEV2NetworkRoutingObject](networkvpnikev2networkroutingobject.md): Specifies details about how the VPN routes different types of network traffic.
- [NetworkVPNIKEV2OnDemandObject](networkvpnikev2ondemandobject.md): Specifies details about how the system controls on-demand VPN.
- [NetworkVPNIKEV2PostQuantumKeyExchangeObject](networkvpnikev2postquantumkeyexchangeobject.md): Post Quantum Key Exchange settings.
- [NetworkVPNIKEV2ProxiesObject](networkvpnikev2proxiesobject.md): The dictionary to use to configure `Proxies` for use with `VPN`.
