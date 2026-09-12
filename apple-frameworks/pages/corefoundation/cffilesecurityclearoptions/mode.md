> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cffilesecurityclearoptions/mode](https://developer.apple.com/documentation/corefoundation/cffilesecurityclearoptions/mode)

# mode (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Clear the file’s mode (POSIX permissions).

## Declaration

```swift
static var mode: CFFileSecurityClearOptions { get }
```

## See Also

### Constants

- [accessControlList](accesscontrollist.md): Clear the access control list.
- [group](group.md): Clear the (POSIX) group ID.
- [groupUUID](groupuuid.md): Clear the group UUID (for the access control list).
- [owner](owner.md): Clear the (POSIX) owner ID.
- [ownerUUID](owneruuid.md): Clear the owner UUID (for the access control list).

# kCFFileSecurityClearMode (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Clear the file’s mode (POSIX permissions).

## Declaration

```objectivec
kCFFileSecurityClearMode
```

## See Also

### Constants

- [kCFFileSecurityClearAccessControlList](accesscontrollist.md): Clear the access control list.
- [kCFFileSecurityClearGroup](group.md): Clear the (POSIX) group ID.
- [kCFFileSecurityClearGroupUUID](groupuuid.md): Clear the group UUID (for the access control list).
- [kCFFileSecurityClearOwner](owner.md): Clear the (POSIX) owner ID.
- [kCFFileSecurityClearOwnerUUID](owneruuid.md): Clear the owner UUID (for the access control list).
