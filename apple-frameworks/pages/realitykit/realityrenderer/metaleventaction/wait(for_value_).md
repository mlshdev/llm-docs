> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realityrenderer/metaleventaction/wait(for:value:)](https://developer.apple.com/documentation/realitykit/realityrenderer/metaleventaction/wait(for:value:))

# wait(for:value:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Returns an action that represents waiting for an event to reach the value.

## Declaration

```swift
static func wait(for event: any MTLEvent, value: UInt64) -> RealityRenderer.MetalEventAction
```
