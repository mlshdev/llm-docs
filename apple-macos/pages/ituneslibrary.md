> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary](https://developer.apple.com/documentation/ituneslibrary)

# iTunes Library (Swift)

**Framework:** iTunes Library  
**Kind:** Framework  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

Retrieve the properties of the media in the user’s iTunes library.

<a id="overview"></a>

## Overview

With this framework, you can retrieve media information, such as track and playlist metadata, directly from the user’s iTunes library, eliminating the need to query the iTunes XML file.

To use this framework, create an [ITLibrary](ituneslibrary/itlibrary.md) object by calling the [libraryWithAPIVersion:error:](ituneslibrary/itlibrary/librarywithapiversion_error_.md) class method. You can interrogate the instance that returns to obtain its properties and the properties of its media items. For example:

> **Important**

>  You must code sign your app to retrieve information with this framework, and iTunes library access is read-only. This framework is available to users with iTunes 11 or later.

## Topics

### Essentials

- [ITLibrary](ituneslibrary/itlibrary.md): This class serves as the entry point to the iTunesLibrary framework.

### Albums and Playlists

- [ITLibAlbum](ituneslibrary/itlibalbum.md): This class provides information about an album in the iTunes library.
- [ITLibPlaylist](ituneslibrary/itlibplaylist.md): This class describes a playlist in the iTunes library.

### Media Items

- [ITLibMediaItem](ituneslibrary/itlibmediaitem.md): This class describes a media item (a track) in the iTunes library, such as a song, a video, or a podcast.
- [ITLibMediaEntity](ituneslibrary/itlibmediaentity.md): This class describes a media entity, which can be a media item, such as an audio track.
- [ITLibArtist](ituneslibrary/itlibartist.md): This class represents an artist, such as the performer of a song.
- [ITLibArtwork](ituneslibrary/itlibartwork.md): This class represents the artwork for a media item.
- [ITLibMediaItemVideoInfo](ituneslibrary/itlibmediaitemvideoinfo.md): This class encapsulates the video information of a video media item.

### Structures

- [DidChangeLibraryMessage](ituneslibrary/didchangelibrarymessage.md)

# iTunes Library (Objective-C)

**Framework:** iTunes Library  
**Kind:** Framework  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

Retrieve the properties of the media in the user’s iTunes library.

<a id="overview"></a>

## Overview

With this framework, you can retrieve media information, such as track and playlist metadata, directly from the user’s iTunes library, eliminating the need to query the iTunes XML file.

To use this framework, create an [ITLibrary](ituneslibrary/itlibrary.md) object by calling the [libraryWithAPIVersion:error:](ituneslibrary/itlibrary/librarywithapiversion_error_.md) class method. You can interrogate the instance that returns to obtain its properties and the properties of its media items. For example:

> **Important**

>  You must code sign your app to retrieve information with this framework, and iTunes library access is read-only. This framework is available to users with iTunes 11 or later.

## Topics

### Essentials

- [ITLibrary](ituneslibrary/itlibrary.md): This class serves as the entry point to the iTunesLibrary framework.

### Albums and Playlists

- [ITLibAlbum](ituneslibrary/itlibalbum.md): This class provides information about an album in the iTunes library.
- [ITLibPlaylist](ituneslibrary/itlibplaylist.md): This class describes a playlist in the iTunes library.

### Media Items

- [ITLibMediaItem](ituneslibrary/itlibmediaitem.md): This class describes a media item (a track) in the iTunes library, such as a song, a video, or a podcast.
- [ITLibMediaEntity](ituneslibrary/itlibmediaentity.md): This class describes a media entity, which can be a media item, such as an audio track.
- [ITLibArtist](ituneslibrary/itlibartist.md): This class represents an artist, such as the performer of a song.
- [ITLibArtwork](ituneslibrary/itlibartwork.md): This class represents the artwork for a media item.
- [ITLibMediaItemVideoInfo](ituneslibrary/itlibmediaitemvideoinfo.md): This class encapsulates the video information of a video media item.

### Variables

- [ITLibraryDidChangeNotification](ituneslibrary/itlibrarydidchangenotification.md): This notification is sent to NSDistributedNotificationCenter when a change has occurred in the library.

### Macros

- [ITLIB_AVAILABLE](ituneslibrary/itlib_available.md)
- [ITLIB_EXPORT](ituneslibrary/itlib_export.md)
- [ITLIB_EXTERN](ituneslibrary/itlib_extern.md)
- [ITLIB_INIT_UNAVAILABLE](ituneslibrary/itlib_init_unavailable.md)
