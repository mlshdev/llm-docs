> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cflocalecreatecomponentsfromlocaleidentifier(_:_:)](https://developer.apple.com/documentation/corefoundation/cflocalecreatecomponentsfromlocaleidentifier(_:_:))

# CFLocaleCreateComponentsFromLocaleIdentifier(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a dictionary containing the result from parsing a locale ID consisting of language, script, country or region, variant, and keyword/value pairs.

## Declaration

```swift
func CFLocaleCreateComponentsFromLocaleIdentifier(_ allocator: CFAllocator!, _ localeID: CFLocaleIdentifier!) -> CFDictionary!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or `kCFAllocatorDefault` to use the current default allocator.
- `localeID`: The locale ID to use when creating the locale dictionary.

<a id="return-value"></a>

## Return Value

A dictionary containing the result from parsing a locale ID consisting of language, script, country or region, variant, and keyword/value pairs. Returns `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The dictionary keys are the constant CFString objects that correspond to the locale ID components; the values correspond to constants where available. For example: the string “en_US@calendar=japanese” yields a dictionary with three entries: ```kCFLocaleLanguageCode``=en```, ```kCFLocaleCountryCode``=US```, and ```kCFLocaleCalendarIdentifier``=``kCFJapaneseCalendar```. See also [CFLocaleCreateLocaleIdentifierFromComponents(\_:\_:)](cflocalecreatelocaleidentifierfromcomponents%28____%29.md).

## See Also

### Getting and Creating Locale Identifiers

- [CFLocaleCreateCanonicalLocaleIdentifierFromScriptManagerCodes(\_:\_:\_:)](cflocalecreatecanonicallocaleidentifierfromscriptmanagercodes%28______%29.md): Returns a canonical locale identifier from given language and region codes.
- [CFLocaleCreateCanonicalLanguageIdentifierFromString(\_:\_:)](cflocalecreatecanonicallanguageidentifierfromstring%28____%29.md): Returns a canonical language identifier by mapping an arbitrary locale identification string to the canonical identifier
- [CFLocaleCreateCanonicalLocaleIdentifierFromString(\_:\_:)](cflocalecreatecanonicallocaleidentifierfromstring%28____%29.md): Returns a canonical locale identifier by mapping an arbitrary locale identification string to the canonical identifier.
- [CFLocaleCreateLocaleIdentifierFromComponents(\_:\_:)](cflocalecreatelocaleidentifierfromcomponents%28____%29.md): Returns a locale identifier consisting of language, script, country or region, variant, and keyword/value pairs derived from a dictionary containing the source information.
- [CFLocaleCreateLocaleIdentifierFromWindowsLocaleCode(\_:\_:)](cflocalecreatelocaleidentifierfromwindowslocalecode%28____%29.md): Returns a locale identifier from a Windows locale code.
- [CFLocaleGetWindowsLocaleCodeFromLocaleIdentifier(\_:)](cflocalegetwindowslocalecodefromlocaleidentifier%28__%29.md): Returns a Windows locale code from the locale identifier.

# CFLocaleCreateComponentsFromLocaleIdentifier (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a dictionary containing the result from parsing a locale ID consisting of language, script, country or region, variant, and keyword/value pairs.

## Declaration

```objectivec
extern CFDictionaryRefCFLocaleCreateComponentsFromLocaleIdentifier(CFAllocatorRef allocator, CFLocaleIdentifier localeID);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or `kCFAllocatorDefault` to use the current default allocator.
- `localeID`: The locale ID to use when creating the locale dictionary.

<a id="return-value"></a>

## Return Value

A dictionary containing the result from parsing a locale ID consisting of language, script, country or region, variant, and keyword/value pairs. Returns `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The dictionary keys are the constant CFString objects that correspond to the locale ID components; the values correspond to constants where available. For example: the string “en_US@calendar=japanese” yields a dictionary with three entries: ```kCFLocaleLanguageCode``=en```, ```kCFLocaleCountryCode``=US```, and ```kCFLocaleCalendarIdentifier``=``kCFJapaneseCalendar```. See also [CFLocaleCreateLocaleIdentifierFromComponents](cflocalecreatelocaleidentifierfromcomponents%28____%29.md).

## See Also

### Getting and Creating Locale Identifiers

- [CFLocaleCreateCanonicalLocaleIdentifierFromScriptManagerCodes](cflocalecreatecanonicallocaleidentifierfromscriptmanagercodes%28______%29.md): Returns a canonical locale identifier from given language and region codes.
- [CFLocaleCreateCanonicalLanguageIdentifierFromString](cflocalecreatecanonicallanguageidentifierfromstring%28____%29.md): Returns a canonical language identifier by mapping an arbitrary locale identification string to the canonical identifier
- [CFLocaleCreateCanonicalLocaleIdentifierFromString](cflocalecreatecanonicallocaleidentifierfromstring%28____%29.md): Returns a canonical locale identifier by mapping an arbitrary locale identification string to the canonical identifier.
- [CFLocaleCreateLocaleIdentifierFromComponents](cflocalecreatelocaleidentifierfromcomponents%28____%29.md): Returns a locale identifier consisting of language, script, country or region, variant, and keyword/value pairs derived from a dictionary containing the source information.
- [CFLocaleCreateLocaleIdentifierFromWindowsLocaleCode](cflocalecreatelocaleidentifierfromwindowslocalecode%28____%29.md): Returns a locale identifier from a Windows locale code.
- [CFLocaleGetWindowsLocaleCodeFromLocaleIdentifier](cflocalegetwindowslocalecodefromlocaleidentifier%28__%29.md): Returns a Windows locale code from the locale identifier.
