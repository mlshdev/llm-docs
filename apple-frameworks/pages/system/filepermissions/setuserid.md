> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepermissions/setuserid](https://developer.apple.com/documentation/system/filepermissions/setuserid)

# setUserID

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Indicates that the file is executed as the owner.

## Declaration

```swift
static var setUserID: FilePermissions { get }
```

<a id="discussion"></a>

## Discussion

For more information, see the `setuid(2)` man page.

## See Also

### Special Permissions

- [setGroupID](setgroupid.md): Indicates that the file is executed as the group.
- [saveText](savetext.md): Indicates that executable’s text segment should be kept in swap space even after it exits.
