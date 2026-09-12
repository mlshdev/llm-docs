> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/componentset/subscript(_:)](https://developer.apple.com/documentation/realitykit/entity/componentset/subscript(_:))

# subscript(\_:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Gets or sets the component with a specific dynamically supplied type.

## Declaration

```swift
@MainActor @preconcurrency subscript(componentType: any Component.Type) -> (any Component)? { get set }
```
