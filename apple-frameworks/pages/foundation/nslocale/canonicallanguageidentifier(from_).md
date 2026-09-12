> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocale/canonicallanguageidentifier(from:)](https://developer.apple.com/documentation/foundation/nslocale/canonicallanguageidentifier(from:))

# canonicalLanguageIdentifier(from:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a canonical language identifier by mapping an arbitrary locale identification string to the canonical identifier.

## Declaration

```swift
class func canonicalLanguageIdentifier(from string: String) -> String
```

## Parameters

- `string`: A string representation of an arbitrary locale identifier.

<a id="return-value"></a>

## Return Value

A string that represents the canonical language identifier for the specified arbitrary locale identifier.

## See Also

### Converting Between Identifiers

- [canonicalLocaleIdentifier(from:)](canonicallocaleidentifier%28from_%29.md): Returns the canonical identifier for a given locale identification string.
- [components(fromLocaleIdentifier:)](components%28fromlocaleidentifier_%29.md): Returns a dictionary that is the result of parsing a locale ID.
- [localeIdentifier(fromComponents:)](localeidentifier%28fromcomponents_%29.md): Returns a locale identifier from the components specified in a given dictionary.
- [localeIdentifier(fromWindowsLocaleCode:)](localeidentifier%28fromwindowslocalecode_%29.md): Returns a locale identifier from a Windows locale code.
- [windowsLocaleCode(fromLocaleIdentifier:)](windowslocalecode%28fromlocaleidentifier_%29.md): Returns a Window locale code from the locale identifier.

# canonicalLanguageIdentifierFromString: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a canonical language identifier by mapping an arbitrary locale identification string to the canonical identifier.

## Declaration

```objectivec
+ (NSString *) canonicalLanguageIdentifierFromString:(NSString *) string;
```

## Parameters

- `string`: A string representation of an arbitrary locale identifier.

<a id="return-value"></a>

## Return Value

A string that represents the canonical language identifier for the specified arbitrary locale identifier.

## See Also

### Converting Between Identifiers

- [canonicalLocaleIdentifierFromString:](canonicallocaleidentifier%28from_%29.md): Returns the canonical identifier for a given locale identification string.
- [componentsFromLocaleIdentifier:](components%28fromlocaleidentifier_%29.md): Returns a dictionary that is the result of parsing a locale ID.
- [localeIdentifierFromComponents:](localeidentifier%28fromcomponents_%29.md): Returns a locale identifier from the components specified in a given dictionary.
- [localeIdentifierFromWindowsLocaleCode:](localeidentifier%28fromwindowslocalecode_%29.md): Returns a locale identifier from a Windows locale code.
- [windowsLocaleCodeFromLocaleIdentifier:](windowslocalecode%28fromlocaleidentifier_%29.md): Returns a Window locale code from the locale identifier.
