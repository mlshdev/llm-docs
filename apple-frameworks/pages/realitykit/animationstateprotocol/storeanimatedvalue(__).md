> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/animationstateprotocol/storeanimatedvalue(_:)

# storeAnimatedValue(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Stores the action’s animated value, which the animation manager uses to produce a final animated result. Returns true on success, otherwise false.

## Declaration

```swift
@discardableResult func storeAnimatedValue<ValueType>(_ value: ValueType) -> Bool
```
