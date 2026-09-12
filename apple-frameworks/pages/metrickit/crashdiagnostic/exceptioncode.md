> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/crashdiagnostic/exceptioncode](https://developer.apple.com/documentation/metrickit/crashdiagnostic/exceptioncode)

# exceptionCode

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Processor specific information about the exception.

## Declaration

```swift
let exceptionCode: UInt64?
```

<a id="discussion"></a>

## Discussion

Encoded into one or more 64-bit hexadecimal numbers.

## See Also

### Exception details

- [exceptionType](exceptiontype.md): The name of the Mach exception that terminated the app.
- [signal](signal.md): The signal associated with this crash.
- [exceptionReason](exceptionreason.md): The exception reason for an uncaught ObjC exception.
- [virtualMemoryRegionInfo](virtualmemoryregioninfo.md): Details about memory that the app incorrectly accessed.
