> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibmediaitem](https://developer.apple.com/documentation/ituneslibrary/itlibmediaitem)

# ITLibMediaItem (Swift)

**Framework:** iTunes Library  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

This class describes a media item (a track) in the iTunes library, such as a song, a video, or a podcast.

## Declaration

```swift
class ITLibMediaItem
```

<a id="overview"></a>

## Overview

Like all media entities, each media item has a unique identifier and a set of properties.

## Topics

### Getting Media Item Info

- [title](itlibmediaitem/title.md): The title of the media item.
- [sortTitle](itlibmediaitem/sorttitle.md): The title of the media item to use when sorting.
- [artist](itlibmediaitem/artist.md): Information about the artist that iTunes associates with the media item.
- [composer](itlibmediaitem/composer.md): The name of the composer that iTunes associates with the media item.
- [sortComposer](itlibmediaitem/sortcomposer.md): The name to use when sorting by composer.
- [rating](itlibmediaitem/rating.md): The rating of the media item.
- [isRatingComputed](itlibmediaitem/isratingcomputed.md): A Boolean value that indicates whether iTunes computes the media item’s rating from its album rating.
- [startTime](itlibmediaitem/starttime.md): If nonzero, the actual time playback of the media item starts instead of 0:00 (in milliseconds).
- [stopTime](itlibmediaitem/stoptime.md): If nonzero, the actual time playback of the media item stops versus the total time (in milliseconds).
- [album](itlibmediaitem/album.md): The album of the media item.
- [genre](itlibmediaitem/genre.md): The genre of the media item, if any.
- [kind](itlibmediaitem/kind.md): The kind of media item file, such as an MPEG audio file.
- [mediaKind](itlibmediaitem/mediakind.md): The kind of media item.
- [totalTime](itlibmediaitem/totaltime.md): The length of the media item in milliseconds.
- [trackNumber](itlibmediaitem/tracknumber.md): The position of the media item within its album.
- [category](itlibmediaitem/category.md): The podcast category of the media item, if the media item is a podcast.
- [description](itlibmediaitem/description.md): The description of the media item, if it’s a podcast.
- [contentRating](itlibmediaitem/contentrating.md): The content rating of the media item.
- [lyricsContentRating](itlibmediaitem/lyricscontentrating.md): The content rating of the media item’s lyrics.
- [addedDate](itlibmediaitem/addeddate.md): The date and time that the user added the media item to the iTunes library.
- [modifiedDate](itlibmediaitem/modifieddate.md): The date and time that iTunes last modified the media item.
- [bitrate](itlibmediaitem/bitrate.md): The bitrate of the media item in kbit/s.
- [sampleRate](itlibmediaitem/samplerate.md): The sample rate of the media item in samples-per-second.
- [beatsPerMinute](itlibmediaitem/beatsperminute.md): The beats-per-minute (BPM) of the media item.
- [playCount](itlibmediaitem/playcount.md): The number of times the user has played the media item.
- [lastPlayedDate](itlibmediaitem/lastplayeddate.md): The date and time the user last played the media item, or `nil` if the user hasn’t played it.
- [location](itlibmediaitem/location.md): The location of the media item on disk.
- [locationType](itlibmediaitem/locationtype.md): The type of the media item with respect to its location.
- [hasArtworkAvailable](itlibmediaitem/hasartworkavailable.md): A Boolean value that indicates whether the media item has artwork.
- [artwork](itlibmediaitem/artwork.md): The artwork of the media item.
- [comments](itlibmediaitem/comments.md): Any comments that iTunes associates with the media item.
- [isPurchased](itlibmediaitem/ispurchased.md): A Boolean value that indicates whether the user purchased the media item from the iTunes Store.
- [isDRMProtected](itlibmediaitem/isdrmprotected.md): A Boolean value that indicates whether the media item has digital rights management (DRM) protection.
- [isVideo](itlibmediaitem/isvideo.md): A Boolean value that indicates whether this media item is a video, such as a TV show, video podcast, or movie.
- [videoInfo](itlibmediaitem/videoinfo.md): Video information (such as width and height) about the media item, if it’s a video.
- [releaseDate](itlibmediaitem/releasedate.md): The release date of the media item.
- [year](itlibmediaitem/year.md): The release year of the media item.
- [skipCount](itlibmediaitem/skipcount.md): The number of times that the user skipped the media item.
- [skipDate](itlibmediaitem/skipdate.md): The date and time that the user last skipped the media item.
- [voiceOverLanguage](itlibmediaitem/voiceoverlanguage.md): Deprecated. The voice-over language of the media item.
- [volumeAdjustment](itlibmediaitem/volumeadjustment.md): The volume adjustment for the media item, if any.
- [volumeNormalizationEnergy](itlibmediaitem/volumenormalizationenergy.md): The volume normalization energy that iTunes applies to the media item to bring the average or peak amplitude to a target level.
- [isUserDisabled](itlibmediaitem/isuserdisabled.md): A Boolean value that indicates whether the user disabled the media item.
- [grouping](itlibmediaitem/grouping.md): The grouping of the media item that the user specifies or that iTunes specifies in the file’s metadata.
- [fileSize](itlibmediaitem/filesize.md): The size in bytes of this media item on disk.
- [isCloud](itlibmediaitem/iscloud.md): A Boolean value that indicates whether this media item is an iTunes Match or an iTunes in the Cloud item.
- [playStatus](itlibmediaitem/playstatus.md): The play status for the media.
- [ITLibMediaItemMediaKind](itlibmediaitemmediakind.md): These constants specify the possible media kinds of a media item.
- [ITLibMediaItemLocationType](itlibmediaitemlocationtype.md): These constants specify the location type of a media item.
- [ITLibMediaItemLyricsContentRating](itlibmediaitemlyricscontentrating.md): These constants specify the possible ratings of media item lyrics.
- [ITLibMediaItemPlayStatus](itlibmediaitemplaystatus.md): These constants specify the play status of the media item.

### Media Item Properties

- [ITLibMediaEntityPropertyPersistentID](itlibmediaentitypropertypersistentid.md): The unique identifier of the media entity.
- [ITLibMediaItemPropertyAddedDate](itlibmediaitempropertyaddeddate.md): The date and time the user added the media item to the iTunes library.
- [ITLibMediaItemPropertyAlbumArtist](itlibmediaitempropertyalbumartist.md): The name of the artist that iTunes associates with the media item’s album.
- [ITLibMediaItemPropertyAlbumDiscCount](itlibmediaitempropertyalbumdisccount.md): The number of discs in the media item’s album.
- [ITLibMediaItemPropertyAlbumDiscNumber](itlibmediaitempropertyalbumdiscnumber.md): The disc number in the media item’s album.
- [ITLibMediaItemPropertyAlbumIsCompilation](itlibmediaitempropertyalbumiscompilation.md): This property indicates whether the album of the media item is a compilation.
- [ITLibMediaItemPropertyAlbumIsGapless](itlibmediaitempropertyalbumisgapless.md): This property indicates whether the media item’s album is gapless.
- [ITLibMediaItemPropertyAlbumRating](itlibmediaitempropertyalbumrating.md): The rating of the media item’s album.
- [ITLibMediaItemPropertyAlbumRatingComputed](itlibmediaitempropertyalbumratingcomputed.md): This property indicates whether iTunes computes the rating of the media item’s album from the ratings of individual tracks in the album.
- [ITLibMediaItemPropertyAlbumTitle](itlibmediaitempropertyalbumtitle.md): The title of the media item’s album.
- [ITLibMediaItemPropertyAlbumTrackCount](itlibmediaitempropertyalbumtrackcount.md): The track count of the media item’s album.
- [ITLibMediaItemPropertyArtistName](itlibmediaitempropertyartistname.md): The name of the artist that iTunes associates with the media item.
- [ITLibMediaItemPropertyArtwork](itlibmediaitempropertyartwork.md): The artwork for the media item.
- [ITLibMediaItemPropertyBeatsPerMinute](itlibmediaitempropertybeatsperminute.md): The beats-per-minute (BPM) of the media item.
- [ITLibMediaItemPropertyBitRate](itlibmediaitempropertybitrate.md): The bitrate of the media item in kbit/s.
- [ITLibMediaItemPropertyCategory](itlibmediaitempropertycategory.md): The podcast category of the media item, if the media item is a podcast.
- [ITLibMediaItemPropertyComments](itlibmediaitempropertycomments.md): Any comments that iTunes associates with the media item.
- [ITLibMediaItemPropertyComposer](itlibmediaitempropertycomposer.md): The name of the composer that iTunes associates with the media item.
- [ITLibMediaItemPropertyContentRating](itlibmediaitempropertycontentrating.md): The extended content rating of the media item.
- [ITLibMediaItemPropertyDescription](itlibmediaitempropertydescription.md): A podcast description of the media item, if the media item is a podcast.
- [ITLibMediaItemPropertyFileSize](itlibmediaitempropertyfilesize.md): The size in bytes of the media item on disk.
- [ITLibMediaItemPropertyGenre](itlibmediaitempropertygenre.md): The genre that iTunes associates with the media item.
- [ITLibMediaItemPropertyGrouping](itlibmediaitempropertygrouping.md): The grouping of the media item.
- [ITLibMediaItemPropertyHasArtwork](itlibmediaitempropertyhasartwork.md): This property indicates whether the media item has artwork.
- [ITLibMediaItemPropertyIsDRMProtected](itlibmediaitempropertyisdrmprotected.md): This property indicates whether the media item has digital rights management (DRM) protection.
- [ITLibMediaItemPropertyIsPurchased](itlibmediaitempropertyispurchased.md): This property indicates whether the media item is a purchased media item.
- [ITLibMediaItemPropertyIsUserDisabled](itlibmediaitempropertyisuserdisabled.md): This property indicates whether the user disabled the media item.
- [ITLibMediaItemPropertyIsVideo](itlibmediaitempropertyisvideo.md): This property indicates whether the media item is a video media item, such as a video podcast or movie.
- [ITLibMediaItemPropertyKind](itlibmediaitempropertykind.md): The kind of media item file, such as an MPEG audio file.
- [ITLibMediaItemPropertyLastPlayDate](itlibmediaitempropertylastplaydate.md): The date and time the user last played the media item in iTunes, or `nil` if the user hasn’t played the media item.
- [ITLibMediaItemPropertyLocation](itlibmediaitempropertylocation.md): The location of the media item on disk.
- [ITLibMediaItemPropertyLocationType](itlibmediaitempropertylocationtype.md): The type of the media item with respect to its location.
- [ITLibMediaItemPropertyLyricsContentRating](itlibmediaitempropertylyricscontentrating.md): The content rating of the media item’s lyrics.
- [ITLibMediaItemPropertyMediaKind](itlibmediaitempropertymediakind.md): The media kind of the media item.
- [ITLibMediaItemPropertyModifiedDate](itlibmediaitempropertymodifieddate.md): The date and time that iTunes last modified the media item.
- [ITLibMediaItemPropertyMovementCount](itlibmediaitempropertymovementcount.md)
- [ITLibMediaItemPropertyMovementName](itlibmediaitempropertymovementname.md)
- [ITLibMediaItemPropertyMovementNumber](itlibmediaitempropertymovementnumber.md)
- [ITLibMediaItemPropertyPlayCount](itlibmediaitempropertyplaycount.md): The number of times the user has played the media item in iTunes.
- [ITLibMediaItemPropertyPlayStatus](itlibmediaitempropertyplaystatus.md): The play status of the media item.
- [ITLibMediaItemPropertyRating](itlibmediaitempropertyrating.md): The rating of the media item.
- [ITLibMediaItemPropertyRatingComputed](itlibmediaitempropertyratingcomputed.md): This property indicates whether iTunes computes the media item’s rating.
- [ITLibMediaItemPropertyReleaseDate](itlibmediaitempropertyreleasedate.md): The release date of the media item.
- [ITLibMediaItemPropertySampleRate](itlibmediaitempropertysamplerate.md): The sample rate of the media item in samples-per-second.
- [ITLibMediaItemPropertySize](itlibmediaitempropertysize.md): Deprecated. The size in bytes of the media item on disk.
- [ITLibMediaItemPropertySkipDate](itlibmediaitempropertyskipdate.md): The date and time that the user last skipped the media item.
- [ITLibMediaItemPropertySortAlbumArtist](itlibmediaitempropertysortalbumartist.md): The name of the artist that iTunes associates with the media item’s album, for use when sorting.
- [ITLibMediaItemPropertySortAlbumTitle](itlibmediaitempropertysortalbumtitle.md): The title of the media item’s album, for use when sorting.
- [ITLibMediaItemPropertySortArtistName](itlibmediaitempropertysortartistname.md): The name of the media item’s artist, for use when sorting.
- [ITLibMediaItemPropertySortComposer](itlibmediaitempropertysortcomposer.md): The name of the composer that iTunes associates with the media item, for use when sorting.
- [ITLibMediaItemPropertySortTitle](itlibmediaitempropertysorttitle.md): The title of the media item to use when sorting.
- [ITLibMediaItemPropertyStartTime](itlibmediaitempropertystarttime.md): If nonzero, the actual time that playback for the media item starts instead of 0:00 (in milliseconds).
- [ITLibMediaItemPropertyStopTime](itlibmediaitempropertystoptime.md): If nonzero, the actual time that playback for the media item stops versus the total time (in milliseconds).
- [ITLibMediaItemPropertyTitle](itlibmediaitempropertytitle.md): The title of the media item.
- [ITLibMediaItemPropertyTotalTime](itlibmediaitempropertytotaltime.md): The length of the media item in milliseconds.
- [ITLibMediaItemPropertyTrackNumber](itlibmediaitempropertytracknumber.md): The numerical position of the media item within its album.
- [ITLibMediaItemPropertyUserSkipCount](itlibmediaitempropertyuserskipcount.md): The number of times that the user skipped the media item.
- [ITLibMediaItemPropertyVideoEpisode](itlibmediaitempropertyvideoepisode.md): The name of the episode, if the media item is an episode of a TV series.
- [ITLibMediaItemPropertyVideoEpisodeOrder](itlibmediaitempropertyvideoepisodeorder.md): The order of the episode, if the media item is an episode of a TV series.
- [ITLibMediaItemPropertyVideoHeight](itlibmediaitempropertyvideoheight.md): The height in pixels, if the media item is a video.
- [ITLibMediaItemPropertyVideoIsHD](itlibmediaitempropertyvideoishd.md): This property indicates whether a video media item is high-definition.
- [ITLibMediaItemPropertyVideoSeason](itlibmediaitempropertyvideoseason.md): The corresponding TV season, if the media item is an episode of a TV series.
- [ITLibMediaItemPropertyVideoSeries](itlibmediaitempropertyvideoseries.md): The name of the corresponding TV series, if the media item is an episode in a TV series.
- [ITLibMediaItemPropertyVideoSortSeries](itlibmediaitempropertyvideosortseries.md): The sorting name of the corresponding TV series, if the media item is an episode in a TV series.
- [ITLibMediaItemPropertyVideoWidth](itlibmediaitempropertyvideowidth.md): The width in pixels, if the media item is a video.
- [ITLibMediaItemPropertyVoiceOverLanguage](itlibmediaitempropertyvoiceoverlanguage.md): Deprecated. The voice-over language of the media item.
- [ITLibMediaItemPropertyVolumeAdjustment](itlibmediaitempropertyvolumeadjustment.md): The volume adjustment for the media item, if any.
- [ITLibMediaItemPropertyVolumeNormalizationEnergy](itlibmediaitempropertyvolumenormalizationenergy.md): The volume normalization energy that iTunes applies to the media item to bring the average or peak amplitude to a target level.
- [ITLibMediaItemPropertyWork](itlibmediaitempropertywork.md)
- [ITLibMediaItemPropertyYear](itlibmediaitempropertyyear.md): The release year of the media item.

### Deprecated

- [fileType](itlibmediaitem/filetype.md): Deprecated. The file type of the media item.
- [size](itlibmediaitem/size.md): Deprecated. The size in bytes of the media item on disk.
- [ITLibMediaItemPropertyFileType](itlibmediaitempropertyfiletype.md): Deprecated. The file type of the media item.

## Relationships

### Inherits From

- [ITLibMediaEntity](itlibmediaentity.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Media Items

- [ITLibMediaEntity](itlibmediaentity.md): This class describes a media entity, which can be a media item, such as an audio track.
- [ITLibArtist](itlibartist.md): This class represents an artist, such as the performer of a song.
- [ITLibArtwork](itlibartwork.md): This class represents the artwork for a media item.
- [ITLibMediaItemVideoInfo](itlibmediaitemvideoinfo.md): This class encapsulates the video information of a video media item.

# ITLibMediaItem (Objective-C)

**Framework:** iTunes Library  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

This class describes a media item (a track) in the iTunes library, such as a song, a video, or a podcast.

## Declaration

```objectivec
@interface ITLibMediaItem : ITLibMediaEntity
```

<a id="overview"></a>

## Overview

Like all media entities, each media item has a unique identifier and a set of properties.

## Topics

### Getting Media Item Info

- [title](itlibmediaitem/title.md): The title of the media item.
- [sortTitle](itlibmediaitem/sorttitle.md): The title of the media item to use when sorting.
- [artist](itlibmediaitem/artist.md): Information about the artist that iTunes associates with the media item.
- [composer](itlibmediaitem/composer.md): The name of the composer that iTunes associates with the media item.
- [sortComposer](itlibmediaitem/sortcomposer.md): The name to use when sorting by composer.
- [rating](itlibmediaitem/rating.md): The rating of the media item.
- [ratingComputed](itlibmediaitem/isratingcomputed.md): A Boolean value that indicates whether iTunes computes the media item’s rating from its album rating.
- [startTime](itlibmediaitem/starttime.md): If nonzero, the actual time playback of the media item starts instead of 0:00 (in milliseconds).
- [stopTime](itlibmediaitem/stoptime.md): If nonzero, the actual time playback of the media item stops versus the total time (in milliseconds).
- [album](itlibmediaitem/album.md): The album of the media item.
- [genre](itlibmediaitem/genre.md): The genre of the media item, if any.
- [kind](itlibmediaitem/kind.md): The kind of media item file, such as an MPEG audio file.
- [mediaKind](itlibmediaitem/mediakind.md): The kind of media item.
- [totalTime](itlibmediaitem/totaltime.md): The length of the media item in milliseconds.
- [trackNumber](itlibmediaitem/tracknumber.md): The position of the media item within its album.
- [category](itlibmediaitem/category.md): The podcast category of the media item, if the media item is a podcast.
- [description](itlibmediaitem/description.md): The description of the media item, if it’s a podcast.
- [contentRating](itlibmediaitem/contentrating.md): The content rating of the media item.
- [lyricsContentRating](itlibmediaitem/lyricscontentrating.md): The content rating of the media item’s lyrics.
- [addedDate](itlibmediaitem/addeddate.md): The date and time that the user added the media item to the iTunes library.
- [modifiedDate](itlibmediaitem/modifieddate.md): The date and time that iTunes last modified the media item.
- [bitrate](itlibmediaitem/bitrate.md): The bitrate of the media item in kbit/s.
- [sampleRate](itlibmediaitem/samplerate.md): The sample rate of the media item in samples-per-second.
- [beatsPerMinute](itlibmediaitem/beatsperminute.md): The beats-per-minute (BPM) of the media item.
- [playCount](itlibmediaitem/playcount.md): The number of times the user has played the media item.
- [lastPlayedDate](itlibmediaitem/lastplayeddate.md): The date and time the user last played the media item, or `nil` if the user hasn’t played it.
- [location](itlibmediaitem/location.md): The location of the media item on disk.
- [locationType](itlibmediaitem/locationtype.md): The type of the media item with respect to its location.
- [artworkAvailable](itlibmediaitem/hasartworkavailable.md): A Boolean value that indicates whether the media item has artwork.
- [artwork](itlibmediaitem/artwork.md): The artwork of the media item.
- [comments](itlibmediaitem/comments.md): Any comments that iTunes associates with the media item.
- [purchased](itlibmediaitem/ispurchased.md): A Boolean value that indicates whether the user purchased the media item from the iTunes Store.
- [drmProtected](itlibmediaitem/isdrmprotected.md): A Boolean value that indicates whether the media item has digital rights management (DRM) protection.
- [video](itlibmediaitem/isvideo.md): A Boolean value that indicates whether this media item is a video, such as a TV show, video podcast, or movie.
- [videoInfo](itlibmediaitem/videoinfo.md): Video information (such as width and height) about the media item, if it’s a video.
- [releaseDate](itlibmediaitem/releasedate.md): The release date of the media item.
- [year](itlibmediaitem/year.md): The release year of the media item.
- [skipCount](itlibmediaitem/skipcount.md): The number of times that the user skipped the media item.
- [skipDate](itlibmediaitem/skipdate.md): The date and time that the user last skipped the media item.
- [voiceOverLanguage](itlibmediaitem/voiceoverlanguage.md): Deprecated. The voice-over language of the media item.
- [volumeAdjustment](itlibmediaitem/volumeadjustment.md): The volume adjustment for the media item, if any.
- [volumeNormalizationEnergy](itlibmediaitem/volumenormalizationenergy.md): The volume normalization energy that iTunes applies to the media item to bring the average or peak amplitude to a target level.
- [userDisabled](itlibmediaitem/isuserdisabled.md): A Boolean value that indicates whether the user disabled the media item.
- [grouping](itlibmediaitem/grouping.md): The grouping of the media item that the user specifies or that iTunes specifies in the file’s metadata.
- [fileSize](itlibmediaitem/filesize.md): The size in bytes of this media item on disk.
- [cloud](itlibmediaitem/iscloud.md): A Boolean value that indicates whether this media item is an iTunes Match or an iTunes in the Cloud item.
- [playStatus](itlibmediaitem/playstatus.md): The play status for the media.
- [ITLibMediaItemMediaKind](itlibmediaitemmediakind.md): These constants specify the possible media kinds of a media item.
- [ITLibMediaItemLocationType](itlibmediaitemlocationtype.md): These constants specify the location type of a media item.
- [ITLibMediaItemLyricsContentRating](itlibmediaitemlyricscontentrating.md): These constants specify the possible ratings of media item lyrics.
- [ITLibMediaItemPlayStatus](itlibmediaitemplaystatus.md): These constants specify the play status of the media item.

### Media Item Properties

- [ITLibMediaEntityPropertyPersistentID](itlibmediaentitypropertypersistentid.md): The unique identifier of the media entity.
- [ITLibMediaItemPropertyAddedDate](itlibmediaitempropertyaddeddate.md): The date and time the user added the media item to the iTunes library.
- [ITLibMediaItemPropertyAlbumArtist](itlibmediaitempropertyalbumartist.md): The name of the artist that iTunes associates with the media item’s album.
- [ITLibMediaItemPropertyAlbumDiscCount](itlibmediaitempropertyalbumdisccount.md): The number of discs in the media item’s album.
- [ITLibMediaItemPropertyAlbumDiscNumber](itlibmediaitempropertyalbumdiscnumber.md): The disc number in the media item’s album.
- [ITLibMediaItemPropertyAlbumIsCompilation](itlibmediaitempropertyalbumiscompilation.md): This property indicates whether the album of the media item is a compilation.
- [ITLibMediaItemPropertyAlbumIsGapless](itlibmediaitempropertyalbumisgapless.md): This property indicates whether the media item’s album is gapless.
- [ITLibMediaItemPropertyAlbumRating](itlibmediaitempropertyalbumrating.md): The rating of the media item’s album.
- [ITLibMediaItemPropertyAlbumRatingComputed](itlibmediaitempropertyalbumratingcomputed.md): This property indicates whether iTunes computes the rating of the media item’s album from the ratings of individual tracks in the album.
- [ITLibMediaItemPropertyAlbumTitle](itlibmediaitempropertyalbumtitle.md): The title of the media item’s album.
- [ITLibMediaItemPropertyAlbumTrackCount](itlibmediaitempropertyalbumtrackcount.md): The track count of the media item’s album.
- [ITLibMediaItemPropertyArtistName](itlibmediaitempropertyartistname.md): The name of the artist that iTunes associates with the media item.
- [ITLibMediaItemPropertyArtwork](itlibmediaitempropertyartwork.md): The artwork for the media item.
- [ITLibMediaItemPropertyBeatsPerMinute](itlibmediaitempropertybeatsperminute.md): The beats-per-minute (BPM) of the media item.
- [ITLibMediaItemPropertyBitRate](itlibmediaitempropertybitrate.md): The bitrate of the media item in kbit/s.
- [ITLibMediaItemPropertyCategory](itlibmediaitempropertycategory.md): The podcast category of the media item, if the media item is a podcast.
- [ITLibMediaItemPropertyComments](itlibmediaitempropertycomments.md): Any comments that iTunes associates with the media item.
- [ITLibMediaItemPropertyComposer](itlibmediaitempropertycomposer.md): The name of the composer that iTunes associates with the media item.
- [ITLibMediaItemPropertyContentRating](itlibmediaitempropertycontentrating.md): The extended content rating of the media item.
- [ITLibMediaItemPropertyDescription](itlibmediaitempropertydescription.md): A podcast description of the media item, if the media item is a podcast.
- [ITLibMediaItemPropertyFileSize](itlibmediaitempropertyfilesize.md): The size in bytes of the media item on disk.
- [ITLibMediaItemPropertyGenre](itlibmediaitempropertygenre.md): The genre that iTunes associates with the media item.
- [ITLibMediaItemPropertyGrouping](itlibmediaitempropertygrouping.md): The grouping of the media item.
- [ITLibMediaItemPropertyHasArtwork](itlibmediaitempropertyhasartwork.md): This property indicates whether the media item has artwork.
- [ITLibMediaItemPropertyIsDRMProtected](itlibmediaitempropertyisdrmprotected.md): This property indicates whether the media item has digital rights management (DRM) protection.
- [ITLibMediaItemPropertyIsPurchased](itlibmediaitempropertyispurchased.md): This property indicates whether the media item is a purchased media item.
- [ITLibMediaItemPropertyIsUserDisabled](itlibmediaitempropertyisuserdisabled.md): This property indicates whether the user disabled the media item.
- [ITLibMediaItemPropertyIsVideo](itlibmediaitempropertyisvideo.md): This property indicates whether the media item is a video media item, such as a video podcast or movie.
- [ITLibMediaItemPropertyKind](itlibmediaitempropertykind.md): The kind of media item file, such as an MPEG audio file.
- [ITLibMediaItemPropertyLastPlayDate](itlibmediaitempropertylastplaydate.md): The date and time the user last played the media item in iTunes, or `nil` if the user hasn’t played the media item.
- [ITLibMediaItemPropertyLocation](itlibmediaitempropertylocation.md): The location of the media item on disk.
- [ITLibMediaItemPropertyLocationType](itlibmediaitempropertylocationtype.md): The type of the media item with respect to its location.
- [ITLibMediaItemPropertyLyricsContentRating](itlibmediaitempropertylyricscontentrating.md): The content rating of the media item’s lyrics.
- [ITLibMediaItemPropertyMediaKind](itlibmediaitempropertymediakind.md): The media kind of the media item.
- [ITLibMediaItemPropertyModifiedDate](itlibmediaitempropertymodifieddate.md): The date and time that iTunes last modified the media item.
- [ITLibMediaItemPropertyMovementCount](itlibmediaitempropertymovementcount.md)
- [ITLibMediaItemPropertyMovementName](itlibmediaitempropertymovementname.md)
- [ITLibMediaItemPropertyMovementNumber](itlibmediaitempropertymovementnumber.md)
- [ITLibMediaItemPropertyPlayCount](itlibmediaitempropertyplaycount.md): The number of times the user has played the media item in iTunes.
- [ITLibMediaItemPropertyPlayStatus](itlibmediaitempropertyplaystatus.md): The play status of the media item.
- [ITLibMediaItemPropertyRating](itlibmediaitempropertyrating.md): The rating of the media item.
- [ITLibMediaItemPropertyRatingComputed](itlibmediaitempropertyratingcomputed.md): This property indicates whether iTunes computes the media item’s rating.
- [ITLibMediaItemPropertyReleaseDate](itlibmediaitempropertyreleasedate.md): The release date of the media item.
- [ITLibMediaItemPropertySampleRate](itlibmediaitempropertysamplerate.md): The sample rate of the media item in samples-per-second.
- [ITLibMediaItemPropertySize](itlibmediaitempropertysize.md): Deprecated. The size in bytes of the media item on disk.
- [ITLibMediaItemPropertySkipDate](itlibmediaitempropertyskipdate.md): The date and time that the user last skipped the media item.
- [ITLibMediaItemPropertySortAlbumArtist](itlibmediaitempropertysortalbumartist.md): The name of the artist that iTunes associates with the media item’s album, for use when sorting.
- [ITLibMediaItemPropertySortAlbumTitle](itlibmediaitempropertysortalbumtitle.md): The title of the media item’s album, for use when sorting.
- [ITLibMediaItemPropertySortArtistName](itlibmediaitempropertysortartistname.md): The name of the media item’s artist, for use when sorting.
- [ITLibMediaItemPropertySortComposer](itlibmediaitempropertysortcomposer.md): The name of the composer that iTunes associates with the media item, for use when sorting.
- [ITLibMediaItemPropertySortTitle](itlibmediaitempropertysorttitle.md): The title of the media item to use when sorting.
- [ITLibMediaItemPropertyStartTime](itlibmediaitempropertystarttime.md): If nonzero, the actual time that playback for the media item starts instead of 0:00 (in milliseconds).
- [ITLibMediaItemPropertyStopTime](itlibmediaitempropertystoptime.md): If nonzero, the actual time that playback for the media item stops versus the total time (in milliseconds).
- [ITLibMediaItemPropertyTitle](itlibmediaitempropertytitle.md): The title of the media item.
- [ITLibMediaItemPropertyTotalTime](itlibmediaitempropertytotaltime.md): The length of the media item in milliseconds.
- [ITLibMediaItemPropertyTrackNumber](itlibmediaitempropertytracknumber.md): The numerical position of the media item within its album.
- [ITLibMediaItemPropertyUserSkipCount](itlibmediaitempropertyuserskipcount.md): The number of times that the user skipped the media item.
- [ITLibMediaItemPropertyVideoEpisode](itlibmediaitempropertyvideoepisode.md): The name of the episode, if the media item is an episode of a TV series.
- [ITLibMediaItemPropertyVideoEpisodeOrder](itlibmediaitempropertyvideoepisodeorder.md): The order of the episode, if the media item is an episode of a TV series.
- [ITLibMediaItemPropertyVideoHeight](itlibmediaitempropertyvideoheight.md): The height in pixels, if the media item is a video.
- [ITLibMediaItemPropertyVideoIsHD](itlibmediaitempropertyvideoishd.md): This property indicates whether a video media item is high-definition.
- [ITLibMediaItemPropertyVideoSeason](itlibmediaitempropertyvideoseason.md): The corresponding TV season, if the media item is an episode of a TV series.
- [ITLibMediaItemPropertyVideoSeries](itlibmediaitempropertyvideoseries.md): The name of the corresponding TV series, if the media item is an episode in a TV series.
- [ITLibMediaItemPropertyVideoSortSeries](itlibmediaitempropertyvideosortseries.md): The sorting name of the corresponding TV series, if the media item is an episode in a TV series.
- [ITLibMediaItemPropertyVideoWidth](itlibmediaitempropertyvideowidth.md): The width in pixels, if the media item is a video.
- [ITLibMediaItemPropertyVoiceOverLanguage](itlibmediaitempropertyvoiceoverlanguage.md): Deprecated. The voice-over language of the media item.
- [ITLibMediaItemPropertyVolumeAdjustment](itlibmediaitempropertyvolumeadjustment.md): The volume adjustment for the media item, if any.
- [ITLibMediaItemPropertyVolumeNormalizationEnergy](itlibmediaitempropertyvolumenormalizationenergy.md): The volume normalization energy that iTunes applies to the media item to bring the average or peak amplitude to a target level.
- [ITLibMediaItemPropertyWork](itlibmediaitempropertywork.md)
- [ITLibMediaItemPropertyYear](itlibmediaitempropertyyear.md): The release year of the media item.

### Deprecated

- [fileType](itlibmediaitem/filetype.md): Deprecated. The file type of the media item.
- [size](itlibmediaitem/size.md): Deprecated. The size in bytes of the media item on disk.
- [ITLibMediaItemPropertyFileType](itlibmediaitempropertyfiletype.md): Deprecated. The file type of the media item.

## Relationships

### Inherits From

- [ITLibMediaEntity](itlibmediaentity.md)

## See Also

### Media Items

- [ITLibMediaEntity](itlibmediaentity.md): This class describes a media entity, which can be a media item, such as an audio track.
- [ITLibArtist](itlibartist.md): This class represents an artist, such as the performer of a song.
- [ITLibArtwork](itlibartwork.md): This class represents the artwork for a media item.
- [ITLibMediaItemVideoInfo](itlibmediaitemvideoinfo.md): This class encapsulates the video information of a video media item.
