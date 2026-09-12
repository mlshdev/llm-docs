> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/macaptionappearanceaddselectedlanguage(_:_:)](https://developer.apple.com/documentation/mediaaccessibility/macaptionappearanceaddselectedlanguage(_:_:))

# MACaptionAppearanceAddSelectedLanguage(\_:\_:) (Swift)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Adds a preference for caption language to the stack of languages.

## Declaration

```swift
func MACaptionAppearanceAddSelectedLanguage(_ domain: MACaptionAppearanceDomain, _ language: CFString) -> Bool
```

## Parameters

- `domain`: The domain to retrieve the preference value from. See [MACaptionAppearanceDomain](macaptionappearancedomain.md). Pass [MACaptionAppearanceDomain.user](macaptionappearancedomain/user.md) unless the system defaults are needed for comparison.
- `language`: A canonical language identifier (see [CFLocale](../corefoundation/cflocale.md)) of the preferred caption language.

<a id="Return-Value"></a>

## Return Value

Returns `true` if addition was successful; `false` if an error occurred. Errors are most likely the result of invalid language codes.

<a id="Discussion"></a>

## Discussion

The added language will appear in the array returned by [MACaptionAppearanceCopySelectedLanguages(\_:)](macaptionappearancecopyselectedlanguages%28__%29.md). Call the `MACaptionAppearanceAddSelectedLanguage` function anytime a user selects a specific captioning language from a pop-up menu or other UI affordance. For example, an AVFoundation client may execute the following code:

```objc
 // in response to a user selection, make the selection effective
-[AVPlayerItem selectMediaOption:legibleOption inMediaSelectionGroup:legibleGroup];
 
// now update system-wide captioning preferences by registering the added language
MACaptionAppearanceAddSelectedLanguage(kMACaptionAppearanceDomainUser, (CFStringRef)[[legibleOption locale] localeIdentifier]);
```

## See Also

### Language settings

- [MACaptionAppearanceCopySelectedLanguages(\_:)](macaptionappearancecopyselectedlanguages%28__%29.md): Returns the preferred caption languages.

# MACaptionAppearanceAddSelectedLanguage (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Adds a preference for caption language to the stack of languages.

## Declaration

```objectivec
extern bool MACaptionAppearanceAddSelectedLanguage(MACaptionAppearanceDomain domain, CFStringRef language);
```

## Parameters

- `domain`: The domain to retrieve the preference value from. See [MACaptionAppearanceDomain](macaptionappearancedomain.md). Pass [kMACaptionAppearanceDomainUser](macaptionappearancedomain/user.md) unless the system defaults are needed for comparison.
- `language`: A canonical language identifier (see [CFLocaleRef](../corefoundation/cflocale.md)) of the preferred caption language.

<a id="Return-Value"></a>

## Return Value

Returns `true` if addition was successful; `false` if an error occurred. Errors are most likely the result of invalid language codes.

<a id="Discussion"></a>

## Discussion

The added language will appear in the array returned by [MACaptionAppearanceCopySelectedLanguages](macaptionappearancecopyselectedlanguages%28__%29.md). Call the `MACaptionAppearanceAddSelectedLanguage` function anytime a user selects a specific captioning language from a pop-up menu or other UI affordance. For example, an AVFoundation client may execute the following code:

```objc
 // in response to a user selection, make the selection effective
-[AVPlayerItem selectMediaOption:legibleOption inMediaSelectionGroup:legibleGroup];
 
// now update system-wide captioning preferences by registering the added language
MACaptionAppearanceAddSelectedLanguage(kMACaptionAppearanceDomainUser, (CFStringRef)[[legibleOption locale] localeIdentifier]);
```

## See Also

### Language settings

- [MACaptionAppearanceCopySelectedLanguages](macaptionappearancecopyselectedlanguages%28__%29.md): Returns the preferred caption languages.
