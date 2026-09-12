> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilteraction](https://developer.apple.com/documentation/networkextension/nefilteraction)

# NEFilterAction (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The actions a data provider can take on a filter flow.

## Declaration

```swift
enum NEFilterAction
```

<a id="overview"></a>

## Overview

The control provider receives a filter report when the data provider issues a verdict with the [shouldReport](nefilterverdict/shouldreport.md) property set to [true](https://developer.apple.com/documentation/swift/true). The report contains an [action](nefilterreport/action.md) property set to one of the values listed here.

## Topics

### Enumeration Cases

- [NEFilterAction.invalid](nefilteraction/invalid.md): Invalid action used to represent an error.
- [NEFilterAction.allow](nefilteraction/allow.md): Allow the flow.
- [NEFilterAction.drop](nefilteraction/drop.md): Drop the flow.
- [NEFilterAction.remediate](nefilteraction/remediate.md): Remediate the flow.
- [NEFilterAction.filterData](nefilteraction/filterdata.md): Filter data on the flow.

### Initializers

- [init(rawValue:)](nefilteraction/init%28rawvalue_%29.md)

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

- [flow](nefilterreport/flow.md): The flow on which the associated action was taken.
- [action](nefilterreport/action.md): The action taken on the reported flow.
- [event](nefilterreport/event-swift.property.md): The type of event indicated by this report.
- [NEFilterReport.Event](nefilterreport/event-swift.enum.md): A type that represents the kind of event indicated by a report.
- [bytesInboundCount](nefilterreport/bytesinboundcount.md): The number of inbound bytes received from the flow.
- [bytesOutboundCount](nefilterreport/bytesoutboundcount.md): The number of outbound bytes sent on the flow.

# NEFilterAction (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The actions a data provider can take on a filter flow.

## Declaration

```objectivec
enum NEFilterAction : NSInteger;
```

<a id="overview"></a>

## Overview

The control provider receives a filter report when the data provider issues a verdict with the [shouldReport](nefilterverdict/shouldreport.md) property set to [true](https://developer.apple.com/documentation/swift/true). The report contains an [action](nefilterreport/action.md) property set to one of the values listed here.

## Topics

### Enumeration Cases

- [NEFilterActionInvalid](nefilteraction/invalid.md): Invalid action used to represent an error.
- [NEFilterActionAllow](nefilteraction/allow.md): Allow the flow.
- [NEFilterActionDrop](nefilteraction/drop.md): Drop the flow.
- [NEFilterActionRemediate](nefilteraction/remediate.md): Remediate the flow.
- [NEFilterActionFilterData](nefilteraction/filterdata.md): Filter data on the flow.

## See Also

### Getting report properties

- [flow](nefilterreport/flow.md): The flow on which the associated action was taken.
- [action](nefilterreport/action.md): The action taken on the reported flow.
- [event](nefilterreport/event-swift.property.md): The type of event indicated by this report.
- [NEFilterReportEvent](nefilterreport/event-swift.enum.md): A type that represents the kind of event indicated by a report.
- [bytesInboundCount](nefilterreport/bytesinboundcount.md): The number of inbound bytes received from the flow.
- [bytesOutboundCount](nefilterreport/bytesoutboundcount.md): The number of outbound bytes sent on the flow.
