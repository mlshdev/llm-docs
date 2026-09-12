> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibrary](https://developer.apple.com/documentation/ituneslibrary/itlibrary)

# ITLibrary (Swift)

**Framework:** iTunes Library  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

This class serves as the entry point to the iTunesLibrary framework.

## Declaration

```swift
class ITLibrary
```

<a id="overview"></a>

## Overview

Use the [ITLibrary](itlibrary.md) properties and methods to retrieve media items (tracks) and playlists from the user’s iTunes library. [ITLibrary](itlibrary.md) also provides methods for extracting artwork from a media file that may or may not be in the iTunes library. Sandboxed and nonsandboxed apps can also use iTunes’ ability to extract artwork.

> **Important**

> A person needs to grant your app permission before it can access their iTunes library. Add the [NSAppleMusicUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsapplemusicusagedescription) key to your app’s `Info.plist` file, and include a description of how you intend to use their library. If this key isn’t present, the system terminates your app when it tries to access the library.

## Topics

### Essentials

- [init(apiVersion:)](itlibrary/init%28apiversion_%29-71e74.md): Initializes an instance of [ITLibrary](itlibrary.md) that can retrieve media entities.
- [init(apiVersion:options:)](itlibrary/init%28apiversion_options_%29-9eorg.md): Initializes an instance of `ITLibrary` that can retrieve media entities.
- [ITLibInitOptions](itlibinitoptions.md): These constants describe initialization options for an iTunes library.

### Getting iTunes Library Info

- [allMediaItems](itlibrary/allmediaitems.md): All the media items (tracks) in the iTunes library.
- [allPlaylists](itlibrary/allplaylists.md): All the playlists in the iTunes library.
- [apiMajorVersion](itlibrary/apimajorversion.md): The major version number of the API the iTunesLibrary framework exposes.
- [apiMinorVersion](itlibrary/apiminorversion.md): The minor version number of the API the iTunesLibrary framework exposes.
- [applicationVersion](itlibrary/applicationversion.md): The version of iTunes that created or modified the iTunes library you’re accessing.
- [mediaFolderLocation](itlibrary/mediafolderlocation.md): The location of the iTunes music folder.
- [shouldShowContentRating](itlibrary/shouldshowcontentrating.md): A Boolean value indicating whether to show content rating labels.

### Loading and Unloading Data

- [reloadData()](itlibrary/reloaddata%28%29.md): Refreshes the data that the framework uses.
- [unloadData()](itlibrary/unloaddata%28%29.md): Unloads the data that the framework uses.

### Accessing Artwork

- [artwork(forMediaFile:)](itlibrary/artwork%28formediafile_%29.md): Retrieves the artwork from a media file that may or may not be in the iTunes library.

### Deprecated

- [features](itlibrary/features.md): Deprecated. A bitwise OR combination of the features of this library.
- [ITLibExportFeature](itlibexportfeature.md): These constants describe the features that an iTunes library supports.
- [musicFolderLocation](itlibrary/musicfolderlocation.md): Deprecated. The location of the iTunes music folder.

### Initializers

- [init(APIVersion:)](itlibrary/init%28apiversion_%29-1ryrd.md)
- [init(APIVersion:)](itlibrary/init%28apiversion_%29-2f5om.md)
- [init(APIVersion:options:)](itlibrary/init%28apiversion_options_%29-3a3ng.md)
- [init(APIVersion:options:)](itlibrary/init%28apiversion_options_%29-d24u.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# ITLibrary (Objective-C)

**Framework:** iTunes Library  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

This class serves as the entry point to the iTunesLibrary framework.

## Declaration

```objectivec
@interface ITLibrary : NSObject
```

<a id="overview"></a>

## Overview

Use the [ITLibrary](itlibrary.md) properties and methods to retrieve media items (tracks) and playlists from the user’s iTunes library. [ITLibrary](itlibrary.md) also provides methods for extracting artwork from a media file that may or may not be in the iTunes library. Sandboxed and nonsandboxed apps can also use iTunes’ ability to extract artwork.

> **Important**

> A person needs to grant your app permission before it can access their iTunes library. Add the [NSAppleMusicUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsapplemusicusagedescription) key to your app’s `Info.plist` file, and include a description of how you intend to use their library. If this key isn’t present, the system terminates your app when it tries to access the library.

## Topics

### Essentials

- [initWithAPIVersion:error:](itlibrary/init%28apiversion_%29-71e74.md): Initializes an instance of [ITLibrary](itlibrary.md) that can retrieve media entities.
- [initWithAPIVersion:options:error:](itlibrary/init%28apiversion_options_%29-9eorg.md): Initializes an instance of `ITLibrary` that can retrieve media entities.
- [libraryWithAPIVersion:error:](itlibrary/librarywithapiversion_error_.md): Creates and initializes an instance of `ITLibrary` that can retrieve media entities.
- [libraryWithAPIVersion:options:error:](itlibrary/librarywithapiversion_options_error_.md): Creates and initializes an instance of ITLibrary that can retrieve media entities.
- [ITLibInitOptions](itlibinitoptions.md): These constants describe initialization options for an iTunes library.

### Getting iTunes Library Info

- [allMediaItems](itlibrary/allmediaitems.md): All the media items (tracks) in the iTunes library.
- [allPlaylists](itlibrary/allplaylists.md): All the playlists in the iTunes library.
- [apiMajorVersion](itlibrary/apimajorversion.md): The major version number of the API the iTunesLibrary framework exposes.
- [apiMinorVersion](itlibrary/apiminorversion.md): The minor version number of the API the iTunesLibrary framework exposes.
- [applicationVersion](itlibrary/applicationversion.md): The version of iTunes that created or modified the iTunes library you’re accessing.
- [mediaFolderLocation](itlibrary/mediafolderlocation.md): The location of the iTunes music folder.
- [showContentRating](itlibrary/shouldshowcontentrating.md): A Boolean value indicating whether to show content rating labels.

### Loading and Unloading Data

- [reloadData](itlibrary/reloaddata%28%29.md): Refreshes the data that the framework uses.
- [unloadData](itlibrary/unloaddata%28%29.md): Unloads the data that the framework uses.

### Accessing Artwork

- [artworkForMediaFile:](itlibrary/artwork%28formediafile_%29.md): Retrieves the artwork from a media file that may or may not be in the iTunes library.

### Deprecated

- [features](itlibrary/features.md): Deprecated. A bitwise OR combination of the features of this library.
- [ITLibExportFeature](itlibexportfeature.md): These constants describe the features that an iTunes library supports.
- [musicFolderLocation](itlibrary/musicfolderlocation.md): Deprecated. The location of the iTunes music folder.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)
