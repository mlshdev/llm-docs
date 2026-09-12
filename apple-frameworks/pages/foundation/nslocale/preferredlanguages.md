> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocale/preferredlanguages](https://developer.apple.com/documentation/foundation/nslocale/preferredlanguages)

# preferredLanguages (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An ordered list of the user’s preferred languages.

## Declaration

```swift
class var preferredLanguages: [String] { get }
```

<a id="Discussion"></a>

## Discussion

Users choose a primary language when configuring a device, as described in [Reviewing Language and Region Settings](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/SpecifyingPreferences/SpecifyingPreferences.html#//apple_ref/doc/uid/10000171i-CH12). They may also specify one or more secondary languages in order of preference for use when localization is unavailable in a higher priority language. Use this property to obtain the current user’s ordered list of languages, presented as an array of locale identifier strings.

For more information about language localization in your app, see [Language and Locale IDs](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html#//apple_ref/doc/uid/10000171i-CH15).

# preferredLanguages (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An ordered list of the user’s preferred languages.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<NSString *> * preferredLanguages;
```

<a id="Discussion"></a>

## Discussion

Users choose a primary language when configuring a device, as described in [Reviewing Language and Region Settings](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/SpecifyingPreferences/SpecifyingPreferences.html#//apple_ref/doc/uid/10000171i-CH12). They may also specify one or more secondary languages in order of preference for use when localization is unavailable in a higher priority language. Use this property to obtain the current user’s ordered list of languages, presented as an array of locale identifier strings.

For more information about language localization in your app, see [Language and Locale IDs](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html#//apple_ref/doc/uid/10000171i-CH15).
