> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenkeychainkey/candecrypt](https://developer.apple.com/documentation/cryptotokenkit/tktokenkeychainkey/candecrypt)

# canDecrypt (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Whether the key can be used to decrypt data.

## Declaration

```swift
var canDecrypt: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property is equivalent to the `kSecAttrCanDecrypt` type attribute.

## See Also

### Accessing Key Attributes

- [keyType](keytype.md): The type of the key. Currently, only [kSecAttrKeyTypeRSA](../../security/ksecattrkeytypersa.md) and `kSecAttrKeyTypeECSECPrimeRandom` are supported values.
- [keySizeInBits](keysizeinbits.md)
- [applicationTag](applicationtag.md): The private tag data.
- [publicKeyData](publickeydata.md): The public key data.
- [publicKeyHash](publickeyhash.md): The SHA1 hash of the raw public key.
- [canSign](cansign.md): Whether the key can be used to sign data.
- [canPerformKeyExchange](canperformkeyexchange.md): Whether the key can be used to perform Diffie-Hellman style cryptographic key exchange.
- [isSuitableForLogin](issuitableforlogin.md): Whether the key can be used for system login.

# canDecrypt (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Whether the key can be used to decrypt data.

## Declaration

```objectivec
@property BOOL canDecrypt;
```

<a id="Discussion"></a>

## Discussion

This property is equivalent to the `kSecAttrCanDecrypt` type attribute.

## See Also

### Accessing Key Attributes

- [keyType](keytype.md): The type of the key. Currently, only [kSecAttrKeyTypeRSA](../../security/ksecattrkeytypersa.md) and `kSecAttrKeyTypeECSECPrimeRandom` are supported values.
- [keySizeInBits](keysizeinbits.md)
- [applicationTag](applicationtag.md): The private tag data.
- [publicKeyData](publickeydata.md): The public key data.
- [publicKeyHash](publickeyhash.md): The SHA1 hash of the raw public key.
- [canSign](cansign.md): Whether the key can be used to sign data.
- [canPerformKeyExchange](canperformkeyexchange.md): Whether the key can be used to perform Diffie-Hellman style cryptographic key exchange.
- [suitableForLogin](issuitableforlogin.md): Whether the key can be used for system login.
