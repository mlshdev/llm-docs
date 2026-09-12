> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssearchpathfordirectoriesindomains(_:_:_:)](https://developer.apple.com/documentation/foundation/nssearchpathfordirectoriesindomains(_:_:_:))

# NSSearchPathForDirectoriesInDomains(\_:\_:\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a list of directory search paths.

## Declaration

```swift
func NSSearchPathForDirectoriesInDomains(_ directory: FileManager.SearchPathDirectory, _ domainMask: FileManager.SearchPathDomainMask, _ expandTilde: Bool) -> [String]
```

<a id="Discussion"></a>

## Discussion

Creates a list of path strings for the specified directories in the specified domains. The list is in the order in which you should search the directories. If `expandTilde` is [true](https://developer.apple.com/documentation/swift/true), tildes are expanded as described in [expandingTildeInPath](nsstring/expandingtildeinpath.md).

You should consider using the [FileManager](filemanager.md) methods [urls(for:in:)](filemanager/urls%28for_in_%29.md) and [url(for:in:appropriateFor:create:)](filemanager/url%28for_in_appropriatefor_create_%29.md). which return URLs, which are the preferred format.

For more information on file system utilities, see [File System Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010672).

> **Note**

>  The directory returned by this method may not exist. This method simply gives you the appropriate location for the requested directory. Depending on the application’s needs, it may be up to the developer to create the appropriate directory and any in between.

## See Also

### Locating system directories

- [url(for:in:appropriateFor:create:)](filemanager/url%28for_in_appropriatefor_create_%29.md): Locates and optionally creates the specified common directory in a domain.
- [urls(for:in:)](filemanager/urls%28for_in_%29.md): Returns an array of URLs for the specified common directory in the requested domains.
- [NSOpenStepRootDirectory()](nsopensteprootdirectory%28%29.md): Returns the root directory of the user’s system.

# NSSearchPathForDirectoriesInDomains (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a list of directory search paths.

## Declaration

```objectivec
extern NSArray<NSString *> *NSSearchPathForDirectoriesInDomains(NSSearchPathDirectory directory, NSSearchPathDomainMask domainMask, BOOL expandTilde);
```

<a id="Discussion"></a>

## Discussion

Creates a list of path strings for the specified directories in the specified domains. The list is in the order in which you should search the directories. If `expandTilde` is [true](https://developer.apple.com/documentation/swift/true), tildes are expanded as described in [stringByExpandingTildeInPath](nsstring/expandingtildeinpath.md).

You should consider using the [NSFileManager](filemanager.md) methods [URLsForDirectory:inDomains:](filemanager/urls%28for_in_%29.md) and [URLForDirectory:inDomain:appropriateForURL:create:error:](filemanager/url%28for_in_appropriatefor_create_%29.md). which return URLs, which are the preferred format.

For more information on file system utilities, see [File System Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010672).

> **Note**

>  The directory returned by this method may not exist. This method simply gives you the appropriate location for the requested directory. Depending on the application’s needs, it may be up to the developer to create the appropriate directory and any in between.

## See Also

### Locating system directories

- [URLForDirectory:inDomain:appropriateForURL:create:error:](filemanager/url%28for_in_appropriatefor_create_%29.md): Locates and optionally creates the specified common directory in a domain.
- [URLsForDirectory:inDomains:](filemanager/urls%28for_in_%29.md): Returns an array of URLs for the specified common directory in the requested domains.
- [NSOpenStepRootDirectory](nsopensteprootdirectory%28%29.md): Returns the root directory of the user’s system.
