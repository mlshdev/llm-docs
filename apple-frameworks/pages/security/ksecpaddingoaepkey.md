> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecpaddingoaepkey](https://developer.apple.com/documentation/security/ksecpaddingoaepkey)

# kSecPaddingOAEPKey (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.8+ (deprecated in 13.0)

PKCS7 padding will be used when encrypting or decrypting.

> SecTransform is no longer supported

## Declaration

```swift
let kSecPaddingOAEPKey: CFString
```

<a id="Discussion"></a>

## Discussion

When using this padding type, consider also setting the [kSecOAEPMessageLengthAttributeName](ksecoaepmessagelengthattributename.md), [kSecOAEPEncodingParametersAttributeName](ksecoaepencodingparametersattributename.md), and [kSecOAEPMGF1DigestAlgorithmAttributeName](ksecoaepmgf1digestalgorithmattributename.md) attributes.

# kSecPaddingOAEPKey (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.8+ (deprecated in 13.0)

PKCS7 padding will be used when encrypting or decrypting.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFStringRef const kSecPaddingOAEPKey;
```

<a id="Discussion"></a>

## Discussion

When using this padding type, consider also setting the [kSecOAEPMessageLengthAttributeName](ksecoaepmessagelengthattributename.md), [kSecOAEPEncodingParametersAttributeName](ksecoaepencodingparametersattributename.md), and [kSecOAEPMGF1DigestAlgorithmAttributeName](ksecoaepmgf1digestalgorithmattributename.md) attributes.
