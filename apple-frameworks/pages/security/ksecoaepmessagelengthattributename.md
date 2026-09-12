> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecoaepmessagelengthattributename](https://developer.apple.com/documentation/security/ksecoaepmessagelengthattributename)

# kSecOAEPMessageLengthAttributeName (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The OAEP message length.

> SecTransform is no longer supported

## Declaration

```swift
let kSecOAEPMessageLengthAttributeName: CFString
```

<a id="Discussion"></a>

## Discussion

Optionally set the value to a [CFNumber](../corefoundation/cfnumber.md) indicating a specific message size when the [kSecPaddingKey](ksecpaddingkey.md) attribute is set to [kSecPaddingOAEPKey](ksecpaddingoaepkey.md). If you don’t set this attribute, the minimum padding is used by default.

This attribute is ignored when padding is not set to OAEP.

# kSecOAEPMessageLengthAttributeName (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The OAEP message length.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFStringRef const kSecOAEPMessageLengthAttributeName;
```

<a id="Discussion"></a>

## Discussion

Optionally set the value to a [CFNumberRef](../corefoundation/cfnumber.md) indicating a specific message size when the [kSecPaddingKey](ksecpaddingkey.md) attribute is set to [kSecPaddingOAEPKey](ksecpaddingoaepkey.md). If you don’t set this attribute, the minimum padding is used by default.

This attribute is ignored when padding is not set to OAEP.
