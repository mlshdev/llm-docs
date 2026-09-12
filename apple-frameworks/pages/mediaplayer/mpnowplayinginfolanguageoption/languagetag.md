> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpnowplayinginfolanguageoption/languagetag](https://developer.apple.com/documentation/mediaplayer/mpnowplayinginfolanguageoption/languagetag)

# languageTag (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

The abbreviated language code for the language option.

## Declaration

```swift
var languageTag: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the IETF BCP 47 language code for the language option. A value of [nil](../../objectivec/nil-227m0.md) indicates that this option is disabled.

## See Also

### Retrieving language option properties

- [displayName](displayname.md): The display name for a language option.
- [identifier](identifier.md): The unique identifier for the language option.
- [languageOptionCharacteristics](languageoptioncharacteristics.md): The characteristics that describe the content of the language option.
- [languageOptionType](languageoptiontype.md): The type of language option.
- [MPNowPlayingInfoLanguageOptionType](../mpnowplayinginfolanguageoptiontype.md): The language option type to use for the Now Playing item.

# languageTag (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

The abbreviated language code for the language option.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * languageTag;
```

<a id="Discussion"></a>

## Discussion

This property contains the IETF BCP 47 language code for the language option. A value of [nil](../../objectivec/nil-227m0.md) indicates that this option is disabled.

## See Also

### Retrieving language option properties

- [displayName](displayname.md): The display name for a language option.
- [identifier](identifier.md): The unique identifier for the language option.
- [languageOptionCharacteristics](languageoptioncharacteristics.md): The characteristics that describe the content of the language option.
- [languageOptionType](languageoptiontype.md): The type of language option.
- [MPNowPlayingInfoLanguageOptionType](../mpnowplayinginfolanguageoptiontype.md): The language option type to use for the Now Playing item.
