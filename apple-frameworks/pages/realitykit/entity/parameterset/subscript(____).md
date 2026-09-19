> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/entity/parameterset/subscript(_:_:)

# subscript(\_:\_:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Accessor for the parameters, returns a bindable value.

## Declaration

```swift
@MainActor @preconcurrency subscript<T>(name: String, type: T.Type = T.self) -> BindableValue<T>? where T : BindableData { get set }
```
