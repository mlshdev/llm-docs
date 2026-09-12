> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepermissions](https://developer.apple.com/documentation/system/filepermissions)

# FilePermissions

**Framework:** System  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The access permissions for a file.

## Declaration

```swift
@frozen struct FilePermissions
```

<a id="overview"></a>

## Overview

The following example creates an instance of the `FilePermissions` structure from a raw octal literal and compares it to a file permission created using named options:

```swift
let perms = FilePermissions(rawValue: 0o644)
perms == [.ownerReadWrite, .groupRead, .otherRead] // true
```

## Topics

### Owner Permissions

- [ownerRead](filepermissions/ownerread.md): Indicates that the owner has read-only permission.
- [ownerWrite](filepermissions/ownerwrite.md): Indicates that the owner has write-only permission.
- [ownerExecute](filepermissions/ownerexecute.md): Indicates that the owner has execute-only permission.
- [ownerReadWrite](filepermissions/ownerreadwrite.md): Indicates that the owner has read-write permission.
- [ownerReadExecute](filepermissions/ownerreadexecute.md): Indicates that the owner has read-execute permission.
- [ownerWriteExecute](filepermissions/ownerwriteexecute.md): Indicates that the owner has write-execute permission.
- [ownerReadWriteExecute](filepermissions/ownerreadwriteexecute.md): Indicates that the owner has read, write, and execute permission.

### Group Permissions

- [groupRead](filepermissions/groupread.md): Indicates that the group has read-only permission.
- [groupWrite](filepermissions/groupwrite.md): Indicates that the group has write-only permission.
- [groupExecute](filepermissions/groupexecute.md): Indicates that the group has execute-only permission.
- [groupReadWrite](filepermissions/groupreadwrite.md): Indicates that the group has read-write permission.
- [groupReadExecute](filepermissions/groupreadexecute.md): Indicates that the group has read-execute permission.
- [groupWriteExecute](filepermissions/groupwriteexecute.md): Indicates that the group has write-execute permission.
- [groupReadWriteExecute](filepermissions/groupreadwriteexecute.md): Indicates that the group has read, write, and execute permission.

### Other Permissions

- [otherRead](filepermissions/otherread.md): Indicates that other users have read-only permission.
- [otherWrite](filepermissions/otherwrite.md): Indicates that other users have write-only permission.
- [otherExecute](filepermissions/otherexecute.md): Indicates that other users have execute-only permission.
- [otherReadWrite](filepermissions/otherreadwrite.md): Indicates that other users have read-write permission.
- [otherReadExecute](filepermissions/otherreadexecute.md): Indicates that other users have read-execute permission.
- [otherWriteExecute](filepermissions/otherwriteexecute.md): Indicates that other users have write-execute permission.
- [otherReadWriteExecute](filepermissions/otherreadwriteexecute.md): Indicates that other users have read, write, and execute permission.

### Special Permissions

- [setUserID](filepermissions/setuserid.md): Indicates that the file is executed as the owner.
- [setGroupID](filepermissions/setgroupid.md): Indicates that the file is executed as the group.
- [saveText](filepermissions/savetext.md): Indicates that executable’s text segment should be kept in swap space even after it exits.

### Interacting with C APIs

- [init(rawValue:)](filepermissions/init%28rawvalue_%29.md): Create a strongly-typed file permission from a raw C value.
- [rawValue](filepermissions/rawvalue.md): The raw C file permissions.
- [CModeT](cmodet.md): The C `mode_t` type.

### Debugging

- [description](filepermissions/description.md): A textual representation of the file permissions.
- [debugDescription](filepermissions/debugdescription.md): A textual representation of the file permissions, suitable for debugging.

### Default Implementations

- [CustomDebugStringConvertible Implementations](filepermissions/customdebugstringconvertible-implementations.md)
- [CustomStringConvertible Implementations](filepermissions/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Files

- [FileDescriptor](filedescriptor.md): An abstract handle to an input or output data resource, such as a file or a socket.
- [FilePath](filepath.md): Represents a location in the file system.
