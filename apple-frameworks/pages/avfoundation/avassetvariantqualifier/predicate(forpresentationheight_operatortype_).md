> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvariantqualifier/predicate(forpresentationheight:operatortype:)](https://developer.apple.com/documentation/avfoundation/avassetvariantqualifier/predicate(forpresentationheight:operatortype:))

# predicate(forPresentationHeight:operatorType:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a predicate with a height and operator type.

## Declaration

```swift
class func predicate(forPresentationHeight height: CGFloat, operatorType: NSComparisonPredicate.Operator) -> NSPredicate
```

## Parameters

- `height`: The presentation height.
- `operatorType`: The predicate’s operator type.

<a id="return-value"></a>

## Return Value

A predicate object that you use to to create an [AVAssetVariantQualifier](../avassetvariantqualifier.md).

## See Also

### Building predicates

- [predicate(forAudioSampleRate:mediaSelectionOption:operatorType:)](predicate%28foraudiosamplerate_mediaselectionoption_operatortype_%29.md): Creates a predicate for audio sample rate.
- [predicate(forAudioSampleRate:operatorType:)](predicate%28foraudiosamplerate_operatortype_%29.md): Creates a NSPredicate for audio sample rate which can be used with other NSPredicates to express variant preferences.
- [predicate(forBinauralAudio:)](predicate%28forbinauralaudio_%29.md): Creates a NSPredicate for binaural which can be used with other NSPredicates to express variant preferences.
- [predicate(forBinauralAudio:mediaSelectionOption:)](predicate%28forbinauralaudio_mediaselectionoption_%29.md): Creates a predicate for binaural audio.
- [predicate(forChannelCount:mediaSelectionOption:operatorType:)](predicate%28forchannelcount_mediaselectionoption_operatortype_%29.md): Creates a predicate with a channel count, media selection option, and operator type.
- [predicate(forChannelCount:operatorType:)](predicate%28forchannelcount_operatortype_%29.md): Creates a NSPredicate for audio channel count which can be used with other NSPredicates to express variant preferences.
- [predicate(forDownmixAudio:)](predicate%28fordownmixaudio_%29.md): Creates a NSPredicate for immersive audio which can be used with other NSPredicates to express variant preferences.
- [predicate(forDownmixAudio:mediaSelectionOption:)](predicate%28fordownmixaudio_mediaselectionoption_%29.md): Creates a predicate for downmix audio.
- [predicate(forImmersiveAudio:)](predicate%28forimmersiveaudio_%29.md): Creates a NSPredicate for immersive audio which can be used with other NSPredicates to express variant preferences.
- [predicate(forImmersiveAudio:mediaSelectionOption:)](predicate%28forimmersiveaudio_mediaselectionoption_%29.md): Creates a predicate for immersive audio.
- [predicate(forPresentationWidth:operatorType:)](predicate%28forpresentationwidth_operatortype_%29.md): Creates a predicate with a width and operator type.

# predicateForPresentationHeight:operatorType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a predicate with a height and operator type.

## Declaration

```objectivec
+ (NSPredicate *) predicateForPresentationHeight:(CGFloat) height operatorType:(NSPredicateOperatorType) operatorType;
```

## Parameters

- `height`: The presentation height.
- `operatorType`: The predicate’s operator type.

<a id="return-value"></a>

## Return Value

A predicate object that you use to to create an [AVAssetVariantQualifier](../avassetvariantqualifier.md).

## See Also

### Building predicates

- [predicateForAudioSampleRate:mediaSelectionOption:operatorType:](predicate%28foraudiosamplerate_mediaselectionoption_operatortype_%29.md): Creates a predicate for audio sample rate.
- [predicateForAudioSampleRate:operatorType:](predicate%28foraudiosamplerate_operatortype_%29.md): Creates a NSPredicate for audio sample rate which can be used with other NSPredicates to express variant preferences.
- [predicateForBinauralAudio:](predicate%28forbinauralaudio_%29.md): Creates a NSPredicate for binaural which can be used with other NSPredicates to express variant preferences.
- [predicateForBinauralAudio:mediaSelectionOption:](predicate%28forbinauralaudio_mediaselectionoption_%29.md): Creates a predicate for binaural audio.
- [predicateForChannelCount:mediaSelectionOption:operatorType:](predicate%28forchannelcount_mediaselectionoption_operatortype_%29.md): Creates a predicate with a channel count, media selection option, and operator type.
- [predicateForChannelCount:operatorType:](predicate%28forchannelcount_operatortype_%29.md): Creates a NSPredicate for audio channel count which can be used with other NSPredicates to express variant preferences.
- [predicateForDownmixAudio:](predicate%28fordownmixaudio_%29.md): Creates a NSPredicate for immersive audio which can be used with other NSPredicates to express variant preferences.
- [predicateForDownmixAudio:mediaSelectionOption:](predicate%28fordownmixaudio_mediaselectionoption_%29.md): Creates a predicate for downmix audio.
- [predicateForImmersiveAudio:](predicate%28forimmersiveaudio_%29.md): Creates a NSPredicate for immersive audio which can be used with other NSPredicates to express variant preferences.
- [predicateForImmersiveAudio:mediaSelectionOption:](predicate%28forimmersiveaudio_mediaselectionoption_%29.md): Creates a predicate for immersive audio.
- [predicateForPresentationWidth:operatorType:](predicate%28forpresentationwidth_operatortype_%29.md): Creates a predicate with a width and operator type.
