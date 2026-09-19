> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/ksecattrsalt

# kSecAttrSalt (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

A key whose value indicates the salt to use for this item.

## Declaration

```swift
let kSecAttrSalt: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFData](../corefoundation/cfdata.md) that indicates the salt to use with this cryptographic key.

# kSecAttrSalt (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

A key whose value indicates the salt to use for this item.

## Declaration

```objectivec
extern CFStringRef const kSecAttrSalt;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFDataRef](../corefoundation/cfdata.md) that indicates the salt to use with this cryptographic key.
