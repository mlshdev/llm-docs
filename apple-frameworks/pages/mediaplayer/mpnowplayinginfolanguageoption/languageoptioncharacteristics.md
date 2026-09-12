> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpnowplayinginfolanguageoption/languageoptioncharacteristics](https://developer.apple.com/documentation/mediaplayer/mpnowplayinginfolanguageoption/languageoptioncharacteristics)

# languageOptionCharacteristics (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

The characteristics that describe the content of the language option.

## Declaration

```swift
var languageOptionCharacteristics: [String]? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of characteristics that describes the language option. See [Language option characteristic constants](../language-option-characteristic-constants.md) for the most commonly used characteristics.

## See Also

### Retrieving language option properties

- [displayName](displayname.md): The display name for a language option.
- [identifier](identifier.md): The unique identifier for the language option.
- [languageTag](languagetag.md): The abbreviated language code for the language option.
- [languageOptionType](languageoptiontype.md): The type of language option.
- [MPNowPlayingInfoLanguageOptionType](../mpnowplayinginfolanguageoptiontype.md): The language option type to use for the Now Playing item.

# languageOptionCharacteristics (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

The characteristics that describe the content of the language option.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<NSString *> * languageOptionCharacteristics;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of characteristics that describes the language option. See [Language option characteristic constants](../language-option-characteristic-constants.md) for the most commonly used characteristics.

## See Also

### Retrieving language option properties

- [displayName](displayname.md): The display name for a language option.
- [identifier](identifier.md): The unique identifier for the language option.
- [languageTag](languagetag.md): The abbreviated language code for the language option.
- [languageOptionType](languageoptiontype.md): The type of language option.
- [MPNowPlayingInfoLanguageOptionType](../mpnowplayinginfolanguageoptiontype.md): The language option type to use for the Now Playing item.
