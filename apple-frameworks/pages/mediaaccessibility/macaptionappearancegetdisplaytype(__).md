> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/macaptionappearancegetdisplaytype(_:)](https://developer.apple.com/documentation/mediaaccessibility/macaptionappearancegetdisplaytype(_:))

# MACaptionAppearanceGetDisplayType(\_:) (Swift)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Returns the preferred type of captions to display.

## Declaration

```swift
func MACaptionAppearanceGetDisplayType(_ domain: MACaptionAppearanceDomain) -> MACaptionAppearanceDisplayType
```

## Parameters

- `domain`: The domain to retrieve the preference value from. See [MACaptionAppearanceDomain](macaptionappearancedomain.md). Pass [MACaptionAppearanceDomain.user](macaptionappearancedomain/user.md) unless the system defaults are needed for comparison.

<a id="Return-Value"></a>

## Return Value

A value representing options to use only forced captions, allow system locale to override the language of the audio track, or choose the best available captioning track from CC, SDH, or subtitles. See [MACaptionAppearanceDisplayType](macaptionappearancedisplaytype.md).

## See Also

### General settings

- [kMACaptionAppearanceSettingsChangedNotification](kmacaptionappearancesettingschangednotification.md): A notification that occurs when any user-defined caption settings change.
- [MACaptionAppearanceDidDisplayCaptions(\_:)](macaptionappearancediddisplaycaptions%28__%29.md): Informs accessibility clients when captions display onscreen.
- [MACaptionAppearanceCopyPreferredCaptioningMediaCharacteristics(\_:)](macaptionappearancecopypreferredcaptioningmediacharacteristics%28__%29.md): Returns the preferences for captioning sounds.
- [MACaptionAppearanceSetDisplayType(\_:\_:)](macaptionappearancesetdisplaytype%28____%29.md): Sets the preference for the type of caption.

# MACaptionAppearanceGetDisplayType (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Returns the preferred type of captions to display.

## Declaration

```objectivec
extern MACaptionAppearanceDisplayType MACaptionAppearanceGetDisplayType(MACaptionAppearanceDomain domain);
```

## Parameters

- `domain`: The domain to retrieve the preference value from. See [MACaptionAppearanceDomain](macaptionappearancedomain.md). Pass [kMACaptionAppearanceDomainUser](macaptionappearancedomain/user.md) unless the system defaults are needed for comparison.

<a id="Return-Value"></a>

## Return Value

A value representing options to use only forced captions, allow system locale to override the language of the audio track, or choose the best available captioning track from CC, SDH, or subtitles. See [MACaptionAppearanceDisplayType](macaptionappearancedisplaytype.md).

## See Also

### General settings

- [kMACaptionAppearanceSettingsChangedNotification](kmacaptionappearancesettingschangednotification.md): A notification that occurs when any user-defined caption settings change.
- [MACaptionAppearanceDidDisplayCaptions](macaptionappearancediddisplaycaptions%28__%29.md): Informs accessibility clients when captions display onscreen.
- [MACaptionAppearanceCopyPreferredCaptioningMediaCharacteristics](macaptionappearancecopypreferredcaptioningmediacharacteristics%28__%29.md): Returns the preferences for captioning sounds.
- [MACaptionAppearanceSetDisplayType](macaptionappearancesetdisplaytype%28____%29.md): Sets the preference for the type of caption.
