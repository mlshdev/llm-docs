> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/actionhandlerprotocol/actionupdated(event:)-1fr9n](https://developer.apple.com/documentation/realitykit/actionhandlerprotocol/actionupdated(event:)-1fr9n)

# actionUpdated(event:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The function used to respond to action updated events.

## Declaration

```swift
mutating func actionUpdated(event: Self.EventType)
```

<a id="discussion"></a>

## Discussion

An update event is raised after a start event, and the the animation time remains within the an action’s event interval.
