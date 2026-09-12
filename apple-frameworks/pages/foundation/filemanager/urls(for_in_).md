> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/urls(for:in:)](https://developer.apple.com/documentation/foundation/filemanager/urls(for:in:))

# urls(for:in:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of URLs for the specified common directory in the requested domains.

## Declaration

```swift
func urls(for directory: FileManager.SearchPathDirectory, in domainMask: FileManager.SearchPathDomainMask) -> [URL]
```

## Parameters

- `directory`: The search path directory. The supported values are described in [FileManager.SearchPathDirectory](searchpathdirectory.md).
- `domainMask`: The file system domain to search. The value for this parameter is one or more of the constants described in [FileManager.SearchPathDomainMask](searchpathdomainmask.md).

<a id="return-value"></a>

## Return Value

An array of [NSURL](../nsurl.md) objects identifying the requested directories. The directories are ordered according to the order of the domain mask constants, with items in the user domain first and items in the system domain last.

## Mentioned In

- [Using the file system effectively](../using-the-file-system-effectively.md)

<a id="Discussion"></a>

## Discussion

This method is intended to locate known and common directories in the system. For example, setting the directory to [FileManager.SearchPathDirectory.applicationDirectory](searchpathdirectory/applicationdirectory.md), will return the Applications directories in the requested domain. There are a number of common directories available in the [FileManager.SearchPathDirectory](searchpathdirectory.md), including: [FileManager.SearchPathDirectory.desktopDirectory](searchpathdirectory/desktopdirectory.md), [FileManager.SearchPathDirectory.applicationSupportDirectory](searchpathdirectory/applicationsupportdirectory.md), and many more.

## See Also

### Locating system directories

- [url(for:in:appropriateFor:create:)](url%28for_in_appropriatefor_create_%29.md): Locates and optionally creates the specified common directory in a domain.
- [NSSearchPathForDirectoriesInDomains(\_:\_:\_:)](../nssearchpathfordirectoriesindomains%28______%29.md): Creates a list of directory search paths.
- [NSOpenStepRootDirectory()](../nsopensteprootdirectory%28%29.md): Returns the root directory of the user’s system.

# URLsForDirectory:inDomains: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of URLs for the specified common directory in the requested domains.

## Declaration

```objectivec
- (NSArray<NSURL *> *) URLsForDirectory:(NSSearchPathDirectory) directory inDomains:(NSSearchPathDomainMask) domainMask;
```

## Parameters

- `directory`: The search path directory. The supported values are described in [NSSearchPathDirectory](searchpathdirectory.md).
- `domainMask`: The file system domain to search. The value for this parameter is one or more of the constants described in [NSSearchPathDomainMask](searchpathdomainmask.md).

<a id="return-value"></a>

## Return Value

An array of [NSURL](../nsurl.md) objects identifying the requested directories. The directories are ordered according to the order of the domain mask constants, with items in the user domain first and items in the system domain last.

## Mentioned In

- [Using the file system effectively](../using-the-file-system-effectively.md)

<a id="Discussion"></a>

## Discussion

This method is intended to locate known and common directories in the system. For example, setting the directory to [NSApplicationDirectory](searchpathdirectory/applicationdirectory.md), will return the Applications directories in the requested domain. There are a number of common directories available in the [NSSearchPathDirectory](searchpathdirectory.md), including: [NSDesktopDirectory](searchpathdirectory/desktopdirectory.md), [NSApplicationSupportDirectory](searchpathdirectory/applicationsupportdirectory.md), and many more.

## See Also

### Locating system directories

- [URLForDirectory:inDomain:appropriateForURL:create:error:](url%28for_in_appropriatefor_create_%29.md): Locates and optionally creates the specified common directory in a domain.
- [NSSearchPathForDirectoriesInDomains](../nssearchpathfordirectoriesindomains%28______%29.md): Creates a list of directory search paths.
- [NSOpenStepRootDirectory](../nsopensteprootdirectory%28%29.md): Returns the root directory of the user’s system.
