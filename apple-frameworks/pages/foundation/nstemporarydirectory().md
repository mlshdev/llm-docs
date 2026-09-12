> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstemporarydirectory()](https://developer.apple.com/documentation/foundation/nstemporarydirectory())

# NSTemporaryDirectory() (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the path of the temporary directory for the current user.

## Declaration

```swift
func NSTemporaryDirectory() -> String
```

<a id="return-value"></a>

## Return Value

A string containing the path of the temporary directory for the current user.

<a id="Discussion"></a>

## Discussion

See the [FileManager](filemanager.md) method [url(for:in:appropriateFor:create:)](filemanager/url%28for_in_appropriatefor_create_%29.md) for the preferred means of finding the correct temporary directory.

For more information about temporary files, see [File System Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010672).

## See Also

### Related Documentation

- [NSSearchPathForDirectoriesInDomains(\_:\_:\_:)](nssearchpathfordirectoriesindomains%28______%29.md): Creates a list of directory search paths.

### Accessing user directories

- [homeDirectoryForCurrentUser](filemanager/homedirectoryforcurrentuser.md): The home directory for the current user.
- [NSHomeDirectory()](nshomedirectory%28%29.md): Returns the path to either the user’s or application’s home directory, depending on the platform.
- [NSUserName()](nsusername%28%29.md): Returns the logon name of the current user.
- [NSFullUserName()](nsfullusername%28%29.md): Returns a string containing the full name of the current user.
- [homeDirectory(forUser:)](filemanager/homedirectory%28foruser_%29.md): Returns the home directory for the specified user.
- [NSHomeDirectoryForUser(\_:)](nshomedirectoryforuser%28__%29.md): Returns the path to a given user’s home directory.
- [temporaryDirectory](filemanager/temporarydirectory.md): The temporary directory for the current user.

# NSTemporaryDirectory (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the path of the temporary directory for the current user.

## Declaration

```objectivec
extern NSString *NSTemporaryDirectory();
```

<a id="return-value"></a>

## Return Value

A string containing the path of the temporary directory for the current user.

<a id="Discussion"></a>

## Discussion

See the [NSFileManager](filemanager.md) method [URLForDirectory:inDomain:appropriateForURL:create:error:](filemanager/url%28for_in_appropriatefor_create_%29.md) for the preferred means of finding the correct temporary directory.

For more information about temporary files, see [File System Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010672).

## See Also

### Related Documentation

- [NSSearchPathForDirectoriesInDomains](nssearchpathfordirectoriesindomains%28______%29.md): Creates a list of directory search paths.

### Accessing user directories

- [homeDirectoryForCurrentUser](filemanager/homedirectoryforcurrentuser.md): The home directory for the current user.
- [NSHomeDirectory](nshomedirectory%28%29.md): Returns the path to either the user’s or application’s home directory, depending on the platform.
- [NSUserName](nsusername%28%29.md): Returns the logon name of the current user.
- [NSFullUserName](nsfullusername%28%29.md): Returns a string containing the full name of the current user.
- [homeDirectoryForUser:](filemanager/homedirectory%28foruser_%29.md): Returns the home directory for the specified user.
- [NSHomeDirectoryForUser](nshomedirectoryforuser%28__%29.md): Returns the path to a given user’s home directory.
- [temporaryDirectory](filemanager/temporarydirectory.md): The temporary directory for the current user.
