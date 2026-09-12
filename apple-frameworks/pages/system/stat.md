> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/stat](https://developer.apple.com/documentation/system/stat)

# Stat

**Framework:** System  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A Swift wrapper of the C `stat` struct.

## Declaration

```swift
@frozen struct Stat
```

<a id="overview"></a>

## Overview

> **Note**

> Only available on Unix-like platforms.

## Topics

### Structures

- [Stat.Flags](stat/flags-swift.struct.md): Flags representing those passed to `fstatat()`.

### Initializers

- [init(\_:flags:retryOnInterrupt:)](stat/init%28__flags_retryoninterrupt_%29-349q0.md): Creates a `Stat` struct from a `FilePath` and `Flags`.
- [init(\_:flags:retryOnInterrupt:)](stat/init%28__flags_retryoninterrupt_%29-9o008.md): Creates a `Stat` struct from an `UnsafePointer<CChar>` path and `Flags`.
- [init(\_:followTargetSymlink:retryOnInterrupt:)](stat/init%28__followtargetsymlink_retryoninterrupt_%29-2szq8.md): Creates a `Stat` struct from an `UnsafePointer<CChar>` path.
- [init(\_:followTargetSymlink:retryOnInterrupt:)](stat/init%28__followtargetsymlink_retryoninterrupt_%29-4apli.md): Creates a `Stat` struct from a `FilePath`.
- [init(\_:relativeTo:flags:retryOnInterrupt:)](stat/init%28__relativeto_flags_retryoninterrupt_%29-5rm1x.md): Creates a `Stat` struct from an `UnsafePointer<CChar>` path and `Flags`, including a `FileDescriptor` to resolve a relative path.
- [init(\_:relativeTo:flags:retryOnInterrupt:)](stat/init%28__relativeto_flags_retryoninterrupt_%29-q6e4.md): Creates a `Stat` struct from a `FilePath` and `Flags`, including a `FileDescriptor` to resolve a relative path.
- [init(\_:retryOnInterrupt:)](stat/init%28__retryoninterrupt_%29.md): Creates a `Stat` struct from a `FileDescriptor`.
- [init(rawValue:)](stat/init%28rawvalue_%29.md): Creates a Swift `Stat` from the raw C struct.

### Instance Properties

- [blocksAllocated](stat/blocksallocated.md): Number of 512-byte blocks allocated
- [deviceID](stat/deviceid.md): ID of device containing file
- [flags](stat/flags-swift.property.md): File flags
- [generationNumber](stat/generationnumber.md): File generation number
- [groupID](stat/groupid.md): Group ID of owner
- [inode](stat/inode.md): Inode number
- [linkCount](stat/linkcount.md): Number of hard links
- [mode](stat/mode.md): File mode
- [permissions](stat/permissions.md): File permissions for the given mode
- [preferredIOBlockSize](stat/preferredioblocksize.md): Block size for file system I/O, in bytes
- [rawValue](stat/rawvalue.md): The raw C `stat` struct.
- [size](stat/size.md): Total size, in bytes
- [sizeAllocated](stat/sizeallocated.md): Total size allocated, in bytes
- [specialDeviceID](stat/specialdeviceid.md): Device ID (if special file)
- [st_atim](stat/st_atim.md): Time of last access, given as a C `timespec` since the Epoch.
- [st_birthtim](stat/st_birthtim.md): Time of file creation, given as a C `timespec` since the Epoch.
- [st_ctim](stat/st_ctim.md): Time of last status (inode) change, given as a C `timespec` since the Epoch.
- [st_mtim](stat/st_mtim.md): Time of last modification, given as a C `timespec` since the Epoch.
- [type](stat/type.md): File type for the given mode
- [userID](stat/userid.md): User ID of owner

### Default Implementations

- [Equatable Implementations](stat/equatable-implementations.md)
- [Hashable Implementations](stat/hashable-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
