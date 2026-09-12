> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/crashdiagnostic/exceptiontype](https://developer.apple.com/documentation/metrickit/crashdiagnostic/exceptiontype)

# exceptionType

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The name of the Mach exception that terminated the app.

## Declaration

```swift
let exceptionType: Int?
```

## See Also

### Exception details

- [exceptionCode](exceptioncode.md): Processor specific information about the exception.
- [signal](signal.md): The signal associated with this crash.
- [exceptionReason](exceptionreason.md): The exception reason for an uncaught ObjC exception.
- [virtualMemoryRegionInfo](virtualmemoryregioninfo.md): Details about memory that the app incorrectly accessed.
