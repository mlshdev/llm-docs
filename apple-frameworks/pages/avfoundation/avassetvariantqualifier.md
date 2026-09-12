> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvariantqualifier](https://developer.apple.com/documentation/avfoundation/avassetvariantqualifier)

# AVAssetVariantQualifier (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 10.0+

An object that represents an HTTP Live Streaming asset variant.

## Declaration

```swift
class AVAssetVariantQualifier
```

## Topics

### Creating a variant qualifier

- [init(variant:)](avassetvariantqualifier/init%28variant_%29.md): Creates a variant qualifier with an asset variant.
- [AVAssetVariant](avassetvariant.md): An object that represents a bit rate variant.
- [init(predicate:)](avassetvariantqualifier/init%28predicate_%29.md): Creates a variant qualifier with a predicate.

### Building predicates

- [predicate(forAudioSampleRate:mediaSelectionOption:operatorType:)](avassetvariantqualifier/predicate%28foraudiosamplerate_mediaselectionoption_operatortype_%29.md): Creates a predicate for audio sample rate.
- [predicate(forAudioSampleRate:operatorType:)](avassetvariantqualifier/predicate%28foraudiosamplerate_operatortype_%29.md): Creates a NSPredicate for audio sample rate which can be used with other NSPredicates to express variant preferences.
- [predicate(forBinauralAudio:)](avassetvariantqualifier/predicate%28forbinauralaudio_%29.md): Creates a NSPredicate for binaural which can be used with other NSPredicates to express variant preferences.
- [predicate(forBinauralAudio:mediaSelectionOption:)](avassetvariantqualifier/predicate%28forbinauralaudio_mediaselectionoption_%29.md): Creates a predicate for binaural audio.
- [predicate(forChannelCount:mediaSelectionOption:operatorType:)](avassetvariantqualifier/predicate%28forchannelcount_mediaselectionoption_operatortype_%29.md): Creates a predicate with a channel count, media selection option, and operator type.
- [predicate(forChannelCount:operatorType:)](avassetvariantqualifier/predicate%28forchannelcount_operatortype_%29.md): Creates a NSPredicate for audio channel count which can be used with other NSPredicates to express variant preferences.
- [predicate(forDownmixAudio:)](avassetvariantqualifier/predicate%28fordownmixaudio_%29.md): Creates a NSPredicate for immersive audio which can be used with other NSPredicates to express variant preferences.
- [predicate(forDownmixAudio:mediaSelectionOption:)](avassetvariantqualifier/predicate%28fordownmixaudio_mediaselectionoption_%29.md): Creates a predicate for downmix audio.
- [predicate(forImmersiveAudio:)](avassetvariantqualifier/predicate%28forimmersiveaudio_%29.md): Creates a NSPredicate for immersive audio which can be used with other NSPredicates to express variant preferences.
- [predicate(forImmersiveAudio:mediaSelectionOption:)](avassetvariantqualifier/predicate%28forimmersiveaudio_mediaselectionoption_%29.md): Creates a predicate for immersive audio.
- [predicate(forPresentationHeight:operatorType:)](avassetvariantqualifier/predicate%28forpresentationheight_operatortype_%29.md): Creates a predicate with a height and operator type.
- [predicate(forPresentationWidth:operatorType:)](avassetvariantqualifier/predicate%28forpresentationwidth_operatortype_%29.md): Creates a predicate with a width and operator type.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing configuration details

- [variantQualifiers](avassetdownloadcontentconfiguration/variantqualifiers.md): The variant qualifiers for this configuration.
- [mediaSelections](avassetdownloadcontentconfiguration/mediaselections.md): The media selections of an asset that a task downloads.

# AVAssetVariantQualifier (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 10.0+

An object that represents an HTTP Live Streaming asset variant.

## Declaration

```objectivec
@interface AVAssetVariantQualifier : NSObject
```

## Topics

### Creating a variant qualifier

- [assetVariantQualifierWithVariant:](avassetvariantqualifier/init%28variant_%29.md): Creates a variant qualifier with an asset variant.
- [AVAssetVariant](avassetvariant.md): An object that represents a bit rate variant.
- [assetVariantQualifierWithPredicate:](avassetvariantqualifier/init%28predicate_%29.md): Creates a variant qualifier with a predicate.
- [assetVariantQualifierForMaximumValueInKeyPath:](avassetvariantqualifier/assetvariantqualifierformaximumvalueinkeypath_.md): Returns a qualifer for finding variant with maximum value in the input key path
- [assetVariantQualifierForMinimumValueInKeyPath:](avassetvariantqualifier/assetvariantqualifierforminimumvalueinkeypath_.md): Returns a qualifer for finding variant with minimum value in the input key path.

### Building predicates

- [predicateForAudioSampleRate:mediaSelectionOption:operatorType:](avassetvariantqualifier/predicate%28foraudiosamplerate_mediaselectionoption_operatortype_%29.md): Creates a predicate for audio sample rate.
- [predicateForAudioSampleRate:operatorType:](avassetvariantqualifier/predicate%28foraudiosamplerate_operatortype_%29.md): Creates a NSPredicate for audio sample rate which can be used with other NSPredicates to express variant preferences.
- [predicateForBinauralAudio:](avassetvariantqualifier/predicate%28forbinauralaudio_%29.md): Creates a NSPredicate for binaural which can be used with other NSPredicates to express variant preferences.
- [predicateForBinauralAudio:mediaSelectionOption:](avassetvariantqualifier/predicate%28forbinauralaudio_mediaselectionoption_%29.md): Creates a predicate for binaural audio.
- [predicateForChannelCount:mediaSelectionOption:operatorType:](avassetvariantqualifier/predicate%28forchannelcount_mediaselectionoption_operatortype_%29.md): Creates a predicate with a channel count, media selection option, and operator type.
- [predicateForChannelCount:operatorType:](avassetvariantqualifier/predicate%28forchannelcount_operatortype_%29.md): Creates a NSPredicate for audio channel count which can be used with other NSPredicates to express variant preferences.
- [predicateForDownmixAudio:](avassetvariantqualifier/predicate%28fordownmixaudio_%29.md): Creates a NSPredicate for immersive audio which can be used with other NSPredicates to express variant preferences.
- [predicateForDownmixAudio:mediaSelectionOption:](avassetvariantqualifier/predicate%28fordownmixaudio_mediaselectionoption_%29.md): Creates a predicate for downmix audio.
- [predicateForImmersiveAudio:](avassetvariantqualifier/predicate%28forimmersiveaudio_%29.md): Creates a NSPredicate for immersive audio which can be used with other NSPredicates to express variant preferences.
- [predicateForImmersiveAudio:mediaSelectionOption:](avassetvariantqualifier/predicate%28forimmersiveaudio_mediaselectionoption_%29.md): Creates a predicate for immersive audio.
- [predicateForPresentationHeight:operatorType:](avassetvariantqualifier/predicate%28forpresentationheight_operatortype_%29.md): Creates a predicate with a height and operator type.
- [predicateForPresentationWidth:operatorType:](avassetvariantqualifier/predicate%28forpresentationwidth_operatortype_%29.md): Creates a predicate with a width and operator type.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Accessing configuration details

- [variantQualifiers](avassetdownloadcontentconfiguration/variantqualifiers.md): The variant qualifiers for this configuration.
- [mediaSelections](avassetdownloadcontentconfiguration/mediaselections.md): The media selections of an asset that a task downloads.
