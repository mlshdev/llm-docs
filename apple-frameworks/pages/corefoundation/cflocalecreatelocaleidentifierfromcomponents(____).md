> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cflocalecreatelocaleidentifierfromcomponents(_:_:)](https://developer.apple.com/documentation/corefoundation/cflocalecreatelocaleidentifierfromcomponents(_:_:))

# CFLocaleCreateLocaleIdentifierFromComponents(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a locale identifier consisting of language, script, country or region, variant, and keyword/value pairs derived from a dictionary containing the source information.

## Declaration

```swift
func CFLocaleCreateLocaleIdentifierFromComponents(_ allocator: CFAllocator!, _ dictionary: CFDictionary!) -> CFLocaleIdentifier!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `dictionary`: The dictionary to use when creating the locale identifier.

<a id="return-value"></a>

## Return Value

A locale identifier consisting of language, script, country or region, variant, and keyword/value pairs derived from `dictionary`. Returns `NULL` if there was a problem creating the string. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Reverses the actions of [CFLocaleCreateComponentsFromLocaleIdentifier(\_:\_:)](cflocalecreatecomponentsfromlocaleidentifier%28____%29.md), creating a single string from the data in the specified dictionary. For example, the dictionary {```kCFLocaleLanguageCode``=en``,``` ```kCFLocaleCountryCode``=US``,``` ```kCFLocaleCalendarIdentifier``=``kCFJapaneseCalendar``}``` becomes `"en_US@calendar=japanese"`.

## See Also

### Getting and Creating Locale Identifiers

- [CFLocaleCreateCanonicalLocaleIdentifierFromScriptManagerCodes(\_:\_:\_:)](cflocalecreatecanonicallocaleidentifierfromscriptmanagercodes%28______%29.md): Returns a canonical locale identifier from given language and region codes.
- [CFLocaleCreateCanonicalLanguageIdentifierFromString(\_:\_:)](cflocalecreatecanonicallanguageidentifierfromstring%28____%29.md): Returns a canonical language identifier by mapping an arbitrary locale identification string to the canonical identifier
- [CFLocaleCreateCanonicalLocaleIdentifierFromString(\_:\_:)](cflocalecreatecanonicallocaleidentifierfromstring%28____%29.md): Returns a canonical locale identifier by mapping an arbitrary locale identification string to the canonical identifier.
- [CFLocaleCreateComponentsFromLocaleIdentifier(\_:\_:)](cflocalecreatecomponentsfromlocaleidentifier%28____%29.md): Returns a dictionary containing the result from parsing a locale ID consisting of language, script, country or region, variant, and keyword/value pairs.
- [CFLocaleCreateLocaleIdentifierFromWindowsLocaleCode(\_:\_:)](cflocalecreatelocaleidentifierfromwindowslocalecode%28____%29.md): Returns a locale identifier from a Windows locale code.
- [CFLocaleGetWindowsLocaleCodeFromLocaleIdentifier(\_:)](cflocalegetwindowslocalecodefromlocaleidentifier%28__%29.md): Returns a Windows locale code from the locale identifier.

# CFLocaleCreateLocaleIdentifierFromComponents (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a locale identifier consisting of language, script, country or region, variant, and keyword/value pairs derived from a dictionary containing the source information.

## Declaration

```objectivec
extern CFLocaleIdentifierCFLocaleCreateLocaleIdentifierFromComponents(CFAllocatorRef allocator, CFDictionaryRef dictionary);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `dictionary`: The dictionary to use when creating the locale identifier.

<a id="return-value"></a>

## Return Value

A locale identifier consisting of language, script, country or region, variant, and keyword/value pairs derived from `dictionary`. Returns `NULL` if there was a problem creating the string. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Reverses the actions of [CFLocaleCreateComponentsFromLocaleIdentifier](cflocalecreatecomponentsfromlocaleidentifier%28____%29.md), creating a single string from the data in the specified dictionary. For example, the dictionary {```kCFLocaleLanguageCode``=en``,``` ```kCFLocaleCountryCode``=US``,``` ```kCFLocaleCalendarIdentifier``=``kCFJapaneseCalendar``}``` becomes `"en_US@calendar=japanese"`.

## See Also

### Getting and Creating Locale Identifiers

- [CFLocaleCreateCanonicalLocaleIdentifierFromScriptManagerCodes](cflocalecreatecanonicallocaleidentifierfromscriptmanagercodes%28______%29.md): Returns a canonical locale identifier from given language and region codes.
- [CFLocaleCreateCanonicalLanguageIdentifierFromString](cflocalecreatecanonicallanguageidentifierfromstring%28____%29.md): Returns a canonical language identifier by mapping an arbitrary locale identification string to the canonical identifier
- [CFLocaleCreateCanonicalLocaleIdentifierFromString](cflocalecreatecanonicallocaleidentifierfromstring%28____%29.md): Returns a canonical locale identifier by mapping an arbitrary locale identification string to the canonical identifier.
- [CFLocaleCreateComponentsFromLocaleIdentifier](cflocalecreatecomponentsfromlocaleidentifier%28____%29.md): Returns a dictionary containing the result from parsing a locale ID consisting of language, script, country or region, variant, and keyword/value pairs.
- [CFLocaleCreateLocaleIdentifierFromWindowsLocaleCode](cflocalecreatelocaleidentifierfromwindowslocalecode%28____%29.md): Returns a locale identifier from a Windows locale code.
- [CFLocaleGetWindowsLocaleCodeFromLocaleIdentifier](cflocalegetwindowslocalecodefromlocaleidentifier%28__%29.md): Returns a Windows locale code from the locale identifier.
