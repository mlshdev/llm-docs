> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/actionhandlerprotocol/actionterminated(event:)](https://developer.apple.com/documentation/realitykit/actionhandlerprotocol/actionterminated(event:))

# actionTerminated(event:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The function used to respond to action terminated events.

## Declaration

```swift
mutating func actionTerminated(event: Self.EventType)
```

<a id="discussion"></a>

## Discussion

Action terminated is raised when playback is terminated and the animation is removed from the animation system. This can occur before the animation has a chance to complete if the user manually stops the animation by calling [stop()](../animationplaybackcontroller/stop%28%29.md).

## Default Implementations

### ActionHandlerProtocol Implementations

- [actionTerminated(event:)](actionterminated%28event_%29-34zs0.md): The function used to respond to action terminated events.
- [actionTerminated(event:)](actionterminated%28event_%29-5pd4o.md)
