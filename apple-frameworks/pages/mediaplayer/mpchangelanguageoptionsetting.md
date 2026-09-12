> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpchangelanguageoptionsetting](https://developer.apple.com/documentation/mediaplayer/mpchangelanguageoptionsetting)

# MPChangeLanguageOptionSetting (Swift)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 5.0+

The states that determine when language option changes take effect.

## Declaration

```swift
enum MPChangeLanguageOptionSetting
```

## Topics

### Enumeration Cases

- [MPChangeLanguageOptionSetting.none](mpchangelanguageoptionsetting/none.md): No language option change is to be made.
- [MPChangeLanguageOptionSetting.nowPlayingItemOnly](mpchangelanguageoptionsetting/nowplayingitemonly.md): The language option change is applied to the now playing item only.
- [MPChangeLanguageOptionSetting.permanent](mpchangelanguageoptionsetting/permanent.md): The language option change is applied to all future playback items.

### Initializers

- [init(rawValue:)](mpchangelanguageoptionsetting/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Changing the language option

- [languageOption](mpchangelanguageoptioncommandevent/languageoption.md): The requested language option to change.
- [setting](mpchangelanguageoptioncommandevent/setting.md): The extent of the language setting change.

# MPChangeLanguageOptionSetting (Objective-C)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 5.0+

The states that determine when language option changes take effect.

## Declaration

```objectivec
enum MPChangeLanguageOptionSetting : NSInteger;
```

## Topics

### Enumeration Cases

- [MPChangeLanguageOptionSettingNone](mpchangelanguageoptionsetting/none.md): No language option change is to be made.
- [MPChangeLanguageOptionSettingNowPlayingItemOnly](mpchangelanguageoptionsetting/nowplayingitemonly.md): The language option change is applied to the now playing item only.
- [MPChangeLanguageOptionSettingPermanent](mpchangelanguageoptionsetting/permanent.md): The language option change is applied to all future playback items.

## See Also

### Changing the language option

- [languageOption](mpchangelanguageoptioncommandevent/languageoption.md): The requested language option to change.
- [setting](mpchangelanguageoptioncommandevent/setting.md): The extent of the language setting change.
