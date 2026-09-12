> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/currentdirectory()](https://developer.apple.com/documentation/foundation/url/currentdirectory())

# currentDirectory()

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the working directory of the current process.

## Declaration

```swift
static func currentDirectory() -> URL
```

<a id="return-value"></a>

## Return Value

Calling this method issues a `getcwd` system call. This method’s return value can change between calls because any thread can change the process’s current working directory at any time. Take precautions when reasoning about the current directory in a multithreaded environment.

## See Also

### Accessing home and user directories

- [homeDirectory](homedirectory.md): The home directory for the current user.
- [homeDirectory(forUser:)](homedirectory%28foruser_%29.md): Returns the home directory for the specified user.
