> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/components(fromidentifier:)](https://developer.apple.com/documentation/foundation/locale/components(fromidentifier:))

# components(fromIdentifier:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 8.0+ (deprecated in 16.0) · macOS 10.10+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ · watchOS 2.0+ (deprecated in 9.0)

Returns a dictionary that splits an identifier into its component pieces.

> Use \`Locale.Components(identifier:)\` to access components

## Declaration

```swift
static func components(fromIdentifier string: String) -> [String : String]
```

## See Also

### Converting between identifiers

- [canonicalIdentifier(from:)](canonicalidentifier%28from_%29.md): Deprecated. Returns a canonical identifier from the given string.
- [identifier(fromComponents:)](identifier%28fromcomponents_%29.md): Constructs an identifier from a dictionary of components.
- [identifier(\_:from:)](identifier%28__from_%29.md): Returns the identifier conforming to the specified standard for the specified string.
- [Locale.IdentifierType](identifiertype.md): A type that indicates the standard that defines a locale’s identifier.
- [canonicalLanguageIdentifier(from:)](canonicallanguageidentifier%28from_%29.md): Returns a canonical language identifier from the given string.
- [identifier(fromWindowsLocaleCode:)](identifier%28fromwindowslocalecode_%29.md): Returns the locale identifier from a given Windows locale code, or `nil` if it could not be converted.
- [windowsLocaleCode(fromIdentifier:)](windowslocalecode%28fromidentifier_%29.md): Returns the Windows locale code from a given identifier, or `nil` if it could not be converted.
