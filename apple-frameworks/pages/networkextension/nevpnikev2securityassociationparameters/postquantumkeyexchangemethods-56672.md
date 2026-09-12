> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnikev2securityassociationparameters/postquantumkeyexchangemethods-56672](https://developer.apple.com/documentation/networkextension/nevpnikev2securityassociationparameters/postquantumkeyexchangemethods-56672)

# postQuantumKeyExchangeMethods

**Interface language:** Objective-C

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A list of the quantum-secure key exchange methods the Security Association uses.

## Declaration

```objectivec
@property (copy) NSArray<NSNumber *> * postQuantumKeyExchangeMethods;
```

<a id="Discussion"></a>

## Discussion

You can specify up to seven key-exchange methods, which correspond to the Additional Key Exchange transform types `ADDKE1`–`ADDKE7` in RFC 9370.

## See Also

### IKEv2 Security Association parameters

- [encryptionAlgorithm](encryptionalgorithm.md): The algorithm used by the Security Association to encrypt and decrypt data.
- [NEVPNIKEv2EncryptionAlgorithm](../nevpnikev2encryptionalgorithm.md): An enumeration of encryption algorithm values.
- [integrityAlgorithm](integrityalgorithm.md): The algorithm used by the Security Association to verify the integrity of data.
- [NEVPNIKEv2IntegrityAlgorithm](../nevpnikev2integrityalgorithm.md)
- [diffieHellmanGroup](diffiehellmangroup.md): The Diffie Hellman group used by the Security Association.
- [NEVPNIKEv2DiffieHellmanGroup](../nevpnikev2diffiehellmangroup.md): An enumeration of Diffie-Hellman group values.
- [lifetimeMinutes](lifetimeminutes.md): The duration of the lifetime of the Security Association, in minutes.
- [NEVPNIKEv2PostQuantumKeyExchangeMethod](../nevpnikev2postquantumkeyexchangemethod.md): Quantum-secure key exchange methods you use with IKEv2 servers.
