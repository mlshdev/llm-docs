> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpnowplayinginfolanguageoptiongroup/defaultlanguageoption](https://developer.apple.com/documentation/mediaplayer/mpnowplayinginfolanguageoptiongroup/defaultlanguageoption)

# defaultLanguageOption (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

The default language option for the group.

## Declaration

```swift
var defaultLanguageOption: MPNowPlayingInfoLanguageOption? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [nil](../../objectivec/nil-227m0.md) when there’s no default language option.

## See Also

### Retrieving language option group information

- [allowEmptySelection](allowemptyselection.md): A Boolean that indicates whether the system requires a selection for the language option group.
- [languageOptions](languageoptions.md): The available language options for the group.

# defaultLanguageOption (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

The default language option for the group.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) MPNowPlayingInfoLanguageOption * defaultLanguageOption;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [nil](../../objectivec/nil-227m0.md) when there’s no default language option.

## See Also

### Retrieving language option group information

- [allowEmptySelection](allowemptyselection.md): A Boolean that indicates whether the system requires a selection for the language option group.
- [languageOptions](languageoptions.md): The available language options for the group.
