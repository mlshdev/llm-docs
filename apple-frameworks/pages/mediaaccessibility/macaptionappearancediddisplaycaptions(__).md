> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/macaptionappearancediddisplaycaptions(_:)](https://developer.apple.com/documentation/mediaaccessibility/macaptionappearancediddisplaycaptions(_:))

# MACaptionAppearanceDidDisplayCaptions(\_:) (Swift)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 13.0+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Informs accessibility clients when captions display onscreen.

## Declaration

```swift
func MACaptionAppearanceDidDisplayCaptions(_ strings: CFArray)
```

## See Also

### General settings

- [kMACaptionAppearanceSettingsChangedNotification](kmacaptionappearancesettingschangednotification.md): A notification that occurs when any user-defined caption settings change.
- [MACaptionAppearanceCopyPreferredCaptioningMediaCharacteristics(\_:)](macaptionappearancecopypreferredcaptioningmediacharacteristics%28__%29.md): Returns the preferences for captioning sounds.
- [MACaptionAppearanceGetDisplayType(\_:)](macaptionappearancegetdisplaytype%28__%29.md): Returns the preferred type of captions to display.
- [MACaptionAppearanceSetDisplayType(\_:\_:)](macaptionappearancesetdisplaytype%28____%29.md): Sets the preference for the type of caption.

# MACaptionAppearanceDidDisplayCaptions (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 13.0+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Informs accessibility clients when captions display onscreen.

## Declaration

```objectivec
void MACaptionAppearanceDidDisplayCaptions(CFArrayRef strings);
```

## See Also

### General settings

- [kMACaptionAppearanceSettingsChangedNotification](kmacaptionappearancesettingschangednotification.md): A notification that occurs when any user-defined caption settings change.
- [MACaptionAppearanceCopyPreferredCaptioningMediaCharacteristics](macaptionappearancecopypreferredcaptioningmediacharacteristics%28__%29.md): Returns the preferences for captioning sounds.
- [MACaptionAppearanceGetDisplayType](macaptionappearancegetdisplaytype%28__%29.md): Returns the preferred type of captions to display.
- [MACaptionAppearanceSetDisplayType](macaptionappearancesetdisplaytype%28____%29.md): Sets the preference for the type of caption.
