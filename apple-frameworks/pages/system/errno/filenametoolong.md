> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/filenametoolong](https://developer.apple.com/documentation/system/errno/filenametoolong)

# fileNameTooLong

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The file name is too long.

## Declaration

```swift
static var fileNameTooLong: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

A component of a pathname exceeded 255 (`MAXNAMELEN`) characters, or an entire pathname exceeded 1023 (`MAXPATHLEN-1`) characters.

The corresponding C error is `ENAMETOOLONG`.

## See Also

### Path Errors

- [tooManyRemoteLevels](toomanyremotelevels.md): Too many levels of remote in path.
- [tooManySymbolicLinkLevels](toomanysymboliclinklevels.md): Too many levels of symbolic links.
