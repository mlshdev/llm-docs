> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/homedirectory(foruser:)](https://developer.apple.com/documentation/foundation/url/homedirectory(foruser:))

# homeDirectory(forUser:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the home directory for the specified user.

## Declaration

```swift
static func homeDirectory(forUser user: String) -> URL?
```

## Parameters

- `user`: The system user name for a given user.

<a id="return-value"></a>

## Return Value

The home directory for the specified user.

## See Also

### Accessing home and user directories

- [currentDirectory()](currentdirectory%28%29.md): Returns the working directory of the current process.
- [homeDirectory](homedirectory.md): The home directory for the current user.
