> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccodeinfodigestalgorithm](https://developer.apple.com/documentation/security/kseccodeinfodigestalgorithm)

# kSecCodeInfoDigestAlgorithm (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a number indicating the cryptographic hash function.

## Declaration

```swift
let kSecCodeInfoDigestAlgorithm: CFString
```

<a id="Discussion"></a>

## Discussion

The value is a [CFNumber](../corefoundation/cfnumber.md) indicating the kind of cryptographic hash function used within the signature to seal its pieces together. See [SecCSDigestAlgorithm](seccsdigestalgorithm.md) for possible value.

# kSecCodeInfoDigestAlgorithm (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a number indicating the cryptographic hash function.

## Declaration

```objectivec
extern CFStringRef const kSecCodeInfoDigestAlgorithm;
```

<a id="Discussion"></a>

## Discussion

The value is a [CFNumberRef](../corefoundation/cfnumber.md) indicating the kind of cryptographic hash function used within the signature to seal its pieces together. See [SecCSDigestAlgorithm](seccsdigestalgorithm.md) for possible value.
