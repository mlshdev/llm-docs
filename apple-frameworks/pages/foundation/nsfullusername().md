> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfullusername()](https://developer.apple.com/documentation/foundation/nsfullusername())

# NSFullUserName() (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string containing the full name of the current user.

## Declaration

```swift
func NSFullUserName() -> String
```

<a id="return-value"></a>

## Return Value

A string containing the full name of the current user.

## See Also

### Accessing user directories

- [homeDirectoryForCurrentUser](filemanager/homedirectoryforcurrentuser.md): The home directory for the current user.
- [NSHomeDirectory()](nshomedirectory%28%29.md): Returns the path to either the user’s or application’s home directory, depending on the platform.
- [NSUserName()](nsusername%28%29.md): Returns the logon name of the current user.
- [homeDirectory(forUser:)](filemanager/homedirectory%28foruser_%29.md): Returns the home directory for the specified user.
- [NSHomeDirectoryForUser(\_:)](nshomedirectoryforuser%28__%29.md): Returns the path to a given user’s home directory.
- [temporaryDirectory](filemanager/temporarydirectory.md): The temporary directory for the current user.
- [NSTemporaryDirectory()](nstemporarydirectory%28%29.md): Returns the path of the temporary directory for the current user.

# NSFullUserName (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string containing the full name of the current user.

## Declaration

```objectivec
extern NSString *NSFullUserName();
```

<a id="return-value"></a>

## Return Value

A string containing the full name of the current user.

## See Also

### Accessing user directories

- [homeDirectoryForCurrentUser](filemanager/homedirectoryforcurrentuser.md): The home directory for the current user.
- [NSHomeDirectory](nshomedirectory%28%29.md): Returns the path to either the user’s or application’s home directory, depending on the platform.
- [NSUserName](nsusername%28%29.md): Returns the logon name of the current user.
- [homeDirectoryForUser:](filemanager/homedirectory%28foruser_%29.md): Returns the home directory for the specified user.
- [NSHomeDirectoryForUser](nshomedirectoryforuser%28__%29.md): Returns the path to a given user’s home directory.
- [temporaryDirectory](filemanager/temporarydirectory.md): The temporary directory for the current user.
- [NSTemporaryDirectory](nstemporarydirectory%28%29.md): Returns the path of the temporary directory for the current user.
