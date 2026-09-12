> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/crashdiagnostic/virtualmemoryregioninfo](https://developer.apple.com/documentation/metrickit/crashdiagnostic/virtualmemoryregioninfo)

# virtualMemoryRegionInfo

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Details about memory that the app incorrectly accessed.

## Declaration

```swift
let virtualMemoryRegionInfo: String?
```

<a id="discussion"></a>

## Discussion

This property is set when a bad memory access crash occurs.

## See Also

### Exception details

- [exceptionType](exceptiontype.md): The name of the Mach exception that terminated the app.
- [exceptionCode](exceptioncode.md): Processor specific information about the exception.
- [signal](signal.md): The signal associated with this crash.
- [exceptionReason](exceptionreason.md): The exception reason for an uncaught ObjC exception.
