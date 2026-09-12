> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/temporarydirectory](https://developer.apple.com/documentation/foundation/filemanager/temporarydirectory)

# temporaryDirectory (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The temporary directory for the current user.

## Declaration

```swift
var temporaryDirectory: URL { get }
```

## Mentioned In

- [Using the file system effectively](../using-the-file-system-effectively.md)

## See Also

### Accessing user directories

- [homeDirectoryForCurrentUser](homedirectoryforcurrentuser.md): The home directory for the current user.
- [NSHomeDirectory()](../nshomedirectory%28%29.md): Returns the path to either the user’s or application’s home directory, depending on the platform.
- [NSUserName()](../nsusername%28%29.md): Returns the logon name of the current user.
- [NSFullUserName()](../nsfullusername%28%29.md): Returns a string containing the full name of the current user.
- [homeDirectory(forUser:)](homedirectory%28foruser_%29.md): Returns the home directory for the specified user.
- [NSHomeDirectoryForUser(\_:)](../nshomedirectoryforuser%28__%29.md): Returns the path to a given user’s home directory.
- [NSTemporaryDirectory()](../nstemporarydirectory%28%29.md): Returns the path of the temporary directory for the current user.

# temporaryDirectory (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The temporary directory for the current user.

## Declaration

```objectivec
@property (copy, readonly) NSURL * temporaryDirectory;
```

## Mentioned In

- [Using the file system effectively](../using-the-file-system-effectively.md)

## See Also

### Accessing user directories

- [homeDirectoryForCurrentUser](homedirectoryforcurrentuser.md): The home directory for the current user.
- [NSHomeDirectory](../nshomedirectory%28%29.md): Returns the path to either the user’s or application’s home directory, depending on the platform.
- [NSUserName](../nsusername%28%29.md): Returns the logon name of the current user.
- [NSFullUserName](../nsfullusername%28%29.md): Returns a string containing the full name of the current user.
- [homeDirectoryForUser:](homedirectory%28foruser_%29.md): Returns the home directory for the specified user.
- [NSHomeDirectoryForUser](../nshomedirectoryforuser%28__%29.md): Returns the path to a given user’s home directory.
- [NSTemporaryDirectory](../nstemporarydirectory%28%29.md): Returns the path of the temporary directory for the current user.
