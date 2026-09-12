> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/downloadsdirectory](https://developer.apple.com/documentation/foundation/url/downloadsdirectory)

# downloadsDirectory

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The standard directory for download files.

## Declaration

```swift
static var downloadsDirectory: URL { get }
```

<a id="Discussion"></a>

## Discussion

In iOS, this directory is within the app’s sandbox directory. In macOS, it’s within the app’s sandbox directory for sandboxed apps, or in the current user’s home directory `(~/Downloads)` if the app isn’t sandboxed.

This computed property is equivalent to calling [NSSearchPathForDirectoriesInDomains(\_:\_:\_:)](../nssearchpathfordirectoriesindomains%28______%29.md) with the [FileManager.SearchPathDirectory.downloadsDirectory](../filemanager/searchpathdirectory/downloadsdirectory.md) parameter.

## See Also

### Accessing common directories

- [applicationDirectory](applicationdirectory.md): The standard directory for apps.
- [applicationSupportDirectory](applicationsupportdirectory.md): The standard directory for application support files.
- [cachesDirectory](cachesdirectory.md): The standard directory for discardable cache files.
- [desktopDirectory](desktopdirectory.md): The standard directory for files on the desktop.
- [documentsDirectory](documentsdirectory.md): The standard directory for document files.
- [libraryDirectory](librarydirectory.md): The standard directory for documentation, support, and configuration files.
- [moviesDirectory](moviesdirectory.md): The standard directory for movie files.
- [musicDirectory](musicdirectory.md): The standard directory for music files.
- [picturesDirectory](picturesdirectory.md): The standard directory for image files.
- [sharedPublicDirectory](sharedpublicdirectory.md): The standard directory for publicly shared files.
- [temporaryDirectory](temporarydirectory.md): The standard directory for temporary files.
- [trashDirectory](trashdirectory.md): The standard trash directory.
- [userDirectory](userdirectory.md): The container directory of user home directories.
