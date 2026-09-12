> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccodeinfocdhashes](https://developer.apple.com/documentation/security/kseccodeinfocdhashes)

# kSecCodeInfoCdHashes (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is an array containing the unique binary identifier for every digest algorithm supported in the signature.

## Declaration

```swift
let kSecCodeInfoCdHashes: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding [CFArray](../corefoundation/cfarray.md) contains the values of the [kSecCodeInfoUnique](kseccodeinfounique.md) binary identifier for every digest algorithm supported in the signature in the same order as in the [kSecCodeInfoDigestAlgorithms](kseccodeinfodigestalgorithms.md) array. The [kSecCodeInfoUnique](kseccodeinfounique.md) value contained in this array corresponds to the [kSecCodeInfoDigestAlgorithm](kseccodeinfodigestalgorithm.md) value.

# kSecCodeInfoCdHashes (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is an array containing the unique binary identifier for every digest algorithm supported in the signature.

## Declaration

```objectivec
extern CFStringRef const kSecCodeInfoCdHashes;
```

<a id="Discussion"></a>

## Discussion

The corresponding [CFArrayRef](../corefoundation/cfarray.md) contains the values of the [kSecCodeInfoUnique](kseccodeinfounique.md) binary identifier for every digest algorithm supported in the signature in the same order as in the [kSecCodeInfoDigestAlgorithms](kseccodeinfodigestalgorithms.md) array. The [kSecCodeInfoUnique](kseccodeinfounique.md) value contained in this array corresponds to the [kSecCodeInfoDigestAlgorithm](kseccodeinfodigestalgorithm.md) value.
