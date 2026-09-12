> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpnowplayinginfopropertyplaybackprogress](https://developer.apple.com/documentation/mediaplayer/mpnowplayinginfopropertyplaybackprogress)

# MPNowPlayingInfoPropertyPlaybackProgress (Swift)

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 5.0+

The current progress of the Now Playing item.

## Declaration

```swift
let MPNowPlayingInfoPropertyPlaybackProgress: String
```

<a id="Discussion"></a>

## Discussion

Value is an [NSNumber](../foundation/nsnumber.md) object configured as a `float`. A value of `0.0` indicates the item isn’t watched, while a value of `1.0` indicates the item was fully watched. This is a high-level indicator. Use [MPNowPlayingInfoPropertyElapsedPlaybackTime](mpnowplayinginfopropertyelapsedplaybacktime.md) for detailed information about how much of the item the user watched.

## See Also

### Accessing Now Playing metadata properties

- [MPNowPlayingInfoCollectionIdentifier](mpnowplayinginfocollectionidentifier.md): The identifier of the collection the Now Playing item belongs to.
- [MPNowPlayingInfoPropertyAdTimeRanges](mpnowplayinginfopropertyadtimeranges.md): A list of ad breaks in the Now Playing item.
- [MPNowPlayingInfoPropertyAvailableLanguageOptions](mpnowplayinginfopropertyavailablelanguageoptions.md): The available language option groups for the Now Playing item.
- [MPNowPlayingInfoPropertyAssetURL](mpnowplayinginfopropertyasseturl.md): The URL pointing to the Now Playing item’s underlying asset.
- [MPNowPlayingInfoPropertyChapterCount](mpnowplayinginfopropertychaptercount.md): The total number of chapters in the Now Playing item.
- [MPNowPlayingInfoPropertyChapterNumber](mpnowplayinginfopropertychapternumber.md): The number corresponding to the currently playing chapter.
- [MPNowPlayingInfoPropertyCreditsStartTime](mpnowplayinginfopropertycreditsstarttime.md): The start time for the credits, in seconds, without ads, for the Now Playing item.
- [MPNowPlayingInfoPropertyCurrentLanguageOptions](mpnowplayinginfopropertycurrentlanguageoptions.md): The currently active language options for the Now Playing item.
- [MPNowPlayingInfoPropertyCurrentPlaybackDate](mpnowplayinginfopropertycurrentplaybackdate.md): The date associated with the current elapsed playback time.
- [MPNowPlayingInfoPropertyDefaultPlaybackRate](mpnowplayinginfopropertydefaultplaybackrate.md): The default playback rate for the Now Playing item.
- [MPNowPlayingInfoPropertyElapsedPlaybackTime](mpnowplayinginfopropertyelapsedplaybacktime.md): The elapsed time of the Now Playing item, in seconds.
- [MPNowPlayingInfoPropertyExcludeFromSuggestions](mpnowplayinginfopropertyexcludefromsuggestions.md): A number that denotes whether to exclude the Now Playing item from content suggestions.
- [MPNowPlayingInfoPropertyExternalContentIdentifier](mpnowplayinginfopropertyexternalcontentidentifier.md): The opaque identifier that uniquely identifies the Now Playing item, even through app relaunches.
- [MPNowPlayingInfoPropertyExternalUserProfileIdentifier](mpnowplayinginfopropertyexternaluserprofileidentifier.md): The opaque identifier that uniquely identifies the profile the Now Playing item plays from, even through app relaunches.
- [MPNowPlayingInfoPropertyInternationalStandardRecordingCode](mpnowplayinginfopropertyinternationalstandardrecordingcode.md): The International Standard Recording Code (ISRC) of the Now Playing item.

# MPNowPlayingInfoPropertyPlaybackProgress (Objective-C)

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 5.0+

The current progress of the Now Playing item.

## Declaration

```objectivec
extern NSString * const MPNowPlayingInfoPropertyPlaybackProgress;
```

<a id="Discussion"></a>

## Discussion

Value is an [NSNumber](../foundation/nsnumber.md) object configured as a `float`. A value of `0.0` indicates the item isn’t watched, while a value of `1.0` indicates the item was fully watched. This is a high-level indicator. Use [MPNowPlayingInfoPropertyElapsedPlaybackTime](mpnowplayinginfopropertyelapsedplaybacktime.md) for detailed information about how much of the item the user watched.

## See Also

### Accessing Now Playing metadata properties

- [MPNowPlayingInfoCollectionIdentifier](mpnowplayinginfocollectionidentifier.md): The identifier of the collection the Now Playing item belongs to.
- [MPNowPlayingInfoPropertyAdTimeRanges](mpnowplayinginfopropertyadtimeranges.md): A list of ad breaks in the Now Playing item.
- [MPNowPlayingInfoPropertyAvailableLanguageOptions](mpnowplayinginfopropertyavailablelanguageoptions.md): The available language option groups for the Now Playing item.
- [MPNowPlayingInfoPropertyAssetURL](mpnowplayinginfopropertyasseturl.md): The URL pointing to the Now Playing item’s underlying asset.
- [MPNowPlayingInfoPropertyChapterCount](mpnowplayinginfopropertychaptercount.md): The total number of chapters in the Now Playing item.
- [MPNowPlayingInfoPropertyChapterNumber](mpnowplayinginfopropertychapternumber.md): The number corresponding to the currently playing chapter.
- [MPNowPlayingInfoPropertyCreditsStartTime](mpnowplayinginfopropertycreditsstarttime.md): The start time for the credits, in seconds, without ads, for the Now Playing item.
- [MPNowPlayingInfoPropertyCurrentLanguageOptions](mpnowplayinginfopropertycurrentlanguageoptions.md): The currently active language options for the Now Playing item.
- [MPNowPlayingInfoPropertyCurrentPlaybackDate](mpnowplayinginfopropertycurrentplaybackdate.md): The date associated with the current elapsed playback time.
- [MPNowPlayingInfoPropertyDefaultPlaybackRate](mpnowplayinginfopropertydefaultplaybackrate.md): The default playback rate for the Now Playing item.
- [MPNowPlayingInfoPropertyElapsedPlaybackTime](mpnowplayinginfopropertyelapsedplaybacktime.md): The elapsed time of the Now Playing item, in seconds.
- [MPNowPlayingInfoPropertyExcludeFromSuggestions](mpnowplayinginfopropertyexcludefromsuggestions.md): A number that denotes whether to exclude the Now Playing item from content suggestions.
- [MPNowPlayingInfoPropertyExternalContentIdentifier](mpnowplayinginfopropertyexternalcontentidentifier.md): The opaque identifier that uniquely identifies the Now Playing item, even through app relaunches.
- [MPNowPlayingInfoPropertyExternalUserProfileIdentifier](mpnowplayinginfopropertyexternaluserprofileidentifier.md): The opaque identifier that uniquely identifies the profile the Now Playing item plays from, even through app relaunches.
- [MPNowPlayingInfoPropertyInternationalStandardRecordingCode](mpnowplayinginfopropertyinternationalstandardrecordingcode.md): The International Standard Recording Code (ISRC) of the Now Playing item.
