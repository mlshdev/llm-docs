> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stringencodingdetectionoptionskey/suggestedencodingskey](https://developer.apple.com/documentation/foundation/stringencodingdetectionoptionskey/suggestedencodingskey)

# suggestedEncodingsKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
static let suggestedEncodingsKey: StringEncodingDetectionOptionsKey
```

<a id="Discussion"></a>

## Discussion

Option specifying any suggested string encodings. Use this when you have prior knowledge about the likely or expected encoding. The corresponding value for this key is an `NSArray` of `NSNumber` objects that contain `NSStringEncoding` values. If this option is unspecified, all allowed encodings are evaluated with equal consideration.

## See Also

### Type Properties

- [allowLossyKey](allowlossykey.md)
- [disallowedEncodingsKey](disallowedencodingskey.md)
- [fromWindowsKey](fromwindowskey.md)
- [likelyLanguageKey](likelylanguagekey.md)
- [lossySubstitutionKey](lossysubstitutionkey.md)
- [useOnlySuggestedEncodingsKey](useonlysuggestedencodingskey.md)

# NSStringEncodingDetectionSuggestedEncodingsKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
extern NSStringEncodingDetectionOptionsKey const NSStringEncodingDetectionSuggestedEncodingsKey;
```

<a id="Discussion"></a>

## Discussion

Option specifying any suggested string encodings. Use this when you have prior knowledge about the likely or expected encoding. The corresponding value for this key is an `NSArray` of `NSNumber` objects that contain `NSStringEncoding` values. If this option is unspecified, all allowed encodings are evaluated with equal consideration.

## See Also

### Type Properties

- [NSStringEncodingDetectionAllowLossyKey](allowlossykey.md)
- [NSStringEncodingDetectionDisallowedEncodingsKey](disallowedencodingskey.md)
- [NSStringEncodingDetectionFromWindowsKey](fromwindowskey.md)
- [NSStringEncodingDetectionLikelyLanguageKey](likelylanguagekey.md)
- [NSStringEncodingDetectionLossySubstitutionKey](lossysubstitutionkey.md)
- [NSStringEncodingDetectionUseOnlySuggestedEncodingsKey](useonlysuggestedencodingskey.md)
