> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/macaptionappearancecopypreferredcaptioningmediacharacteristics(_:)](https://developer.apple.com/documentation/mediaaccessibility/macaptionappearancecopypreferredcaptioningmediacharacteristics(_:))

# MACaptionAppearanceCopyPreferredCaptioningMediaCharacteristics(\_:) (Swift)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Returns the preferences for captioning sounds.

## Declaration

```swift
func MACaptionAppearanceCopyPreferredCaptioningMediaCharacteristics(_ domain: MACaptionAppearanceDomain) -> Unmanaged<CFArray>
```

## Parameters

- `domain`: The domain to retrieve the preference value from. See [MACaptionAppearanceDomain](macaptionappearancedomain.md). Pass [MACaptionAppearanceDomain.user](macaptionappearancedomain/user.md) unless the system defaults are needed for comparison.

<a id="Return-Value"></a>

## Return Value

An array containing the preferred media characteristics for captioning of music, sounds, and dialog. See [Captions](captions.md).

## See Also

### General settings

- [kMACaptionAppearanceSettingsChangedNotification](kmacaptionappearancesettingschangednotification.md): A notification that occurs when any user-defined caption settings change.
- [MACaptionAppearanceDidDisplayCaptions(\_:)](macaptionappearancediddisplaycaptions%28__%29.md): Informs accessibility clients when captions display onscreen.
- [MACaptionAppearanceGetDisplayType(\_:)](macaptionappearancegetdisplaytype%28__%29.md): Returns the preferred type of captions to display.
- [MACaptionAppearanceSetDisplayType(\_:\_:)](macaptionappearancesetdisplaytype%28____%29.md): Sets the preference for the type of caption.

# MACaptionAppearanceCopyPreferredCaptioningMediaCharacteristics (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Returns the preferences for captioning sounds.

## Declaration

```objectivec
extern CFArrayRefMACaptionAppearanceCopyPreferredCaptioningMediaCharacteristics(MACaptionAppearanceDomain domain);
```

## Parameters

- `domain`: The domain to retrieve the preference value from. See [MACaptionAppearanceDomain](macaptionappearancedomain.md). Pass [kMACaptionAppearanceDomainUser](macaptionappearancedomain/user.md) unless the system defaults are needed for comparison.

<a id="Return-Value"></a>

## Return Value

An array containing the preferred media characteristics for captioning of music, sounds, and dialog. See [Captions](captions.md).

## See Also

### General settings

- [kMACaptionAppearanceSettingsChangedNotification](kmacaptionappearancesettingschangednotification.md): A notification that occurs when any user-defined caption settings change.
- [MACaptionAppearanceDidDisplayCaptions](macaptionappearancediddisplaycaptions%28__%29.md): Informs accessibility clients when captions display onscreen.
- [MACaptionAppearanceGetDisplayType](macaptionappearancegetdisplaytype%28__%29.md): Returns the preferred type of captions to display.
- [MACaptionAppearanceSetDisplayType](macaptionappearancesetdisplaytype%28____%29.md): Sets the preference for the type of caption.
