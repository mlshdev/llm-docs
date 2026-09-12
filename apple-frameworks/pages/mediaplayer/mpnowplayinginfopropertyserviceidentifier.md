> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpnowplayinginfopropertyserviceidentifier](https://developer.apple.com/documentation/mediaplayer/mpnowplayinginfopropertyserviceidentifier)

# MPNowPlayingInfoPropertyServiceIdentifier (Swift)

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

The service provider associated with the Now Playing item.

## Declaration

```swift
let MPNowPlayingInfoPropertyServiceIdentifier: String
```

<a id="Discussion"></a>

## Discussion

Value is a unique [NSString](https://developer.apple.com/library/archive/releasenotes/Foundation/RN-FoundationOlderNotes/index.html#//apple_ref/doc/uid/TP40008080-TRANSLATED_CHAPTER_965-TRANSLATED_DEST_198) that identifies the service provider for the now-playing item. If the Now Playing item belongs to a channel or subscription service, you can use this key to coordinate various types of Now Playing content from the service provider.

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

# MPNowPlayingInfoPropertyServiceIdentifier (Objective-C)

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

The service provider associated with the Now Playing item.

## Declaration

```objectivec
extern NSString * const MPNowPlayingInfoPropertyServiceIdentifier;
```

<a id="Discussion"></a>

## Discussion

Value is a unique [NSString](https://developer.apple.com/library/archive/releasenotes/Foundation/RN-FoundationOlderNotes/index.html#//apple_ref/doc/uid/TP40008080-TRANSLATED_CHAPTER_965-TRANSLATED_DEST_198) that identifies the service provider for the now-playing item. If the Now Playing item belongs to a channel or subscription service, you can use this key to coordinate various types of Now Playing content from the service provider.

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
