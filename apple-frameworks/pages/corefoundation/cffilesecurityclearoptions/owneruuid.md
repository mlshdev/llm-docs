> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cffilesecurityclearoptions/owneruuid](https://developer.apple.com/documentation/corefoundation/cffilesecurityclearoptions/owneruuid)

# ownerUUID (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Clear the owner UUID (for the access control list).

## Declaration

```swift
static var ownerUUID: CFFileSecurityClearOptions { get }
```

## See Also

### Constants

- [accessControlList](accesscontrollist.md): Clear the access control list.
- [group](group.md): Clear the (POSIX) group ID.
- [groupUUID](groupuuid.md): Clear the group UUID (for the access control list).
- [mode](mode.md): Clear the file’s mode (POSIX permissions).
- [owner](owner.md): Clear the (POSIX) owner ID.

# kCFFileSecurityClearOwnerUUID (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Clear the owner UUID (for the access control list).

## Declaration

```objectivec
kCFFileSecurityClearOwnerUUID
```

## See Also

### Constants

- [kCFFileSecurityClearAccessControlList](accesscontrollist.md): Clear the access control list.
- [kCFFileSecurityClearGroup](group.md): Clear the (POSIX) group ID.
- [kCFFileSecurityClearGroupUUID](groupuuid.md): Clear the group UUID (for the access control list).
- [kCFFileSecurityClearMode](mode.md): Clear the file’s mode (POSIX permissions).
- [kCFFileSecurityClearOwner](owner.md): Clear the (POSIX) owner ID.
