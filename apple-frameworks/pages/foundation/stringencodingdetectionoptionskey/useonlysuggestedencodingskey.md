> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stringencodingdetectionoptionskey/useonlysuggestedencodingskey](https://developer.apple.com/documentation/foundation/stringencodingdetectionoptionskey/useonlysuggestedencodingskey)

# useOnlySuggestedEncodingsKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
static let useOnlySuggestedEncodingsKey: StringEncodingDetectionOptionsKey
```

<a id="Discussion"></a>

## Discussion

Option specifying whether to only consider suggested string encodings. Use this only if you specify a value for `NSStringEncodingDetectionSuggestedEncodingsKey`. The corresponding value for this key is an `NSNumber` object containing a Boolean value. By default, this value is `@(NO)`.

## See Also

### Type Properties

- [allowLossyKey](allowlossykey.md)
- [disallowedEncodingsKey](disallowedencodingskey.md)
- [fromWindowsKey](fromwindowskey.md)
- [likelyLanguageKey](likelylanguagekey.md)
- [lossySubstitutionKey](lossysubstitutionkey.md)
- [suggestedEncodingsKey](suggestedencodingskey.md)

# NSStringEncodingDetectionUseOnlySuggestedEncodingsKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
extern NSStringEncodingDetectionOptionsKey const NSStringEncodingDetectionUseOnlySuggestedEncodingsKey;
```

<a id="Discussion"></a>

## Discussion

Option specifying whether to only consider suggested string encodings. Use this only if you specify a value for `NSStringEncodingDetectionSuggestedEncodingsKey`. The corresponding value for this key is an `NSNumber` object containing a Boolean value. By default, this value is `@(NO)`.

## See Also

### Type Properties

- [NSStringEncodingDetectionAllowLossyKey](allowlossykey.md)
- [NSStringEncodingDetectionDisallowedEncodingsKey](disallowedencodingskey.md)
- [NSStringEncodingDetectionFromWindowsKey](fromwindowskey.md)
- [NSStringEncodingDetectionLikelyLanguageKey](likelylanguagekey.md)
- [NSStringEncodingDetectionLossySubstitutionKey](lossysubstitutionkey.md)
- [NSStringEncodingDetectionSuggestedEncodingsKey](suggestedencodingskey.md)
