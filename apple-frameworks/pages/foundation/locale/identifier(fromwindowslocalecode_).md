> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/identifier(fromwindowslocalecode:)](https://developer.apple.com/documentation/foundation/locale/identifier(fromwindowslocalecode:))

# identifier(fromWindowsLocaleCode:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the locale identifier from a given Windows locale code, or `nil` if it could not be converted.

## Declaration

```swift
static func identifier(fromWindowsLocaleCode code: Int) -> String?
```

## See Also

### Converting between identifiers

- [canonicalIdentifier(from:)](canonicalidentifier%28from_%29.md): Deprecated. Returns a canonical identifier from the given string.
- [components(fromIdentifier:)](components%28fromidentifier_%29.md): Deprecated. Returns a dictionary that splits an identifier into its component pieces.
- [identifier(fromComponents:)](identifier%28fromcomponents_%29.md): Constructs an identifier from a dictionary of components.
- [identifier(\_:from:)](identifier%28__from_%29.md): Returns the identifier conforming to the specified standard for the specified string.
- [Locale.IdentifierType](identifiertype.md): A type that indicates the standard that defines a locale’s identifier.
- [canonicalLanguageIdentifier(from:)](canonicallanguageidentifier%28from_%29.md): Returns a canonical language identifier from the given string.
- [windowsLocaleCode(fromIdentifier:)](windowslocalecode%28fromidentifier_%29.md): Returns the Windows locale code from a given identifier, or `nil` if it could not be converted.
