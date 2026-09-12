> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepermissions/setgroupid](https://developer.apple.com/documentation/system/filepermissions/setgroupid)

# setGroupID

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Indicates that the file is executed as the group.

## Declaration

```swift
static var setGroupID: FilePermissions { get }
```

<a id="discussion"></a>

## Discussion

For more information, see the `setgid(2)` man page.

## See Also

### Special Permissions

- [setUserID](setuserid.md): Indicates that the file is executed as the owner.
- [saveText](savetext.md): Indicates that executable’s text segment should be kept in swap space even after it exits.
