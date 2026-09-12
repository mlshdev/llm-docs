> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeygeneratepairasync(_:_:_:)](https://developer.apple.com/documentation/security/seckeygeneratepairasync(_:_:_:))

# SecKeyGeneratePairAsync(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Generates a public/private key pair.

> No longer supported

## Declaration

```swift
func SecKeyGeneratePairAsync(_ parameters: CFDictionary, _ deliveryQueue: dispatch_queue_t, _ result: @escaping SecKeyGeneratePairBlock)
```

## Parameters

- `parameters`: A key generation parameter dictionary. At minimum, this must contain [kSecAttrKeyType](ksecattrkeytype.md) and [kSecAttrKeySizeInBits](ksecattrkeysizeinbits.md). In addition, this function assumes default values for the following keys:

  - [kSecAttrLabel](ksecattrlabel.md) defaults to `NULL`.
  - [kSecAttrIsPermanent](ksecattrispermanent.md) if this key is present and has a value of [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md), the key or key pair will be added to the default keychain.
  - [kSecAttrApplicationTag](ksecattrapplicationtag.md) defaults to `NULL`.
  - [kSecAttrEffectiveKeySize](ksecattreffectivekeysize.md) defaults to `NULL`, which means the effective key size is the same as the key size ([kSecAttrKeySizeInBits](ksecattrkeysizeinbits.md)).
  - [kSecAttrCanEncrypt](ksecattrcanencrypt.md) defaults to [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) for private keys, [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) for public keys.
  - [kSecAttrCanDecrypt](ksecattrcandecrypt.md) defaults to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) for private keys, [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) for public keys.
  - [kSecAttrCanDerive](ksecattrcanderive.md) defaults to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md).
  - [kSecAttrCanSign](ksecattrcansign.md) defaults to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) for private keys, [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) for public keys.
  - [kSecAttrCanVerify](ksecattrcanverify.md) defaults to [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) for private keys, [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) for public keys.
  - [kSecAttrCanWrap](ksecattrcanwrap.md) defaults to [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) for private keys, [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) for public keys.
  - [kSecAttrCanUnwrap](ksecattrcanunwrap.md) defaults to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) for private keys, [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) for public keys.

  These default values can be overridden by adding a value for the associated key in the parameter dictionary.
- `deliveryQueue`: The dispatch queue on which the result block should be scheduled.
- `result`: A block of type [SecKeyGeneratePairBlock](seckeygeneratepairblock.md) that gets called with the result upon completion.

# SecKeyGeneratePairAsync (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Generates a public/private key pair.

> No longer supported

## Declaration

```objectivec
void SecKeyGeneratePairAsync(CFDictionaryRef parameters, dispatch_queue_t deliveryQueue, SecKeyGeneratePairBlock result);
```

## Parameters

- `parameters`: A key generation parameter dictionary. At minimum, this must contain [kSecAttrKeyType](ksecattrkeytype.md) and [kSecAttrKeySizeInBits](ksecattrkeysizeinbits.md). In addition, this function assumes default values for the following keys:

  - [kSecAttrLabel](ksecattrlabel.md) defaults to `NULL`.
  - [kSecAttrIsPermanent](ksecattrispermanent.md) if this key is present and has a value of [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md), the key or key pair will be added to the default keychain.
  - [kSecAttrApplicationTag](ksecattrapplicationtag.md) defaults to `NULL`.
  - [kSecAttrEffectiveKeySize](ksecattreffectivekeysize.md) defaults to `NULL`, which means the effective key size is the same as the key size ([kSecAttrKeySizeInBits](ksecattrkeysizeinbits.md)).
  - [kSecAttrCanEncrypt](ksecattrcanencrypt.md) defaults to [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) for private keys, [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) for public keys.
  - [kSecAttrCanDecrypt](ksecattrcandecrypt.md) defaults to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) for private keys, [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) for public keys.
  - [kSecAttrCanDerive](ksecattrcanderive.md) defaults to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md).
  - [kSecAttrCanSign](ksecattrcansign.md) defaults to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) for private keys, [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) for public keys.
  - [kSecAttrCanVerify](ksecattrcanverify.md) defaults to [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) for private keys, [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) for public keys.
  - [kSecAttrCanWrap](ksecattrcanwrap.md) defaults to [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) for private keys, [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) for public keys.
  - [kSecAttrCanUnwrap](ksecattrcanunwrap.md) defaults to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) for private keys, [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) for public keys.

  These default values can be overridden by adding a value for the associated key in the parameter dictionary.
- `deliveryQueue`: The dispatch queue on which the result block should be scheduled.
- `result`: A block of type [SecKeyGeneratePairBlock](seckeygeneratepairblock.md) that gets called with the result upon completion.
