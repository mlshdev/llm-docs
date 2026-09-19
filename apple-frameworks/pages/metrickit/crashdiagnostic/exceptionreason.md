> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/crashdiagnostic/exceptionreason

# exceptionReason

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The exception reason for an uncaught ObjC exception.

## Declaration

```swift
let exceptionReason: CrashDiagnostic.ObjectiveCExceptionReason?
```

## See Also

### Exception details

- [exceptionType](exceptiontype.md): The name of the Mach exception that terminated the app.
- [exceptionCode](exceptioncode.md): Processor specific information about the exception.
- [signal](signal.md): The signal associated with this crash.
- [virtualMemoryRegionInfo](virtualmemoryregioninfo.md): Details about memory that the app incorrectly accessed.
