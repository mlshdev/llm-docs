> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/crashreportextension/crashedprocess/corpseport](https://developer.apple.com/documentation/crashreportextension/crashedprocess/corpseport)

# corpsePort

**Framework:** CrashReportExtension  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS · visionOS · watchOS

A property that provides a Mach port to the crashed process.

## Declaration

```swift
final var corpsePort: mach_port_t { get }
```

<a id="discussion"></a>

## Discussion

The corpse port is a read-only task port for a process that terminated but is still available for inspecting state and data. Send Mach IPC interface commands over this port to find leaks, symbolicate backtraces, and more. For example, call `task_threads` to enumerate threads, and call `mach_vm_read` to read memory from the process.

## See Also

### Accessing process properties

- [reason](reason.md): Contextual information about the reported crash.
- [CrashReason](../crashreason.md): Context information about the crash being reported
- [binaryImages](binaryimages.md): A list of binary images from the crashed process.
- [BinaryImageInfo](../binaryimageinfo.md): A type that represents a binary image loaded in the crashed process.
