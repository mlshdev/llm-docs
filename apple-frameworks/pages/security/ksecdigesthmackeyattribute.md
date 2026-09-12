> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecdigesthmackeyattribute](https://developer.apple.com/documentation/security/ksecdigesthmackeyattribute)

# kSecDigestHMACKeyAttribute (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The key for HMAC operation.

> SecTransform is no longer supported

## Declaration

```swift
let kSecDigestHMACKeyAttribute: CFString
```

<a id="Discussion"></a>

## Discussion

The value is a [CFData](../corefoundation/cfdata.md) object that specifies the key when [kSecDigestTypeAttribute](ksecdigesttypeattribute.md) attribute is set to one of the HMAC options listed in [Digest Types](transform-attributes.md#Digest-Types). If this value is not set, the transform will assume a zero length key.

# kSecDigestHMACKeyAttribute (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The key for HMAC operation.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFStringRef const kSecDigestHMACKeyAttribute;
```

<a id="Discussion"></a>

## Discussion

The value is a [CFDataRef](../corefoundation/cfdata.md) object that specifies the key when [kSecDigestTypeAttribute](ksecdigesttypeattribute.md) attribute is set to one of the HMAC options listed in [Digest Types](transform-attributes.md#Digest-Types). If this value is not set, the transform will assume a zero length key.
