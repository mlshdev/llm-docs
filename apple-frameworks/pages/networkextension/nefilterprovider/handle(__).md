> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterprovider/handle(_:)](https://developer.apple.com/documentation/networkextension/nefilterprovider/handle(_:))

# handle(\_:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Receives a report from the framework.

## Declaration

```swift
func handle(_ report: NEFilterReport)
```

## Parameters

- `report`: The report delivered from the framework.

<a id="Discussion"></a>

## Discussion

The framework calls this method when the data provider extension returns a verdict with the [shouldReport](../nefilterverdict/shouldreport.md) property set to [true](https://developer.apple.com/documentation/swift/true). Override this method in a subclass if you want to handle the flow report.

# handleReport: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Receives a report from the framework.

## Declaration

```objectivec
- (void) handleReport:(NEFilterReport *) report;
```

## Parameters

- `report`: The report delivered from the framework.

<a id="Discussion"></a>

## Discussion

The framework calls this method when the data provider extension returns a verdict with the [shouldReport](../nefilterverdict/shouldreport.md) property set to [true](https://developer.apple.com/documentation/swift/true). Override this method in a subclass if you want to handle the flow report.
