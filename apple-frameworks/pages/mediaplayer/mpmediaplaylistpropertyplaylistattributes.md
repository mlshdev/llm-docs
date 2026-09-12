> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaplaylistpropertyplaylistattributes](https://developer.apple.com/documentation/mediaplayer/mpmediaplaylistpropertyplaylistattributes)

# MPMediaPlaylistPropertyPlaylistAttributes (Swift)

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The attributes associated with the playlist.

## Declaration

```swift
let MPMediaPlaylistPropertyPlaylistAttributes: String
```

<a id="Discussion"></a>

## Discussion

Value is an [NSNumber](../foundation/nsnumber.md) object containing an [NSInteger](../objectivec/nsinteger.md) data type. Fields in the `NSInteger` identify the attributes of the playlist. A playlist may have any combination of attributes described in [MPMediaPlaylistAttribute](mpmediaplaylistattribute.md). Can be used to build a media property predicate as described in [MPMediaQuery](mpmediaquery.md).

## See Also

### Property keys

- [MPMediaPlaylistPropertyAuthorDisplayName](mpmediaplaylistpropertyauthordisplayname.md): App defined name for the playlist.
- [MPMediaPlaylistPropertyName](mpmediaplaylistpropertyname.md): The name of the playlist.
- [MPMediaPlaylistPropertyDescriptionText](mpmediaplaylistpropertydescriptiontext.md): Descriptive text for the playlist.
- [MPMediaPlaylistPropertyPersistentID](mpmediaplaylistpropertypersistentid.md): The persistent identifier for the playlist.
- [MPMediaPlaylistPropertyCloudGlobalID](mpmediaplaylistpropertycloudglobalid.md): The cloud identifier for the playlist.
- [MPMediaPlaylistPropertySeedItems](mpmediaplaylistpropertyseeditems.md): The items seeded to generate the playlist; applies only to Genius playlists.

# MPMediaPlaylistPropertyPlaylistAttributes (Objective-C)

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The attributes associated with the playlist.

## Declaration

```objectivec
extern NSString * const MPMediaPlaylistPropertyPlaylistAttributes;
```

<a id="Discussion"></a>

## Discussion

Value is an [NSNumber](../foundation/nsnumber.md) object containing an [NSInteger](../objectivec/nsinteger.md) data type. Fields in the `NSInteger` identify the attributes of the playlist. A playlist may have any combination of attributes described in [MPMediaPlaylistAttribute](mpmediaplaylistattribute.md). Can be used to build a media property predicate as described in [MPMediaQuery](mpmediaquery.md).

## See Also

### Property keys

- [MPMediaPlaylistPropertyAuthorDisplayName](mpmediaplaylistpropertyauthordisplayname.md): App defined name for the playlist.
- [MPMediaPlaylistPropertyName](mpmediaplaylistpropertyname.md): The name of the playlist.
- [MPMediaPlaylistPropertyDescriptionText](mpmediaplaylistpropertydescriptiontext.md): Descriptive text for the playlist.
- [MPMediaPlaylistPropertyPersistentID](mpmediaplaylistpropertypersistentid.md): The persistent identifier for the playlist.
- [MPMediaPlaylistPropertyCloudGlobalID](mpmediaplaylistpropertycloudglobalid.md): The cloud identifier for the playlist.
- [MPMediaPlaylistPropertySeedItems](mpmediaplaylistpropertyseeditems.md): The items seeded to generate the playlist; applies only to Genius playlists.
