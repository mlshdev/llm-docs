> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibrary/mediafolderlocation](https://developer.apple.com/documentation/ituneslibrary/itlibrary/mediafolderlocation)

# mediaFolderLocation (Swift)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

The location of the iTunes music folder.

## Declaration

```swift
var mediaFolderLocation: URL? { get }
```

## See Also

### Getting iTunes Library Info

- [allMediaItems](allmediaitems.md): All the media items (tracks) in the iTunes library.
- [allPlaylists](allplaylists.md): All the playlists in the iTunes library.
- [apiMajorVersion](apimajorversion.md): The major version number of the API the iTunesLibrary framework exposes.
- [apiMinorVersion](apiminorversion.md): The minor version number of the API the iTunesLibrary framework exposes.
- [applicationVersion](applicationversion.md): The version of iTunes that created or modified the iTunes library you’re accessing.
- [shouldShowContentRating](shouldshowcontentrating.md): A Boolean value indicating whether to show content rating labels.

# mediaFolderLocation (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

The location of the iTunes music folder.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSURL * mediaFolderLocation;
```

## See Also

### Getting iTunes Library Info

- [allMediaItems](allmediaitems.md): All the media items (tracks) in the iTunes library.
- [allPlaylists](allplaylists.md): All the playlists in the iTunes library.
- [apiMajorVersion](apimajorversion.md): The major version number of the API the iTunesLibrary framework exposes.
- [apiMinorVersion](apiminorversion.md): The minor version number of the API the iTunesLibrary framework exposes.
- [applicationVersion](applicationversion.md): The version of iTunes that created or modified the iTunes library you’re accessing.
- [showContentRating](shouldshowcontentrating.md): A Boolean value indicating whether to show content rating labels.
