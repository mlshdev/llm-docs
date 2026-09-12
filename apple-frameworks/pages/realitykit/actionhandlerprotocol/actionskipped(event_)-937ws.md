> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/actionhandlerprotocol/actionskipped(event:)-937ws](https://developer.apple.com/documentation/realitykit/actionhandlerprotocol/actionskipped(event:)-937ws)

# actionSkipped(event:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The function used to respond to action skipped events.

## Declaration

```swift
mutating func actionSkipped(event: Self.EventType)
```

<a id="discussion"></a>

## Discussion

An event interval can be skipped due to scrubbing or a choppy frame rate. Necessary for stateful actions to maintain consistent state.
