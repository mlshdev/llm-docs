> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterverdict/shouldreport](https://developer.apple.com/documentation/networkextension/nefilterverdict/shouldreport)

# shouldReport (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that indicates whether to send a report to the control provider when processing this verdict.

## Declaration

```swift
var shouldReport: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the property is equal to [true](https://developer.apple.com/documentation/swift/true), the system sends a report to the control provider’s [handle(\_:)](../nefilterprovider/handle%28__%29.md) method when processing this verdict in the data provider. This property has no effect if the verdict originates in the control provider.

The data provider doesn’t need to wait for a response from the control provider before continuing to process the flow. Therefore, calling the [handle(\_:)](../nefilterprovider/handle%28__%29.md) method is a more efficient way to report a flow to the control provider than returning a [needRules()](../nefilterdataverdict/needrules%28%29.md) verdict.

This property applies when the action taken on a flow is [NEFilterAction.allow](../nefilteraction/allow.md), [NEFilterAction.drop](../nefilteraction/drop.md), [NEFilterAction.remediate](../nefilteraction/remediate.md), or [NEFilterAction.filterData](../nefilteraction/filterdata.md) (the last of which is only for new flows).

# shouldReport (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that indicates whether to send a report to the control provider when processing this verdict.

## Declaration

```objectivec
@property BOOL shouldReport;
```

<a id="Discussion"></a>

## Discussion

If the property is equal to [true](https://developer.apple.com/documentation/swift/true), the system sends a report to the control provider’s [handleReport:](../nefilterprovider/handle%28__%29.md) method when processing this verdict in the data provider. This property has no effect if the verdict originates in the control provider.

The data provider doesn’t need to wait for a response from the control provider before continuing to process the flow. Therefore, calling the [handleReport:](../nefilterprovider/handle%28__%29.md) method is a more efficient way to report a flow to the control provider than returning a [needRulesVerdict](../nefilterdataverdict/needrules%28%29.md) verdict.

This property applies when the action taken on a flow is [NEFilterActionAllow](../nefilteraction/allow.md), [NEFilterActionDrop](../nefilteraction/drop.md), [NEFilterActionRemediate](../nefilteraction/remediate.md), or [NEFilterActionFilterData](../nefilteraction/filterdata.md) (the last of which is only for new flows).
