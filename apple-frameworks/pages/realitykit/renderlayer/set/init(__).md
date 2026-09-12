> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/renderlayer/set/init(_:)](https://developer.apple.com/documentation/realitykit/renderlayer/set/init(_:))

# init(\_:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a set of render layers from a sequence.

## Declaration

```swift
init<S>(_ sequence: S) where S : Sequence, S.Element == RenderLayer
```
