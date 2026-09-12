> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpnowplayinginfolanguageoptiongroup](https://developer.apple.com/documentation/mediaplayer/mpnowplayinginfolanguageoptiongroup)

# MPNowPlayingInfoLanguageOptionGroup (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

A grouped set of language options where only a single language option can be active at a time.

## Declaration

```swift
class MPNowPlayingInfoLanguageOptionGroup
```

<a id="overview"></a>

## Overview

The `MPNowPlayingInfoLanguageOptionGroup` and [MPNowPlayingInfoLanguageOption](mpnowplayinginfolanguageoption.md) classes provide interfaces for setting information about language options, for example, audio and subtitles, in the Now Playing information area.

## Topics

### Creating a new language option group

- [init(languageOptions:defaultLanguageOption:allowEmptySelection:)](mpnowplayinginfolanguageoptiongroup/init%28languageoptions_defaultlanguageoption_allowemptyselection_%29.md): Creates a new language option group with the supplied language options.

### Retrieving language option group information

- [allowEmptySelection](mpnowplayinginfolanguageoptiongroup/allowemptyselection.md): A Boolean that indicates whether the system requires a selection for the language option group.
- [defaultLanguageOption](mpnowplayinginfolanguageoptiongroup/defaultlanguageoption.md): The default language option for the group.
- [languageOptions](mpnowplayinginfolanguageoptiongroup/languageoptions.md): The available language options for the group.

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
- [MPNowPlayingInfoLanguageOption](mpnowplayinginfolanguageoption.md): A set of interfaces for setting the language option for the Now Playing item.
- [Language option characteristic constants](language-option-characteristic-constants.md): The constants for defining language characteristics.

# MPNowPlayingInfoLanguageOptionGroup (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

A grouped set of language options where only a single language option can be active at a time.

## Declaration

```objectivec
@interface MPNowPlayingInfoLanguageOptionGroup : NSObject
```

<a id="overview"></a>

## Overview

The `MPNowPlayingInfoLanguageOptionGroup` and [MPNowPlayingInfoLanguageOption](mpnowplayinginfolanguageoption.md) classes provide interfaces for setting information about language options, for example, audio and subtitles, in the Now Playing information area.

## Topics

### Creating a new language option group

- [initWithLanguageOptions:defaultLanguageOption:allowEmptySelection:](mpnowplayinginfolanguageoptiongroup/init%28languageoptions_defaultlanguageoption_allowemptyselection_%29.md): Creates a new language option group with the supplied language options.

### Retrieving language option group information

- [allowEmptySelection](mpnowplayinginfolanguageoptiongroup/allowemptyselection.md): A Boolean that indicates whether the system requires a selection for the language option group.
- [defaultLanguageOption](mpnowplayinginfolanguageoptiongroup/defaultlanguageoption.md): The default language option for the group.
- [languageOptions](mpnowplayinginfolanguageoptiongroup/languageoptions.md): The available language options for the group.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Now Playing information

- [Becoming a now playable app](becoming-a-now-playable-app.md): Ensure your app is eligible to become the Now Playing app by adopting best practices for providing Now Playing info and registering for remote command center actions.
- [MPNowPlayingSession](mpnowplayingsession.md): An object that manages Now Playing information and remote commands for multiple players.
- [MPNowPlayingInfoCenter](mpnowplayinginfocenter.md): An object for setting the Now Playing information for media that your app plays.
- [MPNowPlayingInfoLanguageOption](mpnowplayinginfolanguageoption.md): A set of interfaces for setting the language option for the Now Playing item.
- [Language option characteristic constants](language-option-characteristic-constants.md): The constants for defining language characteristics.
