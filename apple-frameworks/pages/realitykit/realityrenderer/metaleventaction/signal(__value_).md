> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/realityrenderer/metaleventaction/signal(_:value:)

# signal(\_:value:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Returns an action that represents signaling event with the value.

## Declaration

```swift
static func signal(_ event: any MTLEvent, value: UInt64) -> RealityRenderer.MetalEventAction
```
