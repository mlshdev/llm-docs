> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secexternalitemtype/itemtypeaggregate

# SecExternalItemType.itemTypeAggregate (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** macOS 10.0+

Indicates a set of certificates or certificates and private keys.

## Declaration

```swift
case itemTypeAggregate
```

<a id="Discussion"></a>

## Discussion

Possible values include [SecExternalFormat.formatPKCS7](../secexternalformat/formatpkcs7.md), [SecExternalFormat.formatPKCS12](../secexternalformat/formatpkcs12.md), or [SecExternalFormat.formatPEMSequence](../secexternalformat/formatpemsequence.md) formats (see [SecExternalFormat](../secexternalformat.md)).

# kSecItemTypeAggregate (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

Indicates a set of certificates or certificates and private keys.

## Declaration

```objectivec
kSecItemTypeAggregate
```

<a id="Discussion"></a>

## Discussion

Possible values include [kSecFormatPKCS7](../secexternalformat/formatpkcs7.md), [kSecFormatPKCS12](../secexternalformat/formatpkcs12.md), or [kSecFormatPEMSequence](../secexternalformat/formatpemsequence.md) formats (see [SecExternalFormat](../secexternalformat.md)).
