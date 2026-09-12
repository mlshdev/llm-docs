> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterreport/flow](https://developer.apple.com/documentation/networkextension/nefilterreport/flow)

# flow (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The flow on which the associated action was taken.

## Declaration

```swift
var flow: NEFilterFlow? { get }
```

## See Also

### Getting report properties

- [action](action.md): The action taken on the reported flow.
- [NEFilterAction](../nefilteraction.md): The actions a data provider can take on a filter flow.
- [event](event-swift.property.md): The type of event indicated by this report.
- [NEFilterReport.Event](event-swift.enum.md): A type that represents the kind of event indicated by a report.
- [bytesInboundCount](bytesinboundcount.md): The number of inbound bytes received from the flow.
- [bytesOutboundCount](bytesoutboundcount.md): The number of outbound bytes sent on the flow.

# flow (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The flow on which the associated action was taken.

## Declaration

```objectivec
@property (readonly, nullable) NEFilterFlow * flow;
```

## See Also

### Getting report properties

- [action](action.md): The action taken on the reported flow.
- [NEFilterAction](../nefilteraction.md): The actions a data provider can take on a filter flow.
- [event](event-swift.property.md): The type of event indicated by this report.
- [NEFilterReportEvent](event-swift.enum.md): A type that represents the kind of event indicated by a report.
- [bytesInboundCount](bytesinboundcount.md): The number of inbound bytes received from the flow.
- [bytesOutboundCount](bytesoutboundcount.md): The number of outbound bytes sent on the flow.
