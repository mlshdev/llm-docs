> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenkeychainkey/issuitableforlogin](https://developer.apple.com/documentation/cryptotokenkit/tktokenkeychainkey/issuitableforlogin)

# isSuitableForLogin (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Whether the key can be used for system login.

## Declaration

```swift
var isSuitableForLogin: Bool { get set }
```

## See Also

### Accessing Key Attributes

- [keyType](keytype.md): The type of the key. Currently, only [kSecAttrKeyTypeRSA](../../security/ksecattrkeytypersa.md) and `kSecAttrKeyTypeECSECPrimeRandom` are supported values.
- [keySizeInBits](keysizeinbits.md)
- [applicationTag](applicationtag.md): The private tag data.
- [publicKeyData](publickeydata.md): The public key data.
- [publicKeyHash](publickeyhash.md): The SHA1 hash of the raw public key.
- [canDecrypt](candecrypt.md): Whether the key can be used to decrypt data.
- [canSign](cansign.md): Whether the key can be used to sign data.
- [canPerformKeyExchange](canperformkeyexchange.md): Whether the key can be used to perform Diffie-Hellman style cryptographic key exchange.

# suitableForLogin (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Whether the key can be used for system login.

## Declaration

```objectivec
@property (getter=isSuitableForLogin) BOOL suitableForLogin;
```

## See Also

### Accessing Key Attributes

- [keyType](keytype.md): The type of the key. Currently, only [kSecAttrKeyTypeRSA](../../security/ksecattrkeytypersa.md) and `kSecAttrKeyTypeECSECPrimeRandom` are supported values.
- [keySizeInBits](keysizeinbits.md)
- [applicationTag](applicationtag.md): The private tag data.
- [publicKeyData](publickeydata.md): The public key data.
- [publicKeyHash](publickeyhash.md): The SHA1 hash of the raw public key.
- [canDecrypt](candecrypt.md): Whether the key can be used to decrypt data.
- [canSign](cansign.md): Whether the key can be used to sign data.
- [canPerformKeyExchange](canperformkeyexchange.md): Whether the key can be used to perform Diffie-Hellman style cryptographic key exchange.
