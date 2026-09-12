> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepermissions/savetext](https://developer.apple.com/documentation/system/filepermissions/savetext)

# saveText

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Indicates that executable’s text segment should be kept in swap space even after it exits.

## Declaration

```swift
static var saveText: FilePermissions { get }
```

<a id="discussion"></a>

## Discussion

For more information, see the `chmod(2)` man page’s discussion of `S_ISVTX` (the sticky bit).

## See Also

### Special Permissions

- [setUserID](setuserid.md): Indicates that the file is executed as the owner.
- [setGroupID](setgroupid.md): Indicates that the file is executed as the group.
