> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpnowplayinginfolanguageoptiongroup/init(languageoptions:defaultlanguageoption:allowemptyselection:)](https://developer.apple.com/documentation/mediaplayer/mpnowplayinginfolanguageoptiongroup/init(languageoptions:defaultlanguageoption:allowemptyselection:))

# init(languageOptions:defaultLanguageOption:allowEmptySelection:) (Swift)

**Framework:** Media Player  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a new language option group with the supplied language options.

## Declaration

```swift
init(languageOptions: [MPNowPlayingInfoLanguageOption], defaultLanguageOption: MPNowPlayingInfoLanguageOption?, allowEmptySelection: Bool)
```

## Parameters

- `languageOptions`: An array containing the language options to associate with the language option group.
- `defaultLanguageOption`: The default language option for the group. Set this parameter to [nil](../../objectivec/nil-227m0.md) to denote there’s no default language option.
- `allowEmptySelection`: A Boolean that indicates whether the system requires a selection for the language option group.

<a id="return-value"></a>

## Return Value

A newly created language option group with the passed attributes.

# initWithLanguageOptions:defaultLanguageOption:allowEmptySelection: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a new language option group with the supplied language options.

## Declaration

```objectivec
- (instancetype) initWithLanguageOptions:(NSArray<MPNowPlayingInfoLanguageOption *> *) languageOptions defaultLanguageOption:(MPNowPlayingInfoLanguageOption *) defaultLanguageOption allowEmptySelection:(BOOL) allowEmptySelection;
```

## Parameters

- `languageOptions`: An array containing the language options to associate with the language option group.
- `defaultLanguageOption`: The default language option for the group. Set this parameter to [nil](../../objectivec/nil-227m0.md) to denote there’s no default language option.
- `allowEmptySelection`: A Boolean that indicates whether the system requires a selection for the language option group.

<a id="return-value"></a>

## Return Value

A newly created language option group with the passed attributes.
