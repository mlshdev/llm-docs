> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/improperlink](https://developer.apple.com/documentation/system/errno/improperlink)

# improperLink

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Improper link.

## Declaration

```swift
static var improperLink: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

You attempted to create a hard link to a file on another file system.

The corresponding C error is `EXDEV`.

## See Also

### File and Directory Errors

- [attributeNotFound](attributenotfound.md): Attribute not found.
- [badFileDescriptor](badfiledescriptor.md): Bad file descriptor.
- [fileExists](fileexists.md): File exists.
- [fileTooLarge](filetoolarge.md): The file is too large.
- [isDirectory](isdirectory.md): Is a directory.
- [noLocks](nolocks.md): No locks available.
- [noSuchFileOrDirectory](nosuchfileordirectory.md): No such file or directory.
- [notDirectory](notdirectory.md): Not a directory.
- [permissionDenied](permissiondenied.md): Permission denied.
- [textFileBusy](textfilebusy.md): Text file busy.
