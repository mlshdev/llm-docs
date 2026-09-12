> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibrary/allplaylists](https://developer.apple.com/documentation/ituneslibrary/itlibrary/allplaylists)

# allPlaylists (Swift)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

All the playlists in the iTunes library.

## Declaration

```swift
var allPlaylists: [ITLibPlaylist] { get }
```

<a id="return-value"></a>

## Return Value

An array of [ITLibPlaylist](../itlibplaylist.md) items.

## See Also

### Getting iTunes Library Info

- [allMediaItems](allmediaitems.md): All the media items (tracks) in the iTunes library.
- [apiMajorVersion](apimajorversion.md): The major version number of the API the iTunesLibrary framework exposes.
- [apiMinorVersion](apiminorversion.md): The minor version number of the API the iTunesLibrary framework exposes.
- [applicationVersion](applicationversion.md): The version of iTunes that created or modified the iTunes library you’re accessing.
- [mediaFolderLocation](mediafolderlocation.md): The location of the iTunes music folder.
- [shouldShowContentRating](shouldshowcontentrating.md): A Boolean value indicating whether to show content rating labels.

# allPlaylists (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

All the playlists in the iTunes library.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) NSArray<ITLibPlaylist *> * allPlaylists;
```

<a id="return-value"></a>

## Return Value

An array of [ITLibPlaylist](../itlibplaylist.md) items.

## See Also

### Getting iTunes Library Info

- [allMediaItems](allmediaitems.md): All the media items (tracks) in the iTunes library.
- [apiMajorVersion](apimajorversion.md): The major version number of the API the iTunesLibrary framework exposes.
- [apiMinorVersion](apiminorversion.md): The minor version number of the API the iTunesLibrary framework exposes.
- [applicationVersion](applicationversion.md): The version of iTunes that created or modified the iTunes library you’re accessing.
- [mediaFolderLocation](mediafolderlocation.md): The location of the iTunes music folder.
- [showContentRating](shouldshowcontentrating.md): A Boolean value indicating whether to show content rating labels.
