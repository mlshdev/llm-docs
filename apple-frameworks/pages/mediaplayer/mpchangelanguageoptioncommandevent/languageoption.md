> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpchangelanguageoptioncommandevent/languageoption](https://developer.apple.com/documentation/mediaplayer/mpchangelanguageoptioncommandevent/languageoption)

# languageOption (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

The requested language option to change.

## Declaration

```swift
var languageOption: MPNowPlayingInfoLanguageOption { get }
```

<a id="Discussion"></a>

## Discussion

The supplied language option may be the Automatic Legible Language Option, which requests the best legible language based on the user’s preferences. See [isAutomaticLegibleLanguageOption()](../mpnowplayinginfolanguageoption/isautomaticlegiblelanguageoption%28%29.md).

## See Also

### Changing the language option

- [setting](setting.md): The extent of the language setting change.
- [MPChangeLanguageOptionSetting](../mpchangelanguageoptionsetting.md): The states that determine when language option changes take effect.

# languageOption (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

The requested language option to change.

## Declaration

```objectivec
@property (nonatomic, readonly) MPNowPlayingInfoLanguageOption * languageOption;
```

<a id="Discussion"></a>

## Discussion

The supplied language option may be the Automatic Legible Language Option, which requests the best legible language based on the user’s preferences. See [isAutomaticLegibleLanguageOption](../mpnowplayinginfolanguageoption/isautomaticlegiblelanguageoption%28%29.md).

## See Also

### Changing the language option

- [setting](setting.md): The extent of the language setting change.
- [MPChangeLanguageOptionSetting](../mpchangelanguageoptionsetting.md): The states that determine when language option changes take effect.
