> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/timelineview/context/cadence-swift.property](https://developer.apple.com/documentation/swiftui/timelineview/context/cadence-swift.property)

# cadence

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The rate at which the timeline updates the view.

## Declaration

```swift
let cadence: TimelineView<Schedule, Content>.Context.Cadence
```

<a id="discussion"></a>

## Discussion

Use this value to hide information that updates faster than the view’s current update rate. For example, you could hide the millisecond component of a digital timer when the cadence is anything slower than [TimelineView.Context.Cadence.live](cadence-swift.enum/live.md).

Because the [TimelineView.Context.Cadence](cadence-swift.enum.md) enumeration conforms to the [Comparable](https://developer.apple.com/documentation/swift/comparable) protocol, you can compare cadences with relational operators. Slower cadences have higher values, so you could perform the check described above with the following comparison:

```swift
let hideMilliseconds = cadence > .live
```

## See Also

### Getting the cadence

- [TimelineView.Context.Cadence](cadence-swift.enum.md): A rate at which timeline views can receive updates.
