> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibrary/allmediaitems](https://developer.apple.com/documentation/ituneslibrary/itlibrary/allmediaitems)

# allMediaItems (Swift)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

All the media items (tracks) in the iTunes library.

## Declaration

```swift
var allMediaItems: [ITLibMediaItem] { get }
```

<a id="return-value"></a>

## Return Value

An array of [ITLibMediaItem](../itlibmediaitem.md) items.

## See Also

### Getting iTunes Library Info

- [allPlaylists](allplaylists.md): All the playlists in the iTunes library.
- [apiMajorVersion](apimajorversion.md): The major version number of the API the iTunesLibrary framework exposes.
- [apiMinorVersion](apiminorversion.md): The minor version number of the API the iTunesLibrary framework exposes.
- [applicationVersion](applicationversion.md): The version of iTunes that created or modified the iTunes library you’re accessing.
- [mediaFolderLocation](mediafolderlocation.md): The location of the iTunes music folder.
- [shouldShowContentRating](shouldshowcontentrating.md): A Boolean value indicating whether to show content rating labels.

# allMediaItems (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

All the media items (tracks) in the iTunes library.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) NSArray<ITLibMediaItem *> * allMediaItems;
```

<a id="return-value"></a>

## Return Value

An array of [ITLibMediaItem](../itlibmediaitem.md) items.

## See Also

### Getting iTunes Library Info

- [allPlaylists](allplaylists.md): All the playlists in the iTunes library.
- [apiMajorVersion](apimajorversion.md): The major version number of the API the iTunesLibrary framework exposes.
- [apiMinorVersion](apiminorversion.md): The minor version number of the API the iTunesLibrary framework exposes.
- [applicationVersion](applicationversion.md): The version of iTunes that created or modified the iTunes library you’re accessing.
- [mediaFolderLocation](mediafolderlocation.md): The location of the iTunes music folder.
- [showContentRating](shouldshowcontentrating.md): A Boolean value indicating whether to show content rating labels.
