> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshomedirectoryforuser(_:)](https://developer.apple.com/documentation/foundation/nshomedirectoryforuser(_:))

# NSHomeDirectoryForUser(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the path to a given user’s home directory.

## Declaration

```swift
func NSHomeDirectoryForUser(_ userName: String?) -> String?
```

## Parameters

- `userName`: The name of a user.

<a id="return-value"></a>

## Return Value

The path to the home directory for the user specified by `userName`.

<a id="Discussion"></a>

## Discussion

For more information on file system utilities, see Low-Level File Management Programming Topics.

## See Also

### Accessing user directories

- [homeDirectoryForCurrentUser](filemanager/homedirectoryforcurrentuser.md): The home directory for the current user.
- [NSHomeDirectory()](nshomedirectory%28%29.md): Returns the path to either the user’s or application’s home directory, depending on the platform.
- [NSUserName()](nsusername%28%29.md): Returns the logon name of the current user.
- [NSFullUserName()](nsfullusername%28%29.md): Returns a string containing the full name of the current user.
- [homeDirectory(forUser:)](filemanager/homedirectory%28foruser_%29.md): Returns the home directory for the specified user.
- [temporaryDirectory](filemanager/temporarydirectory.md): The temporary directory for the current user.
- [NSTemporaryDirectory()](nstemporarydirectory%28%29.md): Returns the path of the temporary directory for the current user.

# NSHomeDirectoryForUser (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the path to a given user’s home directory.

## Declaration

```objectivec
extern NSString *NSHomeDirectoryForUser(NSString *userName);
```

## Parameters

- `userName`: The name of a user.

<a id="return-value"></a>

## Return Value

The path to the home directory for the user specified by `userName`.

<a id="Discussion"></a>

## Discussion

For more information on file system utilities, see Low-Level File Management Programming Topics.

## See Also

### Accessing user directories

- [homeDirectoryForCurrentUser](filemanager/homedirectoryforcurrentuser.md): The home directory for the current user.
- [NSHomeDirectory](nshomedirectory%28%29.md): Returns the path to either the user’s or application’s home directory, depending on the platform.
- [NSUserName](nsusername%28%29.md): Returns the logon name of the current user.
- [NSFullUserName](nsfullusername%28%29.md): Returns a string containing the full name of the current user.
- [homeDirectoryForUser:](filemanager/homedirectory%28foruser_%29.md): Returns the home directory for the specified user.
- [temporaryDirectory](filemanager/temporarydirectory.md): The temporary directory for the current user.
- [NSTemporaryDirectory](nstemporarydirectory%28%29.md): Returns the path of the temporary directory for the current user.
