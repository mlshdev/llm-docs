> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/homedirectory](https://developer.apple.com/documentation/foundation/url/homedirectory)

# homeDirectory

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The home directory for the current user.

## Declaration

```swift
static var homeDirectory: URL { get }
```

<a id="Discussion"></a>

## Discussion

This URL is the equivalent of the shell value `~/`.

Complexity: `O(1)`.

## See Also

### Accessing home and user directories

- [currentDirectory()](currentdirectory%28%29.md): Returns the working directory of the current process.
- [homeDirectory(forUser:)](homedirectory%28foruser_%29.md): Returns the home directory for the specified user.
