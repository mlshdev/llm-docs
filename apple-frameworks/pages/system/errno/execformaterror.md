> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/errno/execformaterror

# execFormatError

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Executable format error.

## Declaration

```swift
static var execFormatError: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

A request was made to execute a file that, although it has the appropriate permissions, isn’t in the format required for an executable file.

The corresponding C error is `ENOEXEC`.

## See Also

### Executable File Errors

- [badCPUType](badcputype.md): Bad CPU type in executable.
- [badExecutable](badexecutable.md): Bad executable or shared library.
- [malformedMachO](malformedmacho.md): Malformed Mach-O file.
- [sharedLibraryVersionMismatch](sharedlibraryversionmismatch.md): Shared library version mismatch.
