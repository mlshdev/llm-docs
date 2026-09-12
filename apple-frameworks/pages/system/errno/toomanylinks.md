> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/toomanylinks](https://developer.apple.com/documentation/system/errno/toomanylinks)

# tooManyLinks

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Too many links.

## Declaration

```swift
static var tooManyLinks: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

The maximum number of hard links to a single file (32767) has been exceeded.

The corresponding C error is `EMLINK`.

## See Also

### File System Errors

- [badFileTypeOrFormat](badfiletypeorformat.md): Inappropriate file type or format.
- [directoryNotEmpty](directorynotempty.md): Directory not empty.
- [diskQuotaExceeded](diskquotaexceeded.md): Disk quota exceeded.
- [noSpace](nospace.md): Device out of space.
- [readOnlyFileSystem](readonlyfilesystem.md): Read-only file system.
- [tooManyOpenFilesInSystem](toomanyopenfilesinsystem.md): The system has too many open files.
- [tooManyOpenFiles](toomanyopenfiles.md): This process has too many open files.
