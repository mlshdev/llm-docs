> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cflocale](https://developer.apple.com/documentation/corefoundation/cflocale)

# CFLocale (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFLocale
```

<a id="Overview"></a>

## Overview

Unicode operations such as collation and text boundary determination can be affected by the conventions of a particular language or region. CFLocale objects specify language-specific or region-specific information for locale-sensitive operations.

The CFLocale opaque type provides support for obtaining available locales, obtaining localized locale names, and converting among locale data formats. Locale identifiers in macOS follow the IETF’s [BCP 47](http://www.rfc-editor.org/rfc/bcp/bcp47.txt). CFLocale never uses Script Manager codes (except for the legacy support provided by [CFLocaleCreateCanonicalLocaleIdentifierFromScriptManagerCodes(\_:\_:\_:)](cflocalecreatecanonicallocaleidentifierfromscriptmanagercodes%28______%29.md))—the Script Manager and all its concepts are deprecated.

For more information on locale identifiers, read [Internationalization and Localization Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/Introduction/Introduction.html#//apple_ref/doc/uid/10000171i). It is also useful to read the ICU’s [User Guide for the Locale Class](http://icu-project.org/userguide/locale.html).

CFLocale is “toll-free bridged” with its Cocoa Foundation counterpart, [NSLocale](../foundation/nslocale.md). This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSLocale *` parameter, you can pass in a `CFLocaleRef`, and in a function where you see a `CFLocaleRef` parameter, you can pass in an `NSLocale` instance. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating a Locale

- [CFLocaleCopyCurrent()](cflocalecopycurrent%28%29.md): Returns a copy of the logical locale for the current user.
- [CFLocaleCreate(\_:\_:)](cflocalecreate%28____%29.md): Creates a locale for the given arbitrary locale identifier.
- [CFLocaleCreateCopy(\_:\_:)](cflocalecreatecopy%28____%29.md): Returns a copy of a locale.
- [CFLocaleGetSystem()](cflocalegetsystem%28%29.md): Returns the root, canonical locale.

### Getting System Locale Information

- [CFLocaleCopyAvailableLocaleIdentifiers()](cflocalecopyavailablelocaleidentifiers%28%29.md): Returns an array of CFString objects that represents all locales for which locale data is available.

### Getting ISO Information

- [CFLocaleCopyISOCountryCodes()](cflocalecopyisocountrycodes%28%29.md): Returns an array of CFString objects that represents all known legal ISO country codes.
- [CFLocaleCopyISOLanguageCodes()](cflocalecopyisolanguagecodes%28%29.md): Returns an array of CFString objects that represents all known legal ISO language codes.
- [CFLocaleCopyISOCurrencyCodes()](cflocalecopyisocurrencycodes%28%29.md): Returns an array of CFString objects that represents all known legal ISO currency codes.
- [CFLocaleCopyCommonISOCurrencyCodes()](cflocalecopycommonisocurrencycodes%28%29.md): Returns an array of strings that represents ISO currency codes for currencies in common use.

### Language Preferences

- [CFLocaleCopyPreferredLanguages()](cflocalecopypreferredlanguages%28%29.md): Returns the array of canonicalized language IDs that the user prefers.

### Getting Information About a Locale

- [CFLocaleCopyDisplayNameForPropertyValue(\_:\_:\_:)](cflocalecopydisplaynameforpropertyvalue%28______%29.md): Returns the display name for the given value.
- [CFLocaleGetValue(\_:\_:)](cflocalegetvalue%28____%29.md): Returns the corresponding value for the given key of a locale’s key-value pair.
- [CFLocaleGetIdentifier(\_:)](cflocalegetidentifier%28__%29.md): Returns the given locale’s identifier.

### Getting and Creating Locale Identifiers

- [CFLocaleCreateCanonicalLocaleIdentifierFromScriptManagerCodes(\_:\_:\_:)](cflocalecreatecanonicallocaleidentifierfromscriptmanagercodes%28______%29.md): Returns a canonical locale identifier from given language and region codes.
- [CFLocaleCreateCanonicalLanguageIdentifierFromString(\_:\_:)](cflocalecreatecanonicallanguageidentifierfromstring%28____%29.md): Returns a canonical language identifier by mapping an arbitrary locale identification string to the canonical identifier
- [CFLocaleCreateCanonicalLocaleIdentifierFromString(\_:\_:)](cflocalecreatecanonicallocaleidentifierfromstring%28____%29.md): Returns a canonical locale identifier by mapping an arbitrary locale identification string to the canonical identifier.
- [CFLocaleCreateComponentsFromLocaleIdentifier(\_:\_:)](cflocalecreatecomponentsfromlocaleidentifier%28____%29.md): Returns a dictionary containing the result from parsing a locale ID consisting of language, script, country or region, variant, and keyword/value pairs.
- [CFLocaleCreateLocaleIdentifierFromComponents(\_:\_:)](cflocalecreatelocaleidentifierfromcomponents%28____%29.md): Returns a locale identifier consisting of language, script, country or region, variant, and keyword/value pairs derived from a dictionary containing the source information.
- [CFLocaleCreateLocaleIdentifierFromWindowsLocaleCode(\_:\_:)](cflocalecreatelocaleidentifierfromwindowslocalecode%28____%29.md): Returns a locale identifier from a Windows locale code.
- [CFLocaleGetWindowsLocaleCodeFromLocaleIdentifier(\_:)](cflocalegetwindowslocalecodefromlocaleidentifier%28__%29.md): Returns a Windows locale code from the locale identifier.

### Getting Line and Character Direction for a Language

- [CFLocaleGetLanguageCharacterDirection(\_:)](cflocalegetlanguagecharacterdirection%28__%29.md): Returns the character direction for the specified ISO language code.
- [CFLocaleGetLanguageLineDirection(\_:)](cflocalegetlanguagelinedirection%28__%29.md): Returns the line direction for the specified ISO language code.

### Getting the CFLocale Type ID

- [CFLocaleGetTypeID()](cflocalegettypeid%28%29.md): Returns the type identifier for the CFLocale opaque type.

### Constants

- [CFLocaleLanguageDirection](cflocalelanguagedirection.md): These constants describe the text direction for a language. They are returned by the functions [CFLocaleGetLanguageCharacterDirection(\_:)](cflocalegetlanguagecharacterdirection%28__%29.md) and [CFLocaleGetLanguageLineDirection(\_:)](cflocalegetlanguagelinedirection%28__%29.md).
- [Locale Property Keys](locale-property-keys.md): Predefined locale keys used to get property values.
- [Locale Calendar Identifiers](locale-calendar-identifiers.md): Predefined locale keys used to get calendar values—values for `kCFLocaleCalendarIdentifier`.
- [Locale Change Notification](locale-change-notification.md): Identifier for notification sent if the current locale changes.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [Internationalization and Localization Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/Introduction/Introduction.html#//apple_ref/doc/uid/10000171i)

### Opaque Types

- [CFAllocator](cfallocator.md)
- [CFArray](cfarray.md)
- [CFAttributedString](cfattributedstring.md)
- [CFBag](cfbag.md)
- [CFBinaryHeap](cfbinaryheap.md)
- [CFBitVector](cfbitvector.md)
- [CFBoolean](cfboolean.md)
- [CFBundle](cfbundle.md)
- [CFCalendar](cfcalendar.md)
- [CFCharacterSet](cfcharacterset.md)
- [CFData](cfdata.md)
- [CFDate](cfdate.md)
- [CFDateFormatter](cfdateformatter.md)
- [CFDictionary](cfdictionary.md)
- [CFError](cferror.md)

# CFLocaleRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef const struct __CFLocale * CFLocaleRef;
```

<a id="Overview"></a>

## Overview

Unicode operations such as collation and text boundary determination can be affected by the conventions of a particular language or region. CFLocale objects specify language-specific or region-specific information for locale-sensitive operations.

The CFLocale opaque type provides support for obtaining available locales, obtaining localized locale names, and converting among locale data formats. Locale identifiers in macOS follow the IETF’s [BCP 47](http://www.rfc-editor.org/rfc/bcp/bcp47.txt). CFLocale never uses Script Manager codes (except for the legacy support provided by [CFLocaleCreateCanonicalLocaleIdentifierFromScriptManagerCodes](cflocalecreatecanonicallocaleidentifierfromscriptmanagercodes%28______%29.md))—the Script Manager and all its concepts are deprecated.

For more information on locale identifiers, read [Internationalization and Localization Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/Introduction/Introduction.html#//apple_ref/doc/uid/10000171i). It is also useful to read the ICU’s [User Guide for the Locale Class](http://icu-project.org/userguide/locale.html).

CFLocale is “toll-free bridged” with its Cocoa Foundation counterpart, [NSLocale](../foundation/nslocale.md). This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSLocale *` parameter, you can pass in a `CFLocaleRef`, and in a function where you see a `CFLocaleRef` parameter, you can pass in an `NSLocale` instance. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating a Locale

- [CFLocaleCopyCurrent](cflocalecopycurrent%28%29.md): Returns a copy of the logical locale for the current user.
- [CFLocaleCreate](cflocalecreate%28____%29.md): Creates a locale for the given arbitrary locale identifier.
- [CFLocaleCreateCopy](cflocalecreatecopy%28____%29.md): Returns a copy of a locale.
- [CFLocaleGetSystem](cflocalegetsystem%28%29.md): Returns the root, canonical locale.

### Getting System Locale Information

- [CFLocaleCopyAvailableLocaleIdentifiers](cflocalecopyavailablelocaleidentifiers%28%29.md): Returns an array of CFString objects that represents all locales for which locale data is available.

### Getting ISO Information

- [CFLocaleCopyISOCountryCodes](cflocalecopyisocountrycodes%28%29.md): Returns an array of CFString objects that represents all known legal ISO country codes.
- [CFLocaleCopyISOLanguageCodes](cflocalecopyisolanguagecodes%28%29.md): Returns an array of CFString objects that represents all known legal ISO language codes.
- [CFLocaleCopyISOCurrencyCodes](cflocalecopyisocurrencycodes%28%29.md): Returns an array of CFString objects that represents all known legal ISO currency codes.
- [CFLocaleCopyCommonISOCurrencyCodes](cflocalecopycommonisocurrencycodes%28%29.md): Returns an array of strings that represents ISO currency codes for currencies in common use.

### Language Preferences

- [CFLocaleCopyPreferredLanguages](cflocalecopypreferredlanguages%28%29.md): Returns the array of canonicalized language IDs that the user prefers.

### Getting Information About a Locale

- [CFLocaleCopyDisplayNameForPropertyValue](cflocalecopydisplaynameforpropertyvalue%28______%29.md): Returns the display name for the given value.
- [CFLocaleGetValue](cflocalegetvalue%28____%29.md): Returns the corresponding value for the given key of a locale’s key-value pair.
- [CFLocaleGetIdentifier](cflocalegetidentifier%28__%29.md): Returns the given locale’s identifier.

### Getting and Creating Locale Identifiers

- [CFLocaleCreateCanonicalLocaleIdentifierFromScriptManagerCodes](cflocalecreatecanonicallocaleidentifierfromscriptmanagercodes%28______%29.md): Returns a canonical locale identifier from given language and region codes.
- [CFLocaleCreateCanonicalLanguageIdentifierFromString](cflocalecreatecanonicallanguageidentifierfromstring%28____%29.md): Returns a canonical language identifier by mapping an arbitrary locale identification string to the canonical identifier
- [CFLocaleCreateCanonicalLocaleIdentifierFromString](cflocalecreatecanonicallocaleidentifierfromstring%28____%29.md): Returns a canonical locale identifier by mapping an arbitrary locale identification string to the canonical identifier.
- [CFLocaleCreateComponentsFromLocaleIdentifier](cflocalecreatecomponentsfromlocaleidentifier%28____%29.md): Returns a dictionary containing the result from parsing a locale ID consisting of language, script, country or region, variant, and keyword/value pairs.
- [CFLocaleCreateLocaleIdentifierFromComponents](cflocalecreatelocaleidentifierfromcomponents%28____%29.md): Returns a locale identifier consisting of language, script, country or region, variant, and keyword/value pairs derived from a dictionary containing the source information.
- [CFLocaleCreateLocaleIdentifierFromWindowsLocaleCode](cflocalecreatelocaleidentifierfromwindowslocalecode%28____%29.md): Returns a locale identifier from a Windows locale code.
- [CFLocaleGetWindowsLocaleCodeFromLocaleIdentifier](cflocalegetwindowslocalecodefromlocaleidentifier%28__%29.md): Returns a Windows locale code from the locale identifier.

### Getting Line and Character Direction for a Language

- [CFLocaleGetLanguageCharacterDirection](cflocalegetlanguagecharacterdirection%28__%29.md): Returns the character direction for the specified ISO language code.
- [CFLocaleGetLanguageLineDirection](cflocalegetlanguagelinedirection%28__%29.md): Returns the line direction for the specified ISO language code.

### Getting the CFLocale Type ID

- [CFLocaleGetTypeID](cflocalegettypeid%28%29.md): Returns the type identifier for the CFLocale opaque type.

### Constants

- [CFLocaleLanguageDirection](cflocalelanguagedirection.md): These constants describe the text direction for a language. They are returned by the functions [CFLocaleGetLanguageCharacterDirection](cflocalegetlanguagecharacterdirection%28__%29.md) and [CFLocaleGetLanguageLineDirection](cflocalegetlanguagelinedirection%28__%29.md).
- [Locale Property Keys](locale-property-keys.md): Predefined locale keys used to get property values.
- [Locale Calendar Identifiers](locale-calendar-identifiers.md): Predefined locale keys used to get calendar values—values for `kCFLocaleCalendarIdentifier`.
- [Locale Change Notification](locale-change-notification.md): Identifier for notification sent if the current locale changes.

## See Also

### Related Documentation

- [Internationalization and Localization Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/Introduction/Introduction.html#//apple_ref/doc/uid/10000171i)

### Opaque Types

- [CFAllocatorRef](cfallocator.md)
- [CFArrayRef](cfarray.md)
- [CFAttributedStringRef](cfattributedstring.md)
- [CFBagRef](cfbag.md)
- [CFBinaryHeapRef](cfbinaryheap.md)
- [CFBitVectorRef](cfbitvector.md)
- [CFBooleanRef](cfboolean.md)
- [CFBundleRef](cfbundle.md)
- [CFCalendarRef](cfcalendar.md)
- [CFCharacterSetRef](cfcharacterset.md)
- [CFDataRef](cfdata.md)
- [CFDateRef](cfdate.md)
- [CFDateFormatterRef](cfdateformatter.md)
- [CFDictionaryRef](cfdictionary.md)
- [CFErrorRef](cferror.md)
