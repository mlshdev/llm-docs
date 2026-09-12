> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvmediaitem](https://developer.apple.com/documentation/tvmlkit/tvmediaitem)

# TVMediaItem (Swift)

**Framework:** TVMLKit  
**Kind:** Class  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

A single audio or video item associated with the Apple TV JavaScript player.

> Please use SwiftUI or UIKit

## Declaration

```swift
class TVMediaItem
```

<a id="overview"></a>

## Overview

A `TVMediaItem` object contains read-only information about a media item associated with the JavaScript player. You can use this information with your own custom [AVPlayer](../avfoundation/avplayer.md) objects exposed through a [TVPlayer](tvplayer.md) object. For example, you can retrieve audio track information from the JavaScript player and play the track through a [TVPlayer](tvplayer.md) object.

## Topics

### Rating Media Content

- [containsExplicitContent](tvmediaitem/containsexplicitcontent.md): Deprecated. A Boolean value indicating whether the item contains adult-oriented content.
- [contentRatingDomain](tvmediaitem/contentratingdomain-swift.property.md): Deprecated. The media domain that the rating applies to.
- [TVMediaItem.ContentRatingDomain](tvmediaitem/contentratingdomain-swift.struct.md): Deprecated. A value identifying the media’s content rating domain.
- [contentRatingRanking](tvmediaitem/contentratingranking.md): Deprecated. The rating for a video item.

### Identifying Media Items

- [artworkImageURL](tvmediaitem/artworkimageurl.md): Deprecated. The URL path to the artwork that accompanies the media item.
- [itemDescription](tvmediaitem/itemdescription.md): Deprecated. The description for a media item.
- [subtitle](tvmediaitem/subtitle.md): Deprecated. The subtitle for a media item.
- [title](tvmediaitem/title.md): Deprecated. The title for a media item.
- [type](tvmediaitem/type.md): Deprecated. The type of media item.
- [TVMediaItem.MediaType](tvmediaitem/mediatype.md): Deprecated. A value indicating whether the media is audio or video.
- [url](tvmediaitem/url.md): Deprecated. The URL path to the media item.
- [userInfo](tvmediaitem/userinfo.md): Deprecated. User-defined metadata, like a developer-specific identifier, for a media item.

### Setting Timing Options

- [highlightGroups](tvmediaitem/highlightgroups.md): Deprecated. An array containing groups of individual highlights in a media item.
- [TVMediaItem.HighlightGroup](tvmediaitem/highlightgroup.md): Deprecated. A container for groups of highlights for a media item.
- [interstitials](tvmediaitem/interstitials.md): Deprecated. An array of time intervals that indicate where to insert media items into another, single media item.
- [TVMediaItem.TimeRange](tvmediaitem/timerange.md): Deprecated. An object that defines a time range in a media item.
- [resumeTime](tvmediaitem/resumetime.md): Deprecated. The number of seconds from the beginning of a media item to the point where that media item begins playing.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Custom Player

- [TVPlaylist](tvplaylist.md): Deprecated. A collection of media items associated with the Apple TV JavaScript player.
- [TVPlayer](tvplayer.md): Deprecated. A customizable native media player used to control playback from the JavaScript player used in an Apple TV client-server app.

# TVMediaItem (Objective-C)

**Framework:** TVMLKit  
**Kind:** Class  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

A single audio or video item associated with the Apple TV JavaScript player.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@interface TVMediaItem : NSObject
```

<a id="overview"></a>

## Overview

A `TVMediaItem` object contains read-only information about a media item associated with the JavaScript player. You can use this information with your own custom [AVPlayer](../avfoundation/avplayer.md) objects exposed through a [TVPlayer](tvplayer.md) object. For example, you can retrieve audio track information from the JavaScript player and play the track through a [TVPlayer](tvplayer.md) object.

## Topics

### Rating Media Content

- [containsExplicitContent](tvmediaitem/containsexplicitcontent.md): Deprecated. A Boolean value indicating whether the item contains adult-oriented content.
- [contentRatingDomain](tvmediaitem/contentratingdomain-swift.property.md): Deprecated. The media domain that the rating applies to.
- [TVMediaItemContentRatingDomain](tvmediaitem/contentratingdomain-swift.struct.md): Deprecated. A value identifying the media’s content rating domain.
- [contentRatingRanking](tvmediaitem/contentratingranking.md): Deprecated. The rating for a video item.

### Identifying Media Items

- [artworkImageURL](tvmediaitem/artworkimageurl.md): Deprecated. The URL path to the artwork that accompanies the media item.
- [itemDescription](tvmediaitem/itemdescription.md): Deprecated. The description for a media item.
- [subtitle](tvmediaitem/subtitle.md): Deprecated. The subtitle for a media item.
- [title](tvmediaitem/title.md): Deprecated. The title for a media item.
- [type](tvmediaitem/type.md): Deprecated. The type of media item.
- [TVMediaItemType](tvmediaitem/mediatype.md): Deprecated. A value indicating whether the media is audio or video.
- [url](tvmediaitem/url.md): Deprecated. The URL path to the media item.
- [userInfo](tvmediaitem/userinfo.md): Deprecated. User-defined metadata, like a developer-specific identifier, for a media item.

### Setting Timing Options

- [highlightGroups](tvmediaitem/highlightgroups.md): Deprecated. An array containing groups of individual highlights in a media item.
- [TVHighlightGroup](tvmediaitem/highlightgroup.md): Deprecated. A container for groups of highlights for a media item.
- [interstitials](tvmediaitem/interstitials.md): Deprecated. An array of time intervals that indicate where to insert media items into another, single media item.
- [TVTimeRange](tvmediaitem/timerange.md): Deprecated. An object that defines a time range in a media item.
- [resumeTime](tvmediaitem/resumetime.md): Deprecated. The number of seconds from the beginning of a media item to the point where that media item begins playing.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Custom Player

- [TVPlaylist](tvplaylist.md): Deprecated. A collection of media items associated with the Apple TV JavaScript player.
- [TVPlayer](tvplayer.md): Deprecated. A customizable native media player used to control playback from the JavaScript player used in an Apple TV client-server app.
