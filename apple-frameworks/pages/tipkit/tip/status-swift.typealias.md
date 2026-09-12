> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tip/status-swift.typealias](https://developer.apple.com/documentation/tipkit/tip/status-swift.typealias)

# Status

**Framework:** TipKit  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type that describes the current display eligibility status for a tip.

## Declaration

```swift
typealias Status = Tips.Status
```

## See Also

### Monitoring tip status

- [status](status-swift.property.md): The current status of a tip based on its rules and the configured [displayFrequency(\_:)](../tips/configurationoption/displayfrequency%28__%29.md).
- [statusUpdates](statusupdates.md): An asynchronous sequence for monitoring a tip’s status changes.
- [shouldDisplay](shoulddisplay.md): A Boolean value that determines whether to display a tip.
- [shouldDisplayUpdates](shoulddisplayupdates.md): An asynchronous sequence for monitoring a tip’s display eligibility.
- [InvalidationReason](invalidationreason.md): A type that describes why the system permanently invalidated a tip.
