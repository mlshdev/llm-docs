> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/macaptionappearancedisplaytype](https://developer.apple.com/documentation/mediaaccessibility/macaptionappearancedisplaytype)

# MACaptionAppearanceDisplayType (Swift)

**Framework:** Media Accessibility  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

A value that specifies the type of captions to display.

## Declaration

```swift
enum MACaptionAppearanceDisplayType
```

## Topics

### Constants

- [MACaptionAppearanceDisplayType.forcedOnly](macaptionappearancedisplaytype/forcedonly.md): Do not display captions unless they are forced for translation.
- [MACaptionAppearanceDisplayType.automatic](macaptionappearancedisplaytype/automatic.md): If the language of the audio track differs from the system locale, then captions matching the system locale should be displayed (if available). If the language of the audio and the language of the system locale match, no captions are shown.
- [MACaptionAppearanceDisplayType.alwaysOn](macaptionappearancedisplaytype/alwayson.md): The most robust available captioning track should always be displayed, whether subtitles, CC, or SDH. This option is selected by a switch labeled “Closed Captions + SDH” (on the Subtitles & Captioning page of iOS) and “Prefer Closed Captions and SDH” checkbox (on the Captions pane of the Accessibility options in macOS).

### Initializers

- [init(rawValue:)](macaptionappearancedisplaytype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [MACaptionAppearanceDomain](macaptionappearancedomain.md): A value that specifies which domain to retrieve a preference setting from.
- [MACaptionAppearanceBehavior](macaptionappearancebehavior.md): A value that indicates the preferred behavior for a preference setting.
- [MACaptionAppearanceFontStyle](macaptionappearancefontstyle.md): A value that specifies a font style.
- [MACaptionAppearanceTextEdgeStyle](macaptionappearancetextedgestyle.md): A value that specifies a style for the outside of the text.

# MACaptionAppearanceDisplayType (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

A value that specifies the type of captions to display.

## Declaration

```objectivec
enum MACaptionAppearanceDisplayType : CFIndex;
```

## Topics

### Constants

- [kMACaptionAppearanceDisplayTypeForcedOnly](macaptionappearancedisplaytype/forcedonly.md): Do not display captions unless they are forced for translation.
- [kMACaptionAppearanceDisplayTypeAutomatic](macaptionappearancedisplaytype/automatic.md): If the language of the audio track differs from the system locale, then captions matching the system locale should be displayed (if available). If the language of the audio and the language of the system locale match, no captions are shown.
- [kMACaptionAppearanceDisplayTypeAlwaysOn](macaptionappearancedisplaytype/alwayson.md): The most robust available captioning track should always be displayed, whether subtitles, CC, or SDH. This option is selected by a switch labeled “Closed Captions + SDH” (on the Subtitles & Captioning page of iOS) and “Prefer Closed Captions and SDH” checkbox (on the Captions pane of the Accessibility options in macOS).

## See Also

### Constants

- [MACaptionAppearanceDomain](macaptionappearancedomain.md): A value that specifies which domain to retrieve a preference setting from.
- [MACaptionAppearanceBehavior](macaptionappearancebehavior.md): A value that indicates the preferred behavior for a preference setting.
- [MACaptionAppearanceFontStyle](macaptionappearancefontstyle.md): A value that specifies a font style.
- [MACaptionAppearanceTextEdgeStyle](macaptionappearancetextedgestyle.md): A value that specifies a style for the outside of the text.
