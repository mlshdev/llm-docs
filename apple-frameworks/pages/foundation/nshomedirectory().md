> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshomedirectory()](https://developer.apple.com/documentation/foundation/nshomedirectory())

# NSHomeDirectory() (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the path to either the user’s or application’s home directory, depending on the platform.

## Declaration

```swift
func NSHomeDirectory() -> String
```

<a id="return-value"></a>

## Return Value

The path to the current home directory.

<a id="Discussion"></a>

## Discussion

In iOS, the home directory is the application’s sandbox directory. In macOS, it’s the application’s sandbox directory, or the current user’s home directory if the application isn’t in a sandbox.

## See Also

### Accessing user directories

- [homeDirectoryForCurrentUser](filemanager/homedirectoryforcurrentuser.md): The home directory for the current user.
- [NSUserName()](nsusername%28%29.md): Returns the logon name of the current user.
- [NSFullUserName()](nsfullusername%28%29.md): Returns a string containing the full name of the current user.
- [homeDirectory(forUser:)](filemanager/homedirectory%28foruser_%29.md): Returns the home directory for the specified user.
- [NSHomeDirectoryForUser(\_:)](nshomedirectoryforuser%28__%29.md): Returns the path to a given user’s home directory.
- [temporaryDirectory](filemanager/temporarydirectory.md): The temporary directory for the current user.
- [NSTemporaryDirectory()](nstemporarydirectory%28%29.md): Returns the path of the temporary directory for the current user.

# NSHomeDirectory (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the path to either the user’s or application’s home directory, depending on the platform.

## Declaration

```objectivec
extern NSString *NSHomeDirectory();
```

<a id="return-value"></a>

## Return Value

The path to the current home directory.

<a id="Discussion"></a>

## Discussion

In iOS, the home directory is the application’s sandbox directory. In macOS, it’s the application’s sandbox directory, or the current user’s home directory if the application isn’t in a sandbox.

## See Also

### Accessing user directories

- [homeDirectoryForCurrentUser](filemanager/homedirectoryforcurrentuser.md): The home directory for the current user.
- [NSUserName](nsusername%28%29.md): Returns the logon name of the current user.
- [NSFullUserName](nsfullusername%28%29.md): Returns a string containing the full name of the current user.
- [homeDirectoryForUser:](filemanager/homedirectory%28foruser_%29.md): Returns the home directory for the specified user.
- [NSHomeDirectoryForUser](nshomedirectoryforuser%28__%29.md): Returns the path to a given user’s home directory.
- [temporaryDirectory](filemanager/temporarydirectory.md): The temporary directory for the current user.
- [NSTemporaryDirectory](nstemporarydirectory%28%29.md): Returns the path of the temporary directory for the current user.
