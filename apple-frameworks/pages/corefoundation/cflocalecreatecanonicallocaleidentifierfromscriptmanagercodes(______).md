> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cflocalecreatecanonicallocaleidentifierfromscriptmanagercodes(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cflocalecreatecanonicallocaleidentifierfromscriptmanagercodes(_:_:_:))

# CFLocaleCreateCanonicalLocaleIdentifierFromScriptManagerCodes(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a canonical locale identifier from given language and region codes.

## Declaration

```swift
func CFLocaleCreateCanonicalLocaleIdentifierFromScriptManagerCodes(_ allocator: CFAllocator!, _ lcode: LangCode, _ rcode: RegionCode) -> CFLocaleIdentifier!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `lcode`: A macOS language code.
- `rcode`: A macOS region code.

<a id="return-value"></a>

## Return Value

A canonical locale identifier created by mapping `lcode` and `rcode` to a locale. Returns `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Getting and Creating Locale Identifiers

- [CFLocaleCreateCanonicalLanguageIdentifierFromString(\_:\_:)](cflocalecreatecanonicallanguageidentifierfromstring%28____%29.md): Returns a canonical language identifier by mapping an arbitrary locale identification string to the canonical identifier
- [CFLocaleCreateCanonicalLocaleIdentifierFromString(\_:\_:)](cflocalecreatecanonicallocaleidentifierfromstring%28____%29.md): Returns a canonical locale identifier by mapping an arbitrary locale identification string to the canonical identifier.
- [CFLocaleCreateComponentsFromLocaleIdentifier(\_:\_:)](cflocalecreatecomponentsfromlocaleidentifier%28____%29.md): Returns a dictionary containing the result from parsing a locale ID consisting of language, script, country or region, variant, and keyword/value pairs.
- [CFLocaleCreateLocaleIdentifierFromComponents(\_:\_:)](cflocalecreatelocaleidentifierfromcomponents%28____%29.md): Returns a locale identifier consisting of language, script, country or region, variant, and keyword/value pairs derived from a dictionary containing the source information.
- [CFLocaleCreateLocaleIdentifierFromWindowsLocaleCode(\_:\_:)](cflocalecreatelocaleidentifierfromwindowslocalecode%28____%29.md): Returns a locale identifier from a Windows locale code.
- [CFLocaleGetWindowsLocaleCodeFromLocaleIdentifier(\_:)](cflocalegetwindowslocalecodefromlocaleidentifier%28__%29.md): Returns a Windows locale code from the locale identifier.

# CFLocaleCreateCanonicalLocaleIdentifierFromScriptManagerCodes (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a canonical locale identifier from given language and region codes.

## Declaration

```objectivec
extern CFLocaleIdentifierCFLocaleCreateCanonicalLocaleIdentifierFromScriptManagerCodes(CFAllocatorRef allocator, LangCode lcode, RegionCode rcode);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `lcode`: A macOS language code.
- `rcode`: A macOS region code.

<a id="return-value"></a>

## Return Value

A canonical locale identifier created by mapping `lcode` and `rcode` to a locale. Returns `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Getting and Creating Locale Identifiers

- [CFLocaleCreateCanonicalLanguageIdentifierFromString](cflocalecreatecanonicallanguageidentifierfromstring%28____%29.md): Returns a canonical language identifier by mapping an arbitrary locale identification string to the canonical identifier
- [CFLocaleCreateCanonicalLocaleIdentifierFromString](cflocalecreatecanonicallocaleidentifierfromstring%28____%29.md): Returns a canonical locale identifier by mapping an arbitrary locale identification string to the canonical identifier.
- [CFLocaleCreateComponentsFromLocaleIdentifier](cflocalecreatecomponentsfromlocaleidentifier%28____%29.md): Returns a dictionary containing the result from parsing a locale ID consisting of language, script, country or region, variant, and keyword/value pairs.
- [CFLocaleCreateLocaleIdentifierFromComponents](cflocalecreatelocaleidentifierfromcomponents%28____%29.md): Returns a locale identifier consisting of language, script, country or region, variant, and keyword/value pairs derived from a dictionary containing the source information.
- [CFLocaleCreateLocaleIdentifierFromWindowsLocaleCode](cflocalecreatelocaleidentifierfromwindowslocalecode%28____%29.md): Returns a locale identifier from a Windows locale code.
- [CFLocaleGetWindowsLocaleCodeFromLocaleIdentifier](cflocalegetwindowslocalecodefromlocaleidentifier%28__%29.md): Returns a Windows locale code from the locale identifier.
