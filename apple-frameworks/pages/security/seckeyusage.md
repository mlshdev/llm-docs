> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeyusage](https://developer.apple.com/documentation/security/seckeyusage)

# SecKeyUsage (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** macOS 10.0+

The flags that indicate key usage in the `KeyUsage` extension of a certificate.

## Declaration

```swift
struct SecKeyUsage
```

## Topics

### Initializers

- [init(rawValue:)](seckeyusage/init%28rawvalue_%29.md): Initializes a key usage structure.

### Flags

- [crlSign](seckeyusage/crlsign.md): The `CRLSign` bit is set in KeyUsage extension.
- [contentCommitment](seckeyusage/contentcommitment.md): The `ContentCommitment` bit is set in KeyUsage extension.
- [critical](seckeyusage/critical.md): The KeyUsage extension is marked critical.
- [dataEncipherment](seckeyusage/dataencipherment.md): The `DataEncipherment` bit is set in KeyUsage extension.
- [decipherOnly](seckeyusage/decipheronly.md): The `DecipherOnly` bit is set in KeyUsage extension.
- [digitalSignature](seckeyusage/digitalsignature.md): The `DigitalSignature` bit is set in KeyUsage extension.
- [encipherOnly](seckeyusage/encipheronly.md): The `EncipherOnly` bit is set in KeyUsage extension.
- [keyAgreement](seckeyusage/keyagreement.md): The `KeyAgreement` bit is set in KeyUsage extension.
- [keyCertSign](seckeyusage/keycertsign.md): The `KeyCertSign` bit is set in KeyUsage extension.
- [keyEncipherment](seckeyusage/keyencipherment.md): The `KeyEncipherment` bit is set in KeyUsage extension.
- [nonRepudiation](seckeyusage/nonrepudiation.md): The `NonRepudiation` bit is set in KeyUsage extension.
- [all](seckeyusage/all.md): All flags set.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# SecKeyUsage (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

The flags that indicate key usage in the `KeyUsage` extension of a certificate.

## Declaration

```objectivec
enum SecKeyUsage : uint32_t;
```

## Topics

### Flags

- [kSecKeyUsageUnspecified](seckeyusage/kseckeyusageunspecified.md)
- [kSecKeyUsageCRLSign](seckeyusage/crlsign.md): The `CRLSign` bit is set in KeyUsage extension.
- [kSecKeyUsageContentCommitment](seckeyusage/contentcommitment.md): The `ContentCommitment` bit is set in KeyUsage extension.
- [kSecKeyUsageCritical](seckeyusage/critical.md): The KeyUsage extension is marked critical.
- [kSecKeyUsageDataEncipherment](seckeyusage/dataencipherment.md): The `DataEncipherment` bit is set in KeyUsage extension.
- [kSecKeyUsageDecipherOnly](seckeyusage/decipheronly.md): The `DecipherOnly` bit is set in KeyUsage extension.
- [kSecKeyUsageDigitalSignature](seckeyusage/digitalsignature.md): The `DigitalSignature` bit is set in KeyUsage extension.
- [kSecKeyUsageEncipherOnly](seckeyusage/encipheronly.md): The `EncipherOnly` bit is set in KeyUsage extension.
- [kSecKeyUsageKeyAgreement](seckeyusage/keyagreement.md): The `KeyAgreement` bit is set in KeyUsage extension.
- [kSecKeyUsageKeyCertSign](seckeyusage/keycertsign.md): The `KeyCertSign` bit is set in KeyUsage extension.
- [kSecKeyUsageKeyEncipherment](seckeyusage/keyencipherment.md): The `KeyEncipherment` bit is set in KeyUsage extension.
- [kSecKeyUsageNonRepudiation](seckeyusage/nonrepudiation.md): The `NonRepudiation` bit is set in KeyUsage extension.
- [kSecKeyUsageAll](seckeyusage/all.md): All flags set.
