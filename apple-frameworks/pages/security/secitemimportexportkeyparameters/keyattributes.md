> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secitemimportexportkeyparameters/keyattributes

# keyAttributes (Swift)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

An array containing zero or more key attributes for an imported key.

## Declaration

```swift
var keyAttributes: Unmanaged<CFArray>?
```

<a id="Discussion"></a>

## Discussion

Valid values are [kSecAttrIsPermanent](../ksecattrispermanent.md), [kSecAttrIsSensitive](../ksecattrissensitive.md), and [kSecAttrIsExtractable](../ksecattrisextractable.md). If you set this attribute array to `NULL`, the following defaults are used:

- The item is marked permanent if a keychain is specified.
- The item is marked sensitive if it is a private key.
- The item is marked extractable by default.

# keyAttributes (Objective-C)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

An array containing zero or more key attributes for an imported key.

## Declaration

```objectivec
CFArrayRef keyAttributes;
```

<a id="Discussion"></a>

## Discussion

Valid values are [kSecAttrIsPermanent](../ksecattrispermanent.md), [kSecAttrIsSensitive](../ksecattrissensitive.md), and [kSecAttrIsExtractable](../ksecattrisextractable.md). If you set this attribute array to `NULL`, the following defaults are used:

- The item is marked permanent if a keychain is specified.
- The item is marked sensitive if it is a private key.
- The item is marked extractable by default.
