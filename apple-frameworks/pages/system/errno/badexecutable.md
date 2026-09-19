> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/errno/badexecutable

# badExecutable

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Bad executable or shared library.

## Declaration

```swift
static var badExecutable: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

The executable or shared library being referenced was malformed.

The corresponding C error is `EBADEXEC`.

## See Also

### Executable File Errors

- [badCPUType](badcputype.md): Bad CPU type in executable.
- [execFormatError](execformaterror.md): Executable format error.
- [malformedMachO](malformedmacho.md): Malformed Mach-O file.
- [sharedLibraryVersionMismatch](sharedlibraryversionmismatch.md): Shared library version mismatch.
