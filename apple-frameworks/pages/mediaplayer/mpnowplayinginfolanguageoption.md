> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpnowplayinginfolanguageoption](https://developer.apple.com/documentation/mediaplayer/mpnowplayinginfolanguageoption)

# MPNowPlayingInfoLanguageOption (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

A set of interfaces for setting the language option for the Now Playing item.

## Declaration

```swift
class MPNowPlayingInfoLanguageOption
```

<a id="overview"></a>

## Overview

The [MPNowPlayingInfoLanguageOption](mpnowplayinginfolanguageoption.md) and [MPNowPlayingInfoLanguageOptionGroup](mpnowplayinginfolanguageoptiongroup.md) classes provide interfaces for setting information about language options, for example, audio and subtitles, in the Now Playing information area.

## Topics

### Creating a new language option

- [init(type:languageTag:characteristics:displayName:identifier:)](mpnowplayinginfolanguageoption/init%28type_languagetag_characteristics_displayname_identifier_%29.md): Creates a single language option.

### Retrieving language option properties

- [displayName](mpnowplayinginfolanguageoption/displayname.md): The display name for a language option.
- [identifier](mpnowplayinginfolanguageoption/identifier.md): The unique identifier for the language option.
- [languageOptionCharacteristics](mpnowplayinginfolanguageoption/languageoptioncharacteristics.md): The characteristics that describe the content of the language option.
- [languageTag](mpnowplayinginfolanguageoption/languagetag.md): The abbreviated language code for the language option.
- [languageOptionType](mpnowplayinginfolanguageoption/languageoptiontype.md): The type of language option.
- [MPNowPlayingInfoLanguageOptionType](mpnowplayinginfolanguageoptiontype.md): The language option type to use for the Now Playing item.

### Retrieving a language option based on system preferences

- [isAutomaticAudibleLanguageOption()](mpnowplayinginfolanguageoption/isautomaticaudiblelanguageoption%28%29.md): Returns a Boolean value that determines whether to use the best audible language option based on the system preferences.
- [isAutomaticLegibleLanguageOption()](mpnowplayinginfolanguageoption/isautomaticlegiblelanguageoption%28%29.md): Returns a Boolean value that determines whether to use the best legible language option based on the system preferences.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Now Playing information

- [Becoming a now playable app](becoming-a-now-playable-app.md): Ensure your app is eligible to become the Now Playing app by adopting best practices for providing Now Playing info and registering for remote command center actions.
- [MPNowPlayingSession](mpnowplayingsession.md): An object that manages Now Playing information and remote commands for multiple players.
- [MPNowPlayingInfoCenter](mpnowplayinginfocenter.md): An object for setting the Now Playing information for media that your app plays.
- [MPNowPlayingInfoLanguageOptionGroup](mpnowplayinginfolanguageoptiongroup.md): A grouped set of language options where only a single language option can be active at a time.
- [Language option characteristic constants](language-option-characteristic-constants.md): The constants for defining language characteristics.

# MPNowPlayingInfoLanguageOption (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

A set of interfaces for setting the language option for the Now Playing item.

## Declaration

```objectivec
@interface MPNowPlayingInfoLanguageOption : NSObject
```

<a id="overview"></a>

## Overview

The [MPNowPlayingInfoLanguageOption](mpnowplayinginfolanguageoption.md) and [MPNowPlayingInfoLanguageOptionGroup](mpnowplayinginfolanguageoptiongroup.md) classes provide interfaces for setting information about language options, for example, audio and subtitles, in the Now Playing information area.

## Topics

### Creating a new language option

- [initWithType:languageTag:characteristics:displayName:identifier:](mpnowplayinginfolanguageoption/init%28type_languagetag_characteristics_displayname_identifier_%29.md): Creates a single language option.

### Retrieving language option properties

- [displayName](mpnowplayinginfolanguageoption/displayname.md): The display name for a language option.
- [identifier](mpnowplayinginfolanguageoption/identifier.md): The unique identifier for the language option.
- [languageOptionCharacteristics](mpnowplayinginfolanguageoption/languageoptioncharacteristics.md): The characteristics that describe the content of the language option.
- [languageTag](mpnowplayinginfolanguageoption/languagetag.md): The abbreviated language code for the language option.
- [languageOptionType](mpnowplayinginfolanguageoption/languageoptiontype.md): The type of language option.
- [MPNowPlayingInfoLanguageOptionType](mpnowplayinginfolanguageoptiontype.md): The language option type to use for the Now Playing item.

### Retrieving a language option based on system preferences

- [isAutomaticAudibleLanguageOption](mpnowplayinginfolanguageoption/isautomaticaudiblelanguageoption%28%29.md): Returns a Boolean value that determines whether to use the best audible language option based on the system preferences.
- [isAutomaticLegibleLanguageOption](mpnowplayinginfolanguageoption/isautomaticlegiblelanguageoption%28%29.md): Returns a Boolean value that determines whether to use the best legible language option based on the system preferences.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Now Playing information

- [Becoming a now playable app](becoming-a-now-playable-app.md): Ensure your app is eligible to become the Now Playing app by adopting best practices for providing Now Playing info and registering for remote command center actions.
- [MPNowPlayingSession](mpnowplayingsession.md): An object that manages Now Playing information and remote commands for multiple players.
- [MPNowPlayingInfoCenter](mpnowplayinginfocenter.md): An object for setting the Now Playing information for media that your app plays.
- [MPNowPlayingInfoLanguageOptionGroup](mpnowplayinginfolanguageoptiongroup.md): A grouped set of language options where only a single language option can be active at a time.
- [Language option characteristic constants](language-option-characteristic-constants.md): The constants for defining language characteristics.
