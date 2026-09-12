> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stringencodingdetectionoptionskey/disallowedencodingskey](https://developer.apple.com/documentation/foundation/stringencodingdetectionoptionskey/disallowedencodingskey)

# disallowedEncodingsKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
static let disallowedEncodingsKey: StringEncodingDetectionOptionsKey
```

<a id="Discussion"></a>

## Discussion

Option specifying any string encodings not to be considered. The corresponding value for this key is an `NSArray` of `NSNumber` objects that contain `NSStringEncoding` values. If this option is unspecified, no additional string encodings are removed from consideration.

## See Also

### Type Properties

- [allowLossyKey](allowlossykey.md)
- [fromWindowsKey](fromwindowskey.md)
- [likelyLanguageKey](likelylanguagekey.md)
- [lossySubstitutionKey](lossysubstitutionkey.md)
- [suggestedEncodingsKey](suggestedencodingskey.md)
- [useOnlySuggestedEncodingsKey](useonlysuggestedencodingskey.md)

# NSStringEncodingDetectionDisallowedEncodingsKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
extern NSStringEncodingDetectionOptionsKey const NSStringEncodingDetectionDisallowedEncodingsKey;
```

<a id="Discussion"></a>

## Discussion

Option specifying any string encodings not to be considered. The corresponding value for this key is an `NSArray` of `NSNumber` objects that contain `NSStringEncoding` values. If this option is unspecified, no additional string encodings are removed from consideration.

## See Also

### Type Properties

- [NSStringEncodingDetectionAllowLossyKey](allowlossykey.md)
- [NSStringEncodingDetectionFromWindowsKey](fromwindowskey.md)
- [NSStringEncodingDetectionLikelyLanguageKey](likelylanguagekey.md)
- [NSStringEncodingDetectionLossySubstitutionKey](lossysubstitutionkey.md)
- [NSStringEncodingDetectionSuggestedEncodingsKey](suggestedencodingskey.md)
- [NSStringEncodingDetectionUseOnlySuggestedEncodingsKey](useonlysuggestedencodingskey.md)
