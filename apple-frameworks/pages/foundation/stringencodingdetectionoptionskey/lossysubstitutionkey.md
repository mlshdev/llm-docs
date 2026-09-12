> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stringencodingdetectionoptionskey/lossysubstitutionkey](https://developer.apple.com/documentation/foundation/stringencodingdetectionoptionskey/lossysubstitutionkey)

# lossySubstitutionKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
static let lossySubstitutionKey: StringEncodingDetectionOptionsKey
```

<a id="Discussion"></a>

## Discussion

Option specifying the string used to substitute for any unsupported characters when converting to a lossy string encoding. If a `@(NO)` value is specified for `NSStringEncodingDetectionAllowLossyKey`, this option has no effect. The corresponding value for this key is an `NSString` object. By default, this value is `U+FFFD`.

## See Also

### Type Properties

- [allowLossyKey](allowlossykey.md)
- [disallowedEncodingsKey](disallowedencodingskey.md)
- [fromWindowsKey](fromwindowskey.md)
- [likelyLanguageKey](likelylanguagekey.md)
- [suggestedEncodingsKey](suggestedencodingskey.md)
- [useOnlySuggestedEncodingsKey](useonlysuggestedencodingskey.md)

# NSStringEncodingDetectionLossySubstitutionKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
extern NSStringEncodingDetectionOptionsKey const NSStringEncodingDetectionLossySubstitutionKey;
```

<a id="Discussion"></a>

## Discussion

Option specifying the string used to substitute for any unsupported characters when converting to a lossy string encoding. If a `@(NO)` value is specified for `NSStringEncodingDetectionAllowLossyKey`, this option has no effect. The corresponding value for this key is an `NSString` object. By default, this value is `U+FFFD`.

## See Also

### Type Properties

- [NSStringEncodingDetectionAllowLossyKey](allowlossykey.md)
- [NSStringEncodingDetectionDisallowedEncodingsKey](disallowedencodingskey.md)
- [NSStringEncodingDetectionFromWindowsKey](fromwindowskey.md)
- [NSStringEncodingDetectionLikelyLanguageKey](likelylanguagekey.md)
- [NSStringEncodingDetectionSuggestedEncodingsKey](suggestedencodingskey.md)
- [NSStringEncodingDetectionUseOnlySuggestedEncodingsKey](useonlysuggestedencodingskey.md)
