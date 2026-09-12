> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/reportformat-swift.enum](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/reportformat-swift.enum)

# NEURLFilterManager.ReportFormat

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

An enumertion of report format types used when reporting blocked URLs.

## Declaration

```swift
enum ReportFormat
```

## Topics

### Report formats

- [NEURLFilterManager.ReportFormat.json](reportformat-swift.enum/json.md): JSON format for reports.
- [NEURLFilterManager.ReportFormat.protobuf](reportformat-swift.enum/protobuf.md): Protocol Buffers format for reports.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Producing filtering reports

- [reportEndpoint](reportendpoint.md): The endpoint that the filter manager sends blocked URL reports to.
- [reportFormat](reportformat-swift.property.md): The format the manager uses to send blocked URL reports.
- [reportInterval](reportinterval.md): The time interval (in seconds) at which the system sends reports of blocked URLs.
