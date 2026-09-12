> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/timelineview/context/cadence-swift.enum](https://developer.apple.com/documentation/swiftui/timelineview/context/cadence-swift.enum)

# TimelineView.Context.Cadence

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A rate at which timeline views can receive updates.

## Declaration

```swift
enum Cadence
```

<a id="overview"></a>

## Overview

Use the cadence presented to content in a [TimelineView](../../timelineview.md) to hide information that updates faster than the view’s current update rate. For example, you could hide the millisecond component of a digital timer when the cadence is [TimelineView.Context.Cadence.seconds](cadence-swift.enum/seconds.md) or [TimelineView.Context.Cadence.minutes](cadence-swift.enum/minutes.md).

Because this enumeration conforms to the [Comparable](https://developer.apple.com/documentation/swift/comparable) protocol, you can compare cadences with relational operators. Slower cadences have higher values, so you could perform the check described above with the following comparison:

```swift
let hideMilliseconds = cadence > .live
```

## Topics

### Getting cadences

- [TimelineView.Context.Cadence.live](cadence-swift.enum/live.md): Updates the view continuously.
- [TimelineView.Context.Cadence.seconds](cadence-swift.enum/seconds.md): Updates the view approximately once per second.
- [TimelineView.Context.Cadence.minutes](cadence-swift.enum/minutes.md): Updates the view approximately once per minute.

## Relationships

### Conforms To

- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the cadence

- [cadence](cadence-swift.property.md): The rate at which the timeline updates the view.
