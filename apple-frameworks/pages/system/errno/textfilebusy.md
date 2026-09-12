> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/textfilebusy](https://developer.apple.com/documentation/system/errno/textfilebusy)

# textFileBusy

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Text file busy.

## Declaration

```swift
static var textFileBusy: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

The new process was a pure procedure (shared text) file, which was already open for writing by another process, or while the pure procedure file was being executed, an open call requested write access.

The corresponding C error is `ETXTBSY`.

## See Also

### File and Directory Errors

- [attributeNotFound](attributenotfound.md): Attribute not found.
- [badFileDescriptor](badfiledescriptor.md): Bad file descriptor.
- [fileExists](fileexists.md): File exists.
- [fileTooLarge](filetoolarge.md): The file is too large.
- [improperLink](improperlink.md): Improper link.
- [isDirectory](isdirectory.md): Is a directory.
- [noLocks](nolocks.md): No locks available.
- [noSuchFileOrDirectory](nosuchfileordirectory.md): No such file or directory.
- [notDirectory](notdirectory.md): Not a directory.
- [permissionDenied](permissiondenied.md): Permission denied.
