> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccodeinfodigestalgorithms](https://developer.apple.com/documentation/security/kseccodeinfodigestalgorithms)

# kSecCodeInfoDigestAlgorithms (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a list of the kinds of cryptographic hash functions available within the signature.

## Declaration

```swift
let kSecCodeInfoDigestAlgorithms: CFString
```

<a id="Discussion"></a>

## Discussion

The value is a [CFArray](../corefoundation/cfarray.md) of [CFNumber](../corefoundation/cfnumber.md) objects indicating the kinds of cryptographic hash functions available within the signature. The ordering of the items in the array has no significance in terms of priority, but determines the order in which the hashes appear in [kSecCodeInfoCdHashes](kseccodeinfocdhashes.md).

# kSecCodeInfoDigestAlgorithms (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a list of the kinds of cryptographic hash functions available within the signature.

## Declaration

```objectivec
extern CFStringRef const kSecCodeInfoDigestAlgorithms;
```

<a id="Discussion"></a>

## Discussion

The value is a [CFArrayRef](../corefoundation/cfarray.md) of [CFNumberRef](../corefoundation/cfnumber.md) objects indicating the kinds of cryptographic hash functions available within the signature. The ordering of the items in the array has no significance in terms of priority, but determines the order in which the hashes appear in [kSecCodeInfoCdHashes](kseccodeinfocdhashes.md).
