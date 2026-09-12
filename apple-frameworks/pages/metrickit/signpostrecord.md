> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/signpostrecord](https://developer.apple.com/documentation/metrickit/signpostrecord)

# SignpostRecord

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A record of a signpost event associated with a diagnostic report.

## Declaration

```swift
struct SignpostRecord
```

## Mentioned In

- [Analyzing app performance with MetricKit](analyzing-app-performance-with-metrickit.md)

<a id="Discussion"></a>

## Discussion

This describes a single signpost event that was active around the time of a diagnostic event. Each record carries a subsystem, category, and name that identify the signpost, along with an [interval](signpostrecord/interval.md) covering the signpost’s duration. For instantaneous signposts, the start and end of the interval are equal, giving a duration of zero.

Access signpost records through [signpostData](diagnosticreport/environment-swift.struct/signpostdata.md) on the diagnostic report’s environment.

## Topics

### Signpost details

- [subsystem](signpostrecord/subsystem.md): Signpost subsystem
- [category](signpostrecord/category.md): Signpost category
- [name](signpostrecord/name.md): Signpost name

### Timing

- [interval](signpostrecord/interval.md): Time interval for the signpost For instant signposts, start and end are the same (duration == 0)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Call stack data

- [CallStackTree](callstacktree.md): A tree structure representing a collection of call stacks captured during a diagnostic event.
- [CallStackThread](callstackthread.md): A single stack thread within a call stack tree.
- [CallStackFrame](callstackframe.md): A single frame within a call stack thread.
