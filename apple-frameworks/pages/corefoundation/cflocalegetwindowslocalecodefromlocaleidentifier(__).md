> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cflocalegetwindowslocalecodefromlocaleidentifier(_:)](https://developer.apple.com/documentation/corefoundation/cflocalegetwindowslocalecodefromlocaleidentifier(_:))

# CFLocaleGetWindowsLocaleCodeFromLocaleIdentifier(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Windows locale code from the locale identifier.

## Declaration

```swift
func CFLocaleGetWindowsLocaleCodeFromLocaleIdentifier(_ localeIdentifier: CFLocaleIdentifier!) -> UInt32
```

## Parameters

- `localeIdentifier`: The locale identifier.

<a id="return-value"></a>

## Return Value

The Windows locale code.

## See Also

### Getting and Creating Locale Identifiers

- [CFLocaleCreateCanonicalLocaleIdentifierFromScriptManagerCodes(\_:\_:\_:)](cflocalecreatecanonicallocaleidentifierfromscriptmanagercodes%28______%29.md): Returns a canonical locale identifier from given language and region codes.
- [CFLocaleCreateCanonicalLanguageIdentifierFromString(\_:\_:)](cflocalecreatecanonicallanguageidentifierfromstring%28____%29.md): Returns a canonical language identifier by mapping an arbitrary locale identification string to the canonical identifier
- [CFLocaleCreateCanonicalLocaleIdentifierFromString(\_:\_:)](cflocalecreatecanonicallocaleidentifierfromstring%28____%29.md): Returns a canonical locale identifier by mapping an arbitrary locale identification string to the canonical identifier.
- [CFLocaleCreateComponentsFromLocaleIdentifier(\_:\_:)](cflocalecreatecomponentsfromlocaleidentifier%28____%29.md): Returns a dictionary containing the result from parsing a locale ID consisting of language, script, country or region, variant, and keyword/value pairs.
- [CFLocaleCreateLocaleIdentifierFromComponents(\_:\_:)](cflocalecreatelocaleidentifierfromcomponents%28____%29.md): Returns a locale identifier consisting of language, script, country or region, variant, and keyword/value pairs derived from a dictionary containing the source information.
- [CFLocaleCreateLocaleIdentifierFromWindowsLocaleCode(\_:\_:)](cflocalecreatelocaleidentifierfromwindowslocalecode%28____%29.md): Returns a locale identifier from a Windows locale code.

# CFLocaleGetWindowsLocaleCodeFromLocaleIdentifier (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Windows locale code from the locale identifier.

## Declaration

```objectivec
extern uint32_t CFLocaleGetWindowsLocaleCodeFromLocaleIdentifier(CFLocaleIdentifier localeIdentifier);
```

## Parameters

- `localeIdentifier`: The locale identifier.

<a id="return-value"></a>

## Return Value

The Windows locale code.

## See Also

### Getting and Creating Locale Identifiers

- [CFLocaleCreateCanonicalLocaleIdentifierFromScriptManagerCodes](cflocalecreatecanonicallocaleidentifierfromscriptmanagercodes%28______%29.md): Returns a canonical locale identifier from given language and region codes.
- [CFLocaleCreateCanonicalLanguageIdentifierFromString](cflocalecreatecanonicallanguageidentifierfromstring%28____%29.md): Returns a canonical language identifier by mapping an arbitrary locale identification string to the canonical identifier
- [CFLocaleCreateCanonicalLocaleIdentifierFromString](cflocalecreatecanonicallocaleidentifierfromstring%28____%29.md): Returns a canonical locale identifier by mapping an arbitrary locale identification string to the canonical identifier.
- [CFLocaleCreateComponentsFromLocaleIdentifier](cflocalecreatecomponentsfromlocaleidentifier%28____%29.md): Returns a dictionary containing the result from parsing a locale ID consisting of language, script, country or region, variant, and keyword/value pairs.
- [CFLocaleCreateLocaleIdentifierFromComponents](cflocalecreatelocaleidentifierfromcomponents%28____%29.md): Returns a locale identifier consisting of language, script, country or region, variant, and keyword/value pairs derived from a dictionary containing the source information.
- [CFLocaleCreateLocaleIdentifierFromWindowsLocaleCode](cflocalecreatelocaleidentifierfromwindowslocalecode%28____%29.md): Returns a locale identifier from a Windows locale code.
