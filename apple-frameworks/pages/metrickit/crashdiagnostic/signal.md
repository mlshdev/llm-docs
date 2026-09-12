> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/crashdiagnostic/signal](https://developer.apple.com/documentation/metrickit/crashdiagnostic/signal)

# signal

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The signal associated with this crash.

## Declaration

```swift
let signal: Int?
```

## See Also

### Exception details

- [exceptionType](exceptiontype.md): The name of the Mach exception that terminated the app.
- [exceptionCode](exceptioncode.md): Processor specific information about the exception.
- [exceptionReason](exceptionreason.md): The exception reason for an uncaught ObjC exception.
- [virtualMemoryRegionInfo](virtualmemoryregioninfo.md): Details about memory that the app incorrectly accessed.
