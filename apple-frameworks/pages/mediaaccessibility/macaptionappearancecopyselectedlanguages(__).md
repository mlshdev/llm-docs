> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/macaptionappearancecopyselectedlanguages(_:)](https://developer.apple.com/documentation/mediaaccessibility/macaptionappearancecopyselectedlanguages(_:))

# MACaptionAppearanceCopySelectedLanguages(\_:) (Swift)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Returns the preferred caption languages.

## Declaration

```swift
func MACaptionAppearanceCopySelectedLanguages(_ domain: MACaptionAppearanceDomain) -> Unmanaged<CFArray>
```

## Parameters

- `domain`: The domain to retrieve the preference value from. See [MACaptionAppearanceDomain](macaptionappearancedomain.md). Pass [MACaptionAppearanceDomain.user](macaptionappearancedomain/user.md) unless the system defaults are needed for comparison.

<a id="Return-Value"></a>

## Return Value

An ordered array of preferred canonical language identifiers.

<a id="Discussion"></a>

## Discussion

Languages added using the [MACaptionAppearanceAddSelectedLanguage(\_:\_:)](macaptionappearanceaddselectedlanguage%28____%29.md) function are normalized. As a result, the contents of the returned array may have slightly different strings from those passed into [MACaptionAppearanceAddSelectedLanguage(\_:\_:)](macaptionappearanceaddselectedlanguage%28____%29.md).

## See Also

### Language settings

- [MACaptionAppearanceAddSelectedLanguage(\_:\_:)](macaptionappearanceaddselectedlanguage%28____%29.md): Adds a preference for caption language to the stack of languages.

# MACaptionAppearanceCopySelectedLanguages (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Returns the preferred caption languages.

## Declaration

```objectivec
extern CFArrayRefMACaptionAppearanceCopySelectedLanguages(MACaptionAppearanceDomain domain);
```

## Parameters

- `domain`: The domain to retrieve the preference value from. See [MACaptionAppearanceDomain](macaptionappearancedomain.md). Pass [kMACaptionAppearanceDomainUser](macaptionappearancedomain/user.md) unless the system defaults are needed for comparison.

<a id="Return-Value"></a>

## Return Value

An ordered array of preferred canonical language identifiers.

<a id="Discussion"></a>

## Discussion

Languages added using the [MACaptionAppearanceAddSelectedLanguage](macaptionappearanceaddselectedlanguage%28____%29.md) function are normalized. As a result, the contents of the returned array may have slightly different strings from those passed into [MACaptionAppearanceAddSelectedLanguage](macaptionappearanceaddselectedlanguage%28____%29.md).

## See Also

### Language settings

- [MACaptionAppearanceAddSelectedLanguage](macaptionappearanceaddselectedlanguage%28____%29.md): Adds a preference for caption language to the stack of languages.
