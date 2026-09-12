> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/malformedmacho](https://developer.apple.com/documentation/system/errno/malformedmacho)

# malformedMachO

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Malformed Mach-O file.

## Declaration

```swift
static var malformedMachO: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

The Mach object file is malformed.

The corresponding C error is `EBADMACHO`.

## See Also

### Executable File Errors

- [badCPUType](badcputype.md): Bad CPU type in executable.
- [badExecutable](badexecutable.md): Bad executable or shared library.
- [execFormatError](execformaterror.md): Executable format error.
- [sharedLibraryVersionMismatch](sharedlibraryversionmismatch.md): Shared library version mismatch.
