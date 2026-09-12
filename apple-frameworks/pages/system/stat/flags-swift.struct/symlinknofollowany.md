> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/stat/flags-swift.struct/symlinknofollowany](https://developer.apple.com/documentation/system/stat/flags-swift.struct/symlinknofollowany)

# symlinkNoFollowAny

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

If the path ends with a symbolic link, return information about the link itself. If *any* symbolic link is encountered during path resolution, return an error.

## Declaration

```swift
static var symlinkNoFollowAny: Stat.Flags { get }
```

<a id="discussion"></a>

## Discussion

The corresponding C constant is `AT_SYMLINK_NOFOLLOW_ANY`.

> **Note**

> Only available on Darwin.
