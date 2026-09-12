> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/identifier(_:from:)](https://developer.apple.com/documentation/foundation/locale/identifier(_:from:))

# identifier(\_:from:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the identifier conforming to the specified standard for the specified string.

## Declaration

```swift
static func identifier(_ type: Locale.IdentifierType, from string: String) -> String
```

## Parameters

- `type`: The identifier type used by `string`, such as [Locale.IdentifierType.icu](identifiertype/icu.md) or [Locale.IdentifierType.bcp47](identifiertype/bcp47.md).
- `string`: An identifier string that complies with the standard indicated by `type`.

<a id="return-value"></a>

## Return Value

A locale identifier.

## See Also

### Converting between identifiers

- [canonicalIdentifier(from:)](canonicalidentifier%28from_%29.md): Deprecated. Returns a canonical identifier from the given string.
- [components(fromIdentifier:)](components%28fromidentifier_%29.md): Deprecated. Returns a dictionary that splits an identifier into its component pieces.
- [identifier(fromComponents:)](identifier%28fromcomponents_%29.md): Constructs an identifier from a dictionary of components.
- [Locale.IdentifierType](identifiertype.md): A type that indicates the standard that defines a locale’s identifier.
- [canonicalLanguageIdentifier(from:)](canonicallanguageidentifier%28from_%29.md): Returns a canonical language identifier from the given string.
- [identifier(fromWindowsLocaleCode:)](identifier%28fromwindowslocalecode_%29.md): Returns the locale identifier from a given Windows locale code, or `nil` if it could not be converted.
- [windowsLocaleCode(fromIdentifier:)](windowslocalecode%28fromidentifier_%29.md): Returns the Windows locale code from a given identifier, or `nil` if it could not be converted.
