> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/readonlyfilesystem](https://developer.apple.com/documentation/system/errno/readonlyfilesystem)

# readOnlyFileSystem

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Read-only file system.

## Declaration

```swift
static var readOnlyFileSystem: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

You attempted to modify a file or directory on a file system that was read-only at the time.

The corresponding C error is `EROFS`.

## See Also

### File System Errors

- [badFileTypeOrFormat](badfiletypeorformat.md): Inappropriate file type or format.
- [directoryNotEmpty](directorynotempty.md): Directory not empty.
- [diskQuotaExceeded](diskquotaexceeded.md): Disk quota exceeded.
- [noSpace](nospace.md): Device out of space.
- [tooManyLinks](toomanylinks.md): Too many links.
- [tooManyOpenFilesInSystem](toomanyopenfilesinsystem.md): The system has too many open files.
- [tooManyOpenFiles](toomanyopenfiles.md): This process has too many open files.
