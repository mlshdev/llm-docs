> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cflocalecreatecanonicallanguageidentifierfromstring(_:_:)](https://developer.apple.com/documentation/corefoundation/cflocalecreatecanonicallanguageidentifierfromstring(_:_:))

# CFLocaleCreateCanonicalLanguageIdentifierFromString(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a canonical language identifier by mapping an arbitrary locale identification string to the canonical identifier

## Declaration

```swift
func CFLocaleCreateCanonicalLanguageIdentifierFromString(_ allocator: CFAllocator!, _ localeIdentifier: CFString!) -> CFLocaleIdentifier!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `localeIdentifier`: A string representation of an arbitrary locale identifier.

<a id="return-value"></a>

## Return Value

A string that represents the canonical language identifier for the specified arbitrary locale identifier. Returns `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Getting and Creating Locale Identifiers

- [CFLocaleCreateCanonicalLocaleIdentifierFromScriptManagerCodes(\_:\_:\_:)](cflocalecreatecanonicallocaleidentifierfromscriptmanagercodes%28______%29.md): Returns a canonical locale identifier from given language and region codes.
- [CFLocaleCreateCanonicalLocaleIdentifierFromString(\_:\_:)](cflocalecreatecanonicallocaleidentifierfromstring%28____%29.md): Returns a canonical locale identifier by mapping an arbitrary locale identification string to the canonical identifier.
- [CFLocaleCreateComponentsFromLocaleIdentifier(\_:\_:)](cflocalecreatecomponentsfromlocaleidentifier%28____%29.md): Returns a dictionary containing the result from parsing a locale ID consisting of language, script, country or region, variant, and keyword/value pairs.
- [CFLocaleCreateLocaleIdentifierFromComponents(\_:\_:)](cflocalecreatelocaleidentifierfromcomponents%28____%29.md): Returns a locale identifier consisting of language, script, country or region, variant, and keyword/value pairs derived from a dictionary containing the source information.
- [CFLocaleCreateLocaleIdentifierFromWindowsLocaleCode(\_:\_:)](cflocalecreatelocaleidentifierfromwindowslocalecode%28____%29.md): Returns a locale identifier from a Windows locale code.
- [CFLocaleGetWindowsLocaleCodeFromLocaleIdentifier(\_:)](cflocalegetwindowslocalecodefromlocaleidentifier%28__%29.md): Returns a Windows locale code from the locale identifier.

# CFLocaleCreateCanonicalLanguageIdentifierFromString (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a canonical language identifier by mapping an arbitrary locale identification string to the canonical identifier

## Declaration

```objectivec
extern CFLocaleIdentifierCFLocaleCreateCanonicalLanguageIdentifierFromString(CFAllocatorRef allocator, CFStringRef localeIdentifier);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `localeIdentifier`: A string representation of an arbitrary locale identifier.

<a id="return-value"></a>

## Return Value

A string that represents the canonical language identifier for the specified arbitrary locale identifier. Returns `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Getting and Creating Locale Identifiers

- [CFLocaleCreateCanonicalLocaleIdentifierFromScriptManagerCodes](cflocalecreatecanonicallocaleidentifierfromscriptmanagercodes%28______%29.md): Returns a canonical locale identifier from given language and region codes.
- [CFLocaleCreateCanonicalLocaleIdentifierFromString](cflocalecreatecanonicallocaleidentifierfromstring%28____%29.md): Returns a canonical locale identifier by mapping an arbitrary locale identification string to the canonical identifier.
- [CFLocaleCreateComponentsFromLocaleIdentifier](cflocalecreatecomponentsfromlocaleidentifier%28____%29.md): Returns a dictionary containing the result from parsing a locale ID consisting of language, script, country or region, variant, and keyword/value pairs.
- [CFLocaleCreateLocaleIdentifierFromComponents](cflocalecreatelocaleidentifierfromcomponents%28____%29.md): Returns a locale identifier consisting of language, script, country or region, variant, and keyword/value pairs derived from a dictionary containing the source information.
- [CFLocaleCreateLocaleIdentifierFromWindowsLocaleCode](cflocalecreatelocaleidentifierfromwindowslocalecode%28____%29.md): Returns a locale identifier from a Windows locale code.
- [CFLocaleGetWindowsLocaleCodeFromLocaleIdentifier](cflocalegetwindowslocalecodefromlocaleidentifier%28__%29.md): Returns a Windows locale code from the locale identifier.
