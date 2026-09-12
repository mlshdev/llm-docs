> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaplaylistpropertypersistentid](https://developer.apple.com/documentation/mediaplayer/mpmediaplaylistpropertypersistentid)

# MPMediaPlaylistPropertyPersistentID (Swift)

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The persistent identifier for the playlist.

## Declaration

```swift
let MPMediaPlaylistPropertyPersistentID: String
```

<a id="Discussion"></a>

## Discussion

Value is an [NSNumber](../foundation/nsnumber.md) object containing a `UInt64_t` (unsigned long long). Can be used to build a media property predicate as described in [MPMediaQuery](mpmediaquery.md).

## See Also

### Property keys

- [MPMediaPlaylistPropertyAuthorDisplayName](mpmediaplaylistpropertyauthordisplayname.md): App defined name for the playlist.
- [MPMediaPlaylistPropertyName](mpmediaplaylistpropertyname.md): The name of the playlist.
- [MPMediaPlaylistPropertyDescriptionText](mpmediaplaylistpropertydescriptiontext.md): Descriptive text for the playlist.
- [MPMediaPlaylistPropertyPlaylistAttributes](mpmediaplaylistpropertyplaylistattributes.md): The attributes associated with the playlist.
- [MPMediaPlaylistPropertyCloudGlobalID](mpmediaplaylistpropertycloudglobalid.md): The cloud identifier for the playlist.
- [MPMediaPlaylistPropertySeedItems](mpmediaplaylistpropertyseeditems.md): The items seeded to generate the playlist; applies only to Genius playlists.

# MPMediaPlaylistPropertyPersistentID (Objective-C)

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The persistent identifier for the playlist.

## Declaration

```objectivec
extern NSString * const MPMediaPlaylistPropertyPersistentID;
```

<a id="Discussion"></a>

## Discussion

Value is an [NSNumber](../foundation/nsnumber.md) object containing a `UInt64_t` (unsigned long long). Can be used to build a media property predicate as described in [MPMediaQuery](mpmediaquery.md).

## See Also

### Property keys

- [MPMediaPlaylistPropertyAuthorDisplayName](mpmediaplaylistpropertyauthordisplayname.md): App defined name for the playlist.
- [MPMediaPlaylistPropertyName](mpmediaplaylistpropertyname.md): The name of the playlist.
- [MPMediaPlaylistPropertyDescriptionText](mpmediaplaylistpropertydescriptiontext.md): Descriptive text for the playlist.
- [MPMediaPlaylistPropertyPlaylistAttributes](mpmediaplaylistpropertyplaylistattributes.md): The attributes associated with the playlist.
- [MPMediaPlaylistPropertyCloudGlobalID](mpmediaplaylistpropertycloudglobalid.md): The cloud identifier for the playlist.
- [MPMediaPlaylistPropertySeedItems](mpmediaplaylistpropertyseeditems.md): The items seeded to generate the playlist; applies only to Genius playlists.
