> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/macaptionappearancedisplaytype/alwayson](https://developer.apple.com/documentation/mediaaccessibility/macaptionappearancedisplaytype/alwayson)

# MACaptionAppearanceDisplayType.alwaysOn (Swift)

**Framework:** Media Accessibility  
**Kind:** Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

The most robust available captioning track should always be displayed, whether subtitles, CC, or SDH. This option is selected by a switch labeled “Closed Captions + SDH” (on the Subtitles & Captioning page of iOS) and “Prefer Closed Captions and SDH” checkbox (on the Captions pane of the Accessibility options in macOS).

## Declaration

```swift
case alwaysOn
```

## See Also

### Constants

- [MACaptionAppearanceDisplayType.forcedOnly](forcedonly.md): Do not display captions unless they are forced for translation.
- [MACaptionAppearanceDisplayType.automatic](automatic.md): If the language of the audio track differs from the system locale, then captions matching the system locale should be displayed (if available). If the language of the audio and the language of the system locale match, no captions are shown.

# kMACaptionAppearanceDisplayTypeAlwaysOn (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

The most robust available captioning track should always be displayed, whether subtitles, CC, or SDH. This option is selected by a switch labeled “Closed Captions + SDH” (on the Subtitles & Captioning page of iOS) and “Prefer Closed Captions and SDH” checkbox (on the Captions pane of the Accessibility options in macOS).

## Declaration

```objectivec
kMACaptionAppearanceDisplayTypeAlwaysOn
```

## See Also

### Constants

- [kMACaptionAppearanceDisplayTypeForcedOnly](forcedonly.md): Do not display captions unless they are forced for translation.
- [kMACaptionAppearanceDisplayTypeAutomatic](automatic.md): If the language of the audio track differs from the system locale, then captions matching the system locale should be displayed (if available). If the language of the audio and the language of the system locale match, no captions are shown.
