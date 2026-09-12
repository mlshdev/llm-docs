> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/sharedlibraryversionmismatch](https://developer.apple.com/documentation/system/errno/sharedlibraryversionmismatch)

# sharedLibraryVersionMismatch

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Shared library version mismatch.

## Declaration

```swift
static var sharedLibraryVersionMismatch: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

The version of the shared library on the system doesn’t match the expected version.

The corresponding C error is `ESHLIBVERS`.

## See Also

### Executable File Errors

- [badCPUType](badcputype.md): Bad CPU type in executable.
- [badExecutable](badexecutable.md): Bad executable or shared library.
- [execFormatError](execformaterror.md): Executable format error.
- [malformedMachO](malformedmacho.md): Malformed Mach-O file.
