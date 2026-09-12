> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkencryptionscheme](https://developer.apple.com/documentation/passkit/pkencryptionscheme)

# PKEncryptionScheme (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Encryption schemes.

## Declaration

```swift
struct PKEncryptionScheme
```

## Topics

### Creating an encryption scheme

- [init(rawValue:)](pkencryptionscheme/init%28rawvalue_%29.md): Initialize an encryption scheme using a string.

### Encryption schemes

- [ECC_V2](pkencryptionscheme/ecc_v2.md): The elliptic curve cryptography (ECC) scheme.
- [RSA_V2](pkencryptionscheme/rsa_v2.md): The RSA v2 scheme.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a request configuration

- [init(encryptionScheme:)](pkaddpaymentpassrequestconfiguration/init%28encryptionscheme_%29.md): Instantiates a new request configuration with the given encryption scheme.

# PKEncryptionScheme (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Encryption schemes.

## Declaration

```objectivec
typedef NSString * PKEncryptionScheme;
```

## Topics

### Encryption schemes

- [PKEncryptionSchemeECC_V2](pkencryptionscheme/ecc_v2.md): The elliptic curve cryptography (ECC) scheme.
- [PKEncryptionSchemeRSA_V2](pkencryptionscheme/rsa_v2.md): The RSA v2 scheme.

## See Also

### Creating a request configuration

- [initWithEncryptionScheme:](pkaddpaymentpassrequestconfiguration/init%28encryptionscheme_%29.md): Instantiates a new request configuration with the given encryption scheme.
