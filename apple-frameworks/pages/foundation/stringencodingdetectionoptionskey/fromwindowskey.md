> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stringencodingdetectionoptionskey/fromwindowskey](https://developer.apple.com/documentation/foundation/stringencodingdetectionoptionskey/fromwindowskey)

# fromWindowsKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
static let fromWindowsKey: StringEncodingDetectionOptionsKey
```

<a id="Discussion"></a>

## Discussion

Option specifying whether to consider string encodings corresponding to Windows codepage numbers. The corresponding value for this key is an `NSNumber` object containing a Boolean value. If `@(YES)`, Windows string encodings are removed from consideration. By default, this value is `@(NO)`.

## See Also

### Type Properties

- [allowLossyKey](allowlossykey.md)
- [disallowedEncodingsKey](disallowedencodingskey.md)
- [likelyLanguageKey](likelylanguagekey.md)
- [lossySubstitutionKey](lossysubstitutionkey.md)
- [suggestedEncodingsKey](suggestedencodingskey.md)
- [useOnlySuggestedEncodingsKey](useonlysuggestedencodingskey.md)

# NSStringEncodingDetectionFromWindowsKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
extern NSStringEncodingDetectionOptionsKey const NSStringEncodingDetectionFromWindowsKey;
```

<a id="Discussion"></a>

## Discussion

Option specifying whether to consider string encodings corresponding to Windows codepage numbers. The corresponding value for this key is an `NSNumber` object containing a Boolean value. If `@(YES)`, Windows string encodings are removed from consideration. By default, this value is `@(NO)`.

## See Also

### Type Properties

- [NSStringEncodingDetectionAllowLossyKey](allowlossykey.md)
- [NSStringEncodingDetectionDisallowedEncodingsKey](disallowedencodingskey.md)
- [NSStringEncodingDetectionLikelyLanguageKey](likelylanguagekey.md)
- [NSStringEncodingDetectionLossySubstitutionKey](lossysubstitutionkey.md)
- [NSStringEncodingDetectionSuggestedEncodingsKey](suggestedencodingskey.md)
- [NSStringEncodingDetectionUseOnlySuggestedEncodingsKey](useonlysuggestedencodingskey.md)
