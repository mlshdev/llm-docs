> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpnowplayinginfolanguageoption/init(type:languagetag:characteristics:displayname:identifier:)](https://developer.apple.com/documentation/mediaplayer/mpnowplayinginfolanguageoption/init(type:languagetag:characteristics:displayname:identifier:))

# init(type:languageTag:characteristics:displayName:identifier:) (Swift)

**Framework:** Media Player  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a single language option.

## Declaration

```swift
init(type languageOptionType: MPNowPlayingInfoLanguageOptionType, languageTag: String, characteristics languageOptionCharacteristics: [String]?, displayName: String, identifier: String)
```

## Parameters

- `languageOptionType`: The type, audio or legible, for the language option.
- `languageTag`: The IETF BCP 47 language tag for the language option.
- `languageOptionCharacteristics`: An array of characteristics that describes the language option.
- `displayName`: The name for displaying the language option.
- `identifier`: A unique identifier for the language option.

<a id="return-value"></a>

## Return Value

A newly created language option containing the passed characteristics.

# initWithType:languageTag:characteristics:displayName:identifier: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a single language option.

## Declaration

```objectivec
- (instancetype) initWithType:(MPNowPlayingInfoLanguageOptionType) languageOptionType languageTag:(NSString *) languageTag characteristics:(NSArray<NSString *> *) languageOptionCharacteristics displayName:(NSString *) displayName identifier:(NSString *) identifier;
```

## Parameters

- `languageOptionType`: The type, audio or legible, for the language option.
- `languageTag`: The IETF BCP 47 language tag for the language option.
- `languageOptionCharacteristics`: An array of characteristics that describes the language option.
- `displayName`: The name for displaying the language option.
- `identifier`: A unique identifier for the language option.

<a id="return-value"></a>

## Return Value

A newly created language option containing the passed characteristics.
