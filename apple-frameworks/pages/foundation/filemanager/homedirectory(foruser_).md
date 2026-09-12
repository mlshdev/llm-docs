> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/homedirectory(foruser:)](https://developer.apple.com/documentation/foundation/filemanager/homedirectory(foruser:))

# homeDirectory(forUser:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Returns the home directory for the specified user.

## Declaration

```swift
func homeDirectory(forUser userName: String) -> URL?
```

## Parameters

- `userName`: The username of the owner of the desired home directory.

<a id="return-value"></a>

## Return Value

A URL object containing the location of the specified user’s home directory, or `nil` if no such user exists or the user’s home directory is not available.

## See Also

### Accessing user directories

- [homeDirectoryForCurrentUser](homedirectoryforcurrentuser.md): The home directory for the current user.
- [NSHomeDirectory()](../nshomedirectory%28%29.md): Returns the path to either the user’s or application’s home directory, depending on the platform.
- [NSUserName()](../nsusername%28%29.md): Returns the logon name of the current user.
- [NSFullUserName()](../nsfullusername%28%29.md): Returns a string containing the full name of the current user.
- [NSHomeDirectoryForUser(\_:)](../nshomedirectoryforuser%28__%29.md): Returns the path to a given user’s home directory.
- [temporaryDirectory](temporarydirectory.md): The temporary directory for the current user.
- [NSTemporaryDirectory()](../nstemporarydirectory%28%29.md): Returns the path of the temporary directory for the current user.

# homeDirectoryForUser: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Returns the home directory for the specified user.

## Declaration

```objectivec
- (NSURL *) homeDirectoryForUser:(NSString *) userName;
```

## Parameters

- `userName`: The username of the owner of the desired home directory.

<a id="return-value"></a>

## Return Value

A URL object containing the location of the specified user’s home directory, or `nil` if no such user exists or the user’s home directory is not available.

## See Also

### Accessing user directories

- [homeDirectoryForCurrentUser](homedirectoryforcurrentuser.md): The home directory for the current user.
- [NSHomeDirectory](../nshomedirectory%28%29.md): Returns the path to either the user’s or application’s home directory, depending on the platform.
- [NSUserName](../nsusername%28%29.md): Returns the logon name of the current user.
- [NSFullUserName](../nsfullusername%28%29.md): Returns a string containing the full name of the current user.
- [NSHomeDirectoryForUser](../nshomedirectoryforuser%28__%29.md): Returns the path to a given user’s home directory.
- [temporaryDirectory](temporarydirectory.md): The temporary directory for the current user.
- [NSTemporaryDirectory](../nstemporarydirectory%28%29.md): Returns the path of the temporary directory for the current user.
