> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secexternalformat/formatunknown

# SecExternalFormat.formatUnknown (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** macOS 10.0+

## Declaration

```swift
case formatUnknown
```

<a id="Discussion"></a>

## Discussion

When importing, indicates the format is unknown. When exporting, use the default format for the item. For asymmetric keys, the default is `kSecFormatOpenSSL`. For symmetric keys, the default is `kSecFormatRawKey`. For certificates, the default is `kSecFormatX509Cert`. For multiple items, the default is `kSecFormatPEMSequence`.

# kSecFormatUnknown (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
kSecFormatUnknown
```

<a id="Discussion"></a>

## Discussion

When importing, indicates the format is unknown. When exporting, use the default format for the item. For asymmetric keys, the default is `kSecFormatOpenSSL`. For symmetric keys, the default is `kSecFormatRawKey`. For certificates, the default is `kSecFormatX509Cert`. For multiple items, the default is `kSecFormatPEMSequence`.
