> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/actionhandlerprotocol/actionended(event:)-4up3w](https://developer.apple.com/documentation/realitykit/actionhandlerprotocol/actionended(event:)-4up3w)

# actionEnded(event:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The function used to respond to action ended events.

## Declaration

```swift
mutating func actionEnded(event: Self.EventType)
```

<a id="discussion"></a>

## Discussion

Action ended is raised after a ‘started’ event has taken place, and the animation time exits the event interval, or when the animation is terminated before completion.
