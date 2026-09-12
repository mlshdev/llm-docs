> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/homedirectoryforcurrentuser](https://developer.apple.com/documentation/foundation/filemanager/homedirectoryforcurrentuser)

# homeDirectoryForCurrentUser (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The home directory for the current user.

## Declaration

```swift
var homeDirectoryForCurrentUser: URL { get }
```

## See Also

### Accessing user directories

- [NSHomeDirectory()](../nshomedirectory%28%29.md): Returns the path to either the user’s or application’s home directory, depending on the platform.
- [NSUserName()](../nsusername%28%29.md): Returns the logon name of the current user.
- [NSFullUserName()](../nsfullusername%28%29.md): Returns a string containing the full name of the current user.
- [homeDirectory(forUser:)](homedirectory%28foruser_%29.md): Returns the home directory for the specified user.
- [NSHomeDirectoryForUser(\_:)](../nshomedirectoryforuser%28__%29.md): Returns the path to a given user’s home directory.
- [temporaryDirectory](temporarydirectory.md): The temporary directory for the current user.
- [NSTemporaryDirectory()](../nstemporarydirectory%28%29.md): Returns the path of the temporary directory for the current user.

# homeDirectoryForCurrentUser (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The home directory for the current user.

## Declaration

```objectivec
@property (copy, readonly) NSURL * homeDirectoryForCurrentUser;
```

## See Also

### Accessing user directories

- [NSHomeDirectory](../nshomedirectory%28%29.md): Returns the path to either the user’s or application’s home directory, depending on the platform.
- [NSUserName](../nsusername%28%29.md): Returns the logon name of the current user.
- [NSFullUserName](../nsfullusername%28%29.md): Returns a string containing the full name of the current user.
- [homeDirectoryForUser:](homedirectory%28foruser_%29.md): Returns the home directory for the specified user.
- [NSHomeDirectoryForUser](../nshomedirectoryforuser%28__%29.md): Returns the path to a given user’s home directory.
- [temporaryDirectory](temporarydirectory.md): The temporary directory for the current user.
- [NSTemporaryDirectory](../nstemporarydirectory%28%29.md): Returns the path of the temporary directory for the current user.
