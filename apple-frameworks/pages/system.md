> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system](https://developer.apple.com/documentation/system)

# System

**Framework:** System  
**Kind:** Framework  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Perform low-level file operations using type-safe APIs.

## Topics

### Adopting System

- [Adopting Swift File Operations](system/adopting-file-operations.md): Migrate existing C code to Swift, using the file operations provided by the System module.
- [Adopting Swift File Options](system/adopting-file-options.md): Migrate existing C code to Swift, using the file-operation options provided by the System module.
- [Adopting Swift Error Constants](system/adopting-errno.md): Migrate existing C code to Swift, using the error constants provided by the System module.

### Files

- [FileDescriptor](system/filedescriptor.md): An abstract handle to an input or output data resource, such as a file or a socket.
- [FilePath](system/filepath.md): Represents a location in the file system.
- [FilePermissions](system/filepermissions.md): The access permissions for a file.

### Errors

- [Errno](system/errno.md): An error number used by system calls to communicate what kind of error occurred.

### Protocols

- [MachPortRight](system/machportright.md)

### Structures

- [DeviceID](system/deviceid.md): A Swift wrapper of the C `dev_t` type.
- [FileFlags](system/fileflags.md): File-specific flags found in the `st_flags` property of a `stat` struct or used as input to `chflags()`.
- [FileMode](system/filemode.md): A strongly-typed file mode representing a C `mode_t`.
- [FileType](system/filetype.md): A file type matching those contained in a C `mode_t`.
- [GroupID](system/groupid.md): A Swift wrapper of the C `gid_t` type.
- [Inode](system/inode.md): A Swift wrapper of the C `ino_t` type.
- [Stat](system/stat.md): A Swift wrapper of the C `stat` struct.
- [UserID](system/userid.md): A Swift wrapper of the C `uid_t` type.

### Enumerations

- [CInterop](system/cinterop.md): A namespace for C and platform types
- [Mach](system/mach.md)
