> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaplaylistattribute](https://developer.apple.com/documentation/mediaplayer/mpmediaplaylistattribute)

# MPMediaPlaylistAttribute (Swift)

**Framework:** Media Player  
**Kind:** Structure  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Attributes define the type of playlist.

## Declaration

```swift
struct MPMediaPlaylistAttribute
```

<a id="overview"></a>

## Overview

Playlist attributes to use as possible values for the [MPMediaPlaylistPropertyPlaylistAttributes](mpmediaplaylistpropertyplaylistattributes.md) property.

## Topics

### Constants

- [onTheGo](mpmediaplaylistattribute/onthego.md): A playlist created on a device rather than synced from the Music app.
- [smart](mpmediaplaylistattribute/smart.md): A smart playlist includes items that match one or more user-specified rules.
- [genius](mpmediaplaylistattribute/genius.md): A Genius playlist includes items related to other items in your Music library.

### Initializers

- [init(rawValue:)](mpmediaplaylistattribute/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Retrieving information about a playlist

- [authorDisplayName](mpmediaplaylist/authordisplayname.md): The display name for the playlist defined in the app.
- [descriptionText](mpmediaplaylist/descriptiontext.md): User supplied text that describes the playlist.
- [name](mpmediaplaylist/name.md): The name of the playlist.
- [persistentID](mpmediaplaylist/persistentid.md): The persistent identifier for the playlist.
- [cloudGlobalID](mpmediaplaylist/cloudglobalid.md): The cloud identifier for the playlist.
- [playlistAttributes](mpmediaplaylist/playlistattributes.md): The attributes associated with the playlist.
- [seedItems](mpmediaplaylist/seeditems.md): The items seeded to generate the playlist; applies only to Genius playlists.

# MPMediaPlaylistAttribute (Objective-C)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Attributes define the type of playlist.

## Declaration

```objectivec
enum MPMediaPlaylistAttribute : NSUInteger;
```

<a id="overview"></a>

## Overview

Playlist attributes to use as possible values for the [MPMediaPlaylistPropertyPlaylistAttributes](mpmediaplaylistpropertyplaylistattributes.md) property.

## Topics

### Constants

- [MPMediaPlaylistAttributeNone](mpmediaplaylistattribute/mpmediaplaylistattributenone.md): A playlist with no attributes.
- [MPMediaPlaylistAttributeOnTheGo](mpmediaplaylistattribute/onthego.md): A playlist created on a device rather than synced from the Music app.
- [MPMediaPlaylistAttributeSmart](mpmediaplaylistattribute/smart.md): A smart playlist includes items that match one or more user-specified rules.
- [MPMediaPlaylistAttributeGenius](mpmediaplaylistattribute/genius.md): A Genius playlist includes items related to other items in your Music library.

## See Also

### Retrieving information about a playlist

- [authorDisplayName](mpmediaplaylist/authordisplayname.md): The display name for the playlist defined in the app.
- [descriptionText](mpmediaplaylist/descriptiontext.md): User supplied text that describes the playlist.
- [name](mpmediaplaylist/name.md): The name of the playlist.
- [persistentID](mpmediaplaylist/persistentid.md): The persistent identifier for the playlist.
- [cloudGlobalID](mpmediaplaylist/cloudglobalid.md): The cloud identifier for the playlist.
- [playlistAttributes](mpmediaplaylist/playlistattributes.md): The attributes associated with the playlist.
- [seedItems](mpmediaplaylist/seeditems.md): The items seeded to generate the playlist; applies only to Genius playlists.
