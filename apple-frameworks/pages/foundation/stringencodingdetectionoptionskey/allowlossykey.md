> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stringencodingdetectionoptionskey/allowlossykey](https://developer.apple.com/documentation/foundation/stringencodingdetectionoptionskey/allowlossykey)

# allowLossyKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
static let allowLossyKey: StringEncodingDetectionOptionsKey
```

<a id="Discussion"></a>

## Discussion

Option specifying whether to allow lossy string conversion. The corresponding value for this key is an `NSNumber` object containing a Boolean value. If `@(NO)`, the a lossy string encoding may not be chosen. By default, this value is `@(YES)`.

## See Also

### Type Properties

- [disallowedEncodingsKey](disallowedencodingskey.md)
- [fromWindowsKey](fromwindowskey.md)
- [likelyLanguageKey](likelylanguagekey.md)
- [lossySubstitutionKey](lossysubstitutionkey.md)
- [suggestedEncodingsKey](suggestedencodingskey.md)
- [useOnlySuggestedEncodingsKey](useonlysuggestedencodingskey.md)

# NSStringEncodingDetectionAllowLossyKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
extern NSStringEncodingDetectionOptionsKey const NSStringEncodingDetectionAllowLossyKey;
```

<a id="Discussion"></a>

## Discussion

Option specifying whether to allow lossy string conversion. The corresponding value for this key is an `NSNumber` object containing a Boolean value. If `@(NO)`, the a lossy string encoding may not be chosen. By default, this value is `@(YES)`.

## See Also

### Type Properties

- [NSStringEncodingDetectionDisallowedEncodingsKey](disallowedencodingskey.md)
- [NSStringEncodingDetectionFromWindowsKey](fromwindowskey.md)
- [NSStringEncodingDetectionLikelyLanguageKey](likelylanguagekey.md)
- [NSStringEncodingDetectionLossySubstitutionKey](lossysubstitutionkey.md)
- [NSStringEncodingDetectionSuggestedEncodingsKey](suggestedencodingskey.md)
- [NSStringEncodingDetectionUseOnlySuggestedEncodingsKey](useonlysuggestedencodingskey.md)
