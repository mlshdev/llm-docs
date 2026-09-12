> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvariantqualifier/predicate(forimmersiveaudio:mediaselectionoption:)](https://developer.apple.com/documentation/avfoundation/avassetvariantqualifier/predicate(forimmersiveaudio:mediaselectionoption:))

# predicate(forImmersiveAudio:mediaSelectionOption:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a predicate for immersive audio.

## Declaration

```swift
class func predicate(forImmersiveAudio isImmersiveAudio: Bool, mediaSelectionOption: AVMediaSelectionOption?) -> NSPredicate
```

## Parameters

- `isImmersiveAudio`:
- `mediaSelectionOption`: The media selection option for the variant.

<a id="return-value"></a>

## Return Value

A predicate object that you use to to create an [AVAssetVariantQualifier](../avassetvariantqualifier.md).

<a id="Discussion"></a>

## Discussion

Use the returned value, along with other predicates, to express variant preferences.

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
- [predicate(forPresentationHeight:operatorType:)](predicate%28forpresentationheight_operatortype_%29.md): Creates a predicate with a height and operator type.
- [predicate(forPresentationWidth:operatorType:)](predicate%28forpresentationwidth_operatortype_%29.md): Creates a predicate with a width and operator type.

# predicateForImmersiveAudio:mediaSelectionOption: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a predicate for immersive audio.

## Declaration

```objectivec
+ (NSPredicate *) predicateForImmersiveAudio:(BOOL) isImmersiveAudio mediaSelectionOption:(AVMediaSelectionOption *) mediaSelectionOption;
```

## Parameters

- `isImmersiveAudio`:
- `mediaSelectionOption`: The media selection option for the variant.

<a id="return-value"></a>

## Return Value

A predicate object that you use to to create an [AVAssetVariantQualifier](../avassetvariantqualifier.md).

<a id="Discussion"></a>

## Discussion

Use the returned value, along with other predicates, to express variant preferences.

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
- [predicateForPresentationHeight:operatorType:](predicate%28forpresentationheight_operatortype_%29.md): Creates a predicate with a height and operator type.
- [predicateForPresentationWidth:operatorType:](predicate%28forpresentationwidth_operatortype_%29.md): Creates a predicate with a width and operator type.
