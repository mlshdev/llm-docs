> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaplaylistpropertyseeditems](https://developer.apple.com/documentation/mediaplayer/mpmediaplaylistpropertyseeditems)

# MPMediaPlaylistPropertySeedItems (Swift)

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The items seeded to generate the playlist; applies only to Genius playlists.

## Declaration

```swift
let MPMediaPlaylistPropertySeedItems: String
```

<a id="Discussion"></a>

## Discussion

Value is an [NSArray](../foundation/nsarray.md) object containing one or more [MPMediaItem](mpmediaitem.md) objects. Value is `nil` for playlists that don’t have the [genius](mpmediaplaylistattribute/genius.md) flag set.

## See Also

### Property keys

- [MPMediaPlaylistPropertyAuthorDisplayName](mpmediaplaylistpropertyauthordisplayname.md): App defined name for the playlist.
- [MPMediaPlaylistPropertyName](mpmediaplaylistpropertyname.md): The name of the playlist.
- [MPMediaPlaylistPropertyDescriptionText](mpmediaplaylistpropertydescriptiontext.md): Descriptive text for the playlist.
- [MPMediaPlaylistPropertyPersistentID](mpmediaplaylistpropertypersistentid.md): The persistent identifier for the playlist.
- [MPMediaPlaylistPropertyPlaylistAttributes](mpmediaplaylistpropertyplaylistattributes.md): The attributes associated with the playlist.
- [MPMediaPlaylistPropertyCloudGlobalID](mpmediaplaylistpropertycloudglobalid.md): The cloud identifier for the playlist.

# MPMediaPlaylistPropertySeedItems (Objective-C)

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The items seeded to generate the playlist; applies only to Genius playlists.

## Declaration

```objectivec
extern NSString * const MPMediaPlaylistPropertySeedItems;
```

<a id="Discussion"></a>

## Discussion

Value is an [NSArray](../foundation/nsarray.md) object containing one or more [MPMediaItem](mpmediaitem.md) objects. Value is `nil` for playlists that don’t have the [MPMediaPlaylistAttributeGenius](mpmediaplaylistattribute/genius.md) flag set.

## See Also

### Property keys

- [MPMediaPlaylistPropertyAuthorDisplayName](mpmediaplaylistpropertyauthordisplayname.md): App defined name for the playlist.
- [MPMediaPlaylistPropertyName](mpmediaplaylistpropertyname.md): The name of the playlist.
- [MPMediaPlaylistPropertyDescriptionText](mpmediaplaylistpropertydescriptiontext.md): Descriptive text for the playlist.
- [MPMediaPlaylistPropertyPersistentID](mpmediaplaylistpropertypersistentid.md): The persistent identifier for the playlist.
- [MPMediaPlaylistPropertyPlaylistAttributes](mpmediaplaylistpropertyplaylistattributes.md): The attributes associated with the playlist.
- [MPMediaPlaylistPropertyCloudGlobalID](mpmediaplaylistpropertycloudglobalid.md): The cloud identifier for the playlist.
