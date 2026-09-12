> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tip/statusupdates](https://developer.apple.com/documentation/tipkit/tip/statusupdates)

# statusUpdates

**Framework:** TipKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An asynchronous sequence for monitoring a tip’s status changes.

## Declaration

```swift
var statusUpdates: AsyncStream<Self.Status> { get }
```

## See Also

### Monitoring tip status

- [status](status-swift.property.md): The current status of a tip based on its rules and the configured [displayFrequency(\_:)](../tips/configurationoption/displayfrequency%28__%29.md).
- [shouldDisplay](shoulddisplay.md): A Boolean value that determines whether to display a tip.
- [shouldDisplayUpdates](shoulddisplayupdates.md): An asynchronous sequence for monitoring a tip’s display eligibility.
- [Status](status-swift.typealias.md): A type that describes the current display eligibility status for a tip.
- [InvalidationReason](invalidationreason.md): A type that describes why the system permanently invalidated a tip.
