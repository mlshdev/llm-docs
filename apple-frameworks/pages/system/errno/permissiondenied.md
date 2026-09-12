> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/permissiondenied](https://developer.apple.com/documentation/system/errno/permissiondenied)

# permissionDenied

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Permission denied.

## Declaration

```swift
static var permissionDenied: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

You attempted to access a file in a way that’s forbidden by the file’s access permissions.

The corresponding C error is `EACCES`.

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
- [textFileBusy](textfilebusy.md): Text file busy.
