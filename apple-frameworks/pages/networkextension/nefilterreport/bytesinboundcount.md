> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterreport/bytesinboundcount](https://developer.apple.com/documentation/networkextension/nefilterreport/bytesinboundcount)

# bytesInboundCount (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The number of inbound bytes received from the flow.

## Declaration

```swift
var bytesInboundCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

This property is only non-zero when the report [event](event-swift.property.md) is [NEFilterReport.Event.flowClosed](event-swift.enum/flowclosed.md).

## See Also

### Getting report properties

- [flow](flow.md): The flow on which the associated action was taken.
- [action](action.md): The action taken on the reported flow.
- [NEFilterAction](../nefilteraction.md): The actions a data provider can take on a filter flow.
- [event](event-swift.property.md): The type of event indicated by this report.
- [NEFilterReport.Event](event-swift.enum.md): A type that represents the kind of event indicated by a report.
- [bytesOutboundCount](bytesoutboundcount.md): The number of outbound bytes sent on the flow.

# bytesInboundCount (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The number of inbound bytes received from the flow.

## Declaration

```objectivec
@property (readonly) NSUInteger bytesInboundCount;
```

<a id="Discussion"></a>

## Discussion

This property is only non-zero when the report [event](event-swift.property.md) is [NEFilterReportEventFlowClosed](event-swift.enum/flowclosed.md).

## See Also

### Getting report properties

- [flow](flow.md): The flow on which the associated action was taken.
- [action](action.md): The action taken on the reported flow.
- [NEFilterAction](../nefilteraction.md): The actions a data provider can take on a filter flow.
- [event](event-swift.property.md): The type of event indicated by this report.
- [NEFilterReportEvent](event-swift.enum.md): A type that represents the kind of event indicated by a report.
- [bytesOutboundCount](bytesoutboundcount.md): The number of outbound bytes sent on the flow.
