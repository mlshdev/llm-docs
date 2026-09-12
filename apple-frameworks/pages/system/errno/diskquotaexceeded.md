> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/diskquotaexceeded](https://developer.apple.com/documentation/system/errno/diskquotaexceeded)

# diskQuotaExceeded

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Disk quota exceeded.

## Declaration

```swift
static var diskQuotaExceeded: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

A write to an ordinary file, the creation of a directory or symbolic link, or the creation of a directory entry failed because the user’s quota of disk blocks was exhausted, or the allocation of an inode for a newly created file failed because the user’s quota of inodes was exhausted.

The corresponding C error is `EDQUOT`.

## See Also

### File System Errors

- [badFileTypeOrFormat](badfiletypeorformat.md): Inappropriate file type or format.
- [directoryNotEmpty](directorynotempty.md): Directory not empty.
- [noSpace](nospace.md): Device out of space.
- [readOnlyFileSystem](readonlyfilesystem.md): Read-only file system.
- [tooManyLinks](toomanylinks.md): Too many links.
- [tooManyOpenFilesInSystem](toomanyopenfilesinsystem.md): The system has too many open files.
- [tooManyOpenFiles](toomanyopenfiles.md): This process has too many open files.
