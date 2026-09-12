> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/actionhandlerprotocol/actionstarted(event:)-75a3q](https://developer.apple.com/documentation/realitykit/actionhandlerprotocol/actionstarted(event:)-75a3q)

# actionStarted(event:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The function used to respond to action started events.

## Declaration

```swift
mutating func actionStarted(event: Self.EventType)
```

<a id="discussion"></a>

## Discussion

A start event is raised when the animation time first falls within an event’s defined time interval.
