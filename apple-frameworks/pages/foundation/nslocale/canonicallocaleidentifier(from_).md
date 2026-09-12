> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocale/canonicallocaleidentifier(from:)](https://developer.apple.com/documentation/foundation/nslocale/canonicallocaleidentifier(from:))

# canonicalLocaleIdentifier(from:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the canonical identifier for a given locale identification string.

## Declaration

```swift
class func canonicalLocaleIdentifier(from string: String) -> String
```

## Parameters

- `string`: A locale identification string.

<a id="return-value"></a>

## Return Value

The canonical identifier for an the locale identified by `string`.

## See Also

### Converting Between Identifiers

- [components(fromLocaleIdentifier:)](components%28fromlocaleidentifier_%29.md): Returns a dictionary that is the result of parsing a locale ID.
- [localeIdentifier(fromComponents:)](localeidentifier%28fromcomponents_%29.md): Returns a locale identifier from the components specified in a given dictionary.
- [canonicalLanguageIdentifier(from:)](canonicallanguageidentifier%28from_%29.md): Returns a canonical language identifier by mapping an arbitrary locale identification string to the canonical identifier.
- [localeIdentifier(fromWindowsLocaleCode:)](localeidentifier%28fromwindowslocalecode_%29.md): Returns a locale identifier from a Windows locale code.
- [windowsLocaleCode(fromLocaleIdentifier:)](windowslocalecode%28fromlocaleidentifier_%29.md): Returns a Window locale code from the locale identifier.

# canonicalLocaleIdentifierFromString: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the canonical identifier for a given locale identification string.

## Declaration

```objectivec
+ (NSString *) canonicalLocaleIdentifierFromString:(NSString *) string;
```

## Parameters

- `string`: A locale identification string.

<a id="return-value"></a>

## Return Value

The canonical identifier for an the locale identified by `string`.

## See Also

### Converting Between Identifiers

- [componentsFromLocaleIdentifier:](components%28fromlocaleidentifier_%29.md): Returns a dictionary that is the result of parsing a locale ID.
- [localeIdentifierFromComponents:](localeidentifier%28fromcomponents_%29.md): Returns a locale identifier from the components specified in a given dictionary.
- [canonicalLanguageIdentifierFromString:](canonicallanguageidentifier%28from_%29.md): Returns a canonical language identifier by mapping an arbitrary locale identification string to the canonical identifier.
- [localeIdentifierFromWindowsLocaleCode:](localeidentifier%28fromwindowslocalecode_%29.md): Returns a locale identifier from a Windows locale code.
- [windowsLocaleCodeFromLocaleIdentifier:](windowslocalecode%28fromlocaleidentifier_%29.md): Returns a Window locale code from the locale identifier.
