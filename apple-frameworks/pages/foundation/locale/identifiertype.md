> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/identifiertype](https://developer.apple.com/documentation/foundation/locale/identifiertype)

# Locale.IdentifierType

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type that indicates the standard that defines a locale’s identifier.

## Declaration

```swift
enum IdentifierType
```

## Topics

### Standard Identifier Types

- [Locale.IdentifierType.icu](identifiertype/icu.md): The type of identifiers that follow ICU (International Components for Unicode) conventions.
- [Locale.IdentifierType.cldr](identifiertype/cldr.md): The type of identifiers that follow CLDR (Common Locale Data Repository) conventions.
- [Locale.IdentifierType.bcp47](identifiertype/bcp47.md): The type of BCP 47 language identifiers.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Converting between identifiers

- [canonicalIdentifier(from:)](canonicalidentifier%28from_%29.md): Deprecated. Returns a canonical identifier from the given string.
- [components(fromIdentifier:)](components%28fromidentifier_%29.md): Deprecated. Returns a dictionary that splits an identifier into its component pieces.
- [identifier(fromComponents:)](identifier%28fromcomponents_%29.md): Constructs an identifier from a dictionary of components.
- [identifier(\_:from:)](identifier%28__from_%29.md): Returns the identifier conforming to the specified standard for the specified string.
- [canonicalLanguageIdentifier(from:)](canonicallanguageidentifier%28from_%29.md): Returns a canonical language identifier from the given string.
- [identifier(fromWindowsLocaleCode:)](identifier%28fromwindowslocalecode_%29.md): Returns the locale identifier from a given Windows locale code, or `nil` if it could not be converted.
- [windowsLocaleCode(fromIdentifier:)](windowslocalecode%28fromidentifier_%29.md): Returns the Windows locale code from a given identifier, or `nil` if it could not be converted.
