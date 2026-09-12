> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaplaylist](https://developer.apple.com/documentation/mediaplayer/mpmediaplaylist)

# MPMediaPlaylist (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A playable collection of related media items.

## Declaration

```swift
class MPMediaPlaylist
```

<a id="overview"></a>

## Overview

Each playlist has a name, a set of attributes, and a unique identifier that persists across application launches.

Users configure playlists using iTunes or by creating a playlist on the device. Playlists are read-only to your iOS app. To obtain playlists, configure a media query that’s grouped by playlist. Each returned media item collection is a media playlist. The following code snippet illustrates this by logging playlist and song names to the Xcode debugger console:

**Swift**

```swift
let myPlaylistQuery = MPMediaQuery.playlists()
let playlists = myPlaylistQuery.collections
for playlist in playlists! {
    print(playlist.value(forProperty: MPMediaPlaylistPropertyName)!)
            
    let songs = playlist.items
    for song in songs {
        let songTitle = song.value(forProperty: MPMediaItemPropertyTitle)
        print("\t\t", songTitle!)
    }
}
```

**Objective-C**

```objc
MPMediaQuery *myPlaylistsQuery = [MPMediaQuery playlistsQuery];
NSArray *playlists = [myPlaylistsQuery collections];
 
for (MPMediaPlaylist *playlist in playlists) {
    NSLog (@"%@", [playlist valueForProperty: MPMediaPlaylistPropertyName]);
 
    NSArray *songs = [playlist items];
    for (MPMediaItem *song in songs) {
        NSString *songTitle =
            [song valueForProperty: MPMediaItemPropertyTitle];
        NSLog (@"\t\t%@", songTitle);
    }
}
```

[MPMediaPropertyPredicate](mpmediapropertypredicate.md) and [MPMediaQuery](mpmediaquery.md) describe the API for building a media query. [MPMediaEntity](mpmediaentity.md) describes the methods for querying media playlist property values.

## Topics

### Adding media items to a playlist

- [addItem(withProductID:completionHandler:)](mpmediaplaylist/additem%28withproductid_completionhandler_%29.md): Adds the item associated with the product identifier to the end of the playlist.
- [add(\_:completionHandler:)](mpmediaplaylist/add%28__completionhandler_%29.md): Adds an array of media items to the end of the playlist.

### Retrieving information about a playlist

- [authorDisplayName](mpmediaplaylist/authordisplayname.md): The display name for the playlist defined in the app.
- [descriptionText](mpmediaplaylist/descriptiontext.md): User supplied text that describes the playlist.
- [name](mpmediaplaylist/name.md): The name of the playlist.
- [persistentID](mpmediaplaylist/persistentid.md): The persistent identifier for the playlist.
- [cloudGlobalID](mpmediaplaylist/cloudglobalid.md): The cloud identifier for the playlist.
- [playlistAttributes](mpmediaplaylist/playlistattributes.md): The attributes associated with the playlist.
- [MPMediaPlaylistAttribute](mpmediaplaylistattribute.md): Attributes define the type of playlist.
- [seedItems](mpmediaplaylist/seeditems.md): The items seeded to generate the playlist; applies only to Genius playlists.

### Property keys

- [Playlist property keys](playlist-property-keys.md): Keys that contain information about a playlist.

## Relationships

### Inherits From

- [MPMediaItemCollection](mpmediaitemcollection.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Media items and playlists

- [Providing animated artwork for media items](providing-animated-artwork-for-media-items.md): Display animated artwork for your app’s media in system views, such as the lock screen, by providing video assets through your now playing info.
- [MPMediaItem](mpmediaitem.md): A collection of properties that represents a single item in the media library.
- [MPMediaItemArtwork](mpmediaitemartwork.md): A graphical image, such as music album cover art, associated with a media item.
- [MPMediaItemAnimatedArtwork](mpmediaitemanimatedartwork.md): An animated image, such as an animated music album cover art, for a media item.
- [MPMediaItemCollection](mpmediaitemcollection.md): A sorted set of media items from the media library.
- [MPMediaPlaylistCreationMetadata](mpmediaplaylistcreationmetadata.md): A set of attributes for describing a playlist when creating it.
- [MPMediaEntity](mpmediaentity.md): The abstract superclass for media items, media item collections, and media playlist instances.

# MPMediaPlaylist (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A playable collection of related media items.

## Declaration

```objectivec
@interface MPMediaPlaylist : MPMediaItemCollection
```

<a id="overview"></a>

## Overview

Each playlist has a name, a set of attributes, and a unique identifier that persists across application launches.

Users configure playlists using iTunes or by creating a playlist on the device. Playlists are read-only to your iOS app. To obtain playlists, configure a media query that’s grouped by playlist. Each returned media item collection is a media playlist. The following code snippet illustrates this by logging playlist and song names to the Xcode debugger console:

**Swift**

```swift
let myPlaylistQuery = MPMediaQuery.playlists()
let playlists = myPlaylistQuery.collections
for playlist in playlists! {
    print(playlist.value(forProperty: MPMediaPlaylistPropertyName)!)
            
    let songs = playlist.items
    for song in songs {
        let songTitle = song.value(forProperty: MPMediaItemPropertyTitle)
        print("\t\t", songTitle!)
    }
}
```

**Objective-C**

```objc
MPMediaQuery *myPlaylistsQuery = [MPMediaQuery playlistsQuery];
NSArray *playlists = [myPlaylistsQuery collections];
 
for (MPMediaPlaylist *playlist in playlists) {
    NSLog (@"%@", [playlist valueForProperty: MPMediaPlaylistPropertyName]);
 
    NSArray *songs = [playlist items];
    for (MPMediaItem *song in songs) {
        NSString *songTitle =
            [song valueForProperty: MPMediaItemPropertyTitle];
        NSLog (@"\t\t%@", songTitle);
    }
}
```

[MPMediaPropertyPredicate](mpmediapropertypredicate.md) and [MPMediaQuery](mpmediaquery.md) describe the API for building a media query. [MPMediaEntity](mpmediaentity.md) describes the methods for querying media playlist property values.

## Topics

### Adding media items to a playlist

- [addItemWithProductID:completionHandler:](mpmediaplaylist/additem%28withproductid_completionhandler_%29.md): Adds the item associated with the product identifier to the end of the playlist.
- [addMediaItems:completionHandler:](mpmediaplaylist/add%28__completionhandler_%29.md): Adds an array of media items to the end of the playlist.

### Retrieving information about a playlist

- [authorDisplayName](mpmediaplaylist/authordisplayname.md): The display name for the playlist defined in the app.
- [descriptionText](mpmediaplaylist/descriptiontext.md): User supplied text that describes the playlist.
- [name](mpmediaplaylist/name.md): The name of the playlist.
- [persistentID](mpmediaplaylist/persistentid.md): The persistent identifier for the playlist.
- [cloudGlobalID](mpmediaplaylist/cloudglobalid.md): The cloud identifier for the playlist.
- [playlistAttributes](mpmediaplaylist/playlistattributes.md): The attributes associated with the playlist.
- [MPMediaPlaylistAttribute](mpmediaplaylistattribute.md): Attributes define the type of playlist.
- [seedItems](mpmediaplaylist/seeditems.md): The items seeded to generate the playlist; applies only to Genius playlists.

### Property keys

- [Playlist property keys](playlist-property-keys.md): Keys that contain information about a playlist.

## Relationships

### Inherits From

- [MPMediaItemCollection](mpmediaitemcollection.md)

## See Also

### Media items and playlists

- [Providing animated artwork for media items](providing-animated-artwork-for-media-items.md): Display animated artwork for your app’s media in system views, such as the lock screen, by providing video assets through your now playing info.
- [MPMediaItem](mpmediaitem.md): A collection of properties that represents a single item in the media library.
- [MPMediaItemArtwork](mpmediaitemartwork.md): A graphical image, such as music album cover art, associated with a media item.
- [MPMediaItemAnimatedArtwork](mpmediaitemanimatedartwork.md): An animated image, such as an animated music album cover art, for a media item.
- [MPMediaItemCollection](mpmediaitemcollection.md): A sorted set of media items from the media library.
- [MPMediaPlaylistCreationMetadata](mpmediaplaylistcreationmetadata.md): A set of attributes for describing a playlist when creating it.
- [MPMediaEntity](mpmediaentity.md): The abstract superclass for media items, media item collections, and media playlist instances.
