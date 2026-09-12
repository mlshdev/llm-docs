> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filemode/permissions](https://developer.apple.com/documentation/system/filemode/permissions)

# permissions

**Framework:** System  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The file’s permissions, from the mode’s permission bits.

## Declaration

```swift
var permissions: FilePermissions { get set }
```

<a id="discussion"></a>

## Discussion

Setting this property will mask the `newValue` with the permissions bit mask `ALLPERMS`.
