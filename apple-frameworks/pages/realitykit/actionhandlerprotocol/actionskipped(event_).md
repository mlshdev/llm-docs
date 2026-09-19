> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/actionhandlerprotocol/actionskipped(event:)

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

The animation system can skip over an event interval due to scrubbing or choppy frame rate.

## Default Implementations

### ActionHandlerProtocol Implementations

- [actionSkipped(event:)](actionskipped%28event_%29-937ws.md): The function used to respond to action skipped events.
- [actionSkipped(event:)](actionskipped%28event_%29-wy3k.md)
