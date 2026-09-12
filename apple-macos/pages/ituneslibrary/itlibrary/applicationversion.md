> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibrary/applicationversion](https://developer.apple.com/documentation/ituneslibrary/itlibrary/applicationversion)

# applicationVersion (Swift)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

The version of iTunes that created or modified the iTunes library you’re accessing.

## Declaration

```swift
var applicationVersion: String { get }
```

## See Also

### Getting iTunes Library Info

- [allMediaItems](allmediaitems.md): All the media items (tracks) in the iTunes library.
- [allPlaylists](allplaylists.md): All the playlists in the iTunes library.
- [apiMajorVersion](apimajorversion.md): The major version number of the API the iTunesLibrary framework exposes.
- [apiMinorVersion](apiminorversion.md): The minor version number of the API the iTunesLibrary framework exposes.
- [mediaFolderLocation](mediafolderlocation.md): The location of the iTunes music folder.
- [shouldShowContentRating](shouldshowcontentrating.md): A Boolean value indicating whether to show content rating labels.

# applicationVersion (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

The version of iTunes that created or modified the iTunes library you’re accessing.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * applicationVersion;
```

## See Also

### Getting iTunes Library Info

- [allMediaItems](allmediaitems.md): All the media items (tracks) in the iTunes library.
- [allPlaylists](allplaylists.md): All the playlists in the iTunes library.
- [apiMajorVersion](apimajorversion.md): The major version number of the API the iTunesLibrary framework exposes.
- [apiMinorVersion](apiminorversion.md): The minor version number of the API the iTunesLibrary framework exposes.
- [mediaFolderLocation](mediafolderlocation.md): The location of the iTunes music folder.
- [showContentRating](shouldshowcontentrating.md): A Boolean value indicating whether to show content rating labels.
