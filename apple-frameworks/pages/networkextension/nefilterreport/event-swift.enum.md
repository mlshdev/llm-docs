> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterreport/event-swift.enum](https://developer.apple.com/documentation/networkextension/nefilterreport/event-swift.enum)

# NEFilterReport.Event (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A type that represents the kind of event indicated by a report.

## Declaration

```swift
enum Event
```

## Topics

### Event Types

- [NEFilterReport.Event.newFlow](event-swift.enum/newflow.md): A type of event indicating the report is for a new flow.
- [NEFilterReport.Event.dataDecision](event-swift.enum/datadecision.md): A type of event indicating the report is about a pass/block decision made after analyzing some amount of a flow’s data.
- [NEFilterReport.Event.flowClosed](event-swift.enum/flowclosed.md): A type of event indicating the report is for a flow’s closing.
- [NEFilterReport.Event.statistics](event-swift.enum/statistics.md): A type of event indicating the report is for the latest statistics of the flow.

### Initializers

- [init(rawValue:)](event-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting report properties

- [flow](flow.md): The flow on which the associated action was taken.
- [action](action.md): The action taken on the reported flow.
- [NEFilterAction](../nefilteraction.md): The actions a data provider can take on a filter flow.
- [event](event-swift.property.md): The type of event indicated by this report.
- [bytesInboundCount](bytesinboundcount.md): The number of inbound bytes received from the flow.
- [bytesOutboundCount](bytesoutboundcount.md): The number of outbound bytes sent on the flow.

# NEFilterReportEvent (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A type that represents the kind of event indicated by a report.

## Declaration

```objectivec
enum NEFilterReportEvent : NSInteger;
```

## Topics

### Event Types

- [NEFilterReportEventNewFlow](event-swift.enum/newflow.md): A type of event indicating the report is for a new flow.
- [NEFilterReportEventDataDecision](event-swift.enum/datadecision.md): A type of event indicating the report is about a pass/block decision made after analyzing some amount of a flow’s data.
- [NEFilterReportEventFlowClosed](event-swift.enum/flowclosed.md): A type of event indicating the report is for a flow’s closing.
- [NEFilterReportEventStatistics](event-swift.enum/statistics.md): A type of event indicating the report is for the latest statistics of the flow.

## See Also

### Getting report properties

- [flow](flow.md): The flow on which the associated action was taken.
- [action](action.md): The action taken on the reported flow.
- [NEFilterAction](../nefilteraction.md): The actions a data provider can take on a filter flow.
- [event](event-swift.property.md): The type of event indicated by this report.
- [bytesInboundCount](bytesinboundcount.md): The number of inbound bytes received from the flow.
- [bytesOutboundCount](bytesoutboundcount.md): The number of outbound bytes sent on the flow.
