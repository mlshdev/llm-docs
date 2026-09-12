> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/badcputype](https://developer.apple.com/documentation/system/errno/badcputype)

# badCPUType

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Bad CPU type in executable.

## Declaration

```swift
static var badCPUType: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

The specified executable doesn’t support the current CPU.

The corresponding C error is `EBADARCH`.

## See Also

### Executable File Errors

- [badExecutable](badexecutable.md): Bad executable or shared library.
- [execFormatError](execformaterror.md): Executable format error.
- [malformedMachO](malformedmacho.md): Malformed Mach-O file.
- [sharedLibraryVersionMismatch](sharedlibraryversionmismatch.md): Shared library version mismatch.
