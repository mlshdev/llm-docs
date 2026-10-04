> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/geometricpinscomponent/removepin(named:)

# removePin(named:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Removes the pin associated with the name.

## Declaration

```swift
@discardableResult mutating func removePin(named name: String) -> GeometricPin?
```

## Parameters

- `name`: The name of the pin to remove.
