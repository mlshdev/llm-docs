> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecoaepencodingparametersattributename](https://developer.apple.com/documentation/security/ksecoaepencodingparametersattributename)

# kSecOAEPEncodingParametersAttributeName (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The OAEP encoding parameters.

> SecTransform is no longer supported

## Declaration

```swift
let kSecOAEPEncodingParametersAttributeName: CFString
```

<a id="Discussion"></a>

## Discussion

Set this value to a [CFData](../corefoundation/cfdata.md) object when the [kSecPaddingKey](ksecpaddingkey.md) attribute is set to [kSecPaddingOAEPKey](ksecpaddingoaepkey.md). If you don’t set this attribute, a zero length data object is used by default.

This attribute is ignored when padding is not set to OAEP.

# kSecOAEPEncodingParametersAttributeName (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The OAEP encoding parameters.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFStringRef const kSecOAEPEncodingParametersAttributeName;
```

<a id="Discussion"></a>

## Discussion

Set this value to a [CFDataRef](../corefoundation/cfdata.md) object when the [kSecPaddingKey](ksecpaddingkey.md) attribute is set to [kSecPaddingOAEPKey](ksecpaddingoaepkey.md). If you don’t set this attribute, a zero length data object is used by default.

This attribute is ignored when padding is not set to OAEP.
