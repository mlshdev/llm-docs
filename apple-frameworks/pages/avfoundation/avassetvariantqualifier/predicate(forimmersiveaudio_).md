> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvariantqualifier/predicate(forimmersiveaudio:)](https://developer.apple.com/documentation/avfoundation/avassetvariantqualifier/predicate(forimmersiveaudio:))

# predicate(forImmersiveAudio:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Creates a NSPredicate for immersive audio which can be used with other NSPredicates to express variant preferences.

## Declaration

```swift
class func predicate(forImmersiveAudio isImmersiveAudio: Bool) -> NSPredicate
```

## Parameters

- `isImmersiveAudio`: The RHS value for the value of isImmersiveAudio in the predicate equation.

<a id="discussion"></a>

## Discussion

Predicate will be evaluated on the media selection option selected for the asset. Media selection options for primary assets may be specified in the AVAssetDownloadConfiguration mediaSelections property. Media selection options for interstitial assets may be circumscribed by -\[AVAssetDownloadConfiguration setInterstitialMediaSelectionCriteria: forMediaCharacteristic:\].

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
- [predicate(forImmersiveAudio:mediaSelectionOption:)](predicate%28forimmersiveaudio_mediaselectionoption_%29.md): Creates a predicate for immersive audio.
- [predicate(forPresentationHeight:operatorType:)](predicate%28forpresentationheight_operatortype_%29.md): Creates a predicate with a height and operator type.
- [predicate(forPresentationWidth:operatorType:)](predicate%28forpresentationwidth_operatortype_%29.md): Creates a predicate with a width and operator type.

# predicateForImmersiveAudio: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Creates a NSPredicate for immersive audio which can be used with other NSPredicates to express variant preferences.

## Declaration

```objectivec
+ (NSPredicate *) predicateForImmersiveAudio:(BOOL) isImmersiveAudio;
```

## Parameters

- `isImmersiveAudio`: The RHS value for the value of isImmersiveAudio in the predicate equation.

<a id="discussion"></a>

## Discussion

Predicate will be evaluated on the media selection option selected for the asset. Media selection options for primary assets may be specified in the AVAssetDownloadConfiguration mediaSelections property. Media selection options for interstitial assets may be circumscribed by -\[AVAssetDownloadConfiguration setInterstitialMediaSelectionCriteria: forMediaCharacteristic:\].

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
- [predicateForImmersiveAudio:mediaSelectionOption:](predicate%28forimmersiveaudio_mediaselectionoption_%29.md): Creates a predicate for immersive audio.
- [predicateForPresentationHeight:operatorType:](predicate%28forpresentationheight_operatortype_%29.md): Creates a predicate with a height and operator type.
- [predicateForPresentationWidth:operatorType:](predicate%28forpresentationwidth_operatortype_%29.md): Creates a predicate with a width and operator type.
