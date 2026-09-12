> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvariantqualifier/predicate(foraudiosamplerate:mediaselectionoption:operatortype:)](https://developer.apple.com/documentation/avfoundation/avassetvariantqualifier/predicate(foraudiosamplerate:mediaselectionoption:operatortype:))

# predicate(forAudioSampleRate:mediaSelectionOption:operatorType:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a predicate for audio sample rate.

## Declaration

```swift
class func predicate(forAudioSampleRate sampleRate: Double, mediaSelectionOption: AVMediaSelectionOption?, operatorType: NSComparisonPredicate.Operator) -> NSPredicate
```

## Parameters

- `sampleRate`: The specified sample rate to match.
- `mediaSelectionOption`: The audio media selection option under consideration.
- `operatorType`: The operator type.

## See Also

### Building predicates

- [predicate(forAudioSampleRate:operatorType:)](predicate%28foraudiosamplerate_operatortype_%29.md): Creates a NSPredicate for audio sample rate which can be used with other NSPredicates to express variant preferences.
- [predicate(forBinauralAudio:)](predicate%28forbinauralaudio_%29.md): Creates a NSPredicate for binaural which can be used with other NSPredicates to express variant preferences.
- [predicate(forBinauralAudio:mediaSelectionOption:)](predicate%28forbinauralaudio_mediaselectionoption_%29.md): Creates a predicate for binaural audio.
- [predicate(forChannelCount:mediaSelectionOption:operatorType:)](predicate%28forchannelcount_mediaselectionoption_operatortype_%29.md): Creates a predicate with a channel count, media selection option, and operator type.
- [predicate(forChannelCount:operatorType:)](predicate%28forchannelcount_operatortype_%29.md): Creates a NSPredicate for audio channel count which can be used with other NSPredicates to express variant preferences.
- [predicate(forDownmixAudio:)](predicate%28fordownmixaudio_%29.md): Creates a NSPredicate for immersive audio which can be used with other NSPredicates to express variant preferences.
- [predicate(forDownmixAudio:mediaSelectionOption:)](predicate%28fordownmixaudio_mediaselectionoption_%29.md): Creates a predicate for downmix audio.
- [predicate(forImmersiveAudio:)](predicate%28forimmersiveaudio_%29.md): Creates a NSPredicate for immersive audio which can be used with other NSPredicates to express variant preferences.
- [predicate(forImmersiveAudio:mediaSelectionOption:)](predicate%28forimmersiveaudio_mediaselectionoption_%29.md): Creates a predicate for immersive audio.
- [predicate(forPresentationHeight:operatorType:)](predicate%28forpresentationheight_operatortype_%29.md): Creates a predicate with a height and operator type.
- [predicate(forPresentationWidth:operatorType:)](predicate%28forpresentationwidth_operatortype_%29.md): Creates a predicate with a width and operator type.

# predicateForAudioSampleRate:mediaSelectionOption:operatorType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a predicate for audio sample rate.

## Declaration

```objectivec
+ (NSPredicate *) predicateForAudioSampleRate:(double) sampleRate mediaSelectionOption:(AVMediaSelectionOption *) mediaSelectionOption operatorType:(NSPredicateOperatorType) operatorType;
```

## Parameters

- `sampleRate`: The specified sample rate to match.
- `mediaSelectionOption`: The audio media selection option under consideration.
- `operatorType`: The operator type.

## See Also

### Building predicates

- [predicateForAudioSampleRate:operatorType:](predicate%28foraudiosamplerate_operatortype_%29.md): Creates a NSPredicate for audio sample rate which can be used with other NSPredicates to express variant preferences.
- [predicateForBinauralAudio:](predicate%28forbinauralaudio_%29.md): Creates a NSPredicate for binaural which can be used with other NSPredicates to express variant preferences.
- [predicateForBinauralAudio:mediaSelectionOption:](predicate%28forbinauralaudio_mediaselectionoption_%29.md): Creates a predicate for binaural audio.
- [predicateForChannelCount:mediaSelectionOption:operatorType:](predicate%28forchannelcount_mediaselectionoption_operatortype_%29.md): Creates a predicate with a channel count, media selection option, and operator type.
- [predicateForChannelCount:operatorType:](predicate%28forchannelcount_operatortype_%29.md): Creates a NSPredicate for audio channel count which can be used with other NSPredicates to express variant preferences.
- [predicateForDownmixAudio:](predicate%28fordownmixaudio_%29.md): Creates a NSPredicate for immersive audio which can be used with other NSPredicates to express variant preferences.
- [predicateForDownmixAudio:mediaSelectionOption:](predicate%28fordownmixaudio_mediaselectionoption_%29.md): Creates a predicate for downmix audio.
- [predicateForImmersiveAudio:](predicate%28forimmersiveaudio_%29.md): Creates a NSPredicate for immersive audio which can be used with other NSPredicates to express variant preferences.
- [predicateForImmersiveAudio:mediaSelectionOption:](predicate%28forimmersiveaudio_mediaselectionoption_%29.md): Creates a predicate for immersive audio.
- [predicateForPresentationHeight:operatorType:](predicate%28forpresentationheight_operatortype_%29.md): Creates a predicate with a height and operator type.
- [predicateForPresentationWidth:operatorType:](predicate%28forpresentationwidth_operatortype_%29.md): Creates a predicate with a width and operator type.
