> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecoaepmgf1digestalgorithmattributename](https://developer.apple.com/documentation/security/ksecoaepmgf1digestalgorithmattributename)

# kSecOAEPMGF1DigestAlgorithmAttributeName (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The OAEP MGF1 digest algorithm.

> SecTransform is no longer supported

## Declaration

```swift
let kSecOAEPMGF1DigestAlgorithmAttributeName: CFString
```

<a id="Discussion"></a>

## Discussion

Set this value to one of the digest algorithms listed in [Digest Types](transform-attributes.md#Digest-Types) when the [kSecPaddingKey](ksecpaddingkey.md) attribute is set to [kSecPaddingOAEPKey](ksecpaddingoaepkey.md). If you don’t set this attribute, [kSecDigestSHA1](ksecdigestsha1.md) is used by default.

This attribute is ignored when padding is not set to OAEP.

# kSecOAEPMGF1DigestAlgorithmAttributeName (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The OAEP MGF1 digest algorithm.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFStringRef const kSecOAEPMGF1DigestAlgorithmAttributeName;
```

<a id="Discussion"></a>

## Discussion

Set this value to one of the digest algorithms listed in [Digest Types](transform-attributes.md#Digest-Types) when the [kSecPaddingKey](ksecpaddingkey.md) attribute is set to [kSecPaddingOAEPKey](ksecpaddingoaepkey.md). If you don’t set this attribute, [kSecDigestSHA1](ksecdigestsha1.md) is used by default.

This attribute is ignored when padding is not set to OAEP.
