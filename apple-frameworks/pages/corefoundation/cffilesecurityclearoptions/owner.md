> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cffilesecurityclearoptions/owner](https://developer.apple.com/documentation/corefoundation/cffilesecurityclearoptions/owner)

# owner (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Clear the (POSIX) owner ID.

## Declaration

```swift
static var owner: CFFileSecurityClearOptions { get }
```

## See Also

### Constants

- [accessControlList](accesscontrollist.md): Clear the access control list.
- [group](group.md): Clear the (POSIX) group ID.
- [groupUUID](groupuuid.md): Clear the group UUID (for the access control list).
- [mode](mode.md): Clear the file’s mode (POSIX permissions).
- [ownerUUID](owneruuid.md): Clear the owner UUID (for the access control list).

# kCFFileSecurityClearOwner (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Clear the (POSIX) owner ID.

## Declaration

```objectivec
kCFFileSecurityClearOwner
```

## See Also

### Constants

- [kCFFileSecurityClearAccessControlList](accesscontrollist.md): Clear the access control list.
- [kCFFileSecurityClearGroup](group.md): Clear the (POSIX) group ID.
- [kCFFileSecurityClearGroupUUID](groupuuid.md): Clear the group UUID (for the access control list).
- [kCFFileSecurityClearMode](mode.md): Clear the file’s mode (POSIX permissions).
- [kCFFileSecurityClearOwnerUUID](owneruuid.md): Clear the owner UUID (for the access control list).
