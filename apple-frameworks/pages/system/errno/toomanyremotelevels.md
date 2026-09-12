> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/toomanyremotelevels](https://developer.apple.com/documentation/system/errno/toomanyremotelevels)

# tooManyRemoteLevels

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Too many levels of remote in path.

## Declaration

```swift
static var tooManyRemoteLevels: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

The corresponding C error is `EREMOTE`.

## See Also

### Path Errors

- [fileNameTooLong](filenametoolong.md): The file name is too long.
- [tooManySymbolicLinkLevels](toomanysymboliclinklevels.md): Too many levels of symbolic links.
