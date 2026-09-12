> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stringencodingdetectionoptionskey/likelylanguagekey](https://developer.apple.com/documentation/foundation/stringencodingdetectionoptionskey/likelylanguagekey)

# likelyLanguageKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
static let likelyLanguageKey: StringEncodingDetectionOptionsKey
```

<a id="Discussion"></a>

## Discussion

Option specifying the likely two-letter ISO 639-1 language code for the converted string. Use this when you have prior knowledge about the expected language of the converted string. The corresponding value for this key is an `NSString` object. If no value is specified, the language of the converted string is not considered.

## See Also

### Type Properties

- [allowLossyKey](allowlossykey.md)
- [disallowedEncodingsKey](disallowedencodingskey.md)
- [fromWindowsKey](fromwindowskey.md)
- [lossySubstitutionKey](lossysubstitutionkey.md)
- [suggestedEncodingsKey](suggestedencodingskey.md)
- [useOnlySuggestedEncodingsKey](useonlysuggestedencodingskey.md)

# NSStringEncodingDetectionLikelyLanguageKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
extern NSStringEncodingDetectionOptionsKey const NSStringEncodingDetectionLikelyLanguageKey;
```

<a id="Discussion"></a>

## Discussion

Option specifying the likely two-letter ISO 639-1 language code for the converted string. Use this when you have prior knowledge about the expected language of the converted string. The corresponding value for this key is an `NSString` object. If no value is specified, the language of the converted string is not considered.

## See Also

### Type Properties

- [NSStringEncodingDetectionAllowLossyKey](allowlossykey.md)
- [NSStringEncodingDetectionDisallowedEncodingsKey](disallowedencodingskey.md)
- [NSStringEncodingDetectionFromWindowsKey](fromwindowskey.md)
- [NSStringEncodingDetectionLossySubstitutionKey](lossysubstitutionkey.md)
- [NSStringEncodingDetectionSuggestedEncodingsKey](suggestedencodingskey.md)
- [NSStringEncodingDetectionUseOnlySuggestedEncodingsKey](useonlysuggestedencodingskey.md)
