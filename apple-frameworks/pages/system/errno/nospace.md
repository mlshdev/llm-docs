> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/nospace](https://developer.apple.com/documentation/system/errno/nospace)

# noSpace

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Device out of space.

## Declaration

```swift
static var noSpace: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

A write to an ordinary file, the creation of a directory or symbolic link, or the creation of a directory entry failed because there aren’t any available disk blocks on the file system, or the allocation of an inode for a newly created file failed because there aren’t any inodes available on the file system.

The corresponding C error is `ENOSPC`.

## See Also

### File System Errors

- [badFileTypeOrFormat](badfiletypeorformat.md): Inappropriate file type or format.
- [directoryNotEmpty](directorynotempty.md): Directory not empty.
- [diskQuotaExceeded](diskquotaexceeded.md): Disk quota exceeded.
- [readOnlyFileSystem](readonlyfilesystem.md): Read-only file system.
- [tooManyLinks](toomanylinks.md): Too many links.
- [tooManyOpenFilesInSystem](toomanyopenfilesinsystem.md): The system has too many open files.
- [tooManyOpenFiles](toomanyopenfiles.md): This process has too many open files.
