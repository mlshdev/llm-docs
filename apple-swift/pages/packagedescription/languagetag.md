> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/languagetag](https://developer.apple.com/documentation/packagedescription/languagetag)

# LanguageTag

**Framework:** PackageDescription  
**Kind:** Structure

A wrapper around an IETF language tag.

## Declaration

```swift
struct LanguageTag
```

<a id="overview"></a>

## Overview

To learn more about the IETF worldwide standard for language tags, see [RFC5646](https://tools.ietf.org/html/rfc5646).

## Topics

### Creating a Language Tag

- [init(extendedGraphemeClusterLiteral:)](languagetag/init%28extendedgraphemeclusterliteral_%29.md): Creates an instance initialized to the given value.
- [init(stringLiteral:)](languagetag/init%28stringliteral_%29.md): Creates an instance initialized to the given value.
- [init(unicodeScalarLiteral:)](languagetag/init%28unicodescalarliteral_%29.md): Creates an instance initialized to the given value.
- [init(rawValue:)](languagetag/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

### Describing a Language Tag

- [description](languagetag/description.md): A textual representation of the language tag.

### Default Implementations

- [CustomStringConvertible Implementations](languagetag/customstringconvertible-implementations.md)
- [ExpressibleByExtendedGraphemeClusterLiteral Implementations](languagetag/expressiblebyextendedgraphemeclusterliteral-implementations.md)
- [ExpressibleByStringLiteral Implementations](languagetag/expressiblebystringliteral-implementations.md)
- [ExpressibleByUnicodeScalarLiteral Implementations](languagetag/expressiblebyunicodescalarliteral-implementations.md)
- [RawRepresentable Implementations](languagetag/rawrepresentable-implementations.md)

## Relationships

### Conforms To

- [Copyable](../swift/copyable.md)
- [CustomStringConvertible](../swift/customstringconvertible.md)
- [Equatable](../swift/equatable.md)
- [Escapable](../swift/escapable.md)
- [ExpressibleByExtendedGraphemeClusterLiteral](../swift/expressiblebyextendedgraphemeclusterliteral.md)
- [ExpressibleByStringLiteral](../swift/expressiblebystringliteral.md)
- [ExpressibleByUnicodeScalarLiteral](../swift/expressiblebyunicodescalarliteral.md)
- [Hashable](../swift/hashable.md)
- [RawRepresentable](../swift/rawrepresentable.md)

## See Also

### Localizing Package Resources

- [defaultLocalization](package/defaultlocalization.md): The default localization for resources.
