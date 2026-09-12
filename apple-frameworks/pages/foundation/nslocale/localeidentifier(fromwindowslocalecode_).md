> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocale/localeidentifier(fromwindowslocalecode:)](https://developer.apple.com/documentation/foundation/nslocale/localeidentifier(fromwindowslocalecode:))

# localeIdentifier(fromWindowsLocaleCode:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a locale identifier from a Windows locale code.

## Declaration

```swift
class func localeIdentifier(fromWindowsLocaleCode lcid: UInt32) -> String?
```

## Parameters

- `lcid`: The Windows locale code.

<a id="return-value"></a>

## Return Value

The locale identifier.

## See Also

### Converting Between Identifiers

- [canonicalLocaleIdentifier(from:)](canonicallocaleidentifier%28from_%29.md): Returns the canonical identifier for a given locale identification string.
- [components(fromLocaleIdentifier:)](components%28fromlocaleidentifier_%29.md): Returns a dictionary that is the result of parsing a locale ID.
- [localeIdentifier(fromComponents:)](localeidentifier%28fromcomponents_%29.md): Returns a locale identifier from the components specified in a given dictionary.
- [canonicalLanguageIdentifier(from:)](canonicallanguageidentifier%28from_%29.md): Returns a canonical language identifier by mapping an arbitrary locale identification string to the canonical identifier.
- [windowsLocaleCode(fromLocaleIdentifier:)](windowslocalecode%28fromlocaleidentifier_%29.md): Returns a Window locale code from the locale identifier.

# localeIdentifierFromWindowsLocaleCode: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a locale identifier from a Windows locale code.

## Declaration

```objectivec
+ (NSString *) localeIdentifierFromWindowsLocaleCode:(uint32_t) lcid;
```

## Parameters

- `lcid`: The Windows locale code.

<a id="return-value"></a>

## Return Value

The locale identifier.

## See Also

### Converting Between Identifiers

- [canonicalLocaleIdentifierFromString:](canonicallocaleidentifier%28from_%29.md): Returns the canonical identifier for a given locale identification string.
- [componentsFromLocaleIdentifier:](components%28fromlocaleidentifier_%29.md): Returns a dictionary that is the result of parsing a locale ID.
- [localeIdentifierFromComponents:](localeidentifier%28fromcomponents_%29.md): Returns a locale identifier from the components specified in a given dictionary.
- [canonicalLanguageIdentifierFromString:](canonicallanguageidentifier%28from_%29.md): Returns a canonical language identifier by mapping an arbitrary locale identification string to the canonical identifier.
- [windowsLocaleCodeFromLocaleIdentifier:](windowslocalecode%28fromlocaleidentifier_%29.md): Returns a Window locale code from the locale identifier.
