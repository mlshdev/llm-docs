> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/errno/attributenotfound

# attributeNotFound

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Attribute not found.

## Declaration

```swift
static var attributeNotFound: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

The specified extended attribute doesn’t exist.

The corresponding C error is `ENOATTR`.

## See Also

### File and Directory Errors

- [badFileDescriptor](badfiledescriptor.md): Bad file descriptor.
- [fileExists](fileexists.md): File exists.
- [fileTooLarge](filetoolarge.md): The file is too large.
- [improperLink](improperlink.md): Improper link.
- [isDirectory](isdirectory.md): Is a directory.
- [noLocks](nolocks.md): No locks available.
- [noSuchFileOrDirectory](nosuchfileordirectory.md): No such file or directory.
- [notDirectory](notdirectory.md): Not a directory.
- [permissionDenied](permissiondenied.md): Permission denied.
- [textFileBusy](textfilebusy.md): Text file busy.
