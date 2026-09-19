> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/actionhandlerprotocol/actionpaused(event:)-4491b

# actionPaused(event:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The function used to respond to action paused events.

## Declaration

```swift
mutating func actionPaused(event: Self.EventType)
```

<a id="discussion"></a>

## Discussion

Action paused is raised when the animation is paused.
