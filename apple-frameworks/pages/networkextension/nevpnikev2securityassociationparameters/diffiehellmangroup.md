> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnikev2securityassociationparameters/diffiehellmangroup](https://developer.apple.com/documentation/networkextension/nevpnikev2securityassociationparameters/diffiehellmangroup)

# diffieHellmanGroup (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The Diffie Hellman group used by the Security Association.

## Declaration

```swift
var diffieHellmanGroup: NEVPNIKEv2DiffieHellmanGroup { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NEVPNIKEv2DiffieHellmanGroup.group14](../nevpnikev2diffiehellmangroup/group14.md).

The value of this property on [childSecurityAssociationParameters](../nevpnprotocolikev2/childsecurityassociationparameters.md) of [NEVPNProtocolIKEv2](../nevpnprotocolikev2.md) only takes effect if the [enablePFS](../nevpnprotocolikev2/enablepfs.md) of [NEVPNProtocolIKEv2](../nevpnprotocolikev2.md) is [true](https://developer.apple.com/documentation/swift/true) (its default value is [false](https://developer.apple.com/documentation/swift/false)).

## See Also

### IKEv2 Security Association parameters

- [encryptionAlgorithm](encryptionalgorithm.md): The algorithm used by the Security Association to encrypt and decrypt data.
- [NEVPNIKEv2EncryptionAlgorithm](../nevpnikev2encryptionalgorithm.md): An enumeration of encryption algorithm values.
- [integrityAlgorithm](integrityalgorithm.md): The algorithm used by the Security Association to verify the integrity of data.
- [NEVPNIKEv2IntegrityAlgorithm](../nevpnikev2integrityalgorithm.md)
- [NEVPNIKEv2DiffieHellmanGroup](../nevpnikev2diffiehellmangroup.md): An enumeration of Diffie-Hellman group values.
- [lifetimeMinutes](lifetimeminutes.md): The duration of the lifetime of the Security Association, in minutes.
- [postQuantumKeyExchangeMethods](postquantumkeyexchangemethods-3173s.md): A list of the quantum-secure key exchange methods the Security Association uses.
- [NEVPNIKEv2PostQuantumKeyExchangeMethod](../nevpnikev2postquantumkeyexchangemethod.md): Quantum-secure key exchange methods you use with IKEv2 servers.

# diffieHellmanGroup (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The Diffie Hellman group used by the Security Association.

## Declaration

```objectivec
@property NEVPNIKEv2DiffieHellmanGroup diffieHellmanGroup;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NEVPNIKEv2DiffieHellmanGroup14](../nevpnikev2diffiehellmangroup/group14.md).

The value of this property on [childSecurityAssociationParameters](../nevpnprotocolikev2/childsecurityassociationparameters.md) of [NEVPNProtocolIKEv2](../nevpnprotocolikev2.md) only takes effect if the [enablePFS](../nevpnprotocolikev2/enablepfs.md) of [NEVPNProtocolIKEv2](../nevpnprotocolikev2.md) is [true](https://developer.apple.com/documentation/swift/true) (its default value is [false](https://developer.apple.com/documentation/swift/false)).

## See Also

### IKEv2 Security Association parameters

- [encryptionAlgorithm](encryptionalgorithm.md): The algorithm used by the Security Association to encrypt and decrypt data.
- [NEVPNIKEv2EncryptionAlgorithm](../nevpnikev2encryptionalgorithm.md): An enumeration of encryption algorithm values.
- [integrityAlgorithm](integrityalgorithm.md): The algorithm used by the Security Association to verify the integrity of data.
- [NEVPNIKEv2IntegrityAlgorithm](../nevpnikev2integrityalgorithm.md)
- [NEVPNIKEv2DiffieHellmanGroup](../nevpnikev2diffiehellmangroup.md): An enumeration of Diffie-Hellman group values.
- [lifetimeMinutes](lifetimeminutes.md): The duration of the lifetime of the Security Association, in minutes.
- [postQuantumKeyExchangeMethods](postquantumkeyexchangemethods-56672.md): A list of the quantum-secure key exchange methods the Security Association uses.
- [NEVPNIKEv2PostQuantumKeyExchangeMethod](../nevpnikev2postquantumkeyexchangemethod.md): Quantum-secure key exchange methods you use with IKEv2 servers.
